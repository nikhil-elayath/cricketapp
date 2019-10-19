import React, { Component } from "react";
import "../css/MatchSecondaryNavbar.css";
import "../css/SecondaryNavbar.css"
import { Link } from "react-router-dom"
import dhoni from "../images/dhoni.jpg";
// import Navbar from "./Navbar";
// import './css/SecondaryNavbar.css'
import south_africa from "../images/SouthAfrica.jpeg";
import india from "../images/india.jpeg";
import default_user_img from "../images/defaultuserimg.jpg";
// import { request } from "https";

export default class MatchSecondaryNavbar extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div className="secNavParent">
          <div className="matchSecNavHead">
            <div className="match-score-details">
              <span style={{ fontSize: "14px" }}>
                Result:{" "}
                <b>{this.props.match.team_winner} {this.props.match.won_by}</b>
              </span>
              <div className="match-team-score">
                <div>
                  <div
                    style={{
                      backgroundImage: `url(${india})`
                    }}
                  ></div>
                  <div className="team-name">{this.props.match.teamOne}</div>
                  <div className="team-score">
                    {" "}
                    {this.props.match.teamOneScore}/
                  {this.props.match.teamone_wicket} (
                  {this.props.match.team_one_total_over} overs)
                </div>
                </div>
                <div>
                  <div
                    style={{
                      backgroundImage: `url(${south_africa})`
                    }}
                  ></div>
                  <div className="team-name">{this.props.match.teamTwo}</div>
                  <div className="team-score">
                    {" "}
                    {this.props.match.teamTwoScore}/
                  {this.props.match.teamtwo_wicket} (
                  {this.props.match.team_two_total_over} overs)
                </div>
                </div>
              </div>
            </div>
            <div className="match-pom">
              <span style={{ fontSize: "14px" }}>
                Player of the match
              </span>
              <div className="pom-name-photo">
                <div className="pom-img">
                  <i className="fas fa-user"></i>
                </div>
                <div className="pom-name">
                  <div>{this.props.match.player_of_the_match}</div>
                  <div>{this.props.match.team_winner}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="secNavLinks">
            <ul>
              <span
                className="secLink"
                onClick={() => {
                  this.props.changeDetailsType("summary");
                }}
              >
                <li>Summary</li>
              </span>
              <span
                className="secLink"
                onClick={() => {
                  this.props.changeDetailsType("scorecard");
                }}
              >
                <li>ScoreBoard</li>
              </span>
              <span
                className="secLink"
                onClick={() => {
                  this.props.changeDetailsType("stats");
                }}
              >
                <li>Statistics</li>
              </span>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
