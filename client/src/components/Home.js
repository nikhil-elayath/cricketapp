import React, { Component } from "react";
import { connect } from "react-redux";
import { getNews, getRecentMatches } from "../actions/Home";
import "./css/Home.css";
import news_img from "../components/images/vk.jpeg";
import { getRanks } from "../actions/Teams";
import MostWins from "./MostWins";
import { Link } from "react-router-dom";
import Navbar from "./common/Navbar";
import decode from "jwt-decode";
let decoded_token;
export class Home extends Component {
  componentWillMount() {
    console.log("home mounted");
    this.props.getNews();
    this.props.getRecentMatches();
    if (localStorage.getItem("token")) {
      decoded_token = decode(localStorage.getItem("token"));
      console.log("decoded token", decoded_token);
    } else {
      console.log("no token found");
    }
  }

  render() {
    console.log(decoded_token.isAdmin);
    console.log("find layout", this.props);
    return (
      <div>
        <Navbar
          gender={this.props.gender}
          changeGender={getGender => this.props.changeGender(getGender)}
        />
        <div className="div-container">
          <div className="div-section">
            <div className="div-news-section">
              {this.props.home.map(news => (
                <Link
                  className="link-news"
                  to={{
                    pathname: "/newsbyid/" + news.news_id
                  }}
                >
                  <div className="div-news">
                    <div
                      className="div-news-images"
                      style={{
                        backgroundImage: `url(${news_img})`
                      }}
                    />
                    <div className="div-news-details">
                      <p id="p-news" className="p-news">
                        <b>{news.news_title}</b>
                      </p>
                      <p id="home-news-date" className="home-news-date">
                        {news.news_date}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div id="div-second-section">
              <div id="home-recent-matches">
                <div id="home-recent-matches-title">
                  Recent Matches
                  {/* <h1 id="rm">Recent matches </h1> */}
                </div>

                {this.props.recent_matches.map(recent_matches => (
                  <Link
                    id="link-recent-matches"
                    to={{
                      pathname: "/match/details/" + recent_matches.match_id
                    }}
                  >
                    <div
                      id="home-match"
                      // onClick={{
                      //   pathname: "/newsbyid/" + recent_matches.match_id,
                      // }}
                    >
                      <div id="team-score">
                        <p id="home-recent-matches-teamOne">
                          {recent_matches.teamOne}
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
                      <div id="home-recent-match-date">
                        {recent_matches.match_date}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <MostWins />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  home: state.HomeReducer.home,
  ranks: state.TeamsReducer.ranks,
  recent_matches: state.HomeReducer.recent_matches
});
export default connect(
  mapStateToProps,
  {
    getNews,
    getRanks,
    getRecentMatches
  }
)(Home);
