import React, { Component } from "react";

// import MatchSecondaryNavbar from './common/MatchSecondaryNavbar'
import { getmatchdetailbyId, getRecentMatches } from "../actions/Matches.js";
import { connect } from "react-redux";
import "./css/MatchSummaryDetails.css";

export class MatchSummaryDetails extends Component {
  componentDidMount() {
    this.props.getmatchdetailbyId(this.props.match_id);
  }
  render() {
    console.log("Match Summary", this.props);
    return (
      <div>
        <div style={{ marginTop: 200 + "px" }}>
          {this.props.match.length == 0 ? (
            <div className="matchsummaryloader"></div>
          ) : (
            this.props.match.map(match => (
              <div className="top-container" style={{ height: "700px" }}>
                <div className="top-left-container">
                  <div className="top-title">Summary Scorecard</div>

                  <div style={{ margin: "18px 0 0 8px" }}>
                    {match.teamone_name[0].teamone_name}
                  </div>

                  <div className="teamone-top-players">
                    <div style={{ margin: "7px 0 0 12px", fontWeight: "500" }}>
                      {match.team1_batsman.map(t1_batsman => (
                        <div>{t1_batsman.player_name}</div>
                      ))}
                    </div>
                    <div
                      style={{
                        borderRight: "1px solid #272727",
                        margin: "7px 0 0 0"
                      }}
                    >
                      {match.team1_batsman.map(t1_batsman => (
                        <div>
                          {t1_batsman.total_runs} ({t1_batsman.total_ball})
                        </div>
                      ))}
                    </div>
                    <div style={{ margin: "7px 0 0 15px", fontWeight: "500" }}>
                      {match.team1_bowler.map(t1_bowler => (
                        <div>{t1_bowler.player_name}</div>
                      ))}
                    </div>
                    <div style={{ margin: "7px 0 0 0" }}>
                      {match.team1_bowler.map(t1_bowler => (
                        <div>
                          {t1_bowler.total_wicket}/{t1_bowler.given_runs} (
                          {t1_bowler.overs})
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ margin: "18px 0 0 8px" }}>
                    {match.teamtwo_name[0].teamtwo_name}
                  </div>
                  <div className="teamtwo-top-players">
                    <div style={{ margin: "7px 0 0 12px", fontWeight: "500" }}>
                      {match.team2_batsman.map(t2_batsman => (
                        <div>{t2_batsman.player_name}</div>
                      ))}
                    </div>
                    <div
                      style={{
                        borderRight: "1px solid #272727",
                        margin: "7px 0 0 0"
                      }}
                    >
                      {match.team2_batsman.map(t2_batsman => (
                        <div>
                          {t2_batsman.total_runs} ({t2_batsman.total_ball})
                        </div>
                      ))}
                    </div>
                    <div style={{ margin: "7px 0 0 15px", fontWeight: "500" }}>
                      {match.team2_bowler.map(t2_bowler => (
                        <div>{t2_bowler.player_name}</div>
                      ))}
                    </div>
                    <div style={{ margin: "7px 0 0 0" }}>
                      {match.team2_bowler.map(t2_bowler => (
                        <div>
                          {t2_bowler.total_wicket}/{t2_bowler.given_runs} (
                          {t2_bowler.overs})
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div
                  className="match_details"
                  style={{ border: "1px solid #272727", borderRadius: "5px" }}
                >
                  <div className="top-title"> Match Details</div>
                  <div style={{ margin: "5px 0 0 8px" }}>Series</div>
                  <div style={{ fontWeight: "500", margin: "0 0 0 15px" }}>
                    {" "}
                    {match.match_details[0].competition}
                  </div>
                  <div style={{ margin: "3px 0 0 8px" }}> Date</div>

                  <div style={{ fontWeight: "500", margin: "0 0 0 15px" }}>
                    {match.date.map(date => (
                      <div>{date.match_date}</div>
                    ))}
                  </div>
                  <div style={{ margin: "3px 0 0 8px" }}> Toss</div>
                  <div style={{ fontWeight: "500", margin: "0 0 0 15px" }}>
                    {" "}
                    {match.match_details[0].toss_winner_team}, elected to{" "}
                    {match.match_details[0].toss_decision}
                  </div>
                  <div style={{ margin: "3px 0 0 8px" }}> Venue</div>
                  <div style={{ fontWeight: "500", margin: "0 0 0 15px" }}>
                    {" "}
                    {match.match_details[0].venue_name},{" "}
                    {match.match_details[0].venue_city}
                  </div>

                  <div style={{ margin: "3px 0 0 8px" }}> Umpire</div>
                  {match.umpires.map(umpire => (
                    <div style={{ fontWeight: "500", margin: "0 0 0 15px" }}>
                      {" "}
                      {umpire.umpire_name}
                    </div>
                  ))}
                </div>

                <div
                  className="bottom-left-container"
                  style={{ borderRadius: "5px" }}
                >
                  <div className="top-title"> Playing XI</div>
                  <div className="playingXI">
                    <div
                      style={{
                        borderBottom: "1px solid #272727",
                        margin: "6px 0 0 8px"
                      }}
                    >
                      {match.teamone_name.map(teamone => teamone.teamone_name)}
                    </div>
                    <div
                      style={{
                        borderBottom: "1px solid #272727",
                        margin: "6px 0 0 8px"
                      }}
                    >
                      {match.teamtwo_name.map(teamtwo => teamtwo.teamtwo_name)}
                    </div>
                    <div style={{ margin: "0 0 0 10px", fontWeight: "500" }}>
                      {match.team_one_XI.map(team1_XI => (
                        <div>{team1_XI.teamone_players} </div>
                      ))}
                    </div>
                    <div style={{ margin: "0 0 0 10px", fontWeight: "500" }}>
                      {match.team_two_XI.map(team2_XI => (
                        <div>{team2_XI.teamtwo_players} </div>
                      ))}
                    </div>
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
  match: state.matchreducer.match
});

export default connect(
  mapStateToProps,
  { getmatchdetailbyId, getRecentMatches }
)(MatchSummaryDetails);
