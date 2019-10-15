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
            <div className="stats-container">
              <div className="top-title"> Manhattan</div>
              <div>
                <iframe
                  src={this.props.match_stats_manhattan.manhattan}
                  style={{
                    width: 1100 + "px",
                    height: 600 + "px",
                    border: "none"
                  }}
                />
              </div>
            </div>
            <div></div>
          </div>

          <div className="top-container-stats" style={{ marginTop: 70 + "px" }}>
            <div></div>
            <div className="stats-container">
              <div className="top-title"> Pie chart of players run</div>
              <div>
                <iframe
                  src={this.props.match_stats_pie1.piechartOne}
                  style={{
                    width: 1100 + "px",
                    height: 600 + "px",
                    border: "none"
                  }}
                />
              </div>
            </div>
            <div></div>
          </div>
          <div className="top-container-stats" style={{ marginTop: 70 + "px" }}>
            <div></div>
            <div className="stats-container">
              <div className="top-title"> Pie chart of bowlers wicket</div>
              <div>
                <iframe
                  src={this.props.match_stats_pie2.piechartTwo}
                  style={{
                    width: 1100 + "px",
                    height: 600 + "px",
                    border: "none"
                  }}
                />
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
