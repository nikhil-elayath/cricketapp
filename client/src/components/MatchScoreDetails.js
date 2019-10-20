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
                  <div
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
                      <div>Batsmen</div>
                      <div></div>
                      <div>R</div>
                      <div>B</div>
                      <div>4s</div>
                      <div>6s</div>
                      <div>SR</div>
                    </div>
                    <div>
                      {match.batsman.map(batsman => (
                        <div
                          className="batsman-heading"
                          style={{ padding: "5px" }}
                        >
                          <div>{batsman.striker_name}</div>
                          {batsman.wicket_type ?
                            (<div>
                              {batsman.wicket_type == "caught" ? "(c) " : batsman.wicket_type}
                              {batsman.fielder_name}{" "} (b) {" "}
                              {batsman.bowler_name}
                            </div>) : (<div> not out </div>)
                          }
                          <div>{batsman.batsman_run}</div>
                          <div>{batsman.ball_faced}</div>
                          <div>{batsman.fours}</div>
                          <div>{batsman.sixes}</div>
                          <div> {batsman.striker_rate}</div>
                        </div>
                      ))}
                    </div>

                    <div
                      className="extras-content"
                      style={{ fontWeight: "500", padding: "10px" }}
                    >
                      <div>Extras</div>
                      <div style={{ margin: "0 80px 0 0" }}>
                        {" "}
                        {match.extra_total.map(total => total.extra_count)} extras
                    </div>
                    </div>

                    <div
                      className="total-content"
                      style={{ fontWeight: "500", padding: "5px", borderBottom: "none" }}
                    >
                      <div>Total</div>
                      <div style={{ margin: "0 40px 0 0" }}>
                        {match.total_score.map(score => score.total_runs)} /
                      {match.total_score.map(score => score.total_wicket)}({" "}
                        {match.total_score.map(score => score.total_overs)} overs)
                    </div>
                    </div>
                    <div
                      className="bowler-heading"
                      style={{ padding: "5px", fontWeight: "500", borderTop: "none" }}
                    >
                      <div>Bowler</div>
                      <div></div>
                      <div>O</div>
                      <div>R</div>
                      <div>W</div>
                      <div>Extra</div>
                      <div>Ecom</div>
                    </div>
                    <div>
                      {match.all_bowler.map(bowler => (
                        <div
                          className="bowler-heading"
                          style={{ padding: "5px" }}
                        >
                          <div>{bowler.bowler_name}</div>
                          <div></div>
                          <div>{bowler.total_over}</div>
                          <div>{bowler.given_runs}</div>
                          <div>{bowler.wicket_taken}</div>
                          <div>{bowler.total_extras}</div>
                          <div>{bowler.ecom}</div>
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
