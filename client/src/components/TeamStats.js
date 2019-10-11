import React, { Component } from "react";
import { connect } from "react-redux";
import "./css/TeamStats.css";
// import logo from "./images/dhoni.jpg";s
// import { getMatch, getTeamBatsmen, getTeamBowlers } from "../actions/Teams";
import "./css/SecondaryNavbar.css";
import { getHighestTotals, getLowestTotals } from "../actions/Teams";

export class TeamStats extends Component {
  state = {
    testClick: true,
    odiClick: false,
    t20Click: false
  };
  componentDidMount() {
    console.log("team stats is ", this.props.teams.team_id);
    let type = {
      match_type: "Test"
    };
    this.props.getHighestTotals(this.props.teams.team_id, type);
  }

  onClickTest = e => {
    e.preventDefault();
    this.setState({ testClick: true, odiClick: false, t20Click: false });
    let type = {
      match_type: "Test"
    };
    this.props.getHighestTotals(this.props.teams.team_id, type);
  };

  onClickOdi = e => {
    e.preventDefault();
    this.setState({ testClick: false, odiClick: true, t20Click: false });
    let type = {
      match_type: "ODI"
    };
    this.props.getHighestTotals(this.props.teams.team_id, type);
  };

  onClickT20 = e => {
    e.preventDefault();
    this.setState({ testClick: false, odiClick: false, t20Click: true });
    let type = {
      match_type: "T20"
    };
    this.props.getHighestTotals(this.props.teams.team_id, type);
  };

  render() {
    console.log("teamstats props is ", this.props.teams.team_id);
    return (
      <div>
        <div className="container-team-details">
          {/* ---------------------------------------------------------------------------- */}
          <div className="types-section">
            <div className="match-type-section">
              <p className="p-match-type">Select Match Type</p>
              <div className="centered-team">
                <div className="cards-team-stats">
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
            </div>
            <div className="category-section">
              <p className="p-category">Select Category</p>
              <div className="centered-team">
                <div className="cards-team-category">
                  <div
                    style={{ borderRadius: "8px 0px 0px 8px" }}
                    className="cardtest"
                  >
                    <p className="p-card">Highest Totals</p>
                  </div>
                  <div className="cardodi">
                    <p className="p-card">Lowest Totals</p>
                  </div>
                  <div className="cardodi">
                    <p className="p-card">Largest Victories</p>
                  </div>
                  <div
                    className="cardt20"
                    style={{ borderRadius: "0px 8px 8px 0px" }}
                  >
                    <p className="p-card">Smallest Victories</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ------------------------------------------------------------------------- */}
          <div className="stats-display">
            <p className="p-category-name">Highest Totals</p>
            <div className="stats-table">
              <div className="list">
                <p className="p-row">Score</p>
                <p className="p-row">Overs</p>
                <p className="p-row">RR</p>
                <p className="p-row">Inns</p>
                <p className="p-row">MatchDate</p>
                <p className="p-row">Scorecard</p>
              </div>
              {this.props.highesttotals.map(highesttotals => (
                <div>
                  <div className="list">
                    <p className="p-row-details">{highesttotals.tr}</p>
                    <p className="p-row-details">50</p>
                    <p className="p-row-details">20.15</p>
                    <p className="p-row-details">1</p>
                    <p className="p-row-details">{highesttotals.match_date}</p>
                    <p className="p-row-details">#scoreboard</p>
                  </div>
                  <hr className="hr-row" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateTostate = state => ({
  highesttotals: state.TeamsReducer.highesttotals,
  lowesttotals: state.TeamsReducer.lowesttotals
});

export default connect(
  mapStateTostate,
  { getHighestTotals, getLowestTotals }
)(TeamStats);
