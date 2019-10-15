import React, { Component } from "react";
import { connect } from "react-redux";
import "./css/TeamInfo.css";
import "./css/TeamLandingPage.css";
import logo from "./images/dhoni.jpg";
// import Navbar from "../components/common/Navbar";
import { getMatch, getTeamBatsmen, getTeamBowlers } from "../actions/Teams";
import "./css/SecondaryNavbar.css";
// import Loader from "react-loader-spinner";

export class TeamInfo extends Component {
  state = {
    testClick: true,
    odiClick: false,
    t20Click: false
  };
  componentDidMount() {
    console.log("team name is ", this.props.teams.team_name);
    this.props.getMatch(this.props.teams.team_id);
    let type = {
      match_type: "Test",
      player_country: this.props.teams.team_name
    };
    this.props.getTeamBatsmen(type);
    this.props.getTeamBowlers(type);
    console.log("batsman is", this.props.getTeamBatsmen(type));
  }

  onClickTest = e => {
    e.preventDefault();
    this.setState({ testClick: true, odiClick: false, t20Click: false });
    let type = {
      match_type: "Test",
      player_country: this.props.teams.team_name
    };
    this.props.getTeamBatsmen(type);
    this.props.getTeamBowlers(type);
  };

  onClickT20 = e => {
    e.preventDefault();
    this.setState({ testClick: false, odiClick: false, t20Click: true });
    let type = {
      match_type: "T20",
      player_country: this.props.teams.team_name
    };
    this.props.getTeamBatsmen(type);
    this.props.getTeamBowlers(type);
  };

  onClickOdi = e => {
    e.preventDefault();
    this.setState({ testClick: false, odiClick: true, t20Click: false });
    let type = {
      match_type: "ODI",
      player_country: this.props.teams.team_name
    };
    this.props.getTeamBatsmen(type);
    this.props.getTeamBowlers(type);
  };

  render() {
    console.log("teaminfo props is ", this.props.teams.team_id);
    return (
      <div>
        <div className="container-team-details">
          <p className="p-matches">Recent Matches</p>
          <div className="centered">
            <div className="cards-new">
              <div
                style={{ borderRadius: "8px 0px 0px 8px" }}
                className={this.state.testClick ? "cardtest" : "cardodi"}
                onClick={this.onClickTest}
              >
                <p className="p-card">Test</p>
              </div>
              <div
                className={this.state.odiClick ? "cardtest" : "cardodi"}
                onClick={this.onClickOdi}
              >
                <p className="p-card">ODI</p>
              </div>
              <div
                style={{ borderRadius: "0px 8px 8px 0px" }}
                className={this.state.t20Click ? "cardtest" : "cardt20"}
                onClick={this.onClickT20}
              >
                <p className="p-card">T20</p>
              </div>
            </div>
          </div>
          <div className="matches-section">
            <div className="all-recent-matches-box-team">
              {this.props.matches.length === 0 ? (
                <div className="teaminfoloader"></div>
              ) : (
                this.props.matches.map(matches => (
                  <div className="inside-recent-matches-box-team">
                    <span className="tournamnet-name">{matches.matchType}</span>
                    <div className="Team-data">
                      <div className="TeamOne-name">{matches.teamOne}</div>
                      <div className="TeamOne-score">
                        {matches.teamOneScore}/{matches.teamOneWicket}
                      </div>
                    </div>
                    <div className="Team-data">
                      <div className="TeamTwo-name">{matches.teamTwo}</div>
                      <div className="TeamTwo-score">
                        {matches.teamTwoScore}/{matches.teamTwoWicket}
                      </div>
                    </div>
                    <span className="winner-name">
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
                    <p className="p-top-team-details">Top Run Scorers</p>
                    <div>
                      {this.props.batsmen.map(batsmen => (
                        <div>
                          <div className="list">
                            <img src={logo} className="img-card" />
                            <div>
                              <p className="p-team-details-name">
                                {batsmen.player_name}
                              </p>
                              <p className="p-player-style">Right-hand Bat</p>
                            </div>
                            <h2 className="h2-team-details-position">
                              {batsmen.player_stats_value}
                            </h2>
                          </div>
                          <hr className="hr-team-card" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="grid-class-team-details">
                  <div className="grid-class-topteam-details">
                    <p className="p-top-team-details">Top Wicket Takers</p>
                    <div>
                      {this.props.bowlers.map(bowlers => (
                        <div>
                          <div className="list">
                            <img src={logo} className="img-card" />
                            <div>
                              <p className="p-team-details-name">
                                {bowlers.player_name}
                              </p>
                              <p className="p-player-style">Right-arm Fast</p>
                            </div>
                            <h2 className="h2-team-details-position">
                              {bowlers.player_stats_value}
                            </h2>
                          </div>
                          <hr className="hr-team-card" />
                        </div>
                      ))}
                    </div>
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
  bowlers: state.TeamsReducer.bowlers
  // isLoading: state.LoadingReducer.isLoading
});

export default connect(
  mapStateTostate,
  { getMatch, getTeamBatsmen, getTeamBowlers }
)(TeamInfo);
