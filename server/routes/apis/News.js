const express = require("express");
const router = express.Router();
const pg = require("pg-promise")();
const config = require("config");
const db = pg("postgres://postgres:root@localhost:5432/cricketalpha");

//geeting news details with an id
router.get("/newsbyid/:id", async (req, res) => {
  console.log("from api newsbyid get", req.params.id);
  // const id = req.params.id;
  // console.log(id);
  try {
    const result = await db.any(
      `Select * from news where news_id = ${req.params.id} `
    );
    console.log(result);
    res.status(200).json({
      status: 200,
      data: result,
      message: "Retreivied one news by id",
    });
  } catch {
    res.status(400).json({
      status: 400,
      message: "Unexpected error",
    });
  }
});
module.exports = router;
