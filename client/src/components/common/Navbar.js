import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navParent">
        <nav>
          <span className="navBrand">CricketAlpha</span>
          <div className="navLinks">
            <ul>
              <Link className="link" to="/matches">
                <li>Matches</li>
              </Link>
              <Link className="link" to="/teams">
                <li>Teams</li>
              </Link>
              <Link className="link" to="/playersPage">
                <li>Players</li>
              </Link>
              <Link className="link" to="#as">
                <li>Stats</li>
              </Link>
              <Link className="link" to="/search">
                <i className="fas fa-search"></i>
              </Link>
              <Link className="link" to="/user">
                <i className="fas fa-user"></i>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
