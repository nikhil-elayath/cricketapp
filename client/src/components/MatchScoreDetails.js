import React, { Component } from "react";
import { getMatchScorecardDetailbyId } from "../actions/Matches";
import { connect } from "react-redux";
import "../components/css/MatchScoreDetails.css";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export class MatchScoreDetails extends Component {
  componentDidMount() {
    this.props.getMatchScorecardDetailbyId(this.props.match_id);
  }
  render() {
    return (
      <div>
        <div className="main-spacing-container">
          {this.props.isLoading ? (
            <div style={{ margin: "400px" }}>
              <Loader
                type="TailSpin"
                color="#2980b9"
                height="100"
                width="100"
              />
            </div>
          ) : (
              this.props.match_score.map(match => (
                <div
                  className="top-container-scorecard"
                  style={{ borderRadius: "5px" }}
                >
                  <div id="scorecard-inning"
                    style={{
                      borderTopLeftRadius: "5px",
                      borderTopRightRadius: "5px",
                      backgroundColor: "#2980B9",
                      fontSize: "400",
                      color: "white",
                      padding: "10px"
                    }}
                  >
                    Inning {match.inning.inning}
                  </div>
                  <div className="main-container-scorecard">
                    <div
                      className="batsman-heading"
                      style={{ padding: "5px", fontWeight: "500" }}
                    >
                      <div id="batsmen-text">Batsmen</div>
                      <div></div>
                      <div id="runs-text">R</div>
                      <div id="ball-text">B</div>
                      <div id="fours-text">4s</div>
                      <div id="sixes-text">6s</div>
                      <div id="SR-text">SR</div>
                    </div>
                    <div>
                      {match.batsman.map(batsman => (
                        <div
                          className="batsman-heading"
                          style={{ padding: "5px" }}
                        >
                          <div id="batsmen-name">{batsman.striker_name}</div>
                          {batsman.wicket_type ?
                            (<div id="how-out">
                              {batsman.wicket_type == "caught" ? "(c) " : batsman.wicket_type}
                              {batsman.fielder_name}{" "} (b) {" "}
                              {batsman.bowler_name}
                            </div>) : (<div> not out </div>)
                          }
                          <div id="batsmen-run">{batsman.batsman_run}</div>
                          <div id="batsmen-ball-faced">{batsman.ball_faced}</div>
                          <div id="batsmen-fours">{batsman.fours}</div>
                          <div id="batsmen-sixes">{batsman.sixes}</div>
                          <div id="batsmen-strike-rate">{batsman.striker_rate}</div>
                        </div>
                      ))}
                    </div>

                    <div
                      className="extras-content"
                      style={{ fontWeight: "500", padding: "10px" }}
                    >
                      <div id="match-extras-text">Extras</div>
                      <div id="match-extras-value" style={{ margin: "0 80px 0 0" }}>
                        {match.extra_total.map(total => total.extra_count)} extras
                    </div>
                    </div>

                    <div
                      className="total-content"
                      style={{ fontWeight: "500", padding: "5px", borderBottom: "none" }}
                    >
                      <div id="total-text">Total</div>
                      <div id="total-value" style={{ margin: "0 40px 0 0" }}>
                        {match.total_score.map(score => score.total_runs)} /
                      {match.total_score.map(score => score.total_wicket)}({" "}
                        {match.total_score.map(score => score.total_overs)} overs)
                    </div>
                    </div>
                    <div
                      className="bowler-heading"
                      style={{ padding: "5px", fontWeight: "500", borderTop: "none" }}
                    >
                      <div id="bowler-text">Bowler</div>
                      <div></div>
                      <div id="bowler-over-text">O</div>
                      <div id="bowler-run-text">R</div>
                      <div id="bowler-wicket-text">W</div>
                      <div id="bowler-extras-text">Extra</div>
                      <div id="bowler-ecom-text">Ecom</div>
                    </div>
                    <div>
                      {match.all_bowler.map(bowler => (
                        <div
                          className="bowler-heading"
                          style={{ padding: "5px" }}
                        >
                          <div id="bowler-name-value">{bowler.bowler_name}</div>
                          <div></div>
                          <div id="bowler-overs-value">{bowler.total_over}</div>
                          <div id="bowler-runs-value">{bowler.given_runs}</div>
                          <div id="bowler-wicket-value">{bowler.wicket_taken}</div>
                          <div id="bowler-extras-value">{bowler.total_extras}</div>
                          <div id="bowler-ecom-value">{bowler.ecom}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  match_score: state.matchreducer.match_score,
  isLoading: state.LoadingReducer.isLoading
});

export default connect(
  mapStateToProps,
  { getMatchScorecardDetailbyId }
)(MatchScoreDetails);
