const express = require("express");
const router = express.Router();
const pg = require("pg-promise")();
const db = pg("postgres://postgres:root@localhost/cricketalpha");

router.get("/news", async (req, res) => {
  const news_result = await db.any("Select * from news");

  // converting the format of date while retrieving
  for (news of news_result) {
    var date = new Date(news.news_date);

    news.news_date = date.toLocaleDateString("en-IN", {
      weekday: "short",
      month: "long",
      day: "2-digit",
      year: "numeric",
    });
  }
  // console.log(news_result);
  res.status(200).json({
    status: 200,
    data: news_result,
    message: "Retrieved all news",
  });
  // console.log(news_result);
});

// fetching recent matches
router.get("/recentMatches/:gender", async (req, res) => {
  console.log("from api home recent matches");
  let gender = req.params.gender;

  // FETCHING THE DATES OF RECENT MATCHES
  const recent_match_date = await db.any(
    `with s as(select distinct (match_date) , match_id from match_date  group by match_date, match_id  order by match_date desc),
    ps as(select match_id as match_idd, gender from match where gender='${gender}' and match_id 
    in(select match_id from s))
    select match_id,match_date from ps inner join s on s.match_id=ps.match_idd order by match_date desc limit 3`
  );

  // CREATING A NEW ARRAY CALLED DATA WHICH WILL BE SENT AS THE DATA IN RESPONSE PART
  var data = new Array();
  // THIS LOGIC IS REQUIRED BECAUSE THE VARIABLE WITHIN THE FOR LOOP WONT BE ACCESIBILE OUTSIDE FOR LOOP
  // SO A NEW ARRAY IS CREATED AND VALUE IS PUSHED INTO THE ARRAY IN EACH ITERATIONS AND THAT DATA ARRAY
  // IS PASSED AS DATA IN THE RESPONSE
  for (match of recent_match_date) {
    // CREATING MATCH ID AS A VARIABLE WHICH WILL STORE THE MATCH_ID THAT COMES FROM THE ABOVE QUERY
    let match_id = match.match_id;
    let date = match.match_date;
    const recent_matches = await db.any(`with m as (with ss as (with s as (select m.match_id, m.innings_two_team, 
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
    // console.log("recent matches", recent_matches);

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
    // console.log(match_total_of_score);
    // var date = new Date(recent_match_date[0]["match_date"]);

    let con_date = date.toLocaleDateString("en-IN", {
      weekday: "short",
      month: "long",
      day: "2-digit",
      year: "numeric",
    });

    // PUSHING THE REQUIRED DATA INTO DATA ARRAY DEFINED ABOVE
    data.push({
      match_id: recent_matches[0].match_id,
      match_type: recent_matches[0].match_type,
      match_values: recent_matches[0].match_values,
      teamOne: recent_matches[0].team_one_name,
      teamTwo: recent_matches[0].team_two_name,
      team_winner: recent_matches[0].match_winner,
      team_one_img: recent_matches[0].team_one_img,
      team_two_img: recent_matches[0].team_two_img,
      won_by: recent_matches[0].won_by,
      player_of_the_match: recent_matches[0].player_of_the_match,
      teamOneScore: match_total_of_score[0].total_score,
      teamTwoScore: match_total_of_score[1].total_score,
      teamone_wicket: match_total_of_score[0].total_wicket,
      teamtwo_wicket: match_total_of_score[1].total_wicket,
      team_one_total_over: match_total_of_score[0].total_over,
      team_two_total_over: match_total_of_score[1].total_over,
      team_one_total_ball: match_total_of_score[0].total_ball,
      team_two_total_ball: match_total_of_score[1].total_ball,
      match_date: con_date
    });
  }

  res.status(200).json({
    status: 200,
    // PASSING THE NEW DATA ARRAY WHICH CONSISTS OF THE DATA
    data: data,
    message: "Retrieved recent matches",
  });
});
module.exports = router;
