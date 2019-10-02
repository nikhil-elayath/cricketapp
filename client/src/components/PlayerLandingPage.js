import React, { Component } from "react";
import { getBowlers, getBatsmen } from "../actions/PlayerAction";
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
    console.log("from landing page", this.props);
    this.props.getBowlers({ match_type: "Test" });
    this.props.getBatsmen({ match_type: "Test" });
  }

  getT20 = e => {
    console.log(e);
    this.setState({ testClicked: false, odiClicked: false, t20Clicked: true });
    this.props.getBowlers({ match_type: "T20" });
    this.props.getBatsmen({ match_type: "T20" });
  };

  getTest = e => {
    this.setState({ testClicked: true, odiClicked: false, t20Clicked: false });

    this.props.getBowlers({ match_type: "Test" });
    this.props.getBatsmen({ match_type: "Test" });
  };

  getODI = e => {
    this.setState({ testClicked: false, odiClicked: true, t20Clicked: false });

    this.props.getBowlers({ match_type: "ODI" });
    this.props.getBatsmen({ match_type: "ODI" });
  };

  render() {
    // console.log("batsman landing page: ", this.props.batsmen);
    console.log("Bowlers comp landing page: ", this.props);
    return (
      <div style={{ padding: 12 + "px" }}>
        <NavBar></NavBar>
        <h1
          style={{
            textAlign: "left",
            marginLeft: 43 + "px",
            marginTop: 1.5 + "em",
            fontSize: 42 + "px",
            fontWeight: 500,
            fontFamily: "'Montserrat'"
          }}
        >
          Players
        </h1>
        <div id="conatiner">
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

          <div className="allPlayersDiv">
            <div className="topbatsmanDiv">
              <div className="insideBatsmanDiv">
                <h2 style={{ textAlign: "center" }}>Top Run Scorers</h2>
                {this.props.batsmen.map(batsman => (
                  <div
                    className="batsmenDetailDiv"
                    onClick={() => {
                      this.props.history.push(
                        "/player-info/" + batsman.player_id
                      );
                    }}
                  >
                    <img
                      src={virat}
                      alt="virat kohli"
                      className="playerImage"
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: 10 + "px",
                        textAlign: "left"
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          textAlign: "left",
                          float: "left"
                        }}
                      >
                        <span>
                          <b>{batsman.player_name}</b>
                        </span>
                        <span>{batsman.batting_style}</span>
                      </div>
                    </div>
                    <div
                      className="playerStats"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <b className="playerStatValue">
                        {batsman.player_stats_value}
                      </b>
                      <span style={{ textAlign: "right" }}>Innings: 12</span>
                      <span>Average: 52.12</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="topbowlerDiv">
              <div className="insideBowlerDiv">
                <h2 style={{ textAlign: "center" }}>Top Wicket Takers</h2>
                {this.props.bowlers.map(bowler => (
                  <div
                    className="batsmenDetailDiv"
                    onClick={() => {
                      this.props.history.push(
                        "/playerInfo/" + bowler.player_id
                      );
                    }}
                  >
                    <img
                      src={bumrah}
                      alt="virat kohli"
                      className="playerImage"
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: 10 + "px",
                        textAlign: "left"
                      }}
                    >
                      <span>
                        <b>{bowler.player_name}</b>
                      </span>
                      <span>{bowler.bowling_style}</span>
                    </div>
                    <div
                      className="playerStats"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <b className="playerStatValue">
                        {bowler.player_stats_value}
                      </b>
                      <span style={{ textAlign: "right" }}>Innings: 12</span>
                      <span style={{ textAlign: "right" }}>E/R: 6.2</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  batsmen: state.PlayerReducer.batsmen,
  bowlers: state.PlayerReducer.bowlers
});

export default connect(
  mapStateToProps,
  { getBatsmen, getBowlers }
)(PlayerLandingPage);
