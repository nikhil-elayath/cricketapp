import React, { Component } from "react";
import { connect } from "react-redux";
import "./css/MatchLandingPage.css";
import { getMatchesByDate } from "../actions/Matches.js";
import { Calendar, DatePicker } from "@y0c/react-datepicker";
import "@y0c/react-datepicker/assets/styles/calendar.scss";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Navbar from "./common/Navbar";

export class MatchLandingPage extends Component {

  // [Yatin] On selection of new date from the calender,
  // new date will be passed to the match api to check
  // if any matches were played on that selected date
  onChange = date => {

    //[yatin] storing the selected date in date format
    var received_date = date.toDate();

    //[yatin] slicing the date in "yyyy-mm-dd" format
    //  before passing it to the match api function
    var datee = received_date.toJSON().slice(0, 10);

    //[yatin] passing the new selected date to the getMatchesByDate api
    this.props.getMatchesByDate(datee, this.props.gender);
  };
  componentDidMount() {

    // [yatin] calling the getMatchesByDate with a default random date
    this.props.getMatchesByDate("2016-03-17", this.props.gender);
  }

  render() {
    return (
      <div>
        <div>
          {/* [yatin] The primary navbar contains gender option for example 
          when clicked on female option, the data will be reloaded with the
          result of selected gender */}
          <Navbar
            gender={this.props.gender}
            changeGender={getGender => this.props.changeGender(getGender)}
            showGender={true}
            pageLink={"matches"}
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
                {/* [yatin] on mobile view the calander icon will be displayed,
                when clicked on the icon the calander will appear */}
                <DatePicker onChange={this.onChange} showDefaultIcon clear />
              </div>
              <div className="calendar-fixed">
                {/* [yatin] on web view the calander will be displayed with a fixed postion*/}
                <Calendar onChange={this.onChange} />
              </div>
            </div>
            {/* [yatin] when the data content from the database is not loaded in the redux store 
            then loader will apper on the page */}
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
                  {/* [yatin] On selection of any date from the calender doesn't conatin any 
                match data/context then the message such as "No matches" will be displayed */}
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
  // [yatin] mapping the data present in the redux store on the page
  matches: state.matchreducer.matches,
  isLoading: state.LoadingReducer.isLoading
});

export default connect(
  mapStateToProps,
  { getMatchesByDate }
)(MatchLandingPage);
