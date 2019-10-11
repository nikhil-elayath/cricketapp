import React, { Component } from "react";
import "./css/SecondaryNavbar.css";
import teamlogo from "./images/indialogo.jpg";
import Navbar from "./common/Navbar";
// import { Link } from "react-router-dom";

export default class TeamSecondaryNavbar extends Component {
  render() {
    console.log("navbar props is ", this.props.teams.team_name);
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
              <h2>{this.props.teams.team_name}</h2>
            </div>
          </div>
          <div className="secNavLinks">
            <ul>
              <div
                className="secLink"
                onClick={() => {
                  this.props.changeDetailsType("info");
                }}
              >
                <li>Info</li>
              </div>
              {/* <Link className="secLink" to="/dev">
                <li>Players</li>
              </Link> */}
              <div
                className="secLink"
                onClick={() => {
                  this.props.changeDetailsType("stats");
                }}
              >
                <li>Stats</li>
              </div>
              {/* <Link className="secLink" to="/dev">
                <li>Fixtures</li>
              </Link> */}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
