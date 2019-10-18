import React, { Component } from "react";
import { getMatchScorecardDetailbyId } from "../actions/Matches";
import { connect } from "react-redux";
import "../components/css/MatchScoreDetails.css";

export class MatchScoreDetails extends Component {
  componentDidMount() {
    this.props.getMatchScorecardDetailbyId(this.props.match_id);
  }
  render() {
    return (
      <div>
        <div style={{ marginTop: 210 + "px" }}>
          {this.props.match_score.length == 0 ? (
            <div className="matchscorecardloader"></div>
          ) : (
              this.props.match_score.map(match => (
                <div
                  className="top-container-scorecard"
                  style={{ marginTop: 80 + "px", borderRadius: "5px" }}
                >
                  <div></div>

                  <div className="main-container-scorecard">
                    <div
                      style={{
                        borderTopLeftRadius: "5px",
                        borderTopRightRadius: "5px",
                        backgroundColor: "#2980B9",
                        fontSize: "500",
                        color: "white",
                        padding: "10px"
                      }}
                    >
                      Inning {match.inning.inning}
                    </div>
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
                          <div>
                            {batsman.wicket_type} {batsman.fielder_name}{" "}
                            {batsman.bowler_name}
                          </div>
                          <div>{batsman.batsman_run}</div>
                          <div>{batsman.ball_faced}</div>
                          <div>{batsman.fours}</div>
                          <div>{batsman.sixes}</div>
                          <div>{batsman.striker_rate}</div>
                        </div>
                      ))}
                    </div>

                    <div
                      className="extras-content"
                      style={{ fontWeight: "500", padding: "5px" }}
                    >
                      <div>Extras</div>
                      <div></div>
                      <div>
                        {" "}
                        {match.extra_total.map(total => total.extra_count)} extras
                    </div>
                    </div>

                    <div
                      className="total-content"
                      style={{ fontWeight: "500", padding: "5px" }}
                    >
                      <div>Total</div>
                      <div></div>
                      <div>
                        {match.total_score.map(score => score.total_runs)} /
                      {match.total_score.map(score => score.total_wicket)}({" "}
                        {match.total_score.map(score => score.total_overs)} overs)
                    </div>
                    </div>
                    <div></div>
                    <div
                      className="bowler-heading"
                      style={{ padding: "5px", fontWeight: "500" }}
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
                          {/* {<div>{bowler.wicket_taken === null && bowler.wicket_taken === ""}</div> ? (<div> 0</div>) : (<div>{bowler.wicket_taken}</div>)} */}
                          <div>{bowler.wicket_taken}</div>
                          <div>{bowler.total_extras}</div>
                          <div>{bowler.ecom}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div></div>
                </div>
              ))
            )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  match_score: state.matchreducer.match_score
});

export default connect(
  mapStateToProps,
  { getMatchScorecardDetailbyId }
)(MatchScoreDetails);
