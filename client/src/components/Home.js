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

export class Home extends Component {
  componentWillMount() {
    console.log("home mounted");
    this.props.getNews();
    console.log(this.props);
    // this.props.getTeams();
    let ranking = {
      match_type: "Test",
    };
    this.props.getRanks(ranking);
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
                  // state:{
                }}
              >
                <div className="div-news">
                  <div
                    className="div-news-images"
                    style={{
                      backgroundImage: `url(${news_img})`,
                    }}
                  >
                    {/* <img className="news_img" src={news_img} /> */}
                  </div>
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
          <div id="home-recent-matches" />
          {/* ------------------------------------- */}
          <div className="div-second-section">
            <MostWins />
          </div>
          {/* -------------------------------------- */}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  home: state.HomeReducer.home,
  ranks: state.TeamsReducer.ranks,
});
export default connect(
  mapStateToProps,
  {
    getNews,
    getRanks,
    getRecentMatches,
  }
)(Home);
