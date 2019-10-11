import React, { Component } from "react";
import "../components/css/PlayerBowlingStats.css";

import { getODIBowlerStats } from "../actions/PlayerAction";

import { connect } from "react-redux";

export class PlayerBowlingStats extends Component {
  componentDidMount() {
    console.log("from mount", this.props.player_id);
    this.props.getODIBowlerStats(this.props.player_id);

    // this.props.getT20BatsmanStats(this.props.player_id);
    // this.props.getTestBatsmanStats(this.props.player_id);
  }

  render() {
    // console.log(
    //   "Component bowling stats ",
    //   this.props.odiBowlerStats["0"].RunsConceded
    //     ? this.props.odiBowlerStats["0"].RunsConceded.length === 0
    //       ? console.log("not returned")
    //       : this.props.odiBowlerStats["0"].RunsConceded[0].match_type
    //     : console.log("not found")
    // );

    console.log("Component bowling stats", this.props);

    return (
      <div className="ball-main">
        <div className="bowling-main-div">
          <div className="bowling-Test-div">
            <h3 id="bowling-format-heading">Test</h3>
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
          </div>
          <div className="bowling-Odi-div">
            <h3 id="bowling-format-heading">ODI</h3>
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
          </div>
          <div className="bowling-T20-div">
            <h3 id="bowling-format-heading">T20</h3>
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
          </div>
          <div className="bowling-Ipl-div">
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
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  odiBowlerStats: state.PlayerReducer.odiBowlerStats
  // odiBatsmanStats: state.PlayerReducer.odiBatsmanStats,
  // t20BatsmanStats: state.PlayerReducer.t20BatsmanStats
});

export default connect(
  mapStateToProps,
  {
    getODIBowlerStats
    // getTestBatsmanStats,
    // getT20BatsmanStats,
    // getBatsmanStats
  }
)(PlayerBowlingStats);
