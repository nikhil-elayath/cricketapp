const express = require("express");
const router = express.Router();
const pg = require("pg-promise")();
const config = require("config");
const postgresURL = config.get("postgresURL");

const db = pg(postgresURL);
// const db = pg("postgres://postgres:root@localhost:5432/cricketalpha");

const PlayerValidation = require("../../joi-validation/PlayerValidation");
const TeamValidation = require("../../joi-validation/TeamValidation");
const jwt = require("jsonwebtoken");
const validatetoken = require("../../middleware/tokenVerfication");

var auth = require("../../middleware/authorize");

router.post("/player/new", async (req, res, next) => {
  try {
    const player = {
      player_name: req.body.player_name,
      player_country: req.body.player_country,
      batting_style: req.body.batting_style,
      bowling_style: req.body.bowling_style,
      player_dob: req.body.player_dob,
      player_role: req.body.player_role,
      debut_odi_match: req.body.debut_odi_match,
      debut_test_match: req.body.debut_test_match,
      debut_t20_match: req.body.debut_t20_match,
      player_gender: req.body.player_gender
    };
    console.log("Validation");
    PlayerValidation(player).then(async () => {
      console.log("Hello");
      const result = await db.any(
        `insert into player(player_name,player_country,batting_style,bowling_style,player_dob,player_role,debut_odi_match,debut_test_match,debut_t20_match,player_gender) values ( '${req.body.player_name}','${req.body.player_country}','${req.body.batting_style}','${req.body.bowling_style}','${req.body.player_dob}','${req.body.player_role}','${req.body.debut_odi_match}','${req.body.debut_test_match}','${req.body.debut_t20_match}','${req.body.player_gender}') returning player_id`
      );
      console.log(result);
      // if (!result)
      //   throw {
      //     statusCode: 404,
      //     customMessage: "invalid input"
      //   };
      res.status(200).json({
        status: 200,
        data: result,
        message: "Created 1 Player successfully"
      });
    });
  } catch (error) {
    next(error);
    return true;
  }
});

router.post("/team/new", async (req, res, next) => {
  try {
    const team = {
      team_name: req.body.team_name
    };
    TeamValidation(team).then(async () => {
      const result = await db.any(
        `insert into team(team_name) values ( '${req.body.team_name}') returning team_id`
      );
      // if (!result)
      //   throw {
      //     statusCode: 404,
      //     customMessage: "invalid input"
      //   };
      res.status(200).json({
        status: 200,
        data: result,
        message: "Created 1 team successfully"
      });
    });
  } catch (error) {
    next(error);
    return true;
  }
});

router.put("/editplayer/:player_id", async (req, res, next) => {
  const player_id = req.params.player_id;
  try {
    const player = {
      player_name: req.body.player_name,
      player_country: req.body.player_country,
      batting_style: req.body.batting_style,
      bowling_style: req.body.bowling_style,
      player_dob: req.body.player_dob,
      player_role: req.body.player_role,
      debut_odi_match: req.body.debut_odi_match,
      debut_test_match: req.body.debut_test_match,
      debut_t20_match: req.body.debut_t20_match,
      player_gender: req.body.player_gender
    };
    PlayerValidation(player)
      .then(async val_res => {
        let result = await db.any(
          `update player set player_name = '${req.body.player_name}', player_country = '${req.body.player_country}', batting_style = '${req.body.batting_style}', bowling_style = '${req.body.bowling_style}', player_dob = '${req.body.player_dob}', player_role = '${req.body.player_role}',debut_odi_match = '${req.body.debut_odi_match}',debut_test_match = '${req.body.debut_test_match}',debut_t20_match = '${req.body.debut_t20_match}',player_gender='${req.body.player_gender}' where player_id = '${player_id}' returning player_id`
        );
        if (result < 1)
          throw {
            statusCode: 404,
            errorMessage: "Cannot find player for given id"
          };
        res.status(200).json({
          status: 200,
          successMessage: "Updated one player successfully"
        });
      })
      .catch(error => {
        // error.errorMessage = error.details[0].message;
        next(error);
      });
  } catch (error) {
    next(error);
  }
});

router.put("/editteam/:team_id", async (req, res, next) => {
  const team_id = req.params.team_id;
  try {
    const team = {
      team_name: req.body.team_name
    };
    TeamValidation(team)
      .then(async val_res => {
        let result = await db.any(
          `update team set team_name = '${req.body.team_name}' where team_id = '${team_id}' returning team_id`
        );
        if (result < 1)
          throw {
            statusCode: 404,
            errorMessage: "Cannot find team for given id"
          };
        res.status(200).json({
          status: 200,
          successMessage: "Updated one team successfully"
        });
      })
      .catch(error => {
        // error.errorMessage = error.details[0].message;
        next(error);
      });
  } catch (error) {
    next(error);
  }
});

router.delete("/deleteplayer/:player_id", async (req, res, next) => {
  const player_id = req.params.player_id;
  try {
    let result = await db.any(
      `delete from player where player_id = '${player_id}' returning player_id`
    );
    console.log(result);
    if (result < 1)
      throw {
        statusCode: 404,
        errorMessage: "Cannot find player for given id"
      };
    res.status(200).json({
      status: 200,
      successMessage: "Deleted one player successfully"
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/deleteteam/:team_id", async (req, res, next) => {
  const team_id = req.params.team_id;
  try {
    let result = await db.any(
      `delete from team where team_id = '${team_id}' returning team_id`
    );
    console.log(result);
    if (result < 1)
      throw {
        statusCode: 404,
        errorMessage: "Cannot find team for given id"
      };
    res.status(200).json({
      status: 200,
      successMessage: "Deleted one team successfully"
    });
  } catch (error) {
    next(error);
  }
});
// for player
router.get("/search/:playerName", async (req, res) => {
  try {
    const playerName = req.params.playerName;

    const result = await db.any(
      `select * from player where player_name ilike '%${playerName}%';`
      // `select distinct player_name from teamplayer_stats ilike '%${playerName}%';`
    );
    res.status(200).json({
      status: 200,
      data: result,
      message: "Retrieved search info successfully"
    });
  } catch (err) {
    res.status(400);
  }
});

router.get("/searchteam/:teamName", async (req, res) => {
  try {
    const teamName = req.params.teamName;

    const result = await db.any(
      `select * from team where team_name ilike '%${teamName}%';`
      // `select distinct player_name from teamplayer_stats ilike '%${teamName}%';`
    );
    res.status(200).json({
      status: 200,
      data: result,
      message: "Retrieved search info successfully"
    });
  } catch (err) {
    res.status(400);
  }
});

module.exports = router;
