import React, { Component } from "react";
import "./css/TeamSecondaryNavbar.css";
import teamlogo from "./images/indialogo.jpg";
// import Navbar from "./common/Navbar";

export default class TeamSecondaryNavbar extends Component {
  state = {
    infoClick: true,
    statsClick: false,
    fixturesClick: false
  };
  onClickInfo = () => {
    this.setState({ infoClick: true, statsClick: false, fixturesClick: false });
    this.props.changeDetailsType("info");
  };
  onClickStats = () => {
    this.setState({ infoClick: false, statsClick: true, fixturesClick: false });
    this.props.changeDetailsType("stats");
  };
  onClickFixtures = () => {
    this.setState({ infoClick: false, statsClick: false, fixturesClick: true });
    this.props.changeDetailsType("fixtures");
  };
  render() {
    console.log("navbar props is ", this.props.teams.team_name);
    return (
      <div>
        <div className="secNavTeamParent">
          <div className="secNavHead">
            <div
              style={{
                backgroundImage: `url(${teamlogo})`
              }}
            ></div>
            <div>
              <h2>{this.props.teams.team_name}</h2>
            </div>
          </div>
          <div className="secNavLinks">
            <ul>
              <div>
                <li
                  className={this.state.infoClick ? "li-colored" : "li-normal"}
                  onClick={this.onClickInfo}
                >
                  Info
                </li>
              </div>
              <div>
                <li
                  className={this.state.statsClick ? "li-colored" : "li-normal"}
                  onClick={this.onClickStats}
                >
                  Stats
                </li>
              </div>
              <div>
                <li
                  className={
                    this.state.fixturesClick ? "li-colored" : "li-normal"
                  }
                  onClick={this.onClickFixtures}
                >
                  Fixtures
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
