import React, { Component } from "react";
import { connect } from "react-redux";
import "./css/TeamLandingPage.css";
import logo from "./images/indialogo.jpg";
import Navbar from "../components/common/Navbar";
import { getTeams, getRanks } from "../actions/Teams";

export class TeamLandingPage extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.getTeams();
    let ranking = {
      match_type: "Test"
    };
    this.props.getRanks(ranking);
  }

  onClickTest = e => {
    e.preventDefault();
    let ranking = {
      match_type: "Test"
    };
    this.props.getRanks(ranking);
  };

  onClickT20 = e => {
    e.preventDefault();
    let ranking = {
      match_type: "T20"
    };
    this.props.getRanks(ranking);
  };

  onClickOdi = e => {
    e.preventDefault();
    let ranking = {
      match_type: "ODI"
    };
    this.props.getRanks(ranking);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <Navbar />
        <div className="container-team">
          <h1 className="h1-team">Teams</h1>
          <div className="grid-container-team">
            <div>
              <div className="country-team">
                {this.props.teams.map(teams => (
                  <div
                    className="grid-class-team"
                    onClick={() => {
                      this.props.history.push("/teaminfo/" + teams.team_id, {
                        teams
                      });
                    }}
                  >
                    <div className="info-team">
                      <img src={logo} />
                      <p>{teams.team_name}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="top-team">
                <div className="grid-class-topteam">
                  <div className="info-topteam">
                    <p className="p-topteam">Most Wins</p>
                    <div className="centered">
                      <div className="cards">
                        <div className="cardtest" onClick={this.onClickTest}>
                          <p className="p-card">Test</p>
                        </div>
                        <div className="cardodi" onClick={this.onClickOdi}>
                          <p className="p-card">ODI</p>
                        </div>
                        <div className="cardt20" onClick={this.onClickT20}>
                          <p className="p-card">T20</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      {this.props.ranks.map(ranks => (
                        <div>
                          <div className="list">
                            <img src={logo} className="img-card" />
                            <p className="p-team-name">{ranks.team_name}</p>
                            <h2 className="h2-team-position">{ranks.count}</h2>
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
  teams: state.TeamsReducer.teams,
  ranks: state.TeamsReducer.ranks
});

export default connect(
  mapStateTostate,
  { getTeams, getRanks }
)(TeamLandingPage);
