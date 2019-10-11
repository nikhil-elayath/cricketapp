import React, { Component } from "react";
import { getBowlers, getBatsmen, getTopSixes } from "../actions/PlayerAction";
import { connect } from "react-redux";

import virat from "../components/images/virat.jpg";
import bumrah from "../components/images/Bumrah.jpg";

import "./css/PlayerLandingPage.css";
import NavBar from "../components/common/Navbar";

export class PlayerLandingPage extends Component {
  state = {
    testClicked: true,
    odiClicked: false,
    t20Clicked: false
  };

  componentDidMount() {
    // console.log("from landing page", this.props);
    this.props.getBowlers({ match_type: "Test" });
    this.props.getBatsmen({ match_type: "Test" });
    this.props.getTopSixes({ match_type: "Test" });
  }

  getT20 = () => {
    this.setState({ testClicked: false, odiClicked: false, t20Clicked: true });
    this.props.getBowlers({ match_type: "T20" });
    this.props.getBatsmen({ match_type: "T20" });
    this.props.getTopSixes({ match_type: "T20" });
  };

  getTest = () => {
    this.setState({ testClicked: true, odiClicked: false, t20Clicked: false });

    this.props.getBowlers({ match_type: "Test" });
    this.props.getBatsmen({ match_type: "Test" });
    this.props.getTopSixes({ match_type: "Test" });
  };

  getODI = () => {
    this.setState({ testClicked: false, odiClicked: true, t20Clicked: false });
    this.props.getBowlers({ match_type: "ODI" });
    this.props.getBatsmen({ match_type: "ODI" });
    this.props.getTopSixes({ match_type: "ODI" });
  };

  render() {
    // console.log("batsman landing page: ", this.props.batsmen);
    // console.log("Bowlers comp landing page: ", this.props);
    return (
      <div style={{ padding: 12 + "px" }}>
        <NavBar></NavBar>
        <h1 id="playerHeading">Players</h1>

        <div id="container">
          <div className="matchFormatOptons">
            <div className="selectNav">
              <a
                className={this.state.testClicked ? "active" : "notActive"}
                style={{
                  borderLeft: 1 + "px solid",
                  borderTopLeftRadius: 8 + "px",
                  borderBottomLeftRadius: 8 + "px",
                  cursor: "pointer"
                }}
                onClick={this.getTest}
              >
                Test
              </a>

              <a
                className={this.state.odiClicked ? "active" : "notActive"}
                style={{ cursor: "pointer" }}
                onClick={this.getODI}
              >
                ODI
              </a>
              <a
                className={this.state.t20Clicked ? "active" : "notActive"}
                onClick={this.getT20}
                style={{
                  borderRight: 1 + "px solid",
                  cursor: "pointer",
                  borderTopRightRadius: 8 + "px",
                  borderBottomRightRadius: 8 + "px"
                }}
              >
                T20
              </a>
            </div>
          </div>
        </div>
        <div className="playersDiv">
          <div className="playerBatsman">
            <h1
              style={{
                textAlign: "center"
              }}
            >
              Top Batsmen
            </h1>
            {this.props.batsmen.length==0 ?(
                <div className="matchlandingpageloader"></div>
            ):(
              this.props.batsmen.map(batsman => (
              <div
                className="singlePlayerDiv"
                onClick={() => {
                  this.props.history.push("/playerInfo/" + batsman.player_id);
                }}
              >
                <img className="playerImage" src={virat}></img>
                {/* player basic info div */}
                <div className="playerInfoDiv" style={{ marginTop: 8 + "px" }}>
                  <span id="playerName">{batsman.player_name}</span>
                  <span id="playerMinInfo">Right Handed Batsman</span>
                  <span id="playerMinInfo">{batsman.player_country}</span>
                </div>

                {/* player runs,wickets div */}
                <div className="playerInfoDiv">
                  <span className="playerStatValue">
                    {batsman.player_stats_value}
                  </span>

                  <span id="playerMinInfo">Innings: 12</span>
                  <span id="playerMinInfo">Average: 52.12</span>
                </div>
              </div>
            )))}
          </div>
          <div className="playerBowler">
            <h1 style={{ textAlign: "center" }}>Top Bowlers</h1>
            {this.props.bowlers.map(bowler => (
              <div
                className="singlePlayerDiv"
                onClick={() => {
                  this.props.history.push("/playerInfo/" + bowler.player_id);
                }}
              >
                <img className="playerImage" src={virat}></img>
                {/* player basic info div */}
                <div className="playerInfoDiv" style={{ marginTop: 8 + "px" }}>
                  <span id="playerName">{bowler.player_name}</span>
                  <span id="playerMinInfo">Right Arm Medium</span>
                  <span id="playerMinInfo">{bowler.player_country}</span>
                </div>

                {/* player runs,wickets div */}
                <div className="playerInfoDiv">
                  <span className="playerStatValue">
                    {bowler.player_stats_value}
                  </span>

                  <span id="playerMinInfo">Innings: 12</span>
                  <span id="playerMinInfo">Average: 52.12</span>
                </div>
              </div>
            ))}
          </div>
          <div className="playerType">
            <h1 style={{ textAlign: "center" }}>Top 6s</h1>
            {this.props.topSixes.map(six => (
              <div
                className="singlePlayerDiv"
                onClick={() => {
                  this.props.history.push("/playerInfo/" + six.player_id);
                }}
              >
                <img className="playerImage" src={virat}></img>
                {/* player basic info div */}
                <div className="playerInfoDiv" style={{ marginTop: 8 + "px" }}>
                  <span id="playerName">{six.player_name}</span>
                  <span id="playerMinInfo">Right Arm Medium</span>
                  <span id="playerMinInfo">{six.player_country}</span>
                </div>

                {/* player runs,wickets div */}
                <div className="playerInfoDiv">
                  <span className="playerStatValue">
                    {six.player_stats_value}
                  </span>

                  <span id="playerMinInfo">Innings: 12</span>
                  <span id="playerMinInfo">Average: 52.12</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  batsmen: state.PlayerReducer.batsmen,
  bowlers: state.PlayerReducer.bowlers,
  topSixes: state.PlayerReducer.topSixes
});

export default connect(
  mapStateToProps,
  { getBatsmen, getBowlers, getTopSixes }
)(PlayerLandingPage);
