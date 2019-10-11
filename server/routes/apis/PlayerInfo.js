const express = require("express");
const router = express.Router();
const pg = require("pg-promise")();
const config = require("config");

// const postgresURL = config.get("postgresURL");
const db = pg("postgres://postgres:root@localhost:5432/cricketalpha");

router.get("/allPlayer", async (req, res) => {
  try {
    const result = await db.any("select * from player");
    res.status(200).json({
      status: 200,
      data: result,
      message: "Retrieved all players"
    });
  } catch (err) {
    console.log(err);
  }
});

router.get("/singlePlayer/:player_id", async (req, res) => {
  const id = req.params.player_id;
  console.log("player id is: ", id);
  try {
    const result = await db.any(
      `select * from player where player_id = ${id} `
    );

    var date = new Date(result[0].player_dob);

    console.log(date);

    result[0].player_dob = date.toLocaleDateString("en-IN", {
      month: "short",
      day: "2-digit",
      year: "numeric"
    });

    if (result.length < 1)
      throw {
        statusCode: res.status(400).json({
          statusCode: 400,
          statusMessage: "ERROR!Bad Request cannot retrieve all players"
        })
      };

    res.status(200).json({
      status: 200,
      data: result,
      message: "player retrieved succefully"
    });
  } catch (err) {
    console.log(err);
  }
});

// router.get("/allBatsman", async (req, res) => {
//   try {
//     var BatRole1 = " Batsman ";
//     var BatRole2 = " WK-Batsman ";
//     var BatRole3 = " Batting Allrounder ";
//     const result = await db.any(
//       "select * from player where player_role ='" +
//         BatRole1 +
//         "'OR player_role = '" +
//         BatRole2 +
//         "'OR player_role = '" +
//         BatRole3 +
//         "' ;"
//     );
//     // console.log("data is: ", result);
//     res.status(200).json({
//       status: 200,
//       data: result,
//       message: "All Batsman retrieved"
//     });
//   } catch (err) {
//     console.log(err);
//   }
// });

// router.get("/allBowlers", async (req, res) => {
//   try {
//     var BallRole1 = " Bowler ";
//     var BallRole2 = " Bowling Allrounder ";
//     const result = await db.any(
//       "select * from player where player_role ='" +
//         BallRole1 +
//         "'OR player_role = '" +
//         BallRole2 +
//         "' ;"
//     );
//     // console.log("data is: ", result);
//     res.status(200).json({
//       status: 200,
//       data: result,
//       message: "All Bowlers retrieved"
//     });
//   } catch (err) {
//     console.log(err);
//   }
// });

router.post("/TopBatsman", async (req, res) => {
  try {
    var match_type = req.body.match_type;
    console.log(match_type);

    if (match_type === "ODI" || match_type === "Test" || match_type === "T20") {
      const result = await db.any(
        "select player_stats.match_type,player_stats.player_stats_name, player_stats.player_stats_value,player.player_name,player.player_id,player.player_country from player_stats inner join player on player_stats.player_id = player.player_id where player_stats.match_type = '" +
          match_type +
          "'AND player_stats_name = 'total_runs' order by cast (player_stats_value as numeric) desc fetch first 5 rows only"
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

router.post("/TopBowlers", async (req, res) => {
  try {
    let match_type = req.body.match_type;

    if (match_type === "ODI" || match_type === "Test" || match_type === "T20") {
      const result = await db.any(
        "select player_stats.match_type,player_stats.player_stats_name, player_stats.player_stats_value,player.player_name,player.player_country,player.player_id from player_stats inner join player on player_stats.player_id = player.player_id where player_stats.match_type = '" +
          match_type +
          "'AND player_stats_name = 'total_wickets' order by cast (player_stats_value as numeric) desc fetch first 5 rows only"
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
  } catch (err) {
    console.log(err);
  }
});

router.post("/TopSixes", async (req, res) => {
  try {
    let match_type = req.body.match_type;

    if (match_type === "ODI" || match_type === "Test" || match_type === "T20") {
      const result = await db.any(
        "select player_stats.match_type,player_stats.player_stats_name, player_stats.player_stats_value,player.player_name,player.player_country,player.player_id from player_stats inner join player on player_stats.player_id = player.player_id where player_stats.match_type = '" +
          match_type +
          "'AND player_stats_name = '6s' order by cast (player_stats_value as numeric) desc fetch first 5 rows only"
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
  } catch (err) {
    console.log(err);
  }
});

///////////////////  BATSMAN STATS //////////////////////////////////////////

router.get("/ODI-Batsman-Stats/:player_id", async (req, res) => {
  try {
    let player_id = req.params.player_id;

    const total_runs = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        " and match_type = 'ODI' and player_stats_name = 'total_runs'"
    );

    const highest_score = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        " and match_type = 'ODI' and player_stats_name = 'highest_score'  "
    );

    const balls_faced = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        " and match_type = 'ODI' and player_stats_name = 'balls_faced'"
    );

    const matches_played = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        " and match_type = 'ODI' and player_stats_name = 'matches_played'"
    );

    const strike_rate = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        " and match_type = 'ODI' and player_stats_name = 'strike_rate'"
    );

    const not_out = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        " and match_type = 'ODI' and player_stats_name = 'not_out'"
    );

    const _100s = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        " and match_type = 'ODI' and player_stats_name = '100s'"
    );

    const _200s = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        " and match_type = 'ODI' and player_stats_name = '200s'"
    );

    const _50s = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        " and match_type = 'ODI' and player_stats_name = '50s'"
    );

    const _6s = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        " and match_type = 'ODI' and player_stats_name = '6s'"
    );

    const _4s = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        " and match_type = 'ODI' and player_stats_name = '4s'"
    );

    data = [
      {
        Matches: matches_played,
        Highestscore: highest_score,
        TotalRuns: total_runs,
        BallsFaced: balls_faced,
        StrikeRate: strike_rate,
        NotOut: not_out,
        Hundreds: _100s,
        Fifties: _50s,
        TwoHundreds: _200s,
        Sixes: _6s,
        Fours: _4s
      }
    ];

    res.status(200).json({
      status: 200,
      ODI: data,
      message: "Batsman stats retrieved"
    });
  } catch (err) {
    console.log(err);
  }
});

router.get("/Test-Batsman-Stats/:player_id", async (req, res) => {
  try {
    let player_id = req.params.player_id;

    const total_runs = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        " and match_type = 'Test' and player_stats_name = 'total_runs'"
    );

    const highest_score = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        " and match_type = 'Test' and player_stats_name = 'highest_score'  "
    );

    const balls_faced = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        " and match_type = 'Test' and player_stats_name = 'balls_faced'"
    );

    const matches_played = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        " and match_type = 'Test' and player_stats_name = 'matches_played'"
    );

    const strike_rate = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        " and match_type = 'Test' and player_stats_name = 'strike_rate'"
    );

    const not_out = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        " and match_type = 'Test' and player_stats_name = 'not_out'"
    );

    const _100s = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        " and match_type = 'Test' and player_stats_name = '100s'"
    );

    const _200s = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        " and match_type = 'Test' and player_stats_name = '200s'"
    );

    const _50s = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        " and match_type = 'Test' and player_stats_name = '50s'"
    );

    const _6s = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        " and match_type = 'Test' and player_stats_name = '6s'"
    );

    const _4s = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        " and match_type = 'Test' and player_stats_name = '4s'"
    );

    data = [
      {
        Matches: matches_played,
        Highestscore: highest_score,
        TotalRuns: total_runs,
        BallsFaced: balls_faced,
        StrikeRate: strike_rate,
        NotOut: not_out,
        Hundreds: _100s,
        Fifties: _50s,
        TwoHundreds: _200s,
        Sixes: _6s,
        Fours: _4s
      }
    ];

    res.status(200).json({
      status: 200,
      Test: data,
      message: "Batsman stats retrieved"
    });
  } catch (err) {
    console.log(err);
  }
});

router.get("/T20-Batsman-Stats/:player_id", async (req, res) => {
  try {
    let player_id = req.params.player_id;

    const total_runs = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        " and match_type = 'T20' and player_stats_name = 'total_runs'"
    );

    const highest_score = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        " and match_type = 'T20' and player_stats_name = 'highest_score'  "
    );

    const balls_faced = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        " and match_type = 'T20' and player_stats_name = 'balls_faced'"
    );

    const matches_played = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        " and match_type = 'T20' and player_stats_name = 'matches_played'"
    );

    const strike_rate = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        " and match_type = 'T20' and player_stats_name = 'strike_rate'"
    );

    const not_out = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        " and match_type = 'T20' and player_stats_name = 'not_out'"
    );

    const _100s = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        " and match_type = 'T20' and player_stats_name = '100s'"
    );

    const _200s = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        " and match_type = 'T20' and player_stats_name = '200s'"
    );

    const _50s = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        " and match_type = 'T20' and player_stats_name = '50s'"
    );

    const _6s = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        " and match_type = 'T20' and player_stats_name = '6s'"
    );

    const _4s = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        " and match_type = 'T20' and player_stats_name = '4s'"
    );

    data = [
      {
        Matches: matches_played,
        Highestscore: highest_score,
        TotalRuns: total_runs,
        BallsFaced: balls_faced,
        StrikeRate: strike_rate,
        NotOut: not_out,
        Hundreds: _100s,
        Fifties: _50s,
        TwoHundreds: _200s,
        Sixes: _6s,
        Fours: _4s
      }
    ];

    res.status(200).json({
      status: 200,
      T20: data,
      message: "Batsman stats retrieved"
    });
  } catch (err) {
    console.log(err);
  }
});

router.get("/Batsman-Stats/:player_id", async (req, res) => {
  try {
    let player_id = req.params.player_id;

    const total_runs = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        "   and player_stats_name = 'total_runs' order by match_type"
    );

    const highest_score = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        "   and player_stats_name = 'highest_score' order by match_type "
    );

    const balls_faced = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        "   and player_stats_name = 'balls_faced' order by match_type"
    );

    const matches_played = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        "   and player_stats_name = 'matches_played' order by match_type"
    );

    const strike_rate = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        "   and player_stats_name = 'strike_rate' order by match_type"
    );

    const not_out = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        "   and player_stats_name = 'not_out' order by match_type"
    );

    const _100s = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        "   and player_stats_name = '100s' order by match_type"
    );

    const _200s = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        "   and player_stats_name = '200s' order by match_type"
    );

    const _50s = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        "   and player_stats_name = '50s' order by match_type"
    );

    const _6s = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        "   and player_stats_name = '6s' order by match_type"
    );

    const _4s = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        "   and player_stats_name = '4s' order by match_type"
    );

    data = [
      {
        Matches: matches_played,
        Highestscore: highest_score,
        TotalRuns: total_runs,
        BallsFaced: balls_faced,
        StrikeRate: strike_rate,
        NotOut: not_out,
        Hundreds: _100s,
        Fifties: _50s,
        TwoHundreds: _200s,
        Sixes: _6s,
        Fours: _4s
      }
    ];

    res.status(200).json({
      status: 200,
      data: data,
      message: "Batsman stats retrieved"
    });
  } catch (err) {
    console.log(err);
  }
});

// ////////////////////////////// BOWLER STATS ////////////////////////////

router.get("/ODIBowlerStats/:player_id", async (req, res) => {
  try {
    let player_id = req.params.player_id;

    const runs_conceded = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        " and match_type = 'ODI' and player_stats_name = 'runs_conceded'"
    );

    const total_wickets = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        " and match_type = 'ODI' and player_stats_name = 'total_wickets'  "
    );

    const wickets_4 = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        " and match_type = 'ODI' and player_stats_name = '4w'"
    );

    const matches_played = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        " and match_type = 'ODI' and player_stats_name = 'matches_played'"
    );

    const wickets_5 = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        " and match_type = 'ODI' and player_stats_name = '5w'"
    );

    // const _4s = await db.any(
    //   "select * from player_stats where player_id = " +
    //     player_id +
    //     " and match_type = 'ODI' and player_stats_name = '4s'"
    // );

    data = [
      {
        Matches: matches_played,

        RunsConceded: runs_conceded,
        TotalWIckets: total_wickets,

        FourWickets: wickets_4,
        FiveWickets: wickets_5
      }
    ];

    res.status(200).json({
      status: 200,
      ODIBowler: data,
      message: "Batsman stats retrieved"
    });
  } catch (err) {
    console.log(err);
  }
});

router.get("/T20-Bowler-Stats/:player_id", async (req, res) => {
  try {
    let player_id = req.params.player_id;

    const runs_conceded = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        " and match_type = 'T20' and player_stats_name = 'runs_conceded'"
    );

    const total_wickets = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        " and match_type = 'T20' and player_stats_name = 'total_wickets'  "
    );

    const wickets_4 = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        " and match_type = 'T20' and player_stats_name = '4w'"
    );

    const matches_played = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        " and match_type = 'T20' and player_stats_name = 'matches_played'"
    );

    const wickets_5 = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        " and match_type = 'T20' and player_stats_name = '5w'"
    );

    // const _4s = await db.any(
    //   "select * from player_stats where player_id = " +
    //     player_id +
    //     " and match_type = 'ODI' and player_stats_name = '4s'"
    // );

    data = [
      {
        Matches: matches_played,
        RunsConceded: runs_conceded,
        TotalWIckets: total_wickets,
        FourWickets: wickets_4,
        FiveWickets: wickets_5
      }
    ];

    res.status(200).json({
      status: 200,
      T20Bowler: data,
      message: "Batsman stats retrieved"
    });
  } catch (err) {
    console.log(err);
  }
});

router.get("/Test-Bowler-Stats/:player_id", async (req, res) => {
  try {
    let player_id = req.params.player_id;

    const runs_conceded = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        " and match_type = 'Test' and player_stats_name = 'runs_conceded'"
    );

    const total_wickets = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        " and match_type = 'Test' and player_stats_name = 'total_wickets'  "
    );

    const wickets_4 = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        " and match_type = 'Test' and player_stats_name = '4w'"
    );

    const matches_played = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        " and match_type = 'Test' and player_stats_name = 'matches_played'"
    );

    const wickets_5 = await db.any(
      "select * from player_stats where player_id = " +
        player_id +
        " and match_type = 'Test' and player_stats_name = '5w'"
    );

    // const _4s = await db.any(
    //   "select * from player_stats where player_id = " +
    //     player_id +
    //     " and match_type = 'ODI' and player_stats_name = '4s'"
    // );

    data = [
      {
        Matches: matches_played,
        RunsConceded: runs_conceded,
        TotalWIckets: total_wickets,
        FourWickets: wickets_4,
        FiveWickets: wickets_5
      }
    ];

    res.status(200).json({
      status: 200,
      TestBowler: data,
      message: "Batsman stats retrieved"
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
