import React, { Component } from "react";
import "../components/css/MatchStatsDetails.css";
import {
  getManhattanGraphbyId,
  getPieChartOnebyId,
  getPieChartTwobyId
} from "../actions/Matches";
import { connect } from "react-redux";

export class MatchStatsDetails extends Component {
  componentDidMount() {
    // [yatin] calling indivisual stats api on component mount
    this.props.getManhattanGraphbyId(this.props.match_id);
    this.props.getPieChartOnebyId(this.props.match_id);
    this.props.getPieChartTwobyId(this.props.match_id);
  }
  render() {
    console.log(this.props.match_stats);
    return (
      <div>
        <div style={{ marginTop: 240 + "px" }}>
          <div className="top-container-stats" style={{ marginTop: 80 + "px" }}>
            <div></div>
            <div id="manhattan-container" className="stats-container">
              <div id="manhattan-title" className="top-title"> Manhattan</div>
              <div>
                {this.props.match_stats_manhattan.length == 0 ? (
                  <div className="matchscorecardloader"></div>
                ) :
                  (<iframe className="stats-graph"
                    src={this.props.match_stats_manhattan.manhattan}
                  />)}
              </div>
            </div>
            <div></div>
          </div>

          <div className="top-container-stats" style={{ marginTop: 70 + "px" }}>
            <div></div>
            <div className="stats-container">
              <div className="top-title"> Pie chart of players run</div>
              <div>
                {this.props.match_stats_pie1.length == 0 ? (
                  <div className="matchscorecardloader"></div>
                ) :
                  (<iframe className="stats-graph"
                    src={this.props.match_stats_pie1.piechartOne}
                  />)}
              </div>
            </div>
            <div></div>
          </div>
          <div className="top-container-stats" style={{ marginTop: 70 + "px" }}>
            <div></div>
            <div className="stats-container">
              <div className="top-title"> Pie chart of bowlers wicket</div>
              <div>
                {this.props.match_stats_pie2.length == 0 ? (
                  <div className="matchscorecardloader"></div>
                ) : (
                    <iframe className="stats-graph"
                      src={this.props.match_stats_pie2.piechartTwo}
                    />)}
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>

    );
  }
}

const mapStateToProps = state => ({
  match_stats_manhattan: state.matchreducer.match_stats_manhattan,
  match_stats_pie1: state.matchreducer.match_stats_pie1,
  match_stats_pie2: state.matchreducer.match_stats_pie2
});

export default connect(
  mapStateToProps,
  { getManhattanGraphbyId, getPieChartOnebyId, getPieChartTwobyId }
)(MatchStatsDetails);
