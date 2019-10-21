import React, { Component } from "react";
import "../components/css/MatchStatsDetails.css";
import {
  getManhattanGraphbyId,
  getPieChartOnebyId,
  getPieChartTwobyId,
} from "../actions/Matches";
import { connect } from "react-redux";
// import Loader from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export class MatchStatsDetails extends Component {
  componentDidMount() {
    // [yatin] calling indivisual stats api on component mount
    this.props.getManhattanGraphbyId(this.props.match_id);
    this.props.getPieChartOnebyId(this.props.match_id);
    this.props.getPieChartTwobyId(this.props.match_id);
  }
  render() {
    console.log("received", this.props.match_stats_pie1);
    console.log("received typeof", typeof this.props.match_stats_pie1);
    console.log("accessing head", this.props.match_stats_pie1.head);
    console.log("accessing head2", this.props.match_stats_pie1.head2);
    console.log(
      "accessing status_code",
      this.props.match_stats_pie1.status_code
    );
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
        <div style={{ marginTop: 230 + "px" }}>
          <div className="stats-main-container">
            <div id="manhattan-container" className="stats-container">
              <p id="manhattan-title" className="top-title">
                Manhattan
              </p>
              <div>
                <iframe
                  className="stats-graph"
                  src={this.props.match_stats_manhattan.head}
                />
              </div>
            </div>
            <div className="two-pie-chart-container">
              <div className="stats-container">
                <p className="top-title"> Pie chart1 of players run</p>
                <div>
                  <iframe
                    className="stats-graph"
                    src={this.props.match_stats_pie1.head}
                  />
                </div>
              </div>
              <div className="stats-container">
                <p className="top-title"> Pie chart2 of players run</p>
                <div>
                  <iframe
                    className="stats-graph"
                    src={this.props.match_stats_pie1.head2}
                  />
                </div>
              </div>
            </div>
            <div className="two-pie-chart-container">
              <div className="stats-container">
                <p className="top-title"> Pie1 chart of bowlers wicket</p>
                <div>
                  <iframe
                    className="stats-graph"
                    src={this.props.match_stats_pie2.head}
                  />
                </div>
              </div>
              <div className="stats-container">
                <p className="top-title"> Pie2 chart of bowlers wicket</p>
                <div>
                  <iframe
                    className="stats-graph"
                    src={this.props.match_stats_pie2.head2}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

const mapStateToProps = state => ({
  match_stats_manhattan: state.matchreducer.match_stats_manhattan,
  match_stats_pie1: state.matchreducer.match_stats_pie1,
  match_stats_pie2: state.matchreducer.match_stats_pie2,
  isLoading: state.LoadingReducer.isLoading,
});

export default connect(
  mapStateToProps,
  { getManhattanGraphbyId, getPieChartOnebyId, getPieChartTwobyId }
)(MatchStatsDetails);
