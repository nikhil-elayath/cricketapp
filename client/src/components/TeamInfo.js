import React, { Component } from "react";
import { connect } from "react-redux";
import "./css/TeamInfo.css";
import "./css/TeamLandingPage.css";
import logo from "./images/dhoni.jpg";
// import Navbar from "../components/common/Navbar";
import { getMatch, getTeamBatsmen, getTeamBowlers } from "../actions/Teams";
// import "./css/SecondaryNavbar.css";

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export class TeamInfo extends Component {
  state = {
    testClick: false,
    odiClick: false,
    t20Click: true
  };
  componentDidMount() {
    console.log("team name is ", this.props.teams);
    let type = {
      match_type: "T20",
      player_country: this.props.teams.team_name
    };
    this.props.getTeamBatsmen(this.props.gender, type);
    this.props.getTeamBowlers(this.props.gender, type);
    console.log(
      "batsman is",
      this.props.getTeamBatsmen(this.props.gender, type)
    );
    this.props.getMatch(this.props.teams.team_id, this.props.gender, type);
  }

  onClickTest = () => {
    this.setState({ testClick: true, odiClick: false, t20Click: false });
    let type = {
      match_type: "Test",
      player_country: this.props.teams.team_name
    };
    this.props.getTeamBatsmen(this.props.gender, type);
    this.props.getTeamBowlers(this.props.gender, type);
    this.props.getMatch(this.props.teams.team_id, this.props.gender, type);
  };

  onClickT20 = () => {
    this.setState({ testClick: false, odiClick: false, t20Click: true });
    let type = {
      match_type: "T20",
      player_country: this.props.teams.team_name
    };
    this.props.getTeamBatsmen(this.props.gender, type);
    this.props.getTeamBowlers(this.props.gender, type);
    this.props.getMatch(this.props.teams.team_id, this.props.gender, type);
  };

  onClickOdi = () => {
    this.setState({ testClick: false, odiClick: true, t20Click: false });
    let type = {
      match_type: "ODI",
      player_country: this.props.teams.team_name
    };
    this.props.getTeamBatsmen(this.props.gender, type);
    this.props.getTeamBowlers(this.props.gender, type);
    this.props.getMatch(this.props.teams.team_id, this.props.gender, type);
  };

  render() {
    console.log("teaminfo props is ", this.props.teams.team_id);
    return (
      <div>
        <div className="container-team-details">
          <p className="p-matches" id="id-p-matches">
            Recent Matches
          </p>
          <div className="centered">
            <div className="cards-new">
              <div
                id="click-t20"
                style={{ borderRadius: "8px 0px 0px 8px" }}
                className={this.state.t20Click ? "cardtest" : "cardt20"}
                onClick={this.onClickT20}
              >
                <p className="p-card" id="id-p-t20">
                  T20
                </p>
              </div>
              <div
                id="click-odi"
                className={this.state.odiClick ? "cardtest" : "cardodi"}
                onClick={this.onClickOdi}
              >
                <p className="p-card" id="id-p-odi">
                  ODI
                </p>
              </div>
              <div
                id="click-test"
                style={{ borderRadius: "0px 8px 8px 0px" }}
                className={this.state.testClick ? "cardtest" : "cardodi"}
                onClick={this.onClickTest}
              >
                <p className="p-card" id="id-p-test">
                  Test
                </p>
              </div>
            </div>
          </div>
          <div className="matches-section">
            <div className="all-recent-matches-box-team">
              {this.props.isLoading ? (
                <div style={{ margin: "0px 0px 0px 80px" }}>
                  <Loader
                    type="TailSpin"
                    color="#2980b9"
                    height="100"
                    width="100"
                  />
                  <span
                    style={{
                      fontSize: "12px"
                    }}
                  >
                    Loading Recent Matches. . .
                  </span>
                </div>
              ) : (
                this.props.matches.map(matches => (
                  <div className="inside-recent-matches-box-team">
                    <span className="tournamnet-name" id="id-match-type">
                      {matches.matchType}
                    </span>
                    <div className="Team-data">
                      <div className="TeamOne-name" id="id-team-one">
                        {matches.teamOne}
                      </div>
                      <div className="TeamOne-score">
                        {matches.teamOneScore}/{matches.teamOneWicket}
                      </div>
                    </div>
                    <div className="Team-data">
                      <div className="TeamTwo-name" id="id-team-two">
                        {matches.teamTwo}
                      </div>
                      <div className="TeamTwo-score">
                        {matches.teamTwoScore}/{matches.teamTwoWicket}
                      </div>
                    </div>
                    <span className="winner-name" id="id-winner">
                      {matches.teamWinner} WON
                    </span>
                  </div>
                ))
                // (this.props.matches.length == 0)
              )}
            </div>
            {/* )} */}
          </div>
          {/* ------------------------------------------------------------------- */}
          <div className="top-section">
            <div className="grid-container-team">
              <div className="grid-container-team-details">
                <div className="grid-class-team-details">
                  <div className="grid-class-topteam-details">
                    <p className="p-top-team-details" id="id-p-top-runs">
                      Top Run Scorers
                    </p>
                    {/* <div> */}
                    {this.props.batsmen.map(batsmen => (
                      // <div>
                      <div className="list-info">
                        {/* <img src={logo} className="img-card" /> */}
                        <img
                          id="pImage"
                          className="playerImage"
                          src={`data:image/jpeg;base64,${batsmen.player_image}`}
                        ></img>
                        <div>
                          <p
                            className="p-team-details-name"
                            id="#id-batsman-name"
                          >
                            {batsmen.player_name}
                          </p>
                          <p className="p-player-style">Right-hand Bat</p>
                        </div>
                        <h2
                          className="h2-team-details-position"
                          id="#id-batsman-score"
                        >
                          {batsmen.player_stats_value}
                        </h2>
                      </div>
                      //   <hr className="hr-team-card" />
                      // </div>
                    ))}
                    {/* </div> */}
                  </div>
                </div>
                <div className="grid-class-team-details">
                  <div className="grid-class-topteam-details">
                    <p className="p-top-team-details" id="id-p-top-wickets">
                      Top Wicket Takers
                    </p>
                    {/* <div> */}
                    {this.props.bowlers.map(bowlers => (
                      // <div>
                      <div className="list-info">
                        {/* <img src={logo} className="img-card" /> */}
                        <img
                          id="pImage"
                          className="playerImage"
                          src={`data:image/jpeg;base64,${bowlers.player_image}`}
                        ></img>
                        <div>
                          <p
                            className="p-team-details-name"
                            id="#id-bowler-name"
                          >
                            {bowlers.player_name}
                          </p>
                          <p className="p-player-style">Right-arm Fast</p>
                        </div>
                        <h2
                          className="h2-team-details-position"
                          id="#id-bowler-score"
                        >
                          {bowlers.player_stats_value}
                        </h2>
                      </div>
                      // <hr className="hr-team-card" />
                      // </div>
                    ))}
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateTostate = state => ({
  matches: state.TeamsReducer.matches,
  batsmen: state.TeamsReducer.batsmen,
  bowlers: state.TeamsReducer.bowlers,
  isLoading: state.LoadingReducer.isLoading
});

export default connect(
  mapStateTostate,
  { getMatch, getTeamBatsmen, getTeamBowlers }
)(TeamInfo);
