import React, { Component } from "react";
import "../components/css/PlayerBattingStats.css";
import {
  getODIBatsmanStats,
  getTestBatsmanStats,
  getT20BatsmanStats,
  getBatsmanStats
} from "../actions/PlayerAction";
import { connect } from "react-redux";

export class PlayerBattingStats extends Component {
  componentDidMount() {
    console.log("from mount", this.props.player_id);
    this.props.getODIBatsmanStats(this.props.player_id);

    this.props.getT20BatsmanStats(this.props.player_id);
    this.props.getTestBatsmanStats(this.props.player_id);
  }

  render() {
    console.log(
      "Component batting stats ",
      this.props.t20BatsmanStats["0"].TotalRuns
        ? this.props.t20BatsmanStats["0"].TotalRuns.length === 0
          ? console.log("not returned")
          : this.props.t20BatsmanStats["0"].TotalRuns[0].match_type
        : console.log("not found")
    );

    return (
      <div className="bat-main">
        <div className="battting-main-div">
          <div className="battting-Test-div">
            <h3 id="batting-format-heading" className="jest-Heading-1">
              Test
            </h3>
            <div className="batting-stats-info-parent-div">
              <div className="batting-stats-info-div">
                <span id="bat-stat-span-1">
                  {this.props.batsmanStats["0"].Matches
                    ? this.props.batsmanStats["0"].Matches.length === 0
                      ? "-"
                      : this.props.batsmanStats["0"].Matches[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="bat-stat-span-2">Matches</span>
              </div>
              <div className="batting-stats-info-div">
                <span id="bat-stat-span-1">623</span>
                <span id="bat-stat-span-2">Innings</span>
              </div>
              <div className="batting-stats-info-div">
                <span id="bat-stat-span-1">
                  {this.props.batsmanStats["0"].TotalRuns
                    ? this.props.batsmanStats["0"].TotalRuns.length === 0
                      ? "-"
                      : this.props.batsmanStats["0"].TotalRuns[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="bat-stat-span-2">Runs</span>
              </div>
              <div className="batting-stats-info-div">
                <span id="bat-stat-span-1">
                  {this.props.batsmanStats["0"].BallsFaced
                    ? this.props.batsmanStats["0"].BallsFaced.length === 0
                      ? "-"
                      : this.props.batsmanStats["0"].BallsFaced[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="bat-stat-span-2">Balls Faced</span>
              </div>
              <div className="batting-stats-info-div">
                <span id="bat-stat-span-1">
                  {this.props.batsmanStats["0"].StrikeRate
                    ? this.props.batsmanStats["0"].StrikeRate.length === 0
                      ? "-"
                      : this.props.batsmanStats["0"].StrikeRate[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="bat-stat-span-2">Strike Rate</span>
              </div>
              {/* <div className="batting-stats-info-div">
                <span id="bat-stat-span-1">43</span>
                <span id="bat-stat-span-2">Average</span>
              </div> */}
            </div>
            <div
              className="batting-stats-info-parent-div"
              style={{ borderBottom: "none" }}
            >
              <div className="batting-stats-info-div">
                <span id="bat-stat-span-1">
                  {this.props.batsmanStats["0"].Highestscore
                    ? this.props.batsmanStats["0"].Highestscore.length === 0
                      ? "-"
                      : this.props.batsmanStats["0"].Highestscore[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="bat-stat-span-2">Highest Score</span>
              </div>
              <div className="batting-stats-info-div">
                <span id="bat-stat-span-1">
                  {this.props.batsmanStats["0"].NotOut
                    ? this.props.batsmanStats["0"].NotOut.length === 0
                      ? "-"
                      : this.props.batsmanStats["0"].NotOut[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="bat-stat-span-2">Not Out</span>
              </div>
              <div className="batting-stats-info-div">
                <span id="bat-stat-span-1">
                  {this.props.batsmanStats["0"].Hundreds
                    ? this.props.batsmanStats["0"].Hundreds.length === 0
                      ? "-"
                      : this.props.batsmanStats["0"].Hundreds[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="bat-stat-span-2">100s</span>
              </div>
              <div className="batting-stats-info-div">
                <span id="bat-stat-span-1">
                  {this.props.batsmanStats["0"].Fifties
                    ? this.props.batsmanStats["0"].Fifties.length === 0
                      ? "-"
                      : this.props.batsmanStats["0"].Fifties[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="bat-stat-span-2">50s</span>
              </div>
              <div className="batting-stats-info-div">
                <span id="bat-stat-span-1">
                  {this.props.batsmanStats["0"].TwoHundreds
                    ? this.props.batsmanStats["0"].TwoHundreds.length === 0
                      ? "-"
                      : this.props.batsmanStats["0"].TwoHundreds[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="bat-stat-span-2">200s</span>
              </div>
              <div className="batting-stats-info-div">
                <span id="bat-stat-span-1">
                  {this.props.batsmanStats["0"].Fours
                    ? this.props.batsmanStats["0"].Fours.length === 0
                      ? "-"
                      : this.props.batsmanStats["0"].Fours[0].player_stats_value
                    : console.log("not found")}
                </span>
                <span id="bat-stat-span-2">4s</span>
              </div>
              <div className="batting-stats-info-div">
                <span id="bat-stat-span-1">
                  {this.props.batsmanStats["0"].Sixes
                    ? this.props.batsmanStats["0"].Sixes.length === 0
                      ? "-"
                      : this.props.batsmanStats["0"].Sixes[0].player_stats_value
                    : console.log("not found")}
                </span>
                <span id="bat-stat-span-2">6s</span>
              </div>
            </div>
          </div>
          <div className="battting-Odi-div">
            <h3 id="batting-format-heading" className="jest-Heading-3">
              ODI
            </h3>
            <div className="batting-stats-info-parent-div">
              <div className="batting-stats-info-div">
                <span id="bat-stat-span-1">
                  {this.props.odiBatsmanStats["0"].Matches
                    ? this.props.odiBatsmanStats["0"].Matches.length === 0
                      ? "-"
                      : this.props.odiBatsmanStats["0"].Matches[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="bat-stat-span-2">Matches</span>
              </div>
              <div className="batting-stats-info-div">
                <span id="bat-stat-span-1">623</span>
                <span id="bat-stat-span-2">Innings</span>
              </div>
              <div className="batting-stats-info-div">
                <span id="bat-stat-span-1">
                  {this.props.odiBatsmanStats["0"].TotalRuns
                    ? this.props.odiBatsmanStats["0"].TotalRuns.length === 0
                      ? "-"
                      : this.props.odiBatsmanStats["0"].TotalRuns[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="bat-stat-span-2">Runs</span>
              </div>
              <div className="batting-stats-info-div">
                <span id="bat-stat-span-1">
                  {this.props.odiBatsmanStats["0"].BallsFaced
                    ? this.props.odiBatsmanStats["0"].BallsFaced.length === 0
                      ? "-"
                      : this.props.odiBatsmanStats["0"].BallsFaced[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="bat-stat-span-2">Balls Faced</span>
              </div>
              <div className="batting-stats-info-div">
                <span id="bat-stat-span-1">
                  {this.props.odiBatsmanStats["0"].StrikeRate
                    ? this.props.odiBatsmanStats["0"].StrikeRate.length === 0
                      ? "-"
                      : this.props.odiBatsmanStats["0"].StrikeRate[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="bat-stat-span-2">Strike Rate</span>
              </div>
            </div>
            <div
              className="batting-stats-info-parent-div"
              style={{ borderBottom: "none" }}
            >
              <div className="batting-stats-info-div">
                <span id="bat-stat-span-1">
                  {this.props.odiBatsmanStats["0"].Highestscore
                    ? this.props.odiBatsmanStats["0"].Highestscore.length === 0
                      ? "-"
                      : this.props.odiBatsmanStats["0"].Highestscore[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="bat-stat-span-2">Highest Score</span>
              </div>
              <div className="batting-stats-info-div">
                <span id="bat-stat-span-1">
                  {this.props.odiBatsmanStats["0"].NotOut
                    ? this.props.odiBatsmanStats["0"].NotOut.length === 0
                      ? "-"
                      : this.props.odiBatsmanStats["0"].NotOut[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="bat-stat-span-2">Not Out</span>
              </div>
              <div className="batting-stats-info-div">
                <span id="bat-stat-span-1">
                  {this.props.odiBatsmanStats["0"].Hundreds
                    ? this.props.odiBatsmanStats["0"].Hundreds.length === 0
                      ? "-"
                      : this.props.odiBatsmanStats["0"].Hundreds[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="bat-stat-span-2">100s</span>
              </div>
              <div className="batting-stats-info-div">
                <span id="bat-stat-span-1">
                  {this.props.odiBatsmanStats["0"].Fifties
                    ? this.props.odiBatsmanStats["0"].Fifties.length === 0
                      ? "-"
                      : this.props.odiBatsmanStats["0"].Fifties[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="bat-stat-span-2">50s</span>
              </div>
              <div className="batting-stats-info-div">
                <span id="bat-stat-span-1">
                  {this.props.odiBatsmanStats["0"].TwoHundreds
                    ? this.props.odiBatsmanStats["0"].TwoHundreds.length === 0
                      ? "-"
                      : this.props.odiBatsmanStats["0"].TwoHundreds[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="bat-stat-span-2">200s</span>
              </div>
              <div className="batting-stats-info-div">
                <span id="bat-stat-span-1">
                  {this.props.odiBatsmanStats["0"].Fours
                    ? this.props.odiBatsmanStats["0"].Fours.length === 0
                      ? "-"
                      : this.props.odiBatsmanStats["0"].Fours[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="bat-stat-span-2">4s</span>
              </div>
              <div className="batting-stats-info-div">
                <span id="bat-stat-span-1">
                  {this.props.odiBatsmanStats["0"].Sixes
                    ? this.props.odiBatsmanStats["0"].Sixes.length === 0
                      ? "-"
                      : this.props.odiBatsmanStats["0"].Sixes[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="bat-stat-span-2">6s</span>
              </div>
            </div>
          </div>
          <div className="battting-T20-div">
            <h3 id="batting-format-heading" className="jest-Heading-2">
              T20
            </h3>
            <div className="batting-stats-info-parent-div">
              <div className="batting-stats-info-div">
                <span id="bat-stat-span-1">
                  {this.props.t20BatsmanStats["0"].Matches
                    ? this.props.t20BatsmanStats["0"].Matches.length === 0
                      ? "-"
                      : this.props.t20BatsmanStats["0"].Matches[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="bat-stat-span-2">Matches</span>
              </div>

              <div className="batting-stats-info-div">
                <span id="bat-stat-span-1">
                  {this.props.t20BatsmanStats["0"].Matches
                    ? this.props.t20BatsmanStats["0"].Matches.length === 0
                      ? "-"
                      : this.props.t20BatsmanStats["0"].Matches[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="bat-stat-span-2">Runs</span>
              </div>
              <div className="batting-stats-info-div">
                <span id="bat-stat-span-1">
                  {this.props.t20BatsmanStats["0"].BallsFaced
                    ? this.props.t20BatsmanStats["0"].BallsFaced.length === 0
                      ? "-"
                      : this.props.t20BatsmanStats["0"].BallsFaced[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="bat-stat-span-2">Balls Faced</span>
              </div>
              <div className="batting-stats-info-div">
                <span id="bat-stat-span-1">
                  {this.props.t20BatsmanStats["0"].StrikeRate
                    ? this.props.t20BatsmanStats["0"].StrikeRate.length === 0
                      ? "-"
                      : this.props.t20BatsmanStats["0"].StrikeRate[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="bat-stat-span-2">Strike Rate</span>
              </div>
            </div>
            <div
              className="batting-stats-info-parent-div"
              style={{ borderBottom: "none" }}
            >
              <div className="batting-stats-info-div">
                <span id="bat-stat-span-1">
                  {this.props.t20BatsmanStats["0"].Highestscore
                    ? this.props.t20BatsmanStats["0"].Highestscore.length === 0
                      ? "-"
                      : this.props.t20BatsmanStats["0"].Highestscore[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="bat-stat-span-2">Highest Score</span>
              </div>
              <div className="batting-stats-info-div">
                <span id="bat-stat-span-1">
                  {this.props.t20BatsmanStats["0"].NotOut
                    ? this.props.t20BatsmanStats["0"].NotOut.length === 0
                      ? "-"
                      : this.props.t20BatsmanStats["0"].NotOut[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="bat-stat-span-2">Not Out</span>
              </div>
              <div className="batting-stats-info-div">
                <span id="bat-stat-span-1">
                  {this.props.t20BatsmanStats["0"].Hundreds
                    ? this.props.t20BatsmanStats["0"].Hundreds.length === 0
                      ? "-"
                      : this.props.t20BatsmanStats["0"].Hundreds[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="bat-stat-span-2">100s</span>
              </div>
              <div className="batting-stats-info-div">
                <span id="bat-stat-span-1">
                  {this.props.t20BatsmanStats["0"].Fifties
                    ? this.props.t20BatsmanStats["0"].Fifties.length === 0
                      ? "-"
                      : this.props.t20BatsmanStats["0"].Fifties[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="bat-stat-span-2">50s</span>
              </div>
              <div className="batting-stats-info-div">
                <span id="bat-stat-span-1">
                  {this.props.t20BatsmanStats["0"].TwoHundreds
                    ? this.props.t20BatsmanStats["0"].TwoHundreds.length === 0
                      ? "-"
                      : this.props.t20BatsmanStats["0"].TwoHundreds[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="bat-stat-span-2">200s</span>
              </div>
              <div className="batting-stats-info-div">
                <span id="bat-stat-span-1">
                  {this.props.t20BatsmanStats["0"].Fours
                    ? this.props.t20BatsmanStats["0"].Fours.length === 0
                      ? "-"
                      : this.props.t20BatsmanStats["0"].Fours[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="bat-stat-span-2">4s</span>
              </div>
              <div className="batting-stats-info-div">
                <span id="bat-stat-span-1">
                  {this.props.t20BatsmanStats["0"].Sixes
                    ? this.props.t20BatsmanStats["0"].Sixes.length === 0
                      ? "-"
                      : this.props.t20BatsmanStats["0"].Sixes[0]
                          .player_stats_value
                    : console.log("not found")}
                </span>
                <span id="bat-stat-span-2">6s</span>
              </div>
            </div>
          </div>
          {/* <div className="battting-Ipl-div">
            <h3 id="batting-format-heading">IPL</h3>
            <div className="batting-stats-info-parent-div">
              <div className="batting-stats-info-div">
                <span id="bat-stat-span-1">500</span>
                <span id="bat-stat-span-2">Matches</span>
              </div>
              <div className="batting-stats-info-div">
                <span id="bat-stat-span-1">623</span>
                <span id="bat-stat-span-2">Innings</span>
              </div>
              <div className="batting-stats-info-div">
                <span id="bat-stat-span-1">21756</span>
                <span id="bat-stat-span-2">Runs</span>
              </div>
              <div className="batting-stats-info-div">
                <span id="bat-stat-span-1">37568</span>
                <span id="bat-stat-span-2">Balls Faced</span>
              </div>
              <div className="batting-stats-info-div">
                <span id="bat-stat-span-1">123.4</span>
                <span id="bat-stat-span-2">Strike Rate</span>
              </div>
              <div className="batting-stats-info-div">
                <span id="bat-stat-span-1">43</span>
                <span id="bat-stat-span-2">Average</span>
              </div>
            </div>
            <div
              className="batting-stats-info-parent-div"
              style={{ borderBottom: "none" }}
            >
              <div className="batting-stats-info-div">
                <span id="bat-stat-span-1">375</span>
                <span id="bat-stat-span-2">Highest Score</span>
              </div>
              <div className="batting-stats-info-div">
                <span id="bat-stat-span-1">125</span>
                <span id="bat-stat-span-2">Not Out</span>
              </div>
              <div className="batting-stats-info-div">
                <span id="bat-stat-span-1">30</span>
                <span id="bat-stat-span-2">100s</span>
              </div>
              <div className="batting-stats-info-div">
                <span id="bat-stat-span-1">55</span>
                <span id="bat-stat-span-2">50s</span>
              </div>
              <div className="batting-stats-info-div">
                <span id="bat-stat-span-1">3</span>
                <span id="bat-stat-span-2">200s</span>
              </div>
              <div className="batting-stats-info-div">
                <span id="bat-stat-span-1">2749</span>
                <span id="bat-stat-span-2">4s</span>
              </div>
              <div className="batting-stats-info-div">
                <span id="bat-stat-span-1">2140</span>
                <span id="bat-stat-span-2">6s</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  batsmanStats: state.PlayerReducer.batsmanStats,
  odiBatsmanStats: state.PlayerReducer.odiBatsmanStats,
  t20BatsmanStats: state.PlayerReducer.t20BatsmanStats
});

export default connect(
  mapStateToProps,
  {
    getODIBatsmanStats,
    getTestBatsmanStats,
    getT20BatsmanStats,
    getBatsmanStats
  }
)(PlayerBattingStats);
