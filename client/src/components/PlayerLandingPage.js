import React, { Component } from "react";
import { getTopPlayers } from "../actions/PlayerAction";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import "./css/PlayerLandingPage.css";
import Navbar from "./common/Navbar";

export class PlayerLandingPage extends Component {
  state = {
    testClicked: true,
    odiClicked: false,
    t20Clicked: false,
    matchType: "Test"
  };

  topPlayers = (matchType, gender = this.props.gender) => {
    console.log("from get top players", gender);
    // this.props.getBowlers({
    // match_type: matchType,
    // gender
    // });
    // this.props.getBatsmen({
    //   match_type: matchType,
    //   gender
    // });
    // this.props.getTopSixes({
    //   match_type: matchType,
    //   gender
    // });
    this.props.getTopPlayers({
      match_type: matchType,
      gender
    });
  };

  componentDidMount() {
    console.log("from landing page", this.props);
    this.topPlayers(this.state.matchType);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.gender !== this.props.gender) {
      console.log("from receive props ", nextProps.gender, this.props.gender);
      this.topPlayers(this.state.matchType, nextProps.gender);
    }
  }

  changeMatchType = mType => {
    this.setState({ matchType: mType });
    this.topPlayers(mType);
  };

  render() {
    // console.log(
    //   "Gender check: ",
    //   this.props.topPlayer["0"].TopBatsman
    //     ? this.props.topPlayer["0"].TopBatsman
    //     : console.log("not found")
    // );

    console.log("finding isloading", this.props);

    return (
      <div>
        <Navbar
          gender={this.props.gender}
          changeGender={getGender => this.props.changeGender(getGender)}
          showGender={true}
          pageLink={"players"}
        />

        <div style={{ padding: 12 + "px" }}>
          {/* <h1 id="playerHeading">Players</h1> */}
          <div className="container">
            <div className="matchFormatOptons">
              <div className="selectNav">
                <a
                  id="jest-test-tab"
                  className={
                    this.state.matchType === "Test" ? "active" : "notActive"
                  }
                  style={{
                    borderLeft: 1 + "px solid",
                    borderTopLeftRadius: 8 + "px",
                    borderBottomLeftRadius: 8 + "px",
                    cursor: "pointer"
                  }}
                  onClick={() => {
                    this.changeMatchType("Test");
                  }}
                >
                  Test
                </a>

                <a
                  className={
                    this.state.matchType === "ODI" ? "active" : "notActive"
                  }
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    this.changeMatchType("ODI");
                  }}
                  id="jest-ODI-tab"
                >
                  ODI
                </a>
                <a
                  className={
                    this.state.matchType === "T20" ? "active" : "notActive"
                  }
                  onClick={() => {
                    this.changeMatchType("T20");
                  }}
                  style={{
                    borderRight: 1 + "px solid",
                    cursor: "pointer",
                    borderTopRightRadius: 8 + "px",
                    borderBottomRightRadius: 8 + "px"
                  }}
                  id="jest-T20-tab"
                >
                  T20
                </a>
              </div>
            </div>
          </div>

          {this.props.isLoading ? (
            <div
              style={{
                height: 500 + "px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <div>
                <Loader
                  type="TailSpin"
                  color="#2980b9"
                  height="100"
                  width="100"
                />
              </div>
              <span
                style={{
                  marginTop: "40px"
                }}
              >
                Loading Players...
              </span>
            </div>
          ) : (
            <div className="playersDiv">
              <div className="playerBatsman">
                <h1
                  id="jest-heading-Top-Batsman"
                  style={{
                    textAlign: "center"
                  }}
                >
                  Top Batsmen
                </h1>
                {this.props.topPlayer["0"].TopBatsman
                  ? this.props.topPlayer["0"].TopBatsman.map(batsman => (
                      <div
                        id="jest-history-1"
                        className="singlePlayerDiv"
                        onClick={() =>
                          this.props.history.push(
                            "/playerInfo/" + batsman.player_id
                          )
                        }
                      >
                        {console.log("batsman", batsman)}
                        <img
                          id="pImage"
                          className="playerImage"
                          src={`data:image/jpeg;base64,${batsman.player_image}`}
                        ></img>
                        {/* player basic info div */}
                        <div
                          className="playerInfoDiv"
                          style={{ marginTop: 8 + "px" }}
                        >
                          <span id="playerName">{batsman.player_name}</span>
                          <span id="playerMinInfo">Right Handed Batsman</span>
                          <span id="playerMinInfo">
                            {batsman.player_country}
                          </span>
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
                    ))
                  : console.log("not found")}
              </div>
              <div className="playerBowler">
                <h1 style={{ textAlign: "center" }}>Top Bowlers</h1>

                {this.props.topPlayer["0"].TopBowler
                  ? this.props.topPlayer["0"].TopBowler.map(bowler => (
                      <div
                        id="jest-history-2"
                        className="singlePlayerDiv"
                        onClick={() => {
                          this.props.history.push(
                            "/playerInfo/" + bowler.player_id
                          );
                        }}
                      >
                        <img
                          id="pImage"
                          className="playerImage"
                          src={`data:image/jpeg;base64,${bowler.player_image}`}
                        ></img>
                        {/* player basic info div */}
                        <div
                          className="playerInfoDiv"
                          style={{ marginTop: 8 + "px" }}
                        >
                          <span id="playerName">{bowler.player_name}</span>
                          <span id="playerMinInfo">Right Arm Medium</span>
                          <span id="playerMinInfo">
                            {bowler.player_country}
                          </span>
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
                    ))
                  : console.log("not found")}
              </div>
              <div className="playerType">
                <h1 style={{ textAlign: "center" }}>Most 6s</h1>
                {this.props.topPlayer["0"].MostSixes
                  ? this.props.topPlayer["0"].MostSixes.map(six => (
                      <div
                        id="jest-history-mostSixes"
                        className="singlePlayerDiv"
                        onClick={() => {
                          this.props.history.push(
                            "/playerInfo/" + six.player_id
                          );
                        }}
                      >
                        <img
                          id="pImage"
                          className="playerImage"
                          src={`data:image/jpeg;base64,${six.player_image}`}
                        ></img>
                        {/* player basic info div */}
                        <div
                          className="playerInfoDiv"
                          style={{ marginTop: 8 + "px" }}
                        >
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
                    ))
                  : console.log("not found")}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  topPlayer: state.PlayerReducer.topPlayer,
  isLoading: state.LoadingReducer.isLoading
});

export default connect(
  mapStateToProps,
  { getTopPlayers }
)(PlayerLandingPage);
