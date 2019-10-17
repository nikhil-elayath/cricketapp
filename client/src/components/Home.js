import React, { Component } from "react";
import { connect } from "react-redux";
import { getNews, getRecentMatches } from "../actions/Home";
import "./css/Home.css";
import news_img from "../components/images/vk.jpeg";
import logo from "./images/indialogo.jpg";
import { getRanks } from "../actions/Teams";
// import { getRanks } from "../actions/Teams";
import MostWins from "./MostWins";
import { Link } from "react-router-dom";
import { stat } from "fs";

export class Home extends Component {
  componentWillMount() {
    console.log("home mounted");
    this.props.getNews();
    this.props.getRecentMatches();

    console.log(this.props);
    // this.props.getTeams();
    let ranking = {
      match_type: "Test",
    };
    this.props.getRanks(ranking);

    //calling action of recent matches
    // this.props.getNews();
  }
  onClickTest = e => {
    e.preventDefault();
    let ranking = {
      match_type: "Test",
    };
    this.props.getRanks(ranking);
  };

  onClickT20 = e => {
    e.preventDefault();
    let ranking = {
      match_type: "T20",
    };
    this.props.getRanks(ranking);
  };

  onClickOdi = e => {
    e.preventDefault();
    let ranking = {
      match_type: "ODI",
    };
    this.props.getRanks(ranking);
  };
  render() {
    return (
      <div className="div-container">
        <div className="div-section">
          <div className="div-news-section">
            {this.props.home.map(news => (
              <Link
                className="link-news"
                to={{
                  pathname: "/newsbyid/" + news.news_id,
                }}
              >
                <div className="div-news">
                  <div
                    className="div-news-images"
                    style={{
                      backgroundImage: `url(${news_img})`,
                    }}
                  ></div>
                  <div className="div-news-details">
                    <p className="p-news">
                      <b>{news.news_title}</b>
                    </p>
                    <p className="home-news-date">{news.news_date} </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="div-second-section">
            <div id="home-recent-matches">
              <h1>Recent matches</h1>

              {this.props.recent_matches.map(recent_matches => (
                <div id="home-recent-matches">
                  <div id="team-score">
                    <p id="home-recent-matches-teamOne">
                      {recent_matches.teamOne}{" "}
                    </p>
                    <p id="home-recent-matches-team-one-score">
                      {recent_matches.teamOneScore}/
                      {recent_matches.teamone_wicket}
                    </p>
                    {/* <p id="home-recent-matches-team-one-wickets">
                      {recent_matches.teamone_wicket}{" "}
                    </p> */}
                  </div>
                  <div id="team-score">
                    <p id="home-recent-matches-teamTwo">
                      {recent_matches.teamTwo}{" "}
                    </p>
                    <p id="home-recent-matches-team-two-score">
                      {recent_matches.teamTwoScore}/{" "}
                      {recent_matches.teamtwo_wicket}{" "}
                    </p>
                    {/* <p id="home-recent-matches-team-two-wickets"></p> */}
                  </div>
                  <div id="home-recent-matches-result">
                    <p id="home-recent-matches-team-winner">
                      {recent_matches.team_winner} {recent_matches.won_by}{" "}
                    </p>
                    {/* <p id="home-recent-matches-won-by"></p> */}
                  </div>
                </div>
              ))}
            </div>
            <MostWins />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  home: state.HomeReducer.home,
  ranks: state.TeamsReducer.ranks,
  recent_matches: state.HomeReducer.recent_matches,
});
export default connect(
  mapStateToProps,
  {
    getNews,
    getRanks,
    getRecentMatches,
  }
)(Home);
