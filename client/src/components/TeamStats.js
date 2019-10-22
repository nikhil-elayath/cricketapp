import React, { Component } from "react";
import { connect } from "react-redux";
import "./css/TeamStats.css";
import { getTeamStats } from "../actions/Teams";
// import Loader from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export class TeamStats extends Component {
  state = {
    testClick: false,
    odiClick: false,
    t20Click: true,
    highestClick: true,
    lowestClick: false,
    match_type: "T20",
    stats_type: "highest_score"
  };

  componentDidMount() {
    console.log("team stats team id is ", this.props.teams.team_id);
    console.log("team stats gender is", this.props.gender);
    console.log("team stats match type is", this.state.match_type);
    console.log("team stats stats type is", this.state.stats_type);
    let type = {
      match_type: this.state.match_type,
      stats_type: this.state.stats_type
    };
    this.props.getTeamStats(this.props.teams.team_id, this.props.gender, type);
  }

  // onClickTest = e => {
  //   e.preventDefault();
  //   this.setState({
  //     testClick: true,
  //     odiClick: false,
  //     t20Click: false,
  //     type: "Test"
  //   });
  // if ((this.state.t20Click = true) && (this.state.lowestClick = false)) {
  // let type = {
  //   match_type: "Test",
  //   gender: "male"
  // };
  // this.onClickHighestTotals;
  // }
  // if ((this.state.odiClick = true)) {
  // let type = {
  //   match_type: "Test"
  // };
  // this.onClickLowestTotals;
  // }
  // this.props.getHighestTotals(this.props.teams.team_id, type);
  // this.props.getLowestTotals(this.props.teams.team_id, this.state.type);
  // this.onClickHighestTotals(e);
  // };

  // onClickOdi = e => {
  //   e.preventDefault();
  //   this.setState({
  //     testClick: false,
  //     odiClick: true,
  //     t20Click: false,
  //     type: "ODI"
  //   });
  // this.props.getHighestTotals(this.props.teams.team_id, type);
  // this.onClickHighestTotals(e);
  // this.props.getHighestTotals(this.props.teams.team_id, this.state.type);
  // this.props.getLowestTotals(this.props.teams.team_id, this.state.type);
  // };

  // onClickT20 = e => {
  //   e.preventDefault();
  //   this.setState({
  //     testClick: false,
  //     odiClick: false,
  //     t20Click: true,
  //     type: "T20"
  //   });
  // this.props.getHighestTotals(this.props.teams.team_id, this.state.type);
  // };

  // onClickHighestTotals = e => {
  //   e.preventDefault();
  //   this.setState({
  //     highestClick: true,
  //     lowestClick: false
  //   });
  //   this.props.getHighestTotals(this.props.teams.team_id, this.state.type);
  // };

  // onClickLowestTotals = e => {
  //   e.preventDefault();
  //   this.setState({
  //     highestClick: false,
  //     lowestClick: true
  //   });
  //   this.props.getLowestTotals(this.props.teams.team_id, this.state.type);
  // };

  onClickTeamStats = (match_type, stats_type) => {
    this.setState({
      match_type: match_type,
      stats_type: stats_type
    });
    let type = {
      match_type: match_type,
      stats_type: stats_type
    };
    this.props.getTeamStats(this.props.teams.team_id, this.props.gender, type);
  };

  render() {
    // console.log("gender for team stats render is", this.props);
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
                    className={
                      this.state.match_type == "T20" ? "cardtest" : "cardt20"
                    }
                    onClick={() =>
                      this.onClickTeamStats("T20", this.state.stats_type)
                    }
                  >
                    <p className="p-card">T20</p>
                  </div>
                  <div
                    className={
                      this.state.match_type == "ODI" ? "cardtest" : "cardodi"
                    }
                    onClick={() =>
                      this.onClickTeamStats("ODI", this.state.stats_type)
                    }
                  >
                    <p className="p-card">ODI</p>
                  </div>
                  <div
                    style={{ borderRadius: "0px 8px 8px 0px" }}
                    className={
                      this.state.match_type == "Test" ? "cardtest" : "cardodi"
                    }
                    onClick={() =>
                      this.onClickTeamStats("Test", this.state.stats_type)
                    }
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
                    className={
                      this.state.stats_type == "highest_score"
                        ? "cardtest"
                        : "cardodi"
                    }
                    onClick={() =>
                      this.onClickTeamStats(
                        this.state.match_type,
                        "highest_score"
                      )
                    }
                  >
                    <p className="p-card">Highest Totals</p>
                  </div>
                  <div
                    className={
                      this.state.stats_type == "lowest_score"
                        ? "cardtest"
                        : "cardodi"
                    }
                    onClick={() =>
                      this.onClickTeamStats(
                        this.state.match_type,
                        "lowest_score"
                      )
                    }
                  >
                    <p className="p-card">Lowest Totals</p>
                  </div>
                  <div
                    className="cardodi"
                    className={
                      this.state.stats_type == "largest_victory"
                        ? "cardtest"
                        : "cardodi"
                    }
                    onClick={() =>
                      this.onClickTeamStats(
                        this.state.match_type,
                        "largest_victory"
                      )
                    }
                  >
                    <p className="p-card">Largest Victories</p>
                  </div>
                  <div
                    style={{ borderRadius: "0px 8px 8px 0px" }}
                    className={
                      this.state.stats_type == "smallest_victory"
                        ? "cardtest"
                        : "cardodi"
                    }
                    onClick={() =>
                      this.onClickTeamStats(
                        this.state.match_type,
                        "smallest_victory"
                      )
                    }
                  >
                    <p className="p-card">Smallest Victories</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ------------------------------------------------------------------------- */}
          {/* {this.props.isLoading ? (
            <div style={{ margin: "auto" }}>
              <Loader
                type="TailSpin"
                color="#2980b9"
                height="100"
                width="100"
              />
            </div>
          ) : ( */}
          <div className="stats-display">
            <p className="p-category-name">
              {this.state.stats_type == "largest_victory"
                ? "Largest Victories"
                : this.state.stats_type == "smallest_victory"
                ? "Smallest Victories"
                : this.state.stats_type == "highest_score"
                ? "Highest Totals"
                : "Lowest Totals"}
            </p>
            {console.log(this.props.teamstats)}
            <div className="grid-table">
              <div className="grid-container">
                <p className="grid-item-title">
                  {this.props.teamstats.length == 0
                    ? null
                    : this.props.teamstats[0].outcome
                    ? "Margin"
                    : "Score"}
                </p>
                <p className="grid-item-title">Overs</p>
                <p className="grid-item-title">Opposition</p>
                <p className="grid-item-title">Inns</p>
                <p className="grid-item-title">MatchDate</p>
              </div>
              {this.props.teamstats.map(teamstats => (
                <div className="grid-container">
                  <p className="grid-item-detail">
                    {teamstats.outcome
                      ? teamstats.outcome
                      : teamstats.total_run}
                  </p>
                  <p className="grid-item-detail">{teamstats.overs}</p>
                  <p className="grid-item-detail">
                    {teamstats.team_one} vs {teamstats.team_two}
                  </p>
                  <p className="grid-item-detail">{teamstats.inning}</p>
                  <p className="grid-item-detail">{teamstats.match_date}</p>
                </div>
              ))}
            </div>
          </div>
          {/* )} */}
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
  // { getHighestTotals, getLowestTotals }
  { getTeamStats }
)(TeamStats);
