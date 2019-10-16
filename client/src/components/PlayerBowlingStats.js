import React, { Component } from "react";
import "../components/css/PlayerBowlingStats.css";

import {
  getODIBowlerStats,
  getT20BowlerStats,
  getTestBowlerStats
} from "../actions/PlayerAction";

import { connect } from "react-redux";

export class PlayerBowlingStats extends Component {
  componentDidMount() {
    console.log("from mount", this.props.player_id);
    this.props.getODIBowlerStats(this.props.player_id);
    this.props.getT20BowlerStats(this.props.player_id);
    this.props.getTestBowlerStats(this.props.player_id);
    // this.props.getT20BatsmanStats(this.props.player_id);
    // this.props.getTestBatsmanStats(this.props.player_id);
  }

  render() {
    console.log(
      "Component bowling stats ",
      this.props.testBowlerStats["0"].RunsConceded
        ? this.props.testBowlerStats["0"].RunsConceded.length === 0
          ? 0
          : this.props.testBowlerStats["0"].RunsConceded[0].match_type
        : console.log("not found")
    );

    // console.log("Component bowling stats", this.propstestBowlerStats);

    return (
      <div className="ball-main">
        <div className="bowling-main-div">
          <div className="bowling-Test-div">
            <h3 id="bowling-format-heading">Test</h3>
            <div className="bowling-stats-info-parent-div">
              <div className="bowling-stats-info-div">
                <span id="ball-stat-span-1">
                  {this.props.testBowlerStats["0"].Matches
                    ? this.props.testBowlerStats["0"].Matches.length === 0
                      ? "-"
                      : this.props.testBowlerStats["0"].Matches[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="ball-stat-span-2">Matches</span>
              </div>
              <div className="bowling-stats-info-div">
                <span id="ball-stat-span-1">
                  {this.props.testBowlerStats["0"].Innings
                    ? this.props.testBowlerStats["0"].Innings.length === 0
                      ? "-"
                      : this.props.testBowlerStats["0"].Innings[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="ball-stat-span-2">Innings</span>
              </div>
              <div className="bowling-stats-info-div">
                <span id="ball-stat-span-1">
                  {this.props.testBowlerStats["0"].RunsConceded
                    ? this.props.testBowlerStats["0"].RunsConceded.length === 0
                      ? "-"
                      : this.props.testBowlerStats["0"].RunsConceded[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="ball-stat-span-2">Runs Conceded</span>
              </div>
              <div className="bowling-stats-info-div">
                <span id="ball-stat-span-1">
                  {this.props.testBowlerStats["0"].BallsBowled
                    ? this.props.testBowlerStats["0"].BallsBowled.length === 0
                      ? "-"
                      : this.props.testBowlerStats["0"].BallsBowled[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="ball-stat-span-2">Balls bowled</span>
              </div>
            </div>
            <div
              className="bowling-stats-info-parent-div"
              style={{ borderBottom: "none" }}
            >
              <div className="bowling-stats-bottom-info-div">
                <span id="ball-stat-span-1">
                  {this.props.testBowlerStats["0"].TotalWIckets
                    ? this.props.testBowlerStats["0"].TotalWIckets.length === 0
                      ? "-"
                      : this.props.testBowlerStats["0"].TotalWIckets[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="ball-stat-span-2">Wickets</span>
              </div>
              <div className="bowling-stats-bottom-info-div">
                <span id="ball-stat-span-1">
                  {this.props.testBowlerStats["0"].EconomyRate
                    ? this.props.testBowlerStats["0"].EconomyRate.length === 0
                      ? "-"
                      : this.props.testBowlerStats["0"].EconomyRate[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="ball-stat-span-2">Economy rate</span>
              </div>
              {/* <div className="bowling-stats-bottom-info-div">
                <span id="ball-stat-span-1">30.54</span>
                <span id="ball-stat-span-2">Strike Rate</span>
              </div> */}
              <div className="bowling-stats-bottom-info-div">
                <span id="ball-stat-span-1">
                  {this.props.testBowlerStats["0"].FourWickets
                    ? this.props.testBowlerStats["0"].FourWickets.length === 0
                      ? "-"
                      : this.props.testBowlerStats["0"].FourWickets[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="ball-stat-span-2">4 wickets</span>
              </div>
              <div className="bowling-stats-bottom-info-div">
                <span id="ball-stat-span-1">
                  {this.props.testBowlerStats["0"].FiveWickets
                    ? this.props.testBowlerStats["0"].FiveWickets.length === 0
                      ? "-"
                      : this.props.testBowlerStats["0"].FiveWickets[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="ball-stat-span-2">5 wickets</span>
              </div>
            </div>
          </div>
          <div className="bowling-Odi-div">
            <h3 id="bowling-format-heading">ODI</h3>
            <div className="bowling-stats-info-parent-div">
              <div className="bowling-stats-info-div">
                <span id="ball-stat-span-1">
                  {" "}
                  {this.props.odiBowlerStats["0"].Matches
                    ? this.props.odiBowlerStats["0"].Matches.length === 0
                      ? "-"
                      : this.props.odiBowlerStats["0"].Matches[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="ball-stat-span-2">Matches</span>
              </div>
              <div className="bowling-stats-info-div">
                <span id="ball-stat-span-1">
                  {this.props.odiBowlerStats["0"].Innings
                    ? this.props.odiBowlerStats["0"].Innings.length === 0
                      ? "-"
                      : this.props.odiBowlerStats["0"].Innings[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="ball-stat-span-2">Innings</span>
              </div>
              <div className="bowling-stats-info-div">
                <span id="ball-stat-span-1">
                  {this.props.odiBowlerStats["0"].RunsConceded
                    ? this.props.odiBowlerStats["0"].RunsConceded.length === 0
                      ? "-"
                      : this.props.odiBowlerStats["0"].RunsConceded[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="ball-stat-span-2">Runs Conceded</span>
              </div>
              <div className="bowling-stats-info-div">
                <span id="ball-stat-span-1">
                  {this.props.odiBowlerStats["0"].BallsBowled
                    ? this.props.odiBowlerStats["0"].BallsBowled.length === 0
                      ? "-"
                      : this.props.odiBowlerStats["0"].BallsBowled[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="ball-stat-span-2">Balls bowled</span>
              </div>
              {/* <div className="bowling-stats-info-div">
                <span id="ball-stat-span-1">123.4</span>
                <span id="ball-stat-span-2">Economy rate</span>
              </div> */}
            </div>
            <div
              className="bowling-stats-info-parent-div"
              style={{ borderBottom: "none" }}
            >
              <div className="bowling-stats-bottom-info-div">
                <span id="ball-stat-span-1">
                  {this.props.odiBowlerStats["0"].TotalWIckets
                    ? this.props.odiBowlerStats["0"].TotalWIckets.length === 0
                      ? "-"
                      : this.props.odiBowlerStats["0"].TotalWIckets[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="ball-stat-span-2">Wickets</span>
              </div>
              <div className="bowling-stats-bottom-info-div">
                <span id="ball-stat-span-1">
                  {this.props.odiBowlerStats["0"].EconomyRate
                    ? this.props.odiBowlerStats["0"].EconomyRate.length === 0
                      ? "-"
                      : this.props.odiBowlerStats["0"].EconomyRate[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="ball-stat-span-2">Economy rate</span>
              </div>
              {/* <div className="bowling-stats-bottom-info-div">
                <span id="ball-stat-span-1">30.54</span>
                <span id="ball-stat-span-2">Strike Rate</span>
              </div> */}
              <div className="bowling-stats-bottom-info-div">
                <span id="ball-stat-span-1">
                  {this.props.odiBowlerStats["0"].FourWickets
                    ? this.props.odiBowlerStats["0"].FourWickets.length === 0
                      ? "-"
                      : this.props.odiBowlerStats["0"].FourWickets[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="ball-stat-span-2">4 wickets</span>
              </div>
              <div className="bowling-stats-bottom-info-div">
                <span id="ball-stat-span-1">
                  {this.props.odiBowlerStats["0"].FiveWickets
                    ? this.props.odiBowlerStats["0"].FiveWickets.length === 0
                      ? "-"
                      : this.props.odiBowlerStats["0"].FiveWickets[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="ball-stat-span-2">5 wickets</span>
              </div>
            </div>
          </div>
          <div className="bowling-T20-div">
            <h3 id="bowling-format-heading">T20</h3>
            <div className="bowling-stats-info-parent-div">
              <div className="bowling-stats-info-div">
                <span id="ball-stat-span-1">
                  {this.props.t20BowlerStats["0"].Matches
                    ? this.props.t20BowlerStats["0"].Matches.length === 0
                      ? "-"
                      : this.props.t20BowlerStats["0"].Matches[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="ball-stat-span-2">Matches</span>
              </div>
              <div className="bowling-stats-info-div">
                <span id="ball-stat-span-1">
                  {this.props.t20BowlerStats["0"].Innings
                    ? this.props.t20BowlerStats["0"].Innings.length === 0
                      ? "-"
                      : this.props.t20BowlerStats["0"].Innings[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="ball-stat-span-2">Innings</span>
              </div>
              <div className="bowling-stats-info-div">
                <span id="ball-stat-span-1">
                  {this.props.t20BowlerStats["0"].RunsConceded
                    ? this.props.t20BowlerStats["0"].RunsConceded.length === 0
                      ? "-"
                      : this.props.t20BowlerStats["0"].RunsConceded[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="ball-stat-span-2">Runs Conceded</span>
              </div>
              <div className="bowling-stats-info-div">
                <span id="ball-stat-span-1">
                  {this.props.t20BowlerStats["0"].BallsBowled
                    ? this.props.t20BowlerStats["0"].BallsBowled.length === 0
                      ? "-"
                      : this.props.t20BowlerStats["0"].BallsBowled[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="ball-stat-span-2">Balls bowled</span>
              </div>
            </div>
            <div
              className="bowling-stats-info-parent-div"
              style={{ borderBottom: "none" }}
            >
              <div className="bowling-stats-bottom-info-div">
                <span id="ball-stat-span-1">
                  {this.props.t20BowlerStats["0"].TotalWIckets
                    ? this.props.t20BowlerStats["0"].TotalWIckets.length === 0
                      ? "-"
                      : this.props.t20BowlerStats["0"].TotalWIckets[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="ball-stat-span-2">Wickets</span>
              </div>

              <div className="bowling-stats-bottom-info-div">
                <span id="ball-stat-span-1">
                  {this.props.t20BowlerStats["0"].EconomyRate
                    ? this.props.t20BowlerStats["0"].EconomyRate.length === 0
                      ? "-"
                      : this.props.t20BowlerStats["0"].EconomyRate[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="ball-stat-span-2">Economy rate</span>
              </div>
              <div className="bowling-stats-bottom-info-div">
                <span id="ball-stat-span-1">
                  {this.props.t20BowlerStats["0"].FourWickets
                    ? this.props.t20BowlerStats["0"].FourWickets.length === 0
                      ? "-"
                      : this.props.t20BowlerStats["0"].FourWickets[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="ball-stat-span-2">4 wickets</span>
              </div>
              <div className="bowling-stats-bottom-info-div">
                <span id="ball-stat-span-1">
                  {this.props.t20BowlerStats["0"].FiveWickets
                    ? this.props.t20BowlerStats["0"].FiveWickets.length === 0
                      ? "-"
                      : this.props.t20BowlerStats["0"].FiveWickets[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="ball-stat-span-2">5 wickets</span>
              </div>
            </div>
          </div>
          {/* <div className="bowling-Ipl-div">
            <h3 id="bowling-format-heading">IPL</h3>
            <div className="bowling-stats-info-parent-div">
              <div className="bowling-stats-info-div">
                <span id="ball-stat-span-1">500</span>
                <span id="ball-stat-span-2">Matches</span>
              </div>
              <div className="bowling-stats-info-div">
                <span id="ball-stat-span-1">623</span>
                <span id="ball-stat-span-2">Innings</span>
              </div>
              <div className="bowling-stats-info-div">
                <span id="ball-stat-span-1">21756</span>
                <span id="ball-stat-span-2">Runs Conceded</span>
              </div>
              <div className="bowling-stats-info-div">
                <span id="ball-stat-span-1">37568</span>
                <span id="ball-stat-span-2">Balls bowled</span>
              </div>
              <div className="bowling-stats-info-div">
                <span id="ball-stat-span-1">123.4</span>
                <span id="ball-stat-span-2">Economy rate</span>
              </div>
            </div>
            <div
              className="bowling-stats-info-parent-div"
              style={{ borderBottom: "none" }}
            >
              <div className="bowling-stats-bottom-info-div">
                <span id="ball-stat-span-1">375</span>
                <span id="ball-stat-span-2">Wickets</span>
              </div>
              <div className="bowling-stats-bottom-info-div">
                <span id="ball-stat-span-1">125</span>
                <span id="ball-stat-span-2">Average</span>
              </div>
              <div className="bowling-stats-bottom-info-div">
                <span id="ball-stat-span-1">30.54</span>
                <span id="ball-stat-span-2">Strike Rate</span>
              </div>
              <div className="bowling-stats-bottom-info-div">
                <span id="ball-stat-span-1">55</span>
                <span id="ball-stat-span-2">4 wickets</span>
              </div>
              <div className="bowling-stats-bottom-info-div">
                <span id="ball-stat-span-1">3</span>
                <span id="ball-stat-span-2">5 wickets</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  odiBowlerStats: state.PlayerReducer.odiBowlerStats,
  t20BowlerStats: state.PlayerReducer.t20BowlerStats,
  testBowlerStats: state.PlayerReducer.testBowlerStats
});

export default connect(
  mapStateToProps,
  {
    getODIBowlerStats,
    getT20BowlerStats,
    getTestBowlerStats
    // getTestBatsmanStats,
    // getT20BatsmanStats,
    // getBatsmanStats
  }
)(PlayerBowlingStats);
