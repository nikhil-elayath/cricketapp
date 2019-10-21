import React, { Component } from "react";
import "../css/MatchSecondaryNavbar.css";
import "../css/SecondaryNavbar.css";
import south_africa from "../images/SouthAfrica.jpeg";
import india from "../images/india.jpeg";
export default class MatchSecondaryNavbar extends Component {
  state = {
    summary: true,
    scorecard: false,
    stats: false
  }
  render() {
    return (
      <div>
        <div className="secNavParent">
          <div className="matchSecNavHead">
            <div className="match-score-details">
              <span id="match-result" style={{ fontSize: "14px" }}>
                Result:{" "}
                <b id="match-winner-name-runs">
                  {this.props.match.team_winner} {this.props.match.won_by}
                </b>
              </span>
              <div className="match-team-score">
                <div>
                  <div
                    style={{
                      backgroundImage: `url(data:image/jpeg;base64,${this.props.match.team_one_img}`
                    }}
                  ></div>
                  <div className="team-name">{this.props.match.teamOne}</div>
                  <div className="team-score">
                    {" "}
                    {this.props.match.teamOneScore}/
                    {this.props.match.teamone_wicket} (
                    {this.props.match.team_one_total_over}.{this.props.match.team_one_total_ball} overs)
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      backgroundImage: `url(data:image/jpeg;base64,${this.props.match.team_two_img}`
                    }}
                  ></div>
                  <div className="team-name">{this.props.match.teamTwo}</div>
                  <div className="team-score">
                    {" "}
                    {this.props.match.teamTwoScore}/
                    {this.props.match.teamtwo_wicket} (
                    {this.props.match.team_two_total_over}.{this.props.match.team_two_total_ball} overs)
                  </div>
                </div>
              </div>
            </div>
            <div className="match-pom">
              <span style={{ fontSize: "14px" }}>Player of the match</span>
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
          <div className="secNavLink">
            <ul>
              <span
                id="summary-click"
                className="secLink"
                onClick={() => {
                  this.setState({ summary: true, scorecard: false, stats: false })
                  this.props.changeDetailsType("summary");
                }}
              >
                <li id="match-summary" className={this.state.summary ? "options-selected-li" : "options-li"}>Summary</li>
              </span>
              <span
                className="secLink"
                onClick={() => {
                  this.setState({ summary: false, scorecard: true, stats: false })
                  this.props.changeDetailsType("scorecard");
                }}
              >
                <li id="match-scorecard" className={this.state.scorecard ? "options-selected-li" : "options-li"}>ScoreBoard</li>
              </span>
              <span
                className="secLink"
                onClick={() => {
                  this.setState({ summary: false, scorecard: false, stats: true })
                  this.props.changeDetailsType("stats");
                }}
              >
                <li id="match-stats" className={this.state.stats ? "options-selected-li" : "options-li"}>Statistics</li>
              </span>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
