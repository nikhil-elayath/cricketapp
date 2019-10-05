import React, { Component } from "react";
import "./css/PlayerInfo.css";
import NavBar from "../components/common/Navbar";
import "../components/css/SecondaryNavbar.css";
import dhoni from "../components/images/dhoni.jpg";
import { Link } from "react-router-dom";

import { getSinglePlayer } from "../actions/PlayerAction";
import { connect } from "react-redux";

export class PlayerInfo extends Component {
  state = {
    player_id: ""
  };

  componentDidMount() {
    // let player_id = this.state.pId;
    this.props.getSinglePlayer(this.props.match.params.player_id);
    // console.log("Inside did mount component", this.props.singlePlayer);
  }

  getDOB = () => {
    // var pdob = this.props.singlePlayer[0].player_dob;
    // // var st = "Hello world!";
    // var dob = pdob.split(" ");
    // console.log("from getDOb", dob);
  };

  render() {
    // console.log("Inside render component", this.props.singlePlayer[0]);
    return (
      <div>
        <NavBar></NavBar>
        <div className="secNavParent">
          <div className="secNavHead">
            <div
              style={{
                backgroundImage: `url(${dhoni})`
              }}
            ></div>
            <div>
              <h2>{this.props.singlePlayer[0].player_name}</h2>
              <h4 style={{ textAlign: "left" }}>
                {this.props.singlePlayer[0].player_country}
              </h4>
            </div>
          </div>
          <div className="secNavLinks">
            <ul>
              <Link className="secLink" to="/info">
                <li>Info</li>
              </Link>
              <Link className="secLink" to="/battingStats">
                <li>Batting Stats</li>
              </Link>
              <Link className="secLink" to="/bowlingStats">
                <li>Bowling Stats</li>
              </Link>
              <Link className="secLink" to="/performance">
                <li>Performance</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="mainDiv" style={{ padding: 16 + "px" }}>
          <div
            className="personalDetails"
            style={{ fontFamily: "Montserrat", color: "#272727" }}
          >
            <p
              style={{
                borderBottom: "1.2px solid",
                borderBottomColor: "#ccc",
                width: 200 + "px",
                fontSize: 20 + "px",
                textAlign: "left"
              }}
            >
              Personal Details
            </p>
            <div className="playerBasicinfo">
              <span style={{ fontSize: 14 + "px" }}>Full Name</span>
              <b>{this.props.singlePlayer[0].player_name}</b>
              <div style={{ marginTop: 16 + "px" }}>
                <span>Date Of Birth</span>
                {/* <span
                  style={{
                    fontSize: 14 + "px",
                    float: "right",
                    marginRight: 380
                  }}
                >
                  Age
                </span> */}
              </div>
              <b>{this.props.singlePlayer[0].player_dob}</b>

              <span>Role</span>
              <b>{this.props.singlePlayer[0].player_role}</b>
              <span>Batting Style</span>
              <b>{this.props.singlePlayer[0].batting_style}</b>
              <span>Bowling Style</span>
              <b>{this.props.singlePlayer[0].bowling_style}</b>
            </div>
          </div>
          <div className="careerStats" style={{ fontFamily: "Montserrat" }}>
            <p
              id="career-stats-heading"
              style={{
                borderBottom: "1.2px solid",
                borderBottomColor: "#ccc",
                width: 200 + "px",
                fontSize: 20 + "px",
                textAlign: "left"
              }}
            >
              Career Statistics
            </p>
            <div>
              <div className="formatHeading">
                <span>Test</span>
              </div>
              <div
                className="pl-stats-details"
                style={{
                  textAlign: "left",
                  marginTop: 15 + "px",
                  marginLeft: 15 + "px",
                  marginBottom: 15 + "px"
                }}
              >
                <p
                  style={{
                    margin: 6 + "px",
                    fontSize: 14 + "px",
                    fontWeight: 600,
                    color: "#707070"
                  }}
                >
                  Debut
                </p>
                <b>{this.props.singlePlayer[0].debut_test_match}</b>
              </div>

              <div className="formatHeading">
                <span>ODI</span>
              </div>
              <div
                className="pl-stats-details"
                style={{
                  textAlign: "left",
                  marginTop: 20 + "px",
                  marginLeft: 20 + "px",
                  marginBottom: 20 + "px",
                  color: "#707070"
                }}
              >
                <p
                  style={{
                    margin: 6 + "px",
                    fontSize: 14 + "px",
                    fontWeight: 600,
                    color: "#707070"
                  }}
                >
                  Debut
                </p>
                <b>{this.props.singlePlayer[0].debut_odi_match}</b>
              </div>

              <div className="formatHeading">
                <span>T20</span>
              </div>
              <div
                className="pl-stats-details"
                style={{
                  textAlign: "left",
                  marginTop: 20 + "px",
                  marginLeft: 20 + "px",
                  marginBottom: 20 + "px"
                }}
              >
                <p
                  style={{
                    margin: 6 + "px",
                    fontSize: 14 + "px",
                    fontWeight: 600,
                    color: "#707070"
                  }}
                >
                  Debut
                </p>
                <b>{this.props.singlePlayer[0].debut_t20_match}</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  singlePlayer: state.PlayerReducer.singlePlayer
});

export default connect(
  mapStateToProps,
  { getSinglePlayer }
)(PlayerInfo);
