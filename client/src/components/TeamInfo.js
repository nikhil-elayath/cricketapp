import React, { Component } from "react";
import { connect } from "react-redux";
import "./css/TeamInfo.css";
import "./css/TeamLandingPage.css";
import logo from "./images/dhoni.jpg";
import Navbar from "../components/common/Navbar";
import { getMatch } from "../actions/Teams";
import "./css/SecondaryNavbar.css";
import teamlogo from "./images/indialogo.jpg";
import { Link } from "react-router-dom";

export class TeamInfo extends Component {
  state = {
    team_id: this.props.match.params.team_id,
    team_name: this.props.location.state.teams.team_name
  };
  componentDidMount() {
    console.log(this.props.location.state);
    this.props.getMatch(this.state.team_id);
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="secNavParent">
          <div className="secNavHead">
            <div
              style={{
                backgroundImage: `url(${teamlogo})`
              }}
            ></div>
            <div>
              <h2>{this.state.team_name}</h2>
            </div>
          </div>
          <div className="secNavLinks">
            <ul>
              <Link className="secLink" to="/teaminfo">
                <li>Info</li>
              </Link>
              <Link className="secLink" to="/battingStats">
                <li>Players</li>
              </Link>
              <Link className="secLink" to="/bowlingStats">
                <li>Stats</li>
              </Link>
              <Link className="secLink" to="/performance">
                <li>Fixtures</li>
              </Link>
            </ul>
          </div>
        </div>

        <div className="container-team-details">
          <p className="p-matches">Recent Matches</p>
          <div className="all-recent-matches-box">
            {this.props.matches.map(matches => (
              <div className="inside-recent-matches-box">
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
                <span className="winner-name">{matches.teamWinner} WON</span>
              </div>
            ))}
          </div>
          <hr />
          {/* ------------------------------------------------------------------- */}
          <div className="centered">
            <div className="cards-new">
              <div className="cardtest">
                <p className="p-card">Test</p>
              </div>
              <div className="cardodi">
                <p className="p-card">ODI</p>
              </div>
              <div className="cardt20">
                <p className="p-card">T20</p>
              </div>
            </div>
          </div>
          <div className="grid-container-team">
            <div className="grid-container-team-details">
              <div className="grid-class-team-details">
                <div className="grid-class-topteam-details">
                  <p className="p-top-team-details">Top Batsmen</p>
                  <div>
                    <div className="list">
                      <img src={logo} className="img-card" />
                      <div>
                        <p className="p-team-details-name">Virat Kohli</p>
                        <p className="p-player-style">Right-hand Bat</p>
                      </div>
                      <h2 className="h2-team-details-position">672</h2>
                    </div>
                    <hr className="hr-team-card" />
                  </div>
                  <div className="list">
                    <img src={logo} className="img-card" />
                    <div>
                      <p className="p-team-details-name">Rohit Sharma</p>
                      <p className="p-player-style">Right-hand Bat</p>
                    </div>
                    <h2 className="h2-team-details-position">578</h2>
                  </div>
                  <hr className="hr-team-card" />
                </div>
              </div>
              <div className="grid-class-team-details">
                <div className="grid-class-topteam-details">
                  <p className="p-top-team-details">Top Bowlers</p>
                  <div>
                    <div className="list">
                      <img src={logo} className="img-card" />
                      <div>
                        <p className="p-team-details-name">Jasprit Bumrah</p>
                        <p className="p-player-style">Right-arm Fast</p>
                      </div>
                      <h2 className="h2-team-details-position">34</h2>
                    </div>
                    <hr className="hr-team-card" />
                  </div>
                  <div className="list">
                    <img src={logo} className="img-card" />
                    <div>
                      <p className="p-team-details-name">Hardik Pandya</p>
                      <p className="p-player-style">Right-arm Fast</p>
                    </div>
                    <h2 className="h2-team-details-position">28</h2>
                  </div>
                  <hr className="hr-team-card" />
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
  matches: state.TeamsReducer.matches
});

export default connect(
  mapStateTostate,
  { getMatch }
)(TeamInfo);
