const express = require("express");
const router = express.Router();
const pg = require("pg-promise")();
const config = require("config");
const postgresURL = config.get("postgresURL");
const db = pg(postgresURL);
// const db = pg("postgres://postgres:root@localhost:5432/cricketalpha");

router.post("/search", async (req, res) => {
	// console.log("from api", req.body.search);
	const player = await db.any(
		`select player_id, player_name, player_image from player where player_name ilike '${req.body.search}%' or player_name ilike '%${req.body.search}'  limit 2`
	);
	const team = await db.any(
		`select team_id, team_name, team_image from team where team_name ilike '${req.body.search}%' or team_name ilike '%${req.body.search}' limit 2`
	);

	data = {};
	data.team = team;

	data.player = player;
	console.log("search response sent sucessfully");
	res.status(200).json({
		status: 200,
		data: data,
		message: "Fetched one data successfully"
	});
});

module.exports = router;
