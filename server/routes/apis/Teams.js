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
      `select t.team_id, t.team_name, t.team_image from team t left join match m on m.innings_one_team = t.team_id  where t.team_id != 0 and m.match_type='${match_type}' and m.competition = '${competition}' group by t.team_id,t.team_name,t.team_image order by t.team_name;`
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
router.post("/teams/match/:team_id/:gender", async (req, res, next) => {
  try {
    const team_id = req.params.team_id;
    const gender = req.params.gender;
    const match_type = req.body.match_type;
    // const gender = req.body.gender;
    console.log("called Individual team matches");
    // const result = await db.any(`SELECT * FROM matches where dates='${date}' ORDER BY runs;`);
    // const result = await db.any(`select date.match_date, m.match_type, m.match_id from match_date as date inner join match as m on date.match_id=m.match_id where match_date='${date}' ORDER BY date.match_date;`);
    const result = await db.any(
      `select md.match_date, m.match_id, m.match_type from match_date as md inner join match as m on md.match_id = m.match_id where m.gender = '${gender}' and m.match_type = '${match_type}' and (m.innings_one_team='${team_id}' or m.innings_two_team='${team_id}') order by md.match_date desc limit 8`
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

router.post("/teams/rankings/:gender", async (req, res, next) => {
  try {
    const gender = req.params.gender;
    const match_type = req.body.match_type;
    const competition = req.body.competition;
    console.log("match type", match_type);
    console.log("competition", match_type);
    const result = await db.any(
      `select team.team_id,team.team_image, team.team_name, count(team.team_name) from team team left join match match on match.winner = team.team_id where match.match_type = '${match_type}' and match.competition = '${competition}' and match.gender = '${gender}' and team.team_id != 0 group by team.team_id,team.team_image, team.team_name having count(team.team_name)>1 order by count(team.team_name) desc fetch first 5 rows only;`
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

router.post("/teams/topbatsmen/:player_gender", async (req, res) => {
  try {
    const player_gender = req.params.player_gender;
    var match_type = req.body.match_type;
    var player_country = req.body.player_country;
    console.log(match_type);

    if (match_type === "ODI" || match_type === "Test" || match_type === "T20") {
      const result = await db.any(
        `select player.player_image,player_stats.match_type,player_stats.player_stats_name, player_stats.player_stats_value,player.player_name,player.player_id,player.player_country from player_stats inner join player on player_stats.player_id = player.player_id where player_stats.match_type = '${match_type}' and player_stats_name = 'total_runs' and player_country='${player_country}' and player.player_gender = '${player_gender}' order by cast(player_stats_value as numeric) desc fetch first 3 rows only`
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

router.post("/teams/topbowlers/:player_gender", async (req, res) => {
  try {
    const player_gender = req.params.player_gender;
    let match_type = req.body.match_type;
    var player_country = req.body.player_country;
    // let gender = req.body.player_gender;
    if (match_type === "ODI" || match_type === "Test" || match_type === "T20") {
      const result = await db.any(
        `select  player.player_image,player_stats.match_type,player_stats.player_stats_name, player_stats.player_stats_value,player.player_name,player.player_country from player_stats inner join player on player_stats.player_id = player.player_id where player_stats.match_type = '${match_type}' AND player_stats_name = 'total_wickets' AND player_country = '${player_country}' and player_gender = '${player_gender}' order by cast(player_stats_value as numeric) desc fetch first 3 rows only`
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

router.post("/teams/stats/:team_id/:gender", async (req, res, next) => {
  try {
    const team_id = req.params.team_id;
    const gender = req.params.gender;
    const match_type = req.body.match_type;
    const stats_type = req.body.stats_type;
    if (stats_type == "highest_score" || stats_type == "lowest_score") {
      let order_type = stats_type == "highest_score" ? "desc" : "asc";
      console.log("match type", match_type);
      console.log("stats type", stats_type);
      console.log("order type", order_type);
      const result = await db.any(
        `with tt as(with t as (with kk as(with k as(with ss as(with s as (select match_id from match_team_player where team_id='${team_id}'),
ps as(select match_id as match_idd, match_type from match where match_type='${match_type}' and gender = '${gender}' and match_id in(
select match_id from s))
select distinct(match_id), match_type from ps inner join s on s.match_id=ps.match_idd),
pss as(select match_id as match_idd, inning, sum(total_runs) as total_run, sum(cast(extra_id=0 as int))/6 as overs from delivery
where match_id in( select match_id from ss) group by match_id, inning)
select match_id, inning, total_run, overs from pss inner join ss on pss.match_idd=ss.match_id order by total_run),
y as(select match_id as idd, match_date from match_date where match_id
in(select match_id from k))
select match_id, match_date, inning, total_run, overs from y inner join k on k.match_id=y.idd),
yy as(select match_id as match_idd, innings_one_team, innings_two_team from match where match_id
in(select match_id from kk))
select match_id, match_date, inning, innings_one_team, innings_two_team, total_run, overs from yy
inner join kk on kk.match_id=yy.match_idd),
l as(select team_id,team_name as team_one from team where team_id!=0 and team_id
in(select innings_one_team from t))
select match_id, match_date, inning, team_one, innings_two_team, total_run, overs from l
inner join t on t.innings_one_team=l.team_id),
ll as(select team_id,team_name as team_two from team where team_id
in(select innings_two_team from tt))
select match_id, match_date, inning, team_one, team_two, total_run, overs from ll
inner join tt on tt.innings_two_team=ll.team_id order by total_run ${order_type} limit 15;`
        //${order_type} instead of desc
      );
      // console.log("stats result is ", result);
      let dates = [];
      for (onedate of result) {
        // console.log("date - ", onedate);
        var date = new Date(onedate.match_date);
        let format_date = (onedate.match_date = date.toLocaleDateString(
          "en-IN",
          {
            day: "2-digit",
            month: "short",
            year: "numeric"
          }
        ));
        dates.push({ match_date: format_date });
      }
      console.log(dates);
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
    } else if (
      stats_type == "largest_victory" ||
      stats_type == "smallest_victory"
    ) {
      let order_type = stats_type == "largest_victory" ? "desc" : "asc";
      console.log("match type", match_type);
      console.log("stats type", stats_type);
      console.log("order type", order_type);
      const result = await db.any(
        `with tt as(with t as (with kk as(with k as(with ss as(with s as (select match_id from match_team_player where team_id='${team_id}'),
ps as(select match_id as match_idd, match_type, cast(substring(outcome FROM '[0-9]+') as numeric) as outcome from match 
where (outcome != 'tie' or outcome != 'no result' or outcome != 'draw') 
and outcome ilike '%runs' and match_type='${match_type}' and gender = '${gender}' and match_id in(
select match_id from s))
select distinct(match_id), match_type, outcome from ps inner join s on s.match_id=ps.match_idd),
pss as(select match_id as match_idd, inning, sum(cast(extra_id=0 as int))/6 as overs from delivery
where match_id in( select match_id from ss) group by match_id, inning)
select match_id, inning, outcome, overs from pss inner join ss on pss.match_idd=ss.match_id order by match_id),
y as(select match_id as idd, match_date from match_date where match_id
in(select match_id from k))
select match_id, match_date, inning, outcome, overs from y inner join k on k.match_id=y.idd),
yy as(select match_id as match_idd, innings_one_team, innings_two_team from match where match_id
in(select match_id from kk))
select match_id, match_date, inning, innings_one_team, innings_two_team, outcome, overs from yy
inner join kk on kk.match_id=yy.match_idd),
l as(select team_id,team_name as team_one from team where team_id!=0 and team_id
in(select innings_one_team from t))
select match_id, match_date, inning, team_one, innings_two_team, outcome, overs from l
inner join t on t.innings_one_team=l.team_id),
ll as(select team_id,team_name as team_two from team where team_id
in(select innings_two_team from tt))
select match_id, match_date, inning, team_one, team_two, outcome, overs from ll
inner join tt on tt.innings_two_team=ll.team_id order by outcome ${order_type} limit 15;`
        //${order_type} instead of desc
      );
      // console.log("stats result is ", result);
      let dates = [];
      for (onedate of result) {
        // console.log("date - ", onedate);
        var date = new Date(onedate.match_date);
        let format_date = (onedate.match_date = date.toLocaleDateString(
          "en-IN",
          {
            day: "2-digit",
            month: "short",
            year: "numeric"
          }
        ));
        dates.push({ match_date: format_date });
      }
      console.log(dates);
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
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
