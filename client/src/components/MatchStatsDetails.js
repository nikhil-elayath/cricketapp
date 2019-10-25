import React, { Component } from "react";
import "../components/css/MatchStatsDetails.css";
import {
  getManhattanGraphbyId,
  getPieChartOnebyId,
  getPieChartTwobyId,
} from "../actions/Matches";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export class MatchStatsDetails extends Component {
  componentDidMount() {
    // [yatin] calling indivisual stats api on component mount
    this.props.getManhattanGraphbyId(this.props.match_id);
    this.props.getPieChartOnebyId(this.props.match_id);
    this.props.getPieChartTwobyId(this.props.match_id);
  }
  render() {
    return (
      <div>
        {/* [yatin] when the data content from the database is not loaded in the redux store 
            then loader will apper on the page */}
        {this.props.isLoading ? (
          <div style={{ margin: "400px" }}>

            <Loader
              type="TailSpin"
              color="#2980b9"
              height="100"
              width="100"
            />
            <span
              style={{
                marginTop: "20px",
                fontSize: "12px"
              }}
            >
              Loading Stats
									</span>
          </div>
        ) : (
            <div className="container-for-spacing">
              <div className="stats-main-container">
                <div id="manhattan-container" className="stats-container">
                  <p id="manhattan-title" className="top-title">
                    Manhattan
              </p>
                  <div>
                    <iframe id="manhattan-frame"
                      className="stats-graph"
                      src={this.props.match_stats_manhattan.head}
                    />
                  </div>
                </div>
                <div className="two-pie-chart-container">
                  <div className="stats-container">
                    <p id="pie1-title" className="top-title"> {this.props.match_stats_pie1.team_one} Batsmen</p>
                    <div>
                      <iframe
                        className="stats-graph"
                        src={this.props.match_stats_pie1.head}
                      />
                    </div>
                  </div>
                  <div className="stats-container">
                    <p className="top-title"> {this.props.match_stats_pie1.team_two} Batsmen</p>
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
                    <p className="top-title">{this.props.match_stats_pie2.teamone} Bowler</p>
                    <div>
                      <iframe
                        className="stats-graph"
                        src={this.props.match_stats_pie2.head}
                      />
                    </div>
                  </div>
                  <div className="stats-container">
                    <p className="top-title"> {this.props.match_stats_pie2.teamtwo} Bowler</p>
                    <div>
                      <iframe
                        className="stats-graph"
                        src={this.props.match_stats_pie2.head2}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>)}
      </div >
    );
  }
}

const mapStateToProps = state => ({
  // [yatin] mapping the data present in the redux store on the page
  match_stats_manhattan: state.matchreducer.match_stats_manhattan,
  match_stats_pie1: state.matchreducer.match_stats_pie1,
  match_stats_pie2: state.matchreducer.match_stats_pie2,
  isLoading: state.LoadingReducer.isLoading,
});

export default connect(
  mapStateToProps,
  { getManhattanGraphbyId, getPieChartOnebyId, getPieChartTwobyId }
)(MatchStatsDetails);
