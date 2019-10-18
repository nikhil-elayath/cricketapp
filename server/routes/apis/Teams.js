const express = require("express");
const router = express.Router();
const pg = require("pg-promise")();
const config = require("config");
const postgresURL = config.get("postgresURL");
const db = pg(postgresURL);
// const db = pg("postgres://postgres:root@localhost:5432/cricketalpha");

router.post("/teams", async (req, res, next) => {
  try {
    const match_type = req.body.match_type;
    const competition = req.body.competition;
    console.log("match type", match_type);
    console.log("competition", match_type);
    const result = await db.any(
      `select t.team_id, t.team_name from team t left join match m on m.innings_one_team = t.team_id  where m.match_type='${match_type}' and m.competition = '${competition}' group by t.team_id,t.team_name order by t.team_name;`
    );
    // console.log("Get team result is", result);
    if (!result)
      throw {
        statusCode: 404,
        customMessage: "Cannot find any team"
      };
    res.status(200).json({
      status: 200,
      data: result,
      message: "Retrieved all the teams successfully!"
    });
  } catch (err) {
    next(err);
  }
});

// Individual team matches
router.post("/teams/match/:team_id", async (req, res, next) => {
  try {
    const team_id = req.params.team_id;
    const match_type = req.body.match_type;
    const gender = req.body.gender;
    console.log("called Individual team matches");
    // const result = await db.any(`SELECT * FROM matches where dates='${date}' ORDER BY runs;`);
    // const result = await db.any(`select date.match_date, m.match_type, m.match_id from match_date as date inner join match as m on date.match_id=m.match_id where match_date='${date}' ORDER BY date.match_date;`);
    const result = await db.any(
      `select md.match_date, m.match_id, m.match_type, m.gender from match_date as md inner join match as m on md.match_id = m.match_id where m.match_type = '${match_type}' and m.gender = '${gender}' and(m.innings_one_team='${team_id}' or m.innings_two_team='${team_id}') order by md.match_date desc limit 8`
      // `select md.match_date, m.match_id, m.match_type from match_date as md inner join match as m on md.match_id = m.match_id where m.team_one=${team_id} or m.team_two=${team_id} order by md.match_date desc limit 8`
    );
    console.log("matches id", result);
    var data = new Array();

    for (match of result) {
      console.log("match:", match.match_id);
      console.log("match type:", match.match_type);
      let match_id = match.match_id;
      const teamone_striker_runs = await db.any(
        `select sum(d.batsman_run) as teamone_striker_run from delivery as d inner join match as m ON d.match_id =m.match_id where m.match_id =${match_id} AND d.inning =1;`
      );
      console.log(teamone_striker_runs);
      const teamone_extra_runs = await db.any(
        `select sum(e.extras_run) as teamone_extra_runs from extras as e inner join delivery as d ON e.extras_id =d.extra_id where d.match_id =${match_id} AND inning=1;`
      );
      console.log(teamone_extra_runs);
      const teamtwo_striker_runs = await db.any(
        `select sum(d.batsman_run) as teamtwo_striker_run from delivery as d inner join match as m ON d.match_id =m.match_id where m.match_id =${match_id} AND d.inning =2;`
      );
      console.log(teamtwo_striker_runs);
      const teamtwo_extra_runs = await db.any(
        `select sum(e.extras_run) as teamtwo_extra_runs from extras as e inner join delivery as d ON e.extras_id =d.extra_id where d.match_id =${match_id} AND inning=2;`
      );
      console.log(teamtwo_extra_runs);
      const teamone_wicket = await db.any(
        `select count(wicket_id) as teamone_wickets from delivery where match_id =${match_id} AND inning =1 AND wicket_id>0;`
      );
      console.log(teamone_wicket);
      const teamtwo_wicket = await db.any(
        `select count(wicket_id) as teamtwo_wickets from delivery where match_id =${match_id} AND inning =2 AND wicket_id>0;`
      );
      console.log(teamtwo_wicket);
      const teamone_name = await db.any(
        `select t.team_name as teamone_name from team as t inner join match as m on m.innings_one_team=t.team_id where match_id=${match_id};`
        // `select t.team_name as teamone_name from team as t inner join match as m on m.team_one=t.team_id where match_id=${match_id};`
      );
      console.log(teamone_name);
      const teamtwo_name = await db.any(
        `select t.team_name as teamtwo_name from team as t inner join match as m on m.innings_two_team=t.team_id where match_id=${match_id};`
        // `select t.team_name as teamtwo_name from team as t inner join match as m on m.team_two=t.team_id where match_id=${match_id};`
      );
      console.log(teamtwo_name);
      const teamwinner_name = await db.any(
        `select t.team_name as winner_name from team as t inner join match as m on m.winner=t.team_id where match_id=${match_id};`
      );
      console.log(teamwinner_name);

      const teamOneScore =
        parseInt(teamone_striker_runs[0].teamone_striker_run) +
        parseInt(teamone_extra_runs[0].teamone_extra_runs);
      console.log(teamOneScore);
      const teamTwoScore =
        parseInt(teamtwo_striker_runs[0].teamtwo_striker_run) +
        parseInt(teamtwo_extra_runs[0].teamtwo_extra_runs);
      console.log(teamTwoScore);
      data.push({
        matchId: match.match_id,
        matchType: match.match_type,
        teamOne: teamone_name[0].teamone_name,
        teamTwo: teamtwo_name[0].teamtwo_name,
        teamWinner: teamwinner_name[0].winner_name,
        teamOneScore: teamOneScore,
        teamTwoScore: teamTwoScore,
        teamOneWicket: teamone_wicket[0].teamone_wickets,
        teamTwoWicket: teamtwo_wicket[0].teamtwo_wickets
      });
    }

    console.log("outside", data);
    res.status(200).json({
      status: 200,
      data: data,
      message: "Retrived 8 recent matches list successfully!!"
    });
  } catch (err) {
    next(err);
  }
});

router.post("/teams/rankings", async (req, res, next) => {
  try {
    const match_type = req.body.match_type;
    const competition = req.body.competition;
    console.log("match type", match_type);
    console.log("competition", match_type);
    const result = await db.any(
      `select team.team_id, team.team_name, count(team.team_name) from team team left join match match on match.winner = team.team_id where match.match_type = '${match_type}' and match.competition = '${competition}' group by team.team_id, team.team_name having count(team.team_name)>1 order by count(team.team_name) desc fetch first 5 rows only;`
      // `select team.team_name, count(team.team_name) from team team left join match match on match.winner = team.team_id where match.match_type = '${match_type}' group by team.team_name having count(team.team_name)>1 order by count(team.team_name) desc fetch first 5 rows only;`
    );
    // console.log("result is ", result);
    if (!result)
      throw {
        statusCode: 404,
        customMessage: "Cannot find any team"
      };
    res.status(200).json({
      status: 200,
      data: result,
      message: "Retrieved all the teams successfully!"
    });
  } catch (err) {
    next(err);
  }
});

router.post("/teams/topbatsmen", async (req, res) => {
  try {
    var match_type = req.body.match_type;
    var player_country = req.body.player_country;
    console.log(match_type);

    if (match_type === "ODI" || match_type === "Test" || match_type === "T20") {
      const result = await db.any(
        `select player_stats.match_type,player_stats.player_stats_name, player_stats.player_stats_value,player.player_name,player.player_id,player.player_country from player_stats inner join player on player_stats.player_id = player.player_id where player_stats.match_type = '${match_type}' AND player_stats_name = 'total_runs' AND player_country='${player_country}' order by cast(player_stats_value as numeric) desc fetch first 3 rows only`
      );

      res.status(200).json({
        status: 200,
        data: result,
        message: "All top Batsman retrieved"
      });
    } else {
      throw {
        statusCode: res.status(400).json({
          statusCode: 400,
          statusMessage: "ERROR!Bad Request cannot retrieve batsman"
        })
      };
    }

    // console.log("data is: ", result);
  } catch (err) {
    console.log(err);
  }
});

router.post("/teams/topbowlers", async (req, res) => {
  try {
    let match_type = req.body.match_type;
    var player_country = req.body.player_country;
    // let gender = req.body.player_gender;
    if (match_type === "ODI" || match_type === "Test" || match_type === "T20") {
      const result = await db.any(
        `select player_stats.match_type,player_stats.player_stats_name, player_stats.player_stats_value,player.player_name,player.player_country from player_stats inner join player on player_stats.player_id = player.player_id where player_stats.match_type = '${match_type}' AND player_stats_name = 'total_wickets' AND player_country = '${player_country}' order by cast(player_stats_value as numeric) desc fetch first 3 rows only`
      );

      res.status(200).json({
        status: 200,
        data: result,
        message: "All top bowlers retrieved"
      });
    } else {
      throw {
        statusCode: res.status(400).json({
          statusCode: 400,
          statusMessage: "ERROR!Bad Request cannot retrieve bowlers"
        })
      };
    }

    console.log("data is: ", result);
    res.status(200).json({
      status: 200,
      data: result,
      message: "All top bowlers retrieved"
    });
  } catch (err) {
    console.log(err);
  }
});

router.post("/teams/highesttotals/:team_id", async (req, res, next) => {
  try {
    const team_id = req.params.team_id;
    const match_type = req.body.match_type;
    const gender = req.body.gender;
    console.log("match type", match_type);
    const result = await db.any(
      `with k as(with ss as(with s as (select match_id from match_team_player where team_id='${team_id}'),
      ps as(select match_id as match_idd, match_type from match where match_type='${match_type}' and gender='${gender}' and match_id in(
      select match_id from s))
      select distinct(match_id), match_type from ps inner join s on s.match_id=ps.match_idd),
      pss as(select match_id as match_idd, inning, sum(total_runs) as total_run, sum(cast(extra_id=0 as int))/6 as overs from delivery
      where match_id in( select match_id from ss) group by match_id, inning)
      select match_id, inning, total_run, overs from pss inner join ss on pss.match_idd=ss.match_id),
      y as(select match_id as idd, match_date from match_date where match_id
      in(select match_id from k))
      select match_id, match_date, inning, total_run, overs from y inner join k on k.match_id=y.idd order by total_run desc limit 15;`
      // `with  s as (select d.match_id,m.match_type,sum(d.total_runs) as tr from delivery as d inner join match as m on m.match_id = d.match_id where(m.innings_one_team='${team_id}' or m.innings_two_team=${team_id})
      // and m.match_type='${match_type}' group by d.match_id,m.match_type order by tr desc),ps as
      // (select md.match_date, m.match_id as match_idd from match_date as md inner join match as m on m.match_id = md.match_id where(m.innings_one_team=${team_id} or m.innings_two_team=${team_id})
      // and m.match_type='${match_type}' and
      // m.match_id in(select match_id from s))
      // select match_date, match_type, tr from ps inner join s on s.match_id=ps.match_idd limit 10;`
    );
    // console.log("result is ", result);
    if (!result)
      throw {
        statusCode: 404,
        customMessage: "Cannot find any team stats"
      };
    res.status(200).json({
      status: 200,
      data: result,
      message: "Retrieved all the team stats!"
    });
  } catch (err) {
    next(err);
  }
});

router.post("/teams/lowesttotals/:team_id", async (req, res, next) => {
  try {
    const team_id = req.params.team_id;
    const match_type = req.body.match_type;
    const gender = req.body.gender;
    console.log("match type", match_type);
    const result = await db.any(
      `with k as(with ss as(with s as (select match_id from match_team_player where team_id='${team_id}'),
      ps as(select match_id as match_idd, match_type from match where match_type='${match_type}' and gender='${gender}' and match_id in(
      select match_id from s))
      select distinct(match_id), match_type from ps inner join s on s.match_id=ps.match_idd),
      pss as(select match_id as match_idd, inning, sum(total_runs) as total_run, sum(cast(extra_id=0 as int))/6 as overs from delivery
      where match_id in( select match_id from ss) group by match_id, inning)
      select match_id, inning, total_run, overs from pss inner join ss on pss.match_idd=ss.match_id),
      y as(select match_id as idd, match_date from match_date where match_id
      in(select match_id from k))
      select match_id, match_date, inning, total_run, overs from y inner join k on k.match_id=y.idd order by total_run limit 15;`
      // `with  s as (select d.match_id,m.match_type,sum(d.total_runs) as tr from delivery as d inner join match as m on m.match_id = d.match_id where(m.innings_one_team='${team_id}' or m.innings_two_team=${team_id})
      // and m.match_type='${match_type}' group by d.match_id,m.match_type order by tr),ps as
      // (select md.match_date, m.match_id as match_idd from match_date as md inner join match as m on m.match_id = md.match_id where(m.innings_one_team=${team_id} or m.innings_two_team=${team_id})
      // and m.match_type='${match_type}' and
      // m.match_id in(select match_id from s))
      // select match_date, match_type, tr from ps inner join s on s.match_id=ps.match_idd limit 10;`
    );
    // console.log("result is ", result);
    if (!result)
      throw {
        statusCode: 404,
        customMessage: "Cannot find any team stats"
      };
    res.status(200).json({
      status: 200,
      data: result,
      message: "Retrieved all the team stats!"
    });
  } catch (err) {
    next(err);
  }
});

// router.get("/matches/:teamid", async (req, res, next) => {
//   try {
//     const team_id = req.params.team_id;
//     console.log("called recent matches");
//     // const result = await db.any(`SELECT * FROM matches where dates='${date}' ORDER BY runs;`);
//     // const result = await db.any(`select date.match_date, m.match_type, m.match_id from match_date as date inner join match as m on date.match_id=m.match_id where match_date='${date}' ORDER BY date.match_date;`);
//     const result = await db.any(
//       `select date.match_date, m.match_type, m.match_id from match_date as date inner join match as m on date.match_id=m.match_id where match_date='${date}' ORDER BY date.match_date;`
//     );
//     console.log("date of match", result);
//     var result = new Array();

//     for (match of result) {
//       console.log("match:", match.match_id);
//       let match_id = match.match_id;
//       const teamone_striker_runs = await db.any(
//         `select sum(d.batsman_run) as teamone_striker_run from delivery as d inner join match as m ON d.match_id =m.match_id where m.match_id =${match_id} AND d.inning =1;`
//       );
//       console.log(teamone_striker_runs);
//       const teamone_extra_runs = await db.any(
//         `select sum(e.extras_run) as teamone_extra_runs from extras as e inner join delivery as d ON e.extras_id =d.extra_id where d.match_id =${match_id} AND inning=1;`
//       );
//       console.log(teamone_extra_runs);
//       const teamtwo_striker_runs = await db.any(
//         `select sum(d.batsman_run) as teamtwo_striker_run from delivery as d inner join match as m ON d.match_id =m.match_id where m.match_id =${match_id} AND d.inning =2;`
//       );
//       console.log(teamtwo_striker_runs);
//       const teamtwo_extra_runs = await db.any(
//         `select sum(e.extras_run) as teamtwo_extra_runs from extras as e inner join delivery as d ON e.extras_id =d.extra_id where d.match_id =${match_id} AND inning=2;`
//       );
//       console.log(teamtwo_extra_runs);
//       const teamone_wicket = await db.any(
//         `select count(wicket_id) as teamone_wickets from delivery where match_id =${match_id} AND inning =1 AND wicket_id>0;`
//       );
//       console.log(teamone_wicket);
//       const teamtwo_wicket = await db.any(
//         `select count(wicket_id) as teamtwo_wickets from delivery where match_id =${match_id} AND inning =2 AND wicket_id>0;;`
//       );
//       console.log(teamtwo_wicket);
//       const teamone_name = await db.any(
//         `select t.team_name as teamone_name from team as t inner join match as m on m.team_one=t.team_id where match_id=${match_id};`
//       );
//       console.log(teamone_name);
//       const teamtwo_name = await db.any(
//         `select t.team_name as teamtwo_name from team as t inner join match as m on m.team_two=t.team_id where match_id=${match_id};`
//       );
//       console.log(teamtwo_name);
//       const teamwinner_name = await db.any(
//         `select t.team_name as winner_name from team as t inner join match as m on m.winner=t.team_id where match_id=${match_id};`
//       );
//       console.log(teamwinner_name);

//       const teamOneScore =
//         parseInt(teamone_striker_runs[0].teamone_striker_run) +
//         parseInt(teamone_extra_runs[0].teamone_extra_runs);
//       console.log(teamOneScore);
//       const teamTwoScore =
//         parseInt(teamtwo_striker_runs[0].teamtwo_striker_run) +
//         parseInt(teamtwo_extra_runs[0].teamtwo_extra_runs);
//       console.log(teamTwoScore);
//       result.push({
//         match_id: result[0].match_id,
//         match_type: result[0].match_type,
//         teamOne: teamone_name[0].teamone_name,
//         teamtwo: teamtwo_name[0].teamtwo_name,
//         team_winner: teamwinner_name[0].winner_name,
//         teamOneScore: teamOneScore,
//         teamTwoScore: teamTwoScore,
//         teamone_wicket: teamone_wicket[0].teamone_wickets,
//         teamtwo_wicket: teamtwo_wicket[0].teamtwo_wickets
//       });
//     }

//     console.log("outside", result);
//     res.status(200).json({
//       status: 200,
//       data: result,
//       message: "Retrived 8 recent matches list successfully!!"
//     });
//   } catch (err) {
//     console.log(err);
//     next(err);
//   }
// });

module.exports = router;
