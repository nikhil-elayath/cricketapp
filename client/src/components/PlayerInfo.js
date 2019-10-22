import React, { Component } from "react";
import "./css/PlayerInfo.css";
import Navbar from "./common/Navbar";
import "../components/css/SecondaryNavbar.css";
import dhoni from "../components/images/dhoni.jpg";
import { Link } from "react-router-dom";
import PlayerBattingStats from "./PlayerBattingStats";
import PlayerBowlingStats from "./PlayerBowlingStats";

import { getSinglePlayer } from "../actions/PlayerAction";
import { connect } from "react-redux";

export class PlayerInfo extends Component {
  state = {
    player_id: "",
    info: true,
    batting_stats: false,
    bowling_stats: false
  };

  componentDidMount() {
    this.props.getSinglePlayer(this.props.match.params.player_id);
  }

  render() {
    console.log(this.props);
    console.log(this.props.singlePlayer[0].player_image);
    // console.log(
    //   "Inside render component",
    //   this.props.singlePlayer[0].player_dob
    // );
    if (this.state.info === true)
      return (
        <div>
          <Navbar
            gender={this.props.gender}
            changeGender={getGender => this.props.changeGender(getGender)}
          />

          <div className="secNavParent">
            <div className="secNavHead">
              <div
                style={{
                  backgroundImage: `url(data:image/jpeg;base64,${this.props.singlePlayer[0].player_image})`
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
                <Link
                  className="secLink"
                  onClick={() => {
                    this.setState({
                      info: true,
                      batting_stats: false,
                      bowling_stats: false
                    });
                  }}
                >
                  <li>Info</li>
                </Link>
                <Link
                  className="secLink"
                  onClick={() => {
                    this.setState({
                      info: false,
                      batting_stats: true,
                      bowling_stats: false
                    });
                  }}
                >
                  <li
                    className={
                      this.state.battingSelected ? "sec-active" : "not-active"
                    }
                  >
                    Batting Stats
                  </li>
                </Link>
                <Link
                  className="secLink"
                  onClick={() => {
                    this.setState({
                      info: false,
                      batting_stats: false,
                      bowling_stats: true
                    });
                  }}
                >
                  <li>Bowling Stats</li>
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
                <span id="jest-full-name" style={{ fontSize: 14 + "px" }}>
                  Full Name
                </span>
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
                </span> 
                {this.props.singlePlayer[0].player_dob}
                */}
                </div>
                <b>{this.props.singlePlayer[0].player_dob}</b>
                <span id="jest-role">Role</span>
                <b>{this.props.singlePlayer[0].player_role}</b>
                <span id="jest-batting-style">Batting Style</span>
                <b>{this.props.singlePlayer[0].batting_style}</b>
                <span id="jest-bowling-style">Bowling Style</span>
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
                  <span id="test-heading">Test</span>
                </div>
                <div
                  className="pl-stats-details"
                  style={{
                    textAlign: "left",
                    // marginTop: 15 + "px",
                    // marginLeft: 15 + "px",
                    // marginBottom: 15 + "px",
                    padding: 6 + "px",
                    backgroundColor: "white"
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
                  <span id="odi-heading">ODI</span>
                </div>
                <div
                  className="pl-stats-details"
                  style={{
                    textAlign: "left",
                    padding: 6 + "px",
                    backgroundColor: "white"
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
                  <span id="t20-heading">T20</span>
                </div>
                <div
                  className="pl-stats-details"
                  style={{
                    textAlign: "left",

                    backgroundColor: "white"
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
    else if (this.state.batting_stats === true) {
      return (
        <div>
          <Navbar
            gender={this.props.gender}
            changeGender={getGender => this.props.changeGender(getGender)}
          />

          <div className="secNavParent">
            <div className="secNavHead">
              <div
                style={{
                  backgroundImage: `url(data:image/jpeg;base64,${this.props.singlePlayer[0].player_image})`
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
                <Link
                  className="secLink"
                  onClick={() => {
                    this.setState({
                      info: true,
                      batting_stats: false,
                      bowling_stats: false
                    });
                  }}
                >
                  <li>Info</li>
                </Link>
                <Link
                  className="secLink"
                  onClick={() => {
                    this.setState({
                      info: false,
                      batting_stats: true,
                      bowling_stats: false
                    });
                  }}
                >
                  <li>Batting Stats</li>
                </Link>
                <Link
                  className="secLink"
                  onClick={() => {
                    this.setState({
                      info: false,
                      batting_stats: false,
                      bowling_stats: true
                    });
                  }}
                >
                  <li>Bowling Stats</li>
                </Link>
              </ul>
            </div>
          </div>
          <PlayerBattingStats
            batsmanCareerStats={this.props.batsmanStats}
            player_id={this.props.match.params.player_id}
          />
        </div>
      );
    } else if (this.state.bowling_stats === true) {
      return (
        <div>
          <Navbar
            gender={this.props.gender}
            changeGender={getGender => this.props.changeGender(getGender)}
          />

          <div className="secNavParent">
            <div className="secNavHead">
              <div
                style={{
                  backgroundImage: `url(data:image/jpeg;base64,${this.props.singlePlayer[0].player_image})`
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
                <Link
                  className="secLink"
                  onClick={() => {
                    this.setState({
                      info: true,
                      batting_stats: false,
                      bowling_stats: false
                    });
                  }}
                >
                  <li>Info</li>
                </Link>
                <Link
                  className="secLink"
                  onClick={() => {
                    this.setState({
                      info: false,
                      batting_stats: true,
                      bowling_stats: false
                    });
                  }}
                >
                  <li>Batting Stats</li>
                </Link>
                <Link
                  className="secLink"
                  onClick={() => {
                    this.setState({
                      info: false,
                      batting_stats: false,
                      bowling_stats: true
                    });
                  }}
                >
                  <li>Bowling Stats</li>
                </Link>
              </ul>
            </div>
          </div>
          <PlayerBowlingStats player_id={this.props.match.params.player_id} />
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  singlePlayer: state.PlayerReducer.singlePlayer
});

export default connect(
  mapStateToProps,
  { getSinglePlayer }
)(PlayerInfo);
