const url = "mongodb://localhost:27017/cricketalpha";
const escape = require("pg-escape");

let MongoClient = require("mongodb").MongoClient;

const pgp = require("pg-promise")();
const postdb = pgp("postgres://postgres:root@localhost:5432/cricketalpha");
let dbo;

MongoClient.connect(url, {
	useNewUrlParser: true
}).then(async db => {
	dbo = db.db("cricketalpha");
	// async function which will be defined below
	// await players();
	// await umpires();
	// await team();

	// console.time("match type");
	// await match_type();
	// console.timeEnd("match type");

	// console.log();

	// console.time("match table");
	// await match();
	// console.timeEnd("match table");

	// await player_stats();
	await stats_player();
	console.log("promise satisfied");
});

async function match() {
	console.log(
		"\x1b[34m%s\x1b[0m",
		"\nEntered in match function.\nThis might take time, depends on your device.\n"
	);
	ids = await dbo
		.collection("matchinfo")
		.find()
		.toArray();
	let inc = 1;

	for (id in ids) {
		let venue_id;
		let umpires_id = [];
		let toss_winner_id;
		let inning_team_id = [];
		let inning_one_team_id;
		let inning_two_team_id;
		let winner_id;
		try {
			let currentId = ids[id];
			let gender = currentId.info.gender;
			// // venue
			venue_id = 0;
			if (
				currentId.info.hasOwnProperty("venue") ||
				currentId.info.hasOwnProperty("city")
			) {
				let query = escape(
					"with s as (select venue_id, venue_name from venue where venue_name=%L), i as (insert into venue(venue_name,venue_city) select %L,%L where not exists (select 1 from s) returning venue_id) select venue_id from s union all select venue_id from i",
					currentId.info.venue ? currentId.info.venue : "NA",
					currentId.info.venue ? currentId.info.venue : "NA",
					currentId.info.city ? currentId.info.city : "NA"
				);
				venue_id = await postdb.any(query);
				venue_id = venue_id[0].venue_id;
			}

			// umpires of the match
			if (currentId.info.hasOwnProperty("umpires")) {
				for (umpire in currentId.info.umpires) {
					let u = currentId.info.umpires;
					query = escape(
						"with s as (select umpire_id, umpire_name from umpire where umpire_name=%L), i as (insert into umpire(umpire_name) select %L where not exists (select 1 from s) returning umpire_id) select umpire_id from s union all select umpire_id from i",
						u[umpire],
						u[umpire]
					);
					umpire_id = await postdb.any(query);

					umpires_id.push(umpire_id[0].umpire_id);
				}
			}

			// // toss_winner
			query = escape(
				"with s as (select team_id, team_name from team where team_name=%L), i as (insert into team(team_name) select %L where not exists (select 1 from s) returning team_id) select team_id from s union all select team_id from i",
				currentId.info.toss.winner,
				currentId.info.toss.winner
			);
			toss_winner_id = await postdb.any(query);
			toss_winner_id = toss_winner_id[0].team_id;

			// =======================================================================
			let innning_dec = 2;
			if (currentId.info.outcome.result == "no result") {
				innning_dec = 1;
			}
			for (single_match_inning of currentId.innings) {
				for (let [single_inning, single_inning_data] of Object.entries(
					single_match_inning
				)) {
					let si = single_inning;
					if (innning_dec > 0) {
						query = escape(
							"with s as (select team_id, team_name from team where team_name=%L), i as (insert into team(team_name) select %L where not exists (select 1 from s) returning team_id) select team_id from s union all select team_id from i",
							single_inning_data.team,
							single_inning_data.team
						);
						let one_team_id = await postdb.any(query);
						inning_team_id.push(one_team_id[0].team_id);
						// console.log(si, single_inning_data.team);
					}
					innning_dec--;
				}
			}

			if (inning_team_id.length == 1) {
				inning_team_id.push(0);
			}

			// // winner
			winner_id = 0;
			if (currentId.info.outcome.hasOwnProperty("winner")) {
				query = escape(
					"with s as (select team_id, team_name from team where team_name=%L), i as (insert into team(team_name) select %L where not exists (select 1 from s) returning team_id) select team_id from s union all select team_id from i",
					currentId.info.outcome.winner,
					currentId.info.outcome.winner
				);
				winner_id = await postdb.any(query);
				winner_id = winner_id[0].team_id;
			}

			let outcome_match;
			if (currentId.info.outcome.hasOwnProperty("result")) {
				outcome_match = `${currentId.info.outcome.result}`;
			} else if (currentId.info.outcome.by.hasOwnProperty("runs")) {
				outcome_match = `won by ${currentId.info.outcome.by.runs} runs`;
			} else if (currentId.info.outcome.by.hasOwnProperty("wickets")) {
				outcome_match = `won by ${currentId.info.outcome.by.wickets} wickets`;
			}
			// console.log("outcome", currentId.info.outcome);

			competition = "others";
			if (currentId.info.hasOwnProperty("competition")) {
				competition = currentId.info.competition;
			}

			// Insert into match table
			query = escape(
				`insert into match(match_type,toss_winner,toss_decision,innings_one_team,innings_two_team,outcome,player_of_the_match,gender,winner,venue_id,competition) values('${
					currentId.info.match_type
				}',${toss_winner_id},'${currentId.info.toss.decision}',${
					inning_team_id[0]
				},${inning_team_id[1]},'${outcome_match}',ARRAY[%L],'${
					currentId.info.gender
				}',${winner_id},${venue_id},%L) returning match_id`,
				currentId.info.player_of_match,
				competition
			);
			console.log("\n\nmatch query", query);
			console.log("\x1b[36m%s\x1b[0m", `mongo id ${currentId._id}`);
			let match_id = await postdb.any(query);
			if (match_id.length > 0) {
				console.log(
					"\x1b[35m%s\x1b[0m",
					`\n=========> inserted data in match table ${inc} `
				);
			}
			match_id = match_id[0].match_id;

			//  insert into match_umpires table
			umpires_id.forEach(async u_id => {
				query = `insert into match_umpire values(${match_id},${u_id})`;
				const result = await postdb.any(query);
				// if (result.length < 0) {
				// 	console.log(
				// 		"\x1b[45m\x1b30m%s\x1b[0m",
				// 		`\n=======================> inserted data in match_umpires table ${inc}`
				// 	);
				// }
			});

			//  insert into match_date table
			currentId.info.dates.forEach(async date => {
				date = date.substring(0, 10);
				const query = escape(
					`insert into match_date values(${match_id},%L)`,
					date
				);
				const result = await postdb.any(query);
				// if (result.length < 0) {
				// 	console.log(
				// 		"\x1b[45m\x1b30m%s\x1b[0m",
				// 		`\n=======================> inserted data in match_date table ${inc}`
				// 	);
				// }
			});

			// inserting for delivery
			for (let i in currentId.innings) {
				// console.log("gender", gender);
				let inn = parseInt(i) + 1;
				console.log(`=========> inserting innings ${inn} `);
				for (const [k, v] of Object.entries(currentId.innings[i])) {
					let current_team = v.team;
					let team_query = escape(
						"with s as (select team_id, team_name from team where team_name=%L), i as (insert into team(team_name) select %L where not exists (select 1 from s) returning team_id) select team_id from s union all select team_id from i",
						current_team,
						current_team
					);

					let current_team_id = await postdb.any(team_query);
					current_team_id = current_team_id[0].team_id;

					deliveries = v.deliveries;
					let current_team_players = [];
					for (delivery in deliveries) {
						for (const [key, val] of Object.entries(
							deliveries[delivery]
						)) {
							// console.log(key);
							let wicket_id = 0;
							let extras_id = 0;
							let fielder_one = 0;
							let fielder_two = 0;
							if (val.hasOwnProperty("wicket")) {
								if (val.wicket.hasOwnProperty("fielders")) {
									// console;
									// console.log(
									// 	"\x1b[34m%s\x1b[0m",
									// 	`wicket fielders length ${val.wicket.fielders.length}`
									// );
									// get fielder_one id
									let query = escape(
										"with s as (select player_id, player_name, player_gender from player where player_name=%L and player_gender=%L), i as (insert into player(player_name, player_gender) select %L,%L where not exists (select 1 from s) returning player_id) select player_id from s union all select player_id from i",
										val.wicket.fielders[0],
										gender,
										val.wicket.fielders[0],
										gender
									);
									fielder_one = await postdb.any(query);
									if (fielder_one.length > 0) {
										fielder_one = fielder_one[0].player_id;
									} else {
										fielder_one = 0;
									}

									// get fielder_two id
									if (val.wicket.fielders.length == 2) {
										query = escape(
											"with s as (select player_id, player_name, player_gender from player where player_name=%L and player_gender=%L), i as (insert into player(player_name, player_gender) select %L,%L where not exists (select 1 from s) returning player_id) select player_id from s union all select player_id from i",
											val.wicket.fielders[1],
											gender,
											val.wicket.fielders[1],
											gender
										);
										fielder_two = await postdb.any(query);
										if (fielder_two.length > 0) {
											fielder_two =
												fielder_two[0].player_id;
										} else {
											fielder_two = 0;
										}
									}
								}

								// get player_out id
								let query = escape(
									"with s as (select player_id, player_name, player_gender from player where player_name=%L and player_gender=%L), i as (insert into player(player_name, player_gender) select %L,%L where not exists (select 1 from s) returning player_id) select player_id from s union all select player_id from i",
									val.wicket.player_out,
									gender,
									val.wicket.player_out,
									gender
								);
								let player_out = await postdb.any(query);
								player_out = player_out[0].player_id;

								// add into wickets
								query = `insert into wickets(wicket_type,fielder_one, fielder_two, player_out) values('${val.wicket.kind}',${fielder_one},${fielder_two},${player_out}) returning wicket_id`;

								wicket_id = await postdb.any(query);
								wicket_id = wicket_id[0].wicket_id;
							}
							if (val.hasOwnProperty("extras")) {
								const query = escape(
									`insert into extras(extras_type,extras_run) values(%L,${val.runs.extras}) returning extras_id`,
									Object.keys(val.extras)[0]
								);
								extras_id = await postdb.any(query);
								extras_id = extras_id[0].extras_id;
							}

							// get striker_id
							let query = escape(
								"with s as (select player_id, player_name, player_gender from player where player_name=%L and player_gender=%L), i as (insert into player(player_name, player_gender) select %L,%L where not exists (select 1 from s) returning player_id) select player_id from s union all select player_id from i",
								val.batsman,
								gender,
								val.batsman,
								gender
							);
							let striker_id = await postdb.any(query);
							striker_id = striker_id[0].player_id;

							// get non_striker_id
							query = escape(
								"with s as (select player_id, player_name, player_gender from player where player_name=%L and player_gender=%L), i as (insert into player(player_name, player_gender) select %L,%L where not exists (select 1 from s) returning player_id) select player_id from s union all select player_id from i",
								val.non_striker,
								gender,
								val.non_striker,
								gender
							);
							let non_striker_id = await postdb.any(query);
							non_striker_id = non_striker_id[0].player_id;

							current_team_players.push(striker_id);
							current_team_players.push(non_striker_id);

							// get bowler_id
							query = escape(
								"with s as (select player_id, player_name, player_gender from player where player_name=%L and player_gender=%L), i as (insert into player(player_name, player_gender) select %L,%L where not exists (select 1 from s) returning player_id) select player_id from s union all select player_id from i",
								val.bowler,
								gender,
								val.bowler,
								gender
							);
							let bowler_id = await postdb.any(query);
							bowler_id = bowler_id[0].player_id;

							// insert into delivery table
							query = `insert into delivery values(${match_id},${inn},${key},${striker_id},${non_striker_id},${bowler_id},${val.runs.batsman},${extras_id},${wicket_id},${val.runs.total})`;
							const del_result = await postdb.any(query);
						}
					}

					current_team_players = current_team_players.filter(
						(value, index, arr) => arr.indexOf(value) === index
					);

					for (current_player of current_team_players) {
						const query = `insert into match_team_player select ${match_id},${current_team_id},${current_player} where not exists(select * from match_team_player where match_id=${match_id} and team_id=${current_team_id} and player_id=${current_player})`;
						// 	// const query = `insert into match_team_player values(${match_id},${current_team_id},${current_player})`;
						const result = postdb.any(query);
						// 	console.log("match_team_player", query);
						// 	// if (result.length < 0) {
						// 	// 	console.log(
						// 	// 		"\x1b[45m\x1b30m%s\x1b[0m",
						// 	// 		`\n=======================> inserted data in match_team_player table ${inc}`
						// 	// 	);
						// 	// }
					}
				}
			}
			inc++;
		} catch (err) {
			console.error(err);
		}
	}
}

async function team() {
	console.log("\x1b[34m%s\x1b[0m", "\nEntered in teams function.\n");
	ids = await dbo
		.collection("matchinfo")
		.find()
		.toArray();
	teams = [];
	ids.forEach(id => {
		id.info.teams.forEach(team => {
			teams.push(team);
		});
	});

	// teams = teams.filter((value, index, arr) => arr.indexOf(value) === index);
	// console.log(
	// 	"\x1b[45m\x1b[30m%s\x1b[0m",
	// 	`filtered teams length ${teams.length}`
	// );

	teams.forEach(async team_name => {
		try {
			let query = escape(
				"select team_id from team where team_name = %L",
				team_name
			);
			let team_id = await postdb.any(query);
			if (team_id.length < 1) {
				query = escape(
					`insert into team(team_name) select %L where not exists(select team_id from team where team_name=%L)`,
					team_name,
					team_name
				);
				team_id = await postdb.any(query);
				console.log("team created with id ", team_id, team_name);
			} else {
				console.log("team present with id ", team_id, team_name);
			}
		} catch (err) {
			console.error(err);
		}
	});
}

async function players() {
	console.log(
		"\x1b[34m%s\x1b[0m",
		"\nEntered in players function.\nThis might take time, depends on your device.\n"
	);
	ids = await dbo
		.collection("matchinfo")
		.find()
		.toArray();
	let players = [];

	ids.forEach(id => {
		id.innings.forEach(inning => {
			for (const [k, v] of Object.entries(inning)) {
				v.deliveries.forEach(delivery => {
					for (const [key, value] of Object.entries(delivery)) {
						players.push(value.batsman);
						players.push(value.bowler);
						players.push(value.non_striker);
					}
				});
			}
		});
	});

	// players = players.filter(
	// 	(value, index, arr) => arr.indexOf(value) === index
	// );
	// console.log(
	// 	"\x1b[45m\x1b[30m%s\x1b[0m",
	// 	`filtered players length ${players.length}`
	// );

	players.forEach(async player_name => {
		try {
			let query = escape(
				"select player_id from player where player_name = %L",
				player_name
			);
			let player_id = await postdb.any(query);

			if (player_id.length < 1) {
				const query = escape(
					`insert into player(player_name) select %L where not exists(select player_id from player where player_name=%L)`,
					player_name,
					player_name
				);
				// console.log(test);
				const result = await postdb.any(query);
			}
		} catch (err) {
			console.error(err);
		}
	});

	// p.forEach(play => {
	// 	console.log(play.split(" ").slice(-1)[0]);
	// });
	// console.log(
	// 	p.find(e => {
	// 		return e === "Mohammad Amir";
	// 	})
	// );
}

async function umpires() {
	console.log("\x1b[34m%s\x1b[0m", "\nEntered in umpires function.\n");
	ids = await dbo
		.collection("matchinfo")
		.find()
		.toArray();
	let umpires = [];

	ids.forEach(id => {
		id.info.umpires.forEach(umpire => {
			umpires.push(umpire);
		});
	});

	umpires = umpires.filter(
		(value, index, arr) => arr.indexOf(value) === index
	);
	console.log(
		"\x1b[45m\x1b[30m%s\x1b[0m",
		`filtered umpires ${umpires.length}`
	);

	umpires.forEach(async umpire_name => {
		try {
			let query = escape(
				"select umpire_id from umpire where umpire_name = %L",
				umpire_name
			);
			let umpire_id = await postdb.any(query);

			if (umpire_id.length < 1) {
				const query = escape(
					`insert into umpire(umpire_name) values(%L)`,
					umpire_name
				);
				// console.log(test);
				const result = await postdb.any(query);
			}
		} catch (err) {
			console.error(err);
		}
	});
}

async function match_type() {
	console.log("\x1b[34m%s\x1b[0m", "\nEntered in match_type function.\n");
	match_types = await dbo.collection("matchinfo").distinct("info.match_type");

	console.log(match_types);
	match_types.forEach(async type => {
		let query = `select match_type_id from match_type where match_type = '${type}'`;
		console.log(query);
		const match_type_id = await postdb.any(query);
		if (match_type_id.length < 1) {
			let query = `insert into match_type(match_type) values('${type}')`;
			console.log(query);

			const result = await postdb.any(query);
		}
	});
}

async function player_stats() {
	const player_ids = await postdb.any("select player_id from player");
	player_ids.forEach(async player => {
		//  total_runs stats
		let query = `select m.match_type, sum(d.batsman_run) as total_runs from delivery as d inner join match as m on d.match_id = m.match_id where d.striker = ${player.player_id} group by m.match_type`;

		const total_runs_results = await postdb.any(query);
		total_runs_results.forEach(async result => {
			let query = `insert into player_stats(player_stats_name, player_stats_value,player_id, match_type) values('total_runs',${result.total_runs},${player.player_id},'${result.match_type}') returning player_stats_id`;

			const player_stat = await postdb.any(query);
			// console.log("add total runs to player_stats : ", query);
		});

		// total_wickets stats
		const total_wickets_results = await postdb.any(
			`select m.match_type, count(d.wicket_id) as total_wickets from delivery as d inner join match as m on d.match_id = m.match_id where d.bowler = ${player.player_id} and d.wicket_id>0 group by m.match_type`
		);
		total_wickets_results.forEach(async result => {
			let query = `insert into player_stats(player_stats_name, player_stats_value,player_id, match_type) values('total_wickets',${result.total_wickets},${player.player_id},'${result.match_type}') returning player_stats_id`;

			const player_stat = await postdb.any(query);
			// console.log("add total wicket to player_stats : ", query);
		});

		// // // 4s stats
		const fours_results = await postdb.any(
			`select m.match_type, count(d.batsman_run) as total_4s from delivery as d inner join match as m on d.match_id = m.match_id where d.striker = ${player.player_id} and d.batsman_run=4 group by m.match_type`
		);
		fours_results.forEach(async result => {
			let query = `insert into player_stats(player_stats_name, player_stats_value,player_id, match_type) values('4s',${result.total_4s},${player.player_id},'${result.match_type}') returning player_stats_id`;

			const player_stat = await postdb.any(query);
			// console.log("add total fours to player_stats : ", query);
		});

		// // // 6s stats
		const sixes_results = await postdb.any(
			`select m.match_type, count(d.batsman_run) as total_6s from delivery as d inner join match as m on d.match_id = m.match_id where d.striker = ${player.player_id} and d.batsman_run=6 group by m.match_type`
		);
		sixes_results.forEach(async result => {
			let query = `insert into player_stats(player_stats_name, player_stats_value,player_id, match_type) values('6s',${result.total_6s},${player.player_id},'${result.match_type}') returning player_stats_id`;

			const player_stat = await postdb.any(query);
			// console.log("add total sixes to player_stats : ", query);
		});
	});
}

async function stats_player() {
	const player_ids = await postdb.any("select player_id from player");
	player_ids.forEach(async player => {
		// //  total_50s stats
		let query;
// 		query = `with sum_batsman_runs as
// 			(select m.match_type, d.match_id, sum(d.batsman_run) as total_runs from delivery d inner join match m
// 			on m.match_id=d.match_id where d.striker = ${player.player_id} group by m.match_type, d.match_id)
// 		select match_type, count(total_runs) as _50s from sum_batsman_runs where total_runs >= 50 and
// 			total_runs < 100 group by match_type`;

// 		const total_50s_results = await postdb.any(query);
// 		total_50s_results.forEach(async total_50s => {
// 			// console.log("50s", total_50s);
// 			query = `insert into player_stats(player_id,player_stats_name,player_stats_value, match_type)
// 				values(${player.player_id},'50s', '${total_50s._50s}','${total_50s.match_type}')`;
// 			const total_50s_insert = await postdb.any(query);
// 			console.log("50s", query);
// 		});

// 		// //  total_100s stats

// 		query = `with sum_batsman_runs as
// 			(select m.match_type, d.match_id, sum(d.batsman_run) as total_runs from delivery d inner join match m
// 			on m.match_id=d.match_id where d.striker = ${player.player_id} group by m.match_type, d.match_id)
// 		select match_type, count(total_runs) as _100s from sum_batsman_runs where total_runs >= 100 and
// 			total_runs < 200 group by match_type`;

// 		const total_100s_results = await postdb.any(query);
// 		total_100s_results.forEach(async total_100s => {
// 			// console.log("100s", total_100s);
// 			query = `insert into player_stats(player_id,player_stats_name,player_stats_value, match_type)
// 				values(${player.player_id},'100s', '${total_100s._100s}','${total_100s.match_type}')`;
// 			const total_100s_insert = await postdb.any(query);
// 			console.log("total 100ss",query)
// 		});

// 		// //  total_200s stats

// 		query = `with sum_batsman_runs as
// 			(select m.match_type, d.match_id, sum(d.batsman_run) as total_runs from delivery d inner join match m
// 			on m.match_id=d.match_id where d.striker = ${player.player_id} group by m.match_type, d.match_id)
// 		select match_type, count(total_runs) as _200s from sum_batsman_runs where total_runs >= 200 and
// 			total_runs < 300 group by match_type`;

// 		const total_200s_results = await postdb.any(query);
// 		total_200s_results.forEach(async total_200s => {
// 			// console.log("200s", total_200s);
// 			query = `insert into player_stats(player_id,player_stats_name,player_stats_value, match_type)
// 				values(${player.player_id},'200s', '${total_200s._200s}','${total_200s.match_type}')`;
// 			const total_200s_insert = await postdb.any(query);
// 			// console.log("total 200s", query);
// 		});

// 		//  total_300s stats

// 		query = `with sum_batsman_runs as
// 			(select m.match_type, d.match_id, sum(d.batsman_run) as total_runs from delivery d inner join match m
// 			on m.match_id=d.match_id where d.striker = ${player.player_id} group by m.match_type, d.match_id)
// 		select match_type, count(total_runs) as _300s from sum_batsman_runs where total_runs >= 300 and
// 			total_runs < 400 group by match_type`;

// 		const total_300s_results = await postdb.any(query);
// 		total_300s_results.forEach(async total_300s => {
// 			// console.log("300s", total_300s);
// 			query = `insert into player_stats(player_id,player_stats_name,player_stats_value, match_type)
// 				values(${player.player_id},'300s', '${total_300s._300s}','${total_300s.match_type}')`;
// 			const total_300s_insert = await postdb.any(query);
// 			console.log("total 300s", query);
// 		});

// 		//  total_400s stats

// 		query = `with sum_batsman_runs as
// 			(select m.match_type, d.match_id, sum(d.batsman_run) as total_runs from delivery d inner join match m
// 			on m.match_id=d.match_id where d.striker = ${player.player_id} group by m.match_type, d.match_id)
// 		select match_type, count(total_runs) as _400s from sum_batsman_runs where total_runs >= 400 and
// 			total_runs < 500 group by match_type`;

// 		const total_400s_results = await postdb.any(query);
// 		total_400s_results.forEach(async total_400s => {
// 			// console.log("400s", total_400s);
// 			query = `insert into player_stats(player_id,player_stats_name,player_stats_value, match_type)
// 				values(${player.player_id},'400s', '${total_400s._400s}','${total_400s.match_type}')`;
// 			const total_400s_insert = await postdb.any(query);
// 			console.log("total 400s", query);
// 		});

// 		//  total_500s stats

// 		query = `with sum_batsman_runs as
// 			(select m.match_type, d.match_id, sum(d.batsman_run) as total_runs from delivery d inner join match m
// 			on m.match_id=d.match_id where d.striker = ${player.player_id} group by m.match_type, d.match_id)
// 		select match_type, count(total_runs) as _500s from sum_batsman_runs where total_runs >= 500 and
// 			total_runs < 600 group by match_type`;

// 		const total_500s_results = await postdb.any(query);
// 		total_500s_results.forEach(async total_500s => {
// 			// console.log("500s", total_500s);
// 			query = `insert into player_stats(player_id,player_stats_name,player_stats_value, match_type)
// 				values(${player.player_id},'500s', '${total_500s._500s}','${total_500s.match_type}')`;
// 			const total_500s_insert = await postdb.any(query);
// 			console.log("total 500s", query);
// 		});

// 		//  strike_rate

// 		query = `with runs as (select sum(d.batsman_run), m.match_type from delivery d inner join
// 		match m on d.match_id=m.match_id where d.striker=${player.player_id} group by m.match_type),
// 		balls as (select count(d.batsman_run), m.match_type from delivery d inner join
// 		match m on d.match_id = m.match_id where striker=${player.player_id} and extra_id=0 group by m.match_type)
// 		select round(cast(((cast (sum as float) / count )*100) as numeric),2) as strike_rate, runs.match_type
// 		from runs inner join balls on runs.match_type=balls.match_type`;

// 		const total_strike_rate_results = await postdb.any(query);
// 		total_strike_rate_results.forEach(async total_strike_rate => {
// 			// console.log("strike_rate", total_strike_rate);
// 			query = `insert into player_stats(player_id,player_stats_name,player_stats_value, match_type)
// 				values(${player.player_id},'strike_rate', '${total_strike_rate.strike_rate}','${total_strike_rate.match_type}')`;
// 			const total_strike_rate_insert = await postdb.any(query);
// 			console.log("total strike_rate", query);
// 		});

// 		//  batsman matches

// 		 query = `with batsman_matches_played as(select m.match_type,d.match_id from delivery d inner join match m
// 		 	on m.match_id=d.match_id where d.striker = ${player.player_id} group by m.match_type, d.match_id)
// 			 select match_type, count(match_id) as batsman_matches from batsman_matches_played group by match_type`;

// 		const total_matches = await postdb.any(query);
// 		total_matches.forEach(async total_match => {
// 		//  console.log("total matches", total_match);
// 			query = `insert into player_stats(player_id,player_stats_name,player_stats_value, match_type)
// 				values(${player.player_id},'batsman_matches_played', '${total_match.batsman_matches}','${total_match.match_type}')`;
// 			const total_match_insert = await postdb.any(query);
// 			console.log("total matches", query);
// 		 });


// 		//  batsman innings

// 		query = `with batsman_innings as(select m.match_type, d.match_id,d.inning from delivery d inner join match m
// 			on m.match_id=d.match_id where d.striker = ${player.player_id} group by m.match_type, d.match_id,d.inning)
// 		select match_type, count(inning) as batsman_innings from batsman_innings group by match_type`;

// 	   const total_innings = await postdb.any(query);
// 	   total_innings.forEach(async total_inning => {
// 	    // console.log("total innings", total_inning);
// 		   query = `insert into player_stats(player_id,player_stats_name,player_stats_value, match_type)
// 			   values(${player.player_id},'batsman_innings_played', '${total_inning.batsman_innings}','${total_inning.match_type}')`;
// 		   const total_inning_insert = await postdb.any(query);
// 		   console.log("total matches", query);
// 		})

		
// 		//  bowler matches

// 		query = `with bowler_matches_played as(select m.match_type,d.match_id from delivery d inner join match m
// 			on m.match_id=d.match_id where d.bowler = ${player.player_id} group by m.match_type, d.match_id)
// 		select match_type, count(match_id) as bowler_matches from bowler_matches_played group by match_type`;

// 	   const bowler_matches = await postdb.any(query);
// 	   bowler_matches.forEach(async total_match => {
// 	    console.log("total matches", total_match);
// 		   query = `insert into player_stats(player_id,player_stats_name,player_stats_value, match_type)
// 			   values(${player.player_id},'bowler_matches_played', '${total_match.bowler_matches}','${total_match.match_type}')`;
// 		   const total_match_insert = await postdb.any(query);
// 		   console.log("total matches", query);
// 		});
		
		
		
		
// 			//  BOWLER innings

// 		query = `with bowler_innings as(select m.match_type, d.match_id,d.inning from delivery d inner join match m
// 			on m.match_id=d.match_id where d.bowler = ${player.player_id} group by m.match_type, d.match_id,d.inning)
// 		select match_type, count(inning) as bowler_innings from bowler_innings group by match_type`;

// 	   const bowler_innings = await postdb.any(query);
// 	   bowler_innings.forEach(async total_inning => {
// 	    // console.log("total innings", total_inning);
// 		   query = `insert into player_stats(player_id,player_stats_name,player_stats_value, match_type)
// 			   values(${player.player_id},'bowler_innings_played', '${total_inning.bowler_innings}','${total_inning.match_type}')`;
// 		   const total_inning_insert = await postdb.any(query);
// 		   console.log("total innings", query);
// 		})



// 		//Highest score
// 		query = `with h as (select m.match_type,d.match_id,d.striker,sum(d.batsman_run) as highest_score from delivery d inner join match m on m.match_id=d.match_id
// 		where d.striker = ${player.player_id}  
// 		group by m.match_type,d.match_id,d.striker,d.batsman_run order by highest_score desc ) 
// 		select match_type, max(highest_score) as high_score from h group by match_type  `;

// 		const highest_score = await postdb.any(query);
// 		highest_score.forEach(async high_score => {
// 		//  console.log("highest_score are", high_score);
		
// 			query = `insert into player_stats(player_id,player_stats_name,player_stats_value, match_type)
// 		 		values(${player.player_id},'highest_score', '${high_score.high_score}','${high_score.match_type}')`;
// 			const total_match_insert = await postdb.any(query);
// 			console.log("highest score is: ", query);
// 		});

// 		//Balls faced 

// 		query = `select m.match_type,count(d.batsman_run) as balls_faced from delivery d inner join 
// 		match m on d.match_id = m.match_id where striker= ${player.player_id}  
// 		and extra_id=0 group by m.match_type  `;

// 		const total_balls_faced = await postdb.any(query);
// 		total_balls_faced.forEach(async balls_faced => {
// 		//  console.log("balls faced are", balls_faced);
		
// 			query = `insert into player_stats(player_id,player_stats_name,player_stats_value, match_type)
// 		 		values(${player.player_id},'balls_faced', '${balls_faced.balls_faced}','${balls_faced.match_type}')`;
// 			const total_balls_insert = await postdb.any(query);
// 			console.log("total balls faced is: ", query);
// 		});



// 		//Balls Bowled


// 		 query = `with balls_bowled as (select m.match_type,d.match_id,d.overs as balls_bowled from delivery d inner join match m on m.match_id = d.match_id
//  where d.bowler = ${player.player_id} group by d.overs,d.match_id,m.match_type)
//  select match_type,count( balls_bowled) as total_balls_bowled from balls_bowled group by match_type `;

// 		const total_balls_bowled = await postdb.any(query);
// 		 total_balls_bowled.forEach(async balls_bowled => {
// 		//   console.log("balls bowled are", balls_bowled);
		
// 			query = `insert into player_stats(player_id,player_stats_name,player_stats_value, match_type)
// 		  		values(${player.player_id},'balls_bowled', '${balls_bowled.total_balls_bowled}','${balls_bowled.match_type}')`;
// 			const total_balls_insert = await postdb.any(query);
// 			console.log("total balls bowled by a bowler is: ", query);
// 		});







		//NOt outs

		query = `with not_out as (select m.match_type,d.match_id,d.striker from (select match_id, inning,striker from delivery where match_id in (select distinct(match_id) from delivery where striker = ${player.player_id})
		and striker = ${player.player_id} and wicket_id > 0 union all
		select distinct(match_id), inning,striker from delivery where striker = ${player.player_id} order by match_id) d inner join match m on m.match_id=d.match_id
		group by m.match_type,d.match_id,d.striker having count(*) =  1),
		no_times_not_out as (select match_type,count(*) from not_out group by match_type) select * from no_times_not_out  `;

		const total_not_outs = await postdb.any(query);
		total_not_outs.forEach(async not_out => {
		//  console.log("not outs are", not_out);
		
			query = `insert into player_stats(player_id,player_stats_name,player_stats_value, match_type)
		 		values(${player.player_id},'not_out', '${not_out.count}','${not_out.match_type}')`;
			const total_not_out_insert = await postdb.any(query);
			console.log("total not outs are: ", query);
		});


		// //Runs conceded 

		// query = `with a as (select m.match_type,bowler,sum(batsman_run) as runs_given from delivery d inner join match m on m.match_id = d.match_id 
		// where bowler = ${player.player_id} group by d.match_id,bowler,m.match_type)
		// select match_type,bowler,sum(runs_given) as runs_conceded from a group by match_type,bowler   `;

		// const total_runs_conceded = await postdb.any(query);
		// total_runs_conceded.forEach(async runs_conceded => {
		// //  console.log("balls faced are", runs_conceded);
		
		// 	query = `insert into player_stats(player_id,player_stats_name,player_stats_value, match_type)
		//  		values(${player.player_id},'runs_conceded', '${runs_conceded.runs_conceded}','${runs_conceded.match_type}')`;
		// 	const total_not_out_insert = await postdb.any(query);
		// 	console.log("total balls faced is: ", query);
		// });

		// //4 wickets

		// query = `with a as (select distinct(d.match_id),d.wicket_id,d.bowler,m.match_type from delivery d inner join match m on m.match_id = d.match_id
		// where wicket_id > 0 and bowler = ${player.player_id} ),
		// b as (select match_type,match_id,count(wicket_id) as _4w from a group by match_id,match_type),
		// c as (select  match_type,match_id from b where _4w >= 4)
		// select match_type,count(*) from c group by match_type   `;

		// const total_4w = await postdb.any(query);
		// total_4w.forEach(async _4w => {
		// //  console.log("4 wickets are ", _4w);
		
		// 	query = `insert into player_stats(player_id,player_stats_name,player_stats_value, match_type)
		//  		values(${player.player_id},'4w', '${_4w.count}','${_4w.match_type}')`;
		// 	const total_4w_insert = await postdb.any(query);
		// 	console.log("total no of times 4w is: ", query);
		// });


		// // 5 wickets
		// query = `with a as (select distinct(d.match_id),d.wicket_id,d.bowler,m.match_type from delivery d inner join match m on m.match_id = d.match_id
		// where wicket_id > 0 and bowler = ${player.player_id} ),
		// b as (select match_type,match_id,count(wicket_id) as _5w from a group by match_id,match_type),
		// c as (select  match_type,match_id from b where _5w >= 5)
		// select match_type,count(*) from c group by match_type   `;

		// const total_5w = await postdb.any(query);
		// total_5w.forEach(async _5w => {
		// //  console.log("4 wickets are ", _4w);
		
		// 	query = `insert into player_stats(player_id,player_stats_name,player_stats_value, match_type)
		//  		values(${player.player_id},'5w', '${_5w.count}','${_5w.match_type}')`;
		// 	const total_5w_insert = await postdb.any(query);
		// 	console.log("total no of times 5w is: ", query);
		// });


		// //player economy rate


		// query = `with balls_bowled as (select m.match_type,d.match_id,d.overs as balls_bowled from delivery d inner join match m on m.match_id = d.match_id
		// 	where d.bowler = ${player.player_id} group by d.overs,d.match_id,m.match_type),
		// 	overs_table as (select match_type,cast (count( balls_bowled)/6 as Float) as total_overs_bowled from balls_bowled group by match_type),
		  
		//   rt as (select m.match_type,bowler,sum(batsman_run) as runs_given from delivery d inner join match m on m.match_id = d.match_id 
		// 		   where bowler = ${player.player_id} group by d.match_id,bowler,m.match_type),
		// 		  runs_table as (select match_type,sum(runs_given) as runs_conceded from rt group by match_type),
		  
		//   new_table as (select o.match_type,o.total_overs_bowled,r.runs_conceded from runs_table r inner join overs_table o on o.match_type = r.match_type 
		//   group by o.match_type,o.total_overs_bowled,r.runs_conceded) 
		  
		//   select match_type,round(cast((((cast(runs_conceded as float)))/(total_overs_bowled)) as numeric),2) as economy from new_table 
		//   group by match_type,total_overs_bowled,runs_conceded order by match_type   `;

		// const economy = await postdb.any(query);
		// economy.forEach(async ecom => {
		// //  console.log("economy rate is  ", ecom);
		
		// 	query = `insert into player_stats(player_id,player_stats_name,player_stats_value, match_type)
		//  		values(${player.player_id},'economy_rate', '${ecom.economy}','${ecom.match_type}')`;
		// 	const economy_rate_insert = await postdb.any(query);
		// 	console.log("teconomy rate of a bowler is : ", query);
		// });


	});
}


