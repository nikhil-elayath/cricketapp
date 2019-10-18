import React, { Component } from "react";
import { connect } from "react-redux";
import "./css/TeamStats.css";
import { getHighestTotals, getLowestTotals } from "../actions/Teams";

export class TeamStats extends Component {
  state = {
    testClick: false,
    odiClick: false,
    t20Click: true
  };
  componentDidMount() {
    console.log("team id for team stats is ", this.props.teams.team_id);
    let type = {
      match_type: "T20",
      gender: "male"
    };
    console.log("type is", type);
    console.log("gender for team stats is", this.props.gender);
    this.props.getHighestTotals(this.props.teams.team_id, type);
  }

  onClickTest = e => {
    e.preventDefault();
    this.setState({
      testClick: true,
      odiClick: false,
      t20Click: false
      // type: "Test"
    });
    let type = {
      match_type: "Test",
      gender: "male"
    };
    this.props.getHighestTotals(this.props.teams.team_id, type);
  };

  onClickOdi = e => {
    e.preventDefault();
    this.setState({
      testClick: false,
      odiClick: true,
      t20Click: false
      // type: "ODI"
    });
    let type = {
      match_type: "ODI",
      gender: "male"
    };
    this.props.getHighestTotals(this.props.teams.team_id, type);
  };

  onClickT20 = e => {
    e.preventDefault();
    this.setState({
      testClick: false,
      odiClick: false,
      t20Click: true
      // type: "T20"
    });
    let type = {
      match_type: "T20",
      gender: "male"
    };
    this.props.getHighestTotals(this.props.teams.team_id, type);
  };

  onClickHighestTotals = e => {
    e.preventDefault();
    this.props.getHighestTotals(this.props.teams.team_id, this.state.type);
  };

  // onClickLowestTotals = e => {
  //   e.preventDefault();
  //   this.setState({ testClick: true, odiClick: false, t20Click: false });
  //   let type = {
  //     match_type: "ODI"
  //   };
  //   if (testClick == true) {
  //     type = "ODI";
  //   }
  //   this.props.getLowestTotals(this.props.teams.team_id, type);
  // };

  render() {
    console.log("teamstats props is ", this.props.teams.team_id);
    console.log("gender for team stats render is", this.props);
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
                    className={this.state.t20Click ? "cardtest" : "cardodi"}
                    onClick={this.onClickT20}
                  >
                    <p className="p-card">T20</p>
                  </div>
                  <div
                    className={this.state.odiClick ? "cardtest" : "cardodi"}
                    onClick={this.onClickOdi}
                  >
                    <p className="p-card">ODI</p>
                  </div>
                  <div
                    style={{ borderRadius: "0px 8px 8px 0px" }}
                    className={this.state.testClick ? "cardtest" : "cardt20"}
                    onClick={this.onClickTest}
                  >
                    <p className="p-card">Test</p>
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
            <div className="grid-table">
              <div className="grid-container">
                <p className="grid-item-title">Score</p>
                <p className="grid-item-title">Overs</p>
                <p className="grid-item-title">RR</p>
                <p className="grid-item-title">Inns</p>
                <p className="grid-item-title">MatchDate</p>
              </div>
              {this.props.teamstats.map(teamstats => (
                <div className="grid-container">
                  <p className="grid-item-detail">{teamstats.total_run}</p>
                  <p className="grid-item-detail">{teamstats.overs}</p>
                  <p className="grid-item-detail">NA</p>
                  <p className="grid-item-detail">{teamstats.inning}</p>
                  <p className="grid-item-detail">{teamstats.match_date}</p>
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
  teamstats: state.TeamsReducer.teamstats
});

export default connect(
  mapStateTostate,
  { getHighestTotals, getLowestTotals }
)(TeamStats);
