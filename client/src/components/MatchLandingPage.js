import React, { Component } from "react";
import { connect } from "react-redux";
import "./css/MatchLandingPage.css";
import Navbar from "../components/common/Navbar";
import { getRecentMatches, getMatchesDate } from "../actions/Matches.js";
import { Calendar } from '@y0c/react-datepicker';
import '@y0c/react-datepicker/assets/styles/calendar.scss';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export class MatchLandingPage extends Component {

    // [Yatin] On selection of new date from the calender, 
    // new date will be passed to the match api to check 
    // if any matches were played on selected date

    onChange = (date) => {
        //[yatin] storing the selected date in date format
        var date = date.toDate();

        //[yatin] slicing the date in "yyyy-mm-dd" fromat
        //  before passing it to the match api function
        var datee = date.toJSON().slice(0, 10)

        //[yatin] passing the new selected date to the api
        this.props.getRecentMatches(datee);
    }
    componentDidMount() {
        this.props.getRecentMatches("2016-05-20");
    }

    render() {
        return (
            <div>
                <div>
                    <Navbar />
                </div>

                <div style={{ marginTop: "80px" }}>
                    <div>
                        <h1 className="h1-match" style={{ textAlign: "left", margin: "20px" }}>
                            Matches</h1>
                    </div>
                </div>
                <div>
                    <div className="landing-container">
                        <div className="calander">
                            <Calendar onChange={this.onChange} />
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
                                < div >
                                    {
                                        this.props.matches.length === 0 ? (
                                            <h2 className="h1-match" style={{ textAlign: "left", margin: "20px" }}>
                                                No Matches </h2>
                                        ) : (<div className="all-matches-box">
                                            {this.props.matches.map(match => (
                                                <div className="each-matches-box" onClick={() => {
                                                    this.props.history.push(
                                                        "/match/details/" + match.match_id,
                                                        {
                                                            match
                                                        }
                                                    );
                                                }}>
                                                    <span style={{ fontSize: "90%", margin: "1% 0 0 0" }}>{match.match_type}</span>
                                                    <div className="Team-data" style={{ fontWeight: "400" }}>
                                                        <div style={{ margin: "3% 0 0 3%" }}>{match.teamOne}</div>
                                                        <div style={{ margin: "3% 0 0 10%" }}>
                                                            {match.teamOneScore}/{match.teamone_wicket} ({match.match_values})
                                         </div>
                                                        <div style={{ margin: "3% 0 0 3%" }}>{match.teamTwo}</div>
                                                        <div style={{ margin: "3% 0 0 10%" }}>
                                                            {match.teamTwoScore}/{match.teamtwo_wicket} ({match.match_values})
                                        </div>
                                                    </div>
                                                    <span style={{ fontSize: "100%", fontWeight: "500", margin: "2% 0 0 0" }} >
                                                        {match.team_winner} won
                                    </span>
                                                </div>
                                            ))}
                                        </div>)
                                    }
                                </div>)}

                    </div>
                </div>


            </div >
        );
    }
}

const mapStateToProps = state => ({
    matches: state.matchreducer.matches,
    date: state.matchreducer.match_date,
    isLoading: state.LoadingReducer.isLoading
});

export default connect(
    mapStateToProps,
    { getRecentMatches, getMatchesDate }
)(MatchLandingPage);
