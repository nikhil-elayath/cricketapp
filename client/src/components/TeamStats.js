import React, { Component } from "react";
import { connect } from "react-redux";
import "./css/TeamStats.css";
import { getHighestTotals, getLowestTotals } from "../actions/Teams";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export class TeamStats extends Component {
  state = {
    testClick: false,
    odiClick: false,
    t20Click: true,
    highestClick: true,
    lowestClick: false,
    type: "T20",
    stats_type: "highest_score"
  };
  componentDidMount() {
    console.log("team id for team stats is ", this.props.teams.team_id);
    console.log("type is", this.state.type);
    console.log("gender for team stats is", this.props.gender);
    let type = {
      match_type: "T20"
    };
    this.props.getHighestTotals(
      this.props.teams.team_id,
      this.props.gender,
      type
    );
  }
  //   getTeamStats=(returnType)=>{
  //     let mtype={
  //       type:returnType
  //     }
  // this.props.getHighestTotals(this.props.team_id,mtype);
  // this.props.getLowestTotals(this.props.team_id,mtype);
  //   }
  onClickTest = e => {
    e.preventDefault();
    this.setState({
      testClick: true,
      odiClick: false,
      t20Click: false,
      type: "Test"
    });
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
  };

  onClickOdi = e => {
    e.preventDefault();
    this.setState({
      testClick: false,
      odiClick: true,
      t20Click: false,
      type: "ODI"
    });
    // this.props.getHighestTotals(this.props.teams.team_id, type);
    // this.onClickHighestTotals(e);
    // this.props.getHighestTotals(this.props.teams.team_id, this.state.type);
    // this.props.getLowestTotals(this.props.teams.team_id, this.state.type);
  };

  onClickT20 = e => {
    e.preventDefault();
    this.setState({
      testClick: false,
      odiClick: false,
      t20Click: true,
      type: "T20"
    });
    // this.props.getHighestTotals(this.props.teams.team_id, this.state.type);
  };

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

  onClickHighestTotals = e => {
    e.preventDefault();
    this.setState({ highestClick: true, lowestClick: false });
    // if ((this.state.t20Click = true)) {
    let type = {
      match_type: "T20"
    };
    //   this.props.getHighestTotals(this.props.teams.team_id, type);
    // }
    // if ((this.state.odiClick = true)) {
    //   let type = {
    //     match_type: "ODI"
    //   };
    this.props.getHighestTotals(
      this.props.teams.team_id,
      this.props.gender,
      type
      // this.state.stats_type
    );
    // }
    // if ((this.state.testClick = true)) {
    //   let type = {
    //     match_type: "Test"
    //   };
    //   this.props.getHighestTotals(this.props.teams.team_id, type);
    // }
  };

  onClickLowestTotals = e => {
    e.preventDefault();
    this.setState({ highestClick: false, lowestClick: true });
    // if ((this.state.t20Click = true)) {
    let type = {
      match_type: "T20"
    };
    //   this.props.getLowestTotals(this.props.teams.team_id, type);
    // }
    // if ((this.state.odiClick = true)) {
    // let type = {
    //   match_type: "ODI"
    // };
    this.props.getLowestTotals(
      this.props.teams.team_id,
      this.props.gender,
      type
    );
    console.log(
      "lowest - ",
      this.props.getLowestTotals(
        this.props.teams.team_id,
        this.props.gender,
        type
      )
    );
    // }
    // if (this.state.testClick == true) {
    //   let type = {
    //     match_type: "Test",
    //     gender: "male"
    //   };
    //   this.props.getLowestTotals(this.props.teams.team_id, type);
    // }
  };

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
                    className={
                      (this.state.type = "t20" ? "cardtest" : "cardodi")
                    }
                    onClick={this.getteamstats}
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
                    // className={
                    //   this.state.stats_type == "highest_score"
                    //     ? "cardtest"
                    //     : "cardodi"
                    // }
                    className={this.state.highestClick ? "cardtest" : "cardodi"}
                    onClick={this.onClickHighestTotals}
                  >
                    <p className="p-card">Highest Totals</p>
                  </div>
                  <div
                    className="cardodi"
                    className={this.state.lowestClick ? "cardtest" : "cardodi"}
                    onClick={this.onClickLowestTotals}
                  >
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
          {this.props.isLoading ? (
            <div style={{ margin: "auto" }}>
              <Loader
                type="TailSpin"
                color="#2980b9"
                height="100"
                width="100"
              />
            </div>
          ) : (
            <div className="stats-display">
              <p className="p-category-name">Highest Totals</p>

              <div className="grid-table">
                <div className="grid-container">
                  <p className="grid-item-title">Score</p>
                  <p className="grid-item-title">Overs</p>
                  <p className="grid-item-title">Opposition</p>
                  <p className="grid-item-title">Inns</p>
                  <p className="grid-item-title">MatchDate</p>
                </div>
                {this.props.teamstats.map(teamstats => (
                  <div className="grid-container">
                    <p className="grid-item-detail">{teamstats.total_run}</p>
                    <p className="grid-item-detail">{teamstats.overs}</p>
                    <p className="grid-item-detail">Bangladesh</p>
                    <p className="grid-item-detail">{teamstats.inning}</p>
                    <p className="grid-item-detail">{teamstats.match_date}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
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
