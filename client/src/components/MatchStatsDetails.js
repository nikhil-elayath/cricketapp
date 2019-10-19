import React, { Component } from "react";
import "../components/css/MatchStatsDetails.css";
import {
  getManhattanGraphbyId,
  getPieChartOnebyId,
  getPieChartTwobyId
} from "../actions/Matches";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export class MatchStatsDetails extends Component {
  componentDidMount() {
    // [yatin] calling indivisual stats api on component mount
    // this.props.getManhattanGraphbyId(this.props.match_id);
    this.props.getPieChartOnebyId(this.props.match_id);
    // this.props.getPieChartTwobyId(this.props.match_id);
  }
  render() {
    console.log("received", this.props.match_stats_pie1);
    console.log("received typeof", typeof this.props.match_stats_pie1);
    console.log("accessing head", this.props.match_stats_pie1[3]);
    console.log("accessing head2", this.props.match_stats_pie1.head2);
    console.log("accessing status_code", this.props.match_stats_pie1.status_code);
    console.log("accessing message", this.props.match_stats_pie1.message);
    return (
      <div>
        {/* {this.props.isLoading ? (
          <div style={{ margin: "400px" }}>
            <Loader
              type="TailSpin"
              color="#2980b9"
              height="100"
              width="100"
            />
          </div>
        ) : ( */}
        <div style={{ marginTop: 240 + "px" }}>

          <div className="top-container-stats" style={{ marginTop: 80 + "px" }}>
            <div></div>
            <div id="manhattan-container" className="stats-container">
              <div id="manhattan-title" className="top-title"> Manhattan</div>
              <div>
                <iframe className="stats-graph"
                  src={this.props.match_stats_manhattan.manhattan}
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
                <iframe className="stats-graph"
                  src={this.props.match_stats_pie1.head}
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
                <iframe className="stats-graph"
                  src={this.props.match_stats_pie2.piechartTwo}
                />
              </div>
            </div>
            <div></div>
          </div>
        </div>
        {/* )} */}
      </div>

    );
  }
}

const mapStateToProps = state => ({
  match_stats_manhattan: state.matchreducer.match_stats_manhattan,
  match_stats_pie1: state.matchreducer.match_stats_pie1,
  match_stats_pie2: state.matchreducer.match_stats_pie2,
  isLoading: state.LoadingReducer.isLoading
});

export default connect(
  mapStateToProps,
  { getManhattanGraphbyId, getPieChartOnebyId, getPieChartTwobyId }
)(MatchStatsDetails);
