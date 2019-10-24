const express = require("express");
const router = express.Router();
const config = require("config");
const postgresURL = config.get("postgresURL");
const pg = require("pg-promise")();
// const db = pg(postgresURL);
const db = pg("postgres://postgres:root@localhost:5432/cricketalpha");


// [yatin] The ondate api takes date and gender from the url params
// and sends back the results of the provided/specified date
router.get("/ondate/:date/:gender", async (req, res, next) => {
  try {
    let date = req.params.date;
    let gender = req.params.gender;

    //[yatin] This call to the database will fetch all the matche id 
    const dateOfMatch = await db.any(`select date.match_date, m.match_type, m.match_id from match_date as date 
        inner join match as m on date.match_id=m.match_id where match_date='${date}' and gender='${gender}' 
        ORDER BY date.match_date;`);

    //[yatin] Declaring an array to push all the result of query
    var data = new Array();

    // [yatin] selecting the match_id in a loop and getting the details
    for (match of dateOfMatch) {
      let match_id = match.match_id;

      //[yatin] This call to the database will fetch match_id, 
      // match_values(overs of the match if ODI/T20 or days of the match if test)
      // team_one_name, team_one_img,team_two_name, team_two_img, match_winner
      // won_by, match_type (eg. ODI, test, etc), player_of_the_match
      const match_detail = await db.any(`with m as (with ss as (with s as (select m.match_id, m.innings_two_team, 
        m.outcome as won_by,winner, m.match_type, m.player_of_the_match,t.team_name as team_one_name, t.team_image as team_one_img 
        from match as m 
        inner join team as t on t.team_id=m.innings_one_team where match_id=${match_id}),
        ps as( select team_id,team_name as team_two_name, team_image as team_two_img from team
        where team_id in(select innings_two_team from s))
        select match_id, team_one_name, team_one_img,team_two_name, team_two_img, 
        winner,won_by, match_type, player_of_the_match 
        from ps inner join s on s.innings_two_team=ps.team_id),
        pss as( select team_id, team_name as match_winner from team 
        where team_id in(select winner from ss))
        select match_id, team_one_name, team_one_img ,team_two_name, team_two_img,
        match_winner,won_by, match_type, player_of_the_match 
        from pss inner join ss on ss.winner=pss.team_id),
        k as(select match_type as match_typee, match_values from match_type 
        where match_type in(select match_type from m))
        select match_id, match_values,team_one_name, team_one_img,team_two_name,team_two_img,
        match_winner,won_by, match_type, player_of_the_match 
        from k inner join m on m.match_type=k.match_typee`);

      // //[yatin] This call to the database will fetch inning(eg 1,2 or more (if test match), 
      // total(score, wicket, over, ball) of each inning
      const match_total_of_score = await db.any(`with ss as (with s as (select inning as inning_one,
        sum(total_runs) as total_score 
              from delivery where match_id=${match_id} group by inning),
              ps as(select inning, count(wicket_id) as total_wicket from delivery 
              where match_id=${match_id} and wicket_id>0 and
              inning in( select inning from s) group by inning)
              select inning_one, total_score, total_wicket from ps
              full outer join s on s.inning_one=ps.inning), 
              pss as(select inning, count(overs)/6 as total_over, mod(count(overs),6) as total_ball
              from delivery where match_id=${match_id} and extra_id=0 and
              inning in(select inning from ss) group by inning)
              select inning,total_score, total_wicket, total_over, total_ball from pss
              inner join ss on ss.inning_one=pss.inning`);

      // [yatin] Pushing all the result to an array (name of array is "data") declared above
      data.push({
        match_id: match_detail[0].match_id,
        match_type: match_detail[0].match_type,
        match_values: match_detail[0].match_values,
        teamOne: match_detail[0].team_one_name,
        teamTwo: match_detail[0].team_two_name,
        team_winner: match_detail[0].match_winner,
        team_one_img: match_detail[0].team_one_img,
        team_two_img: match_detail[0].team_two_img,
        won_by: match_detail[0].won_by,
        player_of_the_match: match_detail[0].player_of_the_match,
        teamOneScore: match_total_of_score[0].total_score,
        teamTwoScore: match_total_of_score[1].total_score,
        teamone_wicket: match_total_of_score[0].total_wicket,
        teamtwo_wicket: match_total_of_score[1].total_wicket,
        team_one_total_over: match_total_of_score[0].total_over,
        team_two_total_over: match_total_of_score[1].total_over,
        team_one_total_ball: match_total_of_score[0].total_ball,
        team_two_total_ball: match_total_of_score[1].total_ball
      });
    }

    // [yatin] response to the api with success status 200, data and a message
    // data variable contains [{match_values(overs of the match if ODI/T20 or days of the match if test)
    // team_one_name, team_one_img,team_two_name, team_two_img, match_winner
    // won_by, match_type (eg. ODI, test, etc), player_of_the_match
    // inning(eg 1,2 or more (if test match),total(score, wicket, over, ball)}]
    res.status(200).json({
      status: 200,
      data: data,
      message: "Retrived matches list by date successfully!!"
    });
    console.log("ondate success")
  } catch (err) {

    // [yatin] response to the api with failed status 400 and a message
    res.status(400).json({
      status: 400,
      message: "Unexpected error"
    });
    console.log("recent date failed")
    next(err);
  }
});

// [yatin] The recent api takes gender from the url params
// and sends back the list of dates as a response
router.get("/recent/:gender", async (req, res, next) => {
  let gender = req.params.gender;
  try {

    // [yatin] This call to the database will fetch latest 6 matches dates from database
    const result = await db.any(`with s as(select distinct (match_date) , match_id from match_date  group by match_date, match_id  order by match_date desc),
    ps as(select match_id as match_idd, gender from match where gender='${gender}' and match_id 
    in(select match_id from s))
    select match_id,match_date from ps inner join s on s.match_id=ps.match_idd order by match_date desc limit 6`);


    // [yatin] response to the api with success status 200, data and a message
    // data variable contains [list of dates]
    res.status(200).json({
      status: 200,
      data: result,
      message: "Retrived 6 recent matches date ordered by date successfully!!"
    });
    console.log("recent date success")
  } catch (err) {

    // [yatin] response to the api with failed status 400 and a message
    res.status(400).json({
      status: 400,
      message: "Unexpected error"
    });
    console.log("recent date failed")
    next(err);
  }
});

// [yatin] The summary api fetches the match_id from the url params
// and sends back the details of the specific/provided match
router.get("/summary/:id", async (req, res, next) => {
  try {
    let id = req.params.id;

    //[yatin] This call to the database will fetch team one top bowlers
    // bowler_id, player_name, total_wicket, overs, given_runs
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
        inner join sss on sss.bowler_id=psss.bowler order by total_wicket desc;`);


    //[yatin] This call to the database will fetch team two bowlers
    // bowler_id, player_name, total_wicket, overs, given_runs
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
         inner join sss on sss.bowler_id=psss.bowler order by total_wicket desc;`);

    //[yatin] This call to the database will fetch team one batsman
    // player_name, total_runs, total_ball
    const team1_top2_batsman = await db.any(`with s as (select striker as batsman_id , sum(batsman_run) as total_runs, count(batsman_run)as total_ball 
         from delivery where match_id=${id} and inning=1 group by striker order by total_runs desc limit 2), 
         ps as(select player_name,player_id from player where player_id in (select batsman_id from s)) 
         select player_name,total_runs, total_ball from ps inner join s on s.batsman_id=ps.player_id order by total_runs desc;`);

    //[yatin] This call to the database will fetch team two batsman
    // player_name, total_runs, total_ball
    const team2_top2_batsman = await db.any(`with s as (select striker as batsman_id , sum(batsman_run) as total_runs, count(batsman_run)as total_ball 
        from delivery where match_id=${id} and inning=2 group by striker order by total_runs desc limit 2), 
        ps as(select player_name,player_id from player where player_id in (select batsman_id from s)) 
        select player_name,total_runs, total_ball from ps inner join s on s.batsman_id=ps.player_id order by total_runs desc;`);

    //[yatin] This call to the database will fetch the dates of the match
    const dbdates = await db.any(
      `select match_date from match_date where match_id=${id}`
    );

    //[yatin] Declaring an array for date as there can be multiple dates when
    // the match is a test match
    var dates = new Array();

    // [yatin] selecting the indivisual date in a loop and converting it to 
    // a "mmm dd yyyy" format  
    for (onedate of dbdates) {
      var date = new Date(onedate.match_date);
      let format_date = (onedate.match_date = date.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      }));

      // [yatin] pushing the converted list of date to the declared array of date
      dates.push({ match_date: format_date });
    }

    //[yatin] This call to the database will fetch the toss_winner name, team_name
    // innings_one_team, innings_two_team, toss decision, competition, venue_name, venue_city
    const match_details = await db.any(`with ss as (with s as (select m.venue_id, m.toss_winner,t.team_name, m.innings_one_team , m.innings_two_team, m.toss_decision, m.competition from match as m 
            inner join team as t on t.team_id=m.toss_winner where match_id=${id}),
            ps as(select venue_id, venue_name, venue_city from venue where venue_id in (select venue_id from s))
            select toss_winner, team_name, innings_one_team,innings_two_team,toss_decision, competition, venue_name, venue_city 
            from ps inner join s on s.venue_id=ps.venue_id),
            pss as( select team_id, team_name as toss_winner_team from team where team_id in (select toss_winner from ss))
            select toss_winner_team, team_name, innings_one_team,innings_two_team,toss_decision, competition, venue_name, venue_city
            from pss inner join ss on ss.toss_winner=pss.team_id`);

    //[yatin] This call to the database will fetch teamone_name
    const teamone_name = await db.any(
      `select team_name as teamone_name from team where team_id=${match_details[0].innings_one_team}`
    );

    //[yatin] This call to the database will fetch the names of players of first team.
    const team_one_XI = await db.any(`select p.player_name as teamone_players from player as p inner join match_team_player as mtp on 
        mtp.player_id=p.player_id where match_id=${id} and team_id=${match_details[0].innings_one_team}`);

    //[yatin] This call to the database will fetch teamtwo name
    const teamtwo_name = await db.any(
      `select team_name as teamtwo_name from team where team_id=${match_details[0].innings_two_team}`
    );

    //[yatin] This call to the ddatabaseb will fetch the names of players of two team.
    const team_two_XI = await db.any(`select p.player_name as teamtwo_players from player as p inner join match_team_player as mtp on 
        mtp.player_id=p.player_id where match_id=${id} and team_id=${match_details[0].innings_two_team}`);

    //[yatin] This call to the database will fetch the list umpires of the match
    const umpires = await db.any(
      `select u.umpire_name from umpire as u inner join match_umpire as mu on mu.umpire_id=u.umpire_id where match_id=${id};`
    );

    // [yatin] storing all the above queries result
    const result = [
      {
        team1_bowler: team1_top2_bowlers,
        team2_bowler: team2_top2_bowlers,
        team1_batsman: team1_top2_batsman,
        team2_batsman: team2_top2_batsman,
        match_details: match_details,
        team_one_XI: team_one_XI,
        teamone_name: teamone_name,
        team_two_XI: team_two_XI,
        teamtwo_name: teamtwo_name,
        umpires: umpires,
        date: dates
      }
    ];


    // [yatin] response to the api with success status 200, result and a message
    // result variable contains [{team1_bowler,team2_bowler: team2_top2_bowlers,
    // team1_batsman, team2_batsman, match_details, team_one_XI, teamone_name,
    // team_two_XI, teamtwo_name, umpires, date  }]
    res.status(200).json({
      status: 200,
      data: result,
      message: "Retrived the specific match detail successfully!!"
    });
    console.log("summary success")
  } catch (err) {

    // [yatin] response to the api with failed status 400 and a message
    res.status(400).json({
      status: 400,
      message: "Unexpected error"
    });
    console.log("summary failed")
    next(err);
  }
});

// [yatin] The scorecard api fetches the match_id from the url params
// and sends back the details of the specific/provided match
router.get("/scorecard/:id", async (req, res, next) => {
  let id = req.params.id;

  var data = new Array();
  try {

    //[yatin] This call to the database will fetch the list of innings 
    const innings = await db.any(`select distinct(inning) from delivery where match_id=${id} order by inning`);

    // [yatin] selecting indivisual inning in a loop and fetaching all the scorecard details
    for (inning of innings) {

      //[yatin] This call to the database will fetch the batsman_name(striker_name),
      // batsman_run, ball_faced, fours, sixes, striker_rate, wicket_type, 
      // bowler_name(out by whom),fielder_name, fielder_two_name
      const all_batsman = await db.any(`with b as(with aaaa as (with aaa as (with aa as (with a as(with ssss as (select striker,(sum(cast(batsman_run as int))) as batsman_run,
            (count(overs)) as ball_faced, round(cast((sum(cast(batsman_run as float))/(count(overs))*100) as numeric),2) as striker_rate ,
            sum(cast(batsman_run=4 as int)) as fours, sum(cast(batsman_run=6 as int))as sixes
            from delivery d inner join player p on d.striker=p.player_id where match_id=${id} and inning=${inning.inning}  
            group by striker),pssss as(select striker as striker1, wicket_id, bowler from delivery where match_id=${id} and inning=${inning.inning} and wicket_id>0 and striker
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


      //[yatin] This call to the database will fetch the count of extra of the inning
      const extra_total = await db.any(
        `select count(extra_id) as extra_count from delivery where match_id=${id} and inning=${inning.inning} and extra_id>0`
      );

      //[yatin] This call to the database will fetch the different type of extras and thier count of the inning
      const all_extra = await db.any(`with s as (select extra_id, count(extra_id) as extra_count from delivery where match_id=${id} and inning=${inning.inning} and extra_id>0 group by extra_id),
      ps as( select extras_id as extra_idd, extras_type from extras where extras_id in(select extra_id from s))
      select extras_type, extra_count from ps inner join s on s.extra_id=ps.extra_idd`);

      //[yatin] This call to the database will fetch the total_runs, total_wicket, total_overs of the inning
      const total_score = await db.any(`with ss as(with s as (select match_id, sum(total_runs) as total_runs from delivery 
      where match_id=${id} and inning=${inning.inning} group by match_id),
      ps as(select match_id as match_idd, count(wicket_id) as total_wicket from delivery where match_id=${id} and 
      inning=${inning.inning} and wicket_id>0 and match_id in 
      (select match_id from s) group by match_idd) 
      select match_id, total_runs, total_wicket from ps full outer join s on s.match_id=ps.match_idd),
      pss as(select match_id as match_idd, count(overs)/6 as total_overs from delivery where match_id=${id} and inning=${inning.inning} and extra_id=0 and match_id in 
      (select match_id from ss) group by match_idd) 
      select total_runs, total_wicket, total_overs from pss full outer join ss on ss.match_id=pss.match_idd; `);

      //[yatin] This call to the database will fetch the bowler_name,total_over,given_runs,wicket_taken,
      // total_extras, ecom of the inning
      const all_bowler = await db.any(`with s as (select bowler as bowler_id,(sum(cast(wicket_id>0 as int))) as wicket_taken,
            (sum(cast(extra_id>0 as int))) as total_extras,
            (count(overs)/6) as total_over,sum(total_runs) as given_runs,
            round(cast(((sum(cast(total_runs as float)))/(count(overs)/6)) as numeric),2) as ecom
            from delivery d
            full outer join player p on
            d.striker=p.player_id where
            match_id=${id} and inning=${inning.inning}
            group by bowler_id),
            ps as (select player_id,player_name as bowler_name from player where player_id in (select bowler_id from s))
            select bowler_name,total_over,given_runs,wicket_taken,total_extras,total_extras, ecom from ps full outer join s on s.bowler_id=ps.player_id;`);

      // [yatin] storing all the above queries result to data variale    
      data.push({
        inning: inning,
        batsman: all_batsman,
        extra_total: extra_total,
        all_extra: all_extra,
        total_score: total_score,
        all_bowler: all_bowler
      });
    }

    // [yatin] response to the api with success status 200, result and a message
    // result variable contains [{inning,batsman,extra_total,total_score,all_bowler }]
    res.status(200).json({
      status: 200,
      data: data,
      message: "Retrived scorecard of the match successfully!!"
    });
    console.log("scoreboard success")

  } catch (err) {

    // [yatin] response to the api with failed status 400 and a message
    res.status(400).json({
      status: 400,
      message: "Unexpected error"
    });
    console.log("scoreboard failed")
    next(err);
  }
});

module.exports = router;
