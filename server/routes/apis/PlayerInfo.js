const express = require("express");
const router = express.Router();
const pg = require("pg-promise")();
// const config = require("config");

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

router.get("/allBatsman", async (req, res) => {
  try {
    var BatRole1 = " Batsman ";
    var BatRole2 = " WK-Batsman ";
    var BatRole3 = " Batting Allrounder ";
    const result = await db.any(
      "select * from player where player_role ='" +
        BatRole1 +
        "'OR player_role = '" +
        BatRole2 +
        "'OR player_role = '" +
        BatRole3 +
        "' ;"
    );
    // console.log("data is: ", result);
    res.status(200).json({
      status: 200,
      data: result,
      message: "All Batsman retrieved"
    });
  } catch (err) {
    console.log(err);
  }
});

router.get("/allBowlers", async (req, res) => {
  try {
    var BallRole1 = " Bowler ";
    var BallRole2 = " Bowling Allrounder ";
    const result = await db.any(
      "select * from player where player_role ='" +
        BallRole1 +
        "'OR player_role = '" +
        BallRole2 +
        "' ;"
    );
    // console.log("data is: ", result);
    res.status(200).json({
      status: 200,
      data: result,
      message: "All Bowlers retrieved"
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
