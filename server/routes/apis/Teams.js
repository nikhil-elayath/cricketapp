const express = require("express");
const router = express.Router();
const pg = require("pg-promise")();
const config = require("config");
const postgresURL = config.get("postgresURL");
const db = pg(postgresURL);
// const db = pg("postgres://postgres:root@localhost:5432/cricketalpha");

router.get("/teams", async (req, res, next) => {
  try {
    const result = await db.any("select * from team where team_name!=''");
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
router.get("/teams/match/:team_id", async (req, res, next) => {
  try {
    const team_id = req.params.team_id;
    console.log("called Individual team matches");
    // const result = await db.any(`SELECT * FROM matches where dates='${date}' ORDER BY runs;`);
    // const result = await db.any(`select date.match_date, m.match_type, m.match_id from match_date as date inner join match as m on date.match_id=m.match_id where match_date='${date}' ORDER BY date.match_date;`);
    const result = await db.any(
      `select md.match_date, m.match_id, m.match_type from match_date as md inner join match as m on md.match_id = m.match_id where m.team_one=${team_id} or m.team_two=${team_id} order by md.match_date desc limit 8`
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
        `select count(wicket_id) as teamtwo_wickets from delivery where match_id =${match_id} AND inning =2 AND wicket_id>0;;`
      );
      console.log(teamtwo_wicket);
      const teamone_name = await db.any(
        `select t.team_name as teamone_name from team as t inner join match as m on m.team_one=t.team_id where match_id=${match_id};`
      );
      console.log(teamone_name);
      const teamtwo_name = await db.any(
        `select t.team_name as teamtwo_name from team as t inner join match as m on m.team_two=t.team_id where match_id=${match_id};`
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
    console.log("match type", match_type);
    const result = await db.any(
      `select team.team_name, count(team.team_name) from team team left join match match on match.winner = team.team_id where match.match_type = '${match_type}' group by team.team_name having count(team.team_name)>1 order by count(team.team_name) desc fetch first 5 rows only;`
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
