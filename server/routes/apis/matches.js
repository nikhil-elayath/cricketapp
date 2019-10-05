const express = require("express");
const router = express.Router();
const config = require("config");
const postgresURL = config.get("postgresURL");
const pg = require("pg-promise")();
// const db = pg(postgresURL);
const db = pg("postgres://postgres:root@localhost:5432/cricketalpha");


router.get('/recent/:date', async (req, res, next) => {
    try {
        let date = req.params.date;
        const dateOfMatch = await db.any(`select date.match_date, m.match_type, m.match_id from match_date as date inner join match as m on date.match_id=m.match_id where match_date='${date}' ORDER BY date.match_date;`);
        console.log("date of match", dateOfMatch);
        var result = new Array();

        for (match of dateOfMatch) {

            console.log("match:", match.match_id)
            let match_id = match.match_id
            const teamone_striker_runs = await db.any(`select sum(d.batsman_run) as teamone_striker_run from delivery as d inner join match as m ON d.match_id =m.match_id where m.match_id =${match_id} AND d.inning =1;`)
            console.log(teamone_striker_runs);
            const teamone_extra_runs = await db.any(`select sum(e.extras_run) as teamone_extra_runs from extras as e inner join delivery as d ON e.extras_id =d.extra_id where d.match_id =${match_id} AND inning=1;`)
            console.log(teamone_extra_runs);
            const teamtwo_striker_runs = await db.any(`select sum(d.batsman_run) as teamtwo_striker_run from delivery as d inner join match as m ON d.match_id =m.match_id where m.match_id =${match_id} AND d.inning =2;`)
            console.log(teamtwo_striker_runs);
            const teamtwo_extra_runs = await db.any(`select sum(e.extras_run) as teamtwo_extra_runs from extras as e inner join delivery as d ON e.extras_id =d.extra_id where d.match_id =${match_id} AND inning=2;`)
            console.log(teamtwo_extra_runs);
            const teamone_wicket = await db.any(`select count(wicket_id) as teamone_wickets from delivery where match_id =${match_id} AND inning =1 AND wicket_id>0;`)
            console.log(teamone_wicket);
            const teamtwo_wicket = await db.any(`select count(wicket_id) as teamtwo_wickets from delivery where match_id =${match_id} AND inning =2 AND wicket_id>0;;`)
            console.log(teamtwo_wicket);
            const teamone_name = await db.any(`select t.team_name as teamone_name from team as t inner join match as m on m.team_one=t.team_id where match_id=${match_id};`)
            console.log(teamone_name);
            const teamtwo_name = await db.any(`select t.team_name as teamtwo_name from team as t inner join match as m on m.team_two=t.team_id where match_id=${match_id};`)
            console.log(teamtwo_name);
            const teamwinner_name = await db.any(`select t.team_name as winner_name from team as t inner join match as m on m.winner=t.team_id where match_id=${match_id};`)
            console.log(teamwinner_name);
            const teamOneScore = parseInt(teamone_striker_runs[0].teamone_striker_run) + parseInt(teamone_extra_runs[0].teamone_extra_runs);
            console.log(teamOneScore);
            const teamTwoScore = parseInt(teamtwo_striker_runs[0].teamtwo_striker_run) + parseInt(teamtwo_extra_runs[0].teamtwo_extra_runs);
            console.log(teamTwoScore);
            result.push({
                match_id: dateOfMatch[0].match_id,
                match_type: dateOfMatch[0].match_type,
                teamOne: teamone_name[0].teamone_name,
                teamtwo: teamtwo_name[0].teamtwo_name,
                team_winner: teamwinner_name[0].winner_name,
                teamOneScore: teamOneScore,
                teamTwoScore: teamTwoScore,
                teamone_wicket: teamone_wicket[0].teamone_wickets,
                teamtwo_wicket: teamtwo_wicket[0].teamtwo_wickets
            });
        }

        res.status(200).json({
            status: 200,
            data: result,
            message: "Retrived matches list by date successfully!!"
        });
    }
    catch (err) {
        console.log(err)
        next(err)
    }
});

router.get('/bydate', async (req, res, next) => {
    try {
        const result = await db.any("SELECT match_date FROM match_date ORDER BY match_date;");
        res.status(200).json({
            status: 200,
            data: result,
            message: "Retrived all matches date ordered by date successfully!!"
        });
    }
    catch (err) {
        console.log(err)
        next(err)
    }
});

router.get('/summary/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        console.log("abc", id);
        const match = await db.any(`select t.team_name as toss_winner, m.toss_decision, m.outcome, m.player_of_the_match from match as m inner join team as t on m.toss_winner=t.team_id where match_id=${id};`);
        console.log(match);
        const umpires = await db.any(`select u.umpire_name from umpire as u inner join match_umpire as mu on mu.umpire_id=u.umpire_id where match_id=${id};`);
        console.log(umpires);
        const venue = await db.any(`select v.venue_name, v.venue_city from venue as v inner join match_venue as mv on mv.venue_id=v.venue_id where match_id=${id};`);
        console.log(venue);
        const teams_ids = await db.any(`select distinct(t.team_id) from team as t inner join match_team_player as mtp on mtp.team_id=t.team_id where match_id=${id};`)
        console.log(teams_ids);
        const teamone_name = await db.any(`select team_name as teamone_name from team where team_id=${teams_ids[0].team_id};`)
        console.log(teamone_name);
        const teamone_players = await db.any(`select p.player_name as teamone_players from player as p inner join match_team_player as mtp on mtp.player_id=p.player_id where match_id=${id} and team_id=${teams_ids[0].team_id};`)
        console.log(teamone_players);
        const teamtwo_players = await db.any(`select p.player_name as teamtwo_players from player as p inner join match_team_player as mtp on mtp.player_id=p.player_id where match_id=${id} and team_id=${teams_ids[1].team_id};`)
        console.log(teamtwo_players);
        const teamtwo_name = await db.any(`select team_name as teamtwo_name from team where team_id=${teams_ids[1].team_id};`)
        console.log(teamtwo_name);
        // select distinct(striker) from delivery where match_id=1 and inning=1

        const list_of_striker_inn1 = await db.any(`select distinct(d.striker) as striker_id, p.player_name from delivery as d inner join player as p on p.player_id=d.striker where match_id=${id} and inning=1;`)
        console.log(list_of_striker_inn1);

        var players_runs_inn1 = new Array();
        console.log(id)
        for (let striker of list_of_striker_inn1) {
            console.log(striker)
            let striker_id = striker.striker_id;
            let striker_name = striker.player_name;
            console.log(striker_id)
            const striker_runs = await db.any(`select sum(batsman_run) as batsmanscore from delivery where striker=${striker_id} and match_id=${id}`)
            console.log(striker_runs)
            console.log(striker_name)
            players_runs_inn1.push({ player_name: striker_name, batsmanscore: striker_runs[0].batsmanscore });
        }


        console.log(players_runs_inn1);

        // const teamone_name = await db.any(`select v.venue_name, v.venue_city from venue as v inner join match_venue as mv on mv.venue_id=v.venue_id where match_id=${id};`);
        // console.log(teamone_name);
        const result = [{
            toss_winner: match[0].toss_winner,
            toss_decision: match[0].toss_decision,
            outcome: match[0].outcome,
            player_of_the_match: match[0].player_of_the_match,
            venue_name: venue[0].venue_name,
            venue_city: venue[0].venue_city,
            umpires,
            teamone_name: teamone_name[0].teamone_name,
            teamone_players: teamone_players,
            teamtwo_name: teamtwo_name[0].teamtwo_name,
            teamtwo_players: teamtwo_players,
            players_runs_inn1
        }]
        console.log(result)

        res.status(200).json({
            status: 200,
            data: result,
            message: "Retrived the specific match detail successfully!!"
        });
    }
    catch (err) {
        console.log(err)
        next(err)
    }
});
module.exports = router;