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
        var data = new Array();

        for (match of dateOfMatch) {

            console.log("match:", match.match_id)
            let match_id = match.match_id
            console.log("after match:", match.match_id)
            const match_detail = await db.any(`with ss as (with s as (select m.match_id, m.innings_one_team, m.innings_two_team, 
                m.outcome as won_by,winner, m.match_type, m.player_of_the_match,t.team_name as team_one_name 
                from match as m 
                inner join team as t on t.team_id=m.innings_one_team where match_id=${match_id}),
                ps as( select team_id,team_name as team_two_name from team
                where team_id in(select innings_two_team from s))
                select match_id, innings_one_team, team_one_name, innings_two_team,team_two_name, 
                winner,won_by, match_type, player_of_the_match 
                from ps inner join s on s.innings_two_team=ps.team_id),
                pss as( select team_id, team_name as match_winner from team 
                where team_id in(select winner from ss))
                select match_id, innings_one_team, team_one_name, innings_two_team,team_two_name, 
                winner,match_winner,won_by, match_type, player_of_the_match 
                from pss inner join ss on ss.winner=pss.team_id`);

            console.log(match_detail);
            const match_total_of_score = await db.any(`with ss as (with s as (select inning as inning_one, 
                sum(total_runs) as total_score 
                from delivery where match_id=${match_id} group by inning),
                ps as(select inning, count(wicket_id) as total_wicket from delivery 
                where match_id=${match_id} and wicket_id>0 and
                inning in( select inning from s) group by inning)
                select inning_one, total_score, total_wicket from ps
                inner join s on s.inning_one=ps.inning),
                pss as(select inning, count(overs)/6 as total_over 
                from delivery where match_id=${match_id} and extra_id=0 and
                inning in(select inning from ss) group by inning)
                select inning,total_score, total_wicket, total_over from pss
                inner join ss on ss.inning_one=pss.inning`);

            console.log(match_total_of_score)


            // const teamone_striker_runs = await db.any(`select sum(d.batsman_run) as teamone_striker_run from delivery as d inner join match as m ON d.match_id =m.match_id where m.match_id =${match_id} AND d.inning =1;`)
            // console.log(teamone_striker_runs);
            // const teamone_extra_runs = await db.any(`select sum(e.extras_run) as teamone_extra_runs from extras as e inner join delivery as d ON e.extras_id =d.extra_id where d.match_id =${match_id} AND inning=1;`)
            // console.log(teamone_extra_runs);
            // const teamtwo_striker_runs = await db.any(`select sum(d.batsman_run) as teamtwo_striker_run from delivery as d inner join match as m ON d.match_id =m.match_id where m.match_id =${match_id} AND d.inning =2;`)
            // console.log(teamtwo_striker_runs);
            // const teamtwo_extra_runs = await db.any(`select sum(e.extras_run) as teamtwo_extra_runs from extras as e inner join delivery as d ON e.extras_id =d.extra_id where d.match_id =${match_id} AND inning=2;`)
            // console.log(teamtwo_extra_runs);
            // const teamone_wicket = await db.any(`select count(wicket_id) as teamone_wickets from delivery where match_id =${match_id} AND inning =1 AND wicket_id>0;`)
            // console.log(teamone_wicket);
            // const teamtwo_wicket = await db.any(`select count(wicket_id) as teamtwo_wickets from delivery where match_id =${match_id} AND inning =2 AND wicket_id>0;;`)
            // console.log(teamtwo_wicket);
            // const teamone_name = await db.any(`select t.team_name as teamone_name from team as t inner join match as m on m.team_one=t.team_id where match_id=${match_id};`)
            // console.log(teamone_name);
            // const teamtwo_name = await db.any(`select t.team_name as teamtwo_name from team as t inner join match as m on m.team_two=t.team_id where match_id=${match_id};`)
            // console.log(teamtwo_name);
            // const teamwinner_name = await db.any(`select t.team_name as winner_name from team as t inner join match as m on m.winner=t.team_id where match_id=${match_id};`)
            // console.log(teamwinner_name);
            // const teamOneScore = parseInt(teamone_striker_runs[0].teamone_striker_run) + parseInt(teamone_extra_runs[0].teamone_extra_runs);
            // console.log(teamOneScore);
            // const teamTwoScore = parseInt(teamtwo_striker_runs[0].teamtwo_striker_run) + parseInt(teamtwo_extra_runs[0].teamtwo_extra_runs);
            // console.log(teamTwoScore);
            // result.push({
            //     match_id: dateOfMatch[0].match_id,
            //     match_type: dateOfMatch[0].match_type,
            //     teamOne: teamone_name[0].teamone_name,
            //     teamtwo: teamtwo_name[0].teamtwo_name,
            //     team_winner: teamwinner_name[0].winner_name,
            //     teamOneScore: teamOneScore,
            //     teamTwoScore: teamTwoScore,
            //     teamone_wicket: teamone_wicket[0].teamone_wickets,
            //     teamtwo_wicket: teamtwo_wicket[0].teamtwo_wickets
            // });
            console.log("before pushing", match_detail)
            data.push({
                match_id: match_detail[0].match_id,
                match_type: match_detail[0].match_type,
                teamOne: match_detail[0].team_one_name,
                teamTwo: match_detail[0].team_two_name,
                team_winner: match_detail[0].match_winner,
                won_by: match_detail[0].won_by,
                player_of_the_match: match_detail[0].player_of_the_match,
                teamOneScore: match_total_of_score[0].total_score,
                teamTwoScore: match_total_of_score[1].total_score,
                teamone_wicket: match_total_of_score[0].total_wicket,
                teamtwo_wicket: match_total_of_score[1].total_wicket,
                team_one_total_over: match_total_of_score[0].total_over,
                team_two_total_over: match_total_of_score[1].total_over
            })
        }
        console.log("after pushing")
        console.log("***********", data);

        res.status(200).json({
            status: 200,
            data: data,
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
        // const match = await db.any(`select t.team_name as toss_winner, m.toss_decision, m.outcome, m.player_of_the_match from match as m inner join team as t on m.toss_winner=t.team_id where match_id=${id};`);
        // console.log(match);
        // const umpires = await db.any(`select u.umpire_name from umpire as u inner join match_umpire as mu on mu.umpire_id=u.umpire_id where match_id=${id};`);
        // console.log(umpires);
        // const venue = await db.any(`select v.venue_name, v.venue_city from venue as v inner join match_venue as mv on mv.venue_id=v.venue_id where match_id=${id};`);
        // console.log(venue);
        // const teams_ids = await db.any(`select distinct(t.team_id) from team as t inner join match_team_player as mtp on mtp.team_id=t.team_id where match_id=${id};`)
        // console.log(teams_ids);
        // const teamone_name = await db.any(`select team_name as teamone_name from team where team_id=${teams_ids[0].team_id};`)
        // console.log(teamone_name);
        // const teamone_players = await db.any(`select p.player_name as teamone_players from player as p inner join match_team_player as mtp on mtp.player_id=p.player_id where match_id=${id} and team_id=${teams_ids[0].team_id};`)
        // console.log(teamone_players);
        // const teamtwo_name = await db.any(`select team_name as teamtwo_name from team where team_id=${teams_ids[1].team_id};`)
        // console.log(teamtwo_name);
        // const teamtwo_players = await db.any(`select p.player_name as teamtwo_players from player as p inner join match_team_player as mtp on mtp.player_id=p.player_id where match_id=${id} and team_id=${teams_ids[1].team_id};`)
        // console.log(teamtwo_players);

        // const teamOne_top2_players = await db.any(`with s as (select striker as batsman_id , sum(batsman_run) as total_runs, count(batsman_run)as total_ball_faced from delivery where match_id=${id} and inning=1 and extra_id=0 group by striker order by total_runs desc limit 2), ps as(select player_name,player_id from player where player_id in (select batsman_id from s)) select player_name,total_runs, total_ball_faced from ps inner join s on s.batsman_id=ps.player_id order by total_runs desc;`)
        // console.log(teamOne_top2_players);
        // const teamTwo_top2_players = await db.any(`with s as (select striker as batsman_id , sum(batsman_run) as total_runs, count(batsman_run)as total_ball_faced from delivery where match_id=${id} and inning=2 and extra_id=0 group by striker order by total_runs desc limit 2), ps as(select player_name,player_id from player where player_id in (select batsman_id from s)) select player_name,total_runs, total_ball_faced from ps inner join s on s.batsman_id=ps.player_id order by total_runs desc;`)
        // console.log(teamTwo_top2_players);



        const team1_top2_bowlers = await db.any(`with sss as(with ss as(with s as (select bowler as bowler_id , count(wicket_id) as total_wicket from delivery 
        where match_id=${id} and inning=1 
        and wicket_id>0 group by bowler_id order by total_wicket desc limit 2),
        ps as(select bowler, count(bowler)/6 as overs from delivery 
        where extra_id=0 and match_id=${id} and inning=1 and bowler in (select bowler_id from s) group by bowler)
        select bowler_id,total_wicket, overs from ps 
        inner join s on s.bowler_id=ps.bowler order by total_wicket desc),
        pss as( select player_name,player_id from player 
        where player_id in (select bowler_id from ss))
        select bowler_id,player_name,total_wicket, overs from pss 
        inner join ss on ss.bowler_id=pss.player_id order by total_wicket desc),
        psss as(select bowler, sum(total_runs) as given_runs from delivery 
        where match_id=${id} and inning=1 and bowler in (select bowler_id from sss) group by bowler)
        select bowler_id,player_name,total_wicket, overs, given_runs from psss 
        inner join sss on sss.bowler_id=psss.bowler order by total_wicket desc;`)

        console.log(team1_top2_bowlers);

        const team2_top2_bowlers = await db.any(`with sss as(with ss as 
        (with s as (select bowler as bowler_id , count(wicket_id) as total_wicket from delivery 
        where match_id=${id} and inning=2 
        and wicket_id>0 group by bowler_id order by total_wicket desc limit 2),
         ps as(select bowler, count(bowler)/6 as overs from delivery 
        where extra_id=0 and match_id=${id} and inning=2 and bowler in (select bowler_id from s) group by bowler)
        select bowler_id,total_wicket, overs from ps 
         inner join s on s.bowler_id=ps.bowler order by total_wicket desc),
         pss as( select player_name,player_id from player 
        where player_id in (select bowler_id from ss))
         select bowler_id,player_name,total_wicket, overs from pss 
         inner join ss on ss.bowler_id=pss.player_id order by total_wicket desc),
         psss as(select bowler, sum(total_runs) as given_runs from delivery 
        where match_id=${id} and inning=2 and bowler in (select bowler_id from sss) group by bowler)
         select bowler_id,player_name,total_wicket, overs, given_runs from psss 
         inner join sss on sss.bowler_id=psss.bowler order by total_wicket desc;`)

        const team1_top2_batsman = await db.any(`with s as (select striker as batsman_id , sum(batsman_run) as total_runs, count(batsman_run)as total_ball 
         from delivery where match_id=${id} and inning=1 group by striker order by total_runs desc limit 2), 
         ps as(select player_name,player_id from player where player_id in (select batsman_id from s)) 
         select player_name,total_runs, total_ball from ps inner join s on s.batsman_id=ps.player_id order by total_runs desc;`)

        console.log(team1_top2_bowlers)

        const team2_top2_batsman = await db.any(`with s as (select striker as batsman_id , sum(batsman_run) as total_runs, count(batsman_run)as total_ball 
        from delivery where match_id=${id} and inning=2 group by striker order by total_runs desc limit 2), 
        ps as(select player_name,player_id from player where player_id in (select batsman_id from s)) 
        select player_name,total_runs, total_ball from ps inner join s on s.batsman_id=ps.player_id order by total_runs desc;`)

        console.log(team2_top2_batsman)

        const date = await db.any(`select match_date from match_date where match_id=${id}`);
        console.log(date)

        // tosswinner name, innings1,inning2,toss decision, competition, venue_name, venue_city

        const match_details = await db.any(`with s as (select m.venue_id, m.toss_winner,t.team_name, m.innings_one_team , m.innings_two_team, m.toss_decision, m.competition from match as m 
            inner join team as t on t.team_id=m.toss_winner where match_id=${id}),
            ps as(select venue_id, venue_name, venue_city from venue where venue_id in (select venue_id from s))
            select toss_winner, team_name, innings_one_team,innings_two_team,toss_decision, competition, venue_name, venue_city 
            from ps inner join s on s.venue_id=ps.venue_id`)

        console.log(match_details)

        //playing XII left


        // data={}
        // data:{
        //     match_details:{

        //     },
        //     playing_xi:{
        //         team_one:[

        //         ]

        //         ,
        //         team_two:{

        //         }
        //     }
        // }
        // data.match_details = result;
        // data.playing_xi.team_one = play1;
        // data.playing_xi.team_two = play2;

        // Top two player with their names and score
        // with s as (select striker as batsman_id , sum(batsman_run) as total_runs, count(batsman_run)as total_ball from delivery where match_id=1 and inning=1 group by striker order by total_runs desc limit 2), ps as(select player_name,player_id from player where player_id in (select batsman_id from s)) select player_name,total_runs from ps inner join s on s.batsman_id=ps.player_id order by total_runs desc;

        // Top two player with their names ant score and ball faced
        // with s as (select striker as batsman_id , sum(batsman_run) as total_runs, count(batsman_run)as total_ball_faced from delivery where match_id=1 and inning=1 and extra_id=0 group by striker order by total_runs desc limit 2), ps as(select player_name,player_id from player where player_id in (select batsman_id from s)) select player_name,total_runs, total_ball_faced from ps inner join s on s.batsman_id=ps.player_id order by total_runs desc;

        // const teamone_name = await db.any(`select v.venue_name, v.venue_city from venue as v inner join match_venue as mv on mv.venue_id=v.venue_id where match_id=${id};`);
        // console.log(teamone_name);

        const result = [{
            team2_top2_batsman
            // toss_winner: match[0].toss_winner,
            // toss_decision: match[0].toss_decision,
            // outcome: match[0].outcome,
            // player_of_the_match: match[0].player_of_the_match,
            // venue_name: venue[0].venue_name,
            // venue_city: venue[0].venue_city,
            // umpires,
            // teamone_name: teamone_name[0].teamone_name,
            // teamone_players: teamone_players,
            // teamtwo_name: teamtwo_name[0].teamtwo_name,
            // teamtwo_players: teamtwo_players,
            // teamOne_top2_players,
            // teamTwo_top2_players
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

router.get('/scorecard/:id', async (req, res, next) => {
    let id = req.params.id;
    console.log("scorecard", id);

    var data = new Array();


    try {
        const innings = await db.any(`select distinct(inning) from delivery where match_id=${id} order by inning`)

        for (inning of innings) {
            console.log(inning.inning);

            //Batsman_name, batsman_run, ball_faced, fours, sixes, striker_rate, wicket_type, bowler_name(out by whom),fielder_name, fielder_two_name

            const all_batsman = await db.any(`with b as(with aaaa as (with aaa as (with aa as (with a as(with ssss as (with sss as(with ss as (with s as 
            (select striker as striker1 , sum(batsman_run) as batsman_run from delivery where match_id=${id} and inning=${inning.inning} group by striker1),
           ps as(select striker , count(batsman_run) as ball_faced from delivery where match_id=${id} and inning=${inning.inning} and striker
           in(select striker1 from s)group by striker)
           select striker, batsman_run, ball_faced from ps inner join s on s.striker1=ps.striker),
           pss as (select striker as striker1 , count(batsman_run) as fours from delivery where match_id=${id} and inning=${inning.inning} and batsman_run = 4 and striker
           in (select striker from ss)group by striker1)
           select striker, batsman_run, ball_faced, fours from pss full outer join ss on ss.striker=pss.striker1),
           psss as (select striker as striker1 , count(batsman_run) as sixes from delivery where match_id=${id} and inning=${inning.inning} and batsman_run = 6 and striker
           in (select striker from sss)group by striker1)
           select striker, batsman_run, ball_faced, fours, sixes, round(cast(((cast (batsman_run  as float)/ball_faced)*100) as numeric),2) as striker_rate from psss 
           full outer join sss on sss.striker=psss.striker1),
           pssss as(select striker as striker1, wicket_id, bowler from delivery where match_id=${id} and inning=${inning.inning} and wicket_id>0 and striker
           in(select striker from ssss))
           select striker, batsman_run, ball_faced, fours, sixes, striker_rate, wicket_id,bowler from pssss
           full outer join ssss on ssss.striker=pssss.striker1),
           b as(select wicket_id, wicket_type, fielder_one, fielder_two from wickets where wicket_id
           in(select wicket_id from a))
           select striker, batsman_run, ball_faced, fours, sixes, striker_rate, wicket_type,bowler, fielder_one, fielder_two from b
           full outer join a on a.wicket_id=b.wicket_id),
           bb as( select player_name as striker_name,player_id from player where player_id
           in(select striker from aa))
           select striker_name, batsman_run, ball_faced, fours, sixes, striker_rate, wicket_type,bowler, fielder_one, fielder_two from bb
           full outer join aa on aa.striker=bb.player_id),
           bbb as (select player_name as fielder_name,player_id from player where player_id
           in(select fielder_one from aaa))
           select striker_name, batsman_run, ball_faced, fours, sixes, striker_rate, wicket_type,bowler, fielder_name, fielder_two from bbb
           full outer join aaa on aaa.fielder_one=bbb.player_id),
           bbbb as (select player_name as fielder_two_name,player_id from player where player_id
           in(select fielder_two from aaaa))
           select striker_name, batsman_run, ball_faced, fours, sixes, striker_rate, wicket_type,bowler, fielder_name, fielder_two_name from bbbb
           full outer join aaaa on aaaa.fielder_two=bbbb.player_id),
           d as(select player_name as bowler_name ,player_id from player where player_id
           in(select bowler from b))
           select striker_name, batsman_run, ball_faced, fours, sixes, striker_rate, wicket_type,bowler_name, fielder_name, fielder_two_name from d
           full outer join b on b.bowler=d.player_id
           `);

            //total extra in delivery
            const extra_total = await db.any(`select count(extra_id) as extra_count from delivery where match_id=${id} and inning=${inning.inning} and extra_id>0`)

            // different type of extras and thier count
            const all_extra = await db.any(`with s as (select extra_id, count(extra_id) as extra_count from delivery where match_id=${id} and inning=${inning.inning} and extra_id>0 group by extra_id),
           ps as( select extras_id as extra_idd, extras_type from extras where extras_id in(select extra_id from s))
           select extras_type, extra_count from ps inner join s on s.extra_id=ps.extra_idd`)

            // Total score, wicket and runs
            const total_score = await db.any(`with ss as(with s as (select match_id, sum(total_runs) as total_runs from delivery where match_id=${id} and inning=${inning.inning} group by match_id),
            ps as(select match_id as match_idd, count(wicket_id) as total_wicket from delivery where match_id=${id} and inning=${inning.inning} and match_id in 
            (select match_id from s) group by match_idd) 
            select match_id, total_runs, total_wicket from ps inner join s on s.match_id=ps.match_idd),
            pss as(select match_id as match_idd, count(overs) as total_overs from delivery where match_id=${id} and inning=${inning.inning} and extra_id=0 and match_id in 
            (select match_id from ss) group by match_idd) 
            select total_runs, total_wicket, total_overs from pss inner join ss on ss.match_id=pss.match_idd
            `)



            // bowler_name,total_over, given_runs, wicket_taken, maiden_over(not accurate), total_extras, ecom

            const all_bowler = await db.any(`with b as (with aa as (with a as (with ss as(with s as(select bowler, count(bowler)/6 as total_over, count(bowler) as total_balls 
           from delivery where match_id=${id} and inning=${inning.inning} and extra_id=0 group by bowler),
           ps as(select bowler as bowler1,sum(total_runs) as given_runs from delivery where match_id=${id} and inning=${inning.inning} and bowler 
           in(select bowler from s) group by bowler1)
           select bowler,total_over, total_balls ,given_runs, round(cast(((cast (given_runs  as float)/total_balls)*100) as numeric),2) as ecom 
           from ps inner join s on s.bowler=ps.bowler1),
           pss as(select bowler as bowler1, count(wicket_id) as wicket_taken from delivery where match_id=${id} and inning=${inning.inning} and wicket_id>0 and bowler in(
           select bowler from ss) group by bowler1)
           select bowler ,total_over, given_runs,ecom, wicket_taken from pss full outer join ss on ss.bowler=pss.bowler1),
           q as(select bowler as bowler1, count(total_runs)/6 as maiden_over from delivery where match_id=${id} and inning=${inning.inning} and total_runs=0 and bowler in(
           select bowler from a) group by bowler1)
           select bowler ,total_over, given_runs,ecom, wicket_taken, maiden_over from q full outer join a on a.bowler=q.bowler1),
           qq as( select bowler as bowler1, count(extra_id) as total_extras from delivery where match_id=${id} and inning=${inning.inning} and extra_id>0 and bowler in(
           select bowler from aa) group by bowler1)
           select bowler ,total_over, given_runs, wicket_taken, maiden_over, total_extras,ecom from qq full outer join aa on aa.bowler=qq.bowler1),
           d as(select player_name as bowler_name ,player_id from player where player_id in(select bowler from b))
           select bowler_name, total_over, given_runs, wicket_taken, maiden_over, total_extras,ecom from d
           full outer join b on b.bowler=d.player_id`)

            console.log(all_batsman)

            data.push({
                batsman: all_batsman,
                extra_total: extra_total,
                all_extra: all_extra,
                total_score: total_score,
                all_bowler: all_bowler
            })
        }

        res.status(200).json({
            status: 200,
            data: data,
            message: "Retrived scorecard of the match successfully!!"
        });
    }
    catch (err) {
        console.log(err)
        next(err)
    }
});

module.exports = router;