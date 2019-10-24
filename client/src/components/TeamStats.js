import React, { Component } from "react";
import { connect } from "react-redux";
import "./css/TeamStats.css";
import { getTeamStats } from "../actions/Teams";
import Loader from "react-loader-spinner";

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
              <p className="p-match-type" id="p-stats-match-type">
                Select Match Type
              </p>
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
                    <p className="p-card" id="p-stats-match-type-t20">
                      T20
                    </p>
                  </div>
                  <div
                    className={
                      this.state.match_type == "ODI" ? "cardtest" : "cardodi"
                    }
                    onClick={() =>
                      this.onClickTeamStats("ODI", this.state.stats_type)
                    }
                  >
                    <p className="p-card" id="p-stats-match-type-odi">
                      ODI
                    </p>
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
                    <p className="p-card" id="p-stats-match-type-test">
                      Test
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="category-section">
              <p className="p-category" id="p-stats-category">
                Select Category
              </p>
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
                    <p className="p-card" id="p-stats-category-ht">
                      Highest Totals
                    </p>
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
                    <p className="p-card" id="p-stats-category-lt">
                      Lowest Totals
                    </p>
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
                    <p className="p-card" id="p-stats-category-lv">
                      Largest Victories
                    </p>
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
                    <p className="p-card" id="p-stats-category-sv">
                      Smallest Victories
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                Loading Team Stats. . .
              </span>
            </div>
          ) : (
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
          )}
        </div>
      </div>
    );
  }
}

const mapStateTostate = state => ({
  teamstats: state.TeamsReducer.teamstats,
  isLoading: state.LoadingReducer.isLoading
});

export default connect(
  mapStateTostate,
  { getTeamStats }
)(TeamStats);
