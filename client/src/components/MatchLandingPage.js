import React, { Component } from "react";
import { connect } from "react-redux";
import "./css/MatchLandingPage.css";
import { getMatchesByDate, getRecentMatchesDate } from "../actions/Matches.js";
import { Calendar, DatePicker } from "@y0c/react-datepicker";
import "@y0c/react-datepicker/assets/styles/calendar.scss";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Navbar from "./common/Navbar";

export class MatchLandingPage extends Component {
  // [Yatin] On selection of new date from the calender,
  // new date will be passed to the match api to check
  // if any matches were played on selected date

  onChange = date => {
    //[yatin] storing the selected date in date format
    var received_date = date.toDate();

    //[yatin] slicing the date in "yyyy-mm-dd" format
    //  before passing it to the match api function
    var datee = received_date.toJSON().slice(0, 10);

    //[yatin] passing the new selected date to the api
    this.props.getMatchesByDate(datee, this.props.gender);
  };
  componentDidMount() {
    // calling the initial matches
    this.props.getRecentMatchesDate(this.props.gender);

    // this.props.match_date.map(date => (
    //   console.log("here", date.match_date)
    //   // this.props.getMatchesByDate(date.match_date, this.props.gender)
    // ))
    this.props.getMatchesByDate("2016-03-17", this.props.gender);
    // this.props.getMatchesByDate("2016-05-20", this.props.gender);
  }

  render() {
    return (
      <div>
        <div>
          <Navbar
            gender={this.props.gender}
            changeGender={getGender => this.props.changeGender(getGender)}
          />
        </div>
        <div style={{ marginTop: "80px" }}>
          <div>
            <h1
              id="title-of-match"
              className="h1-match"
              style={{ textAlign: "left", margin: "20px" }}
            >
              Matches
            </h1>
          </div>
        </div>
        <div>
          <div className="landing-container">
            <div className="calendar-container">
              <div className="calender-datepicker">
                <DatePicker onChange={this.onChange} showDefaultIcon clear />
              </div>
              <div className="calendar-fixed">
                <Calendar onChange={this.onChange} />
              </div>
            </div>
            {this.props.isLoading ? (
              <div style={{ margin: "auto" }}>
                <Loader
                  type="TailSpin"
                  color="#2980b9"
                  height="100"
                  width="100"
                />
              </div>
            ) : (
                <div>
                  {this.props.matches.length === 0 ? (
                    <h2
                      id="no-matches-title"
                      className="h1-match"
                      style={{ textAlign: "left", margin: "20px" }}
                    >
                      No Matches
                  </h2>
                  ) : (
                      <div className="all-matches-box">
                        {this.props.matches.map(match => (
                          <div
                            id="pushing-match"
                            className="each-matches-box"
                            onClick={() => {
                              this.props.history.push(
                                "/match/details/" + match.match_id,
                                {
                                  match
                                }
                              );
                            }}
                          >
                            <span
                              id="match-type"
                              style={{ fontSize: "15px", margin: "5px 0 0 0" }}
                            >
                              {match.match_type}
                            </span>
                            <div
                              className="Team-data"
                              style={{ fontWeight: "400" }}
                            >
                              <div
                                id="team-one-name"
                                style={{ margin: "10px 0 0 5px" }}
                              >
                                {match.teamOne}
                              </div>
                              <div
                                id="team-one-score"
                                style={{ margin: "10px 0 0 10px" }}
                              >
                                {match.teamOneScore}/{match.teamone_wicket} (
                            {match.match_values})
                          </div>
                              <div
                                id="team-two-name"
                                style={{ margin: "10px 0 0 5px" }}
                              >
                                {match.teamTwo}
                              </div>
                              <div
                                id="team-two-score"
                                style={{ margin: "10px 0 0 10px" }}
                              >
                                {match.teamTwoScore}/{match.teamtwo_wicket} (
                            {match.match_values})
                          </div>
                            </div>
                            {match.team_winner === "NA" ? (
                              <span
                                id="match-winner"
                                style={{
                                  fontSize: "18px",
                                  fontWeight: "500",
                                  margin: "10px 0 0 0"
                                }}
                              >
                                draw
                          </span>
                            ) : (
                                <span
                                  id="match-winner"
                                  style={{
                                    fontSize: "18px",
                                    fontWeight: "500",
                                    margin: "10px 0 0 0"
                                  }}
                                >
                                  {match.team_winner} won
                          </span>
                              )}
                          </div>
                        ))}
                      </div>
                    )}
                </div>
              )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  matches: state.matchreducer.matches,
  match_date: state.matchreducer.match_date,
  isLoading: state.LoadingReducer.isLoading
});

export default connect(
  mapStateToProps,
  { getMatchesByDate, getRecentMatchesDate }
)(MatchLandingPage);
