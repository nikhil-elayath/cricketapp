import React, { Component } from 'react'
import Navbar from './common/Navbar'
import './css/MatchSummaryDetails.css'
import MatchSecondaryNavbar from './common/MatchSecondaryNavbar'
import { getmatchdetailbyId, getRecentMatches } from '../actions/matches'
import { connect } from "react-redux";

export class MatchSummaryDetails extends Component {

    componentDidMount() {
        this.props.getmatchdetailbyId(this.props.location.state.matches.id);
        console.log(this.props.location.state.matches.id)
    }

    render() {
        // console.log(this.state.id);
        // console.log(props);
        return (
            <div>
                <Navbar />
                <div className="top-div-of-match" style={{ marginTop: "60px" }}>
                    <div className="short-summary-with-result">

                        <span style={{ textAlign: "left", marginRight: "50px" }}>Result: India won by 7 wickets</span>
                        <div className="Team-data">
                            <div className="TeamOne-name">South Africa</div>
                            <div className="TeamOne-score">149/5  (20 overs)</div>
                        </div>
                        <div className="Team-data">
                            <div className="TeamTwo-name">India</div>
                            <div className="TeamTwo-score">151/3  (19/20 overs)</div>
                        </div>
                    </div>
                    <div className="short-summary-with-player-of-the-match">
                        <span style={{ textAlign: "left" }}>Player of the match</span>
                        <div style={{ fontSize: "20px", fontWeight: "700" }}>MS Dhoni</div>
                        <div>india</div>
                    </div>
                    <div>
                        <MatchSecondaryNavbar />
                    </div>


                </div>
                <div className="summary">


                    <div className="scoreborad-summary">
                        <div className="summary-title">
                            <span className="titles">Scorecard Summary</span>
                        </div>
                        <div>
                            <div className="inside-scoreborad-summary">
                                <span className="team-name"> South Africa</span>
                                <hr />
                                <div className="team-players">
                                    <div className="team-players-left">
                                        <div className="team-players-name" style={{ float: "left" }}>Temba Bavuma</div>
                                        <div className="team-players-score" style={{ float: "left" }}>49 (43)</div>
                                    </div>
                                    <div className="team-players-right">
                                        <div className="team-players-name">Temba Bavuma</div>
                                        <div className="team-players-score">49 (43)</div>
                                    </div>
                                    <div className="team-players-left">
                                        <div className="team-players-name">Temba Bavuma</div>
                                        <div className="team-players-score">49 (43)</div>
                                    </div>
                                    <div className="team-players-right">
                                        <div className="team-players-name-right">Temba Bavuma</div>
                                        <div className="team-players-score-right">49 (43)</div>
                                    </div>
                                </div>
                                <div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="match-details">
                        <div className="summary-title">
                            <span className="titles">Match Details</span></div>
                        <div>
                            <div className="match-details-header">Venue</div>
                            <div className="match-details-value">Punjab Cricket Association IS, Bindra Station, Mohali, Chandigardh</div>
                            <div className="match-details-header">Toss</div>
                            <div className="match-details-value">India, selected to filed</div>
                            <div className="match-details-header">Player of the match</div>
                            <div className="match-details-value">MS DhoniAnil Chaudtry, Cheddy</div>
                            <div className="match-details-header">Umire</div>
                            <div className="match-details-value">Anil Chaudtry, Cheddy</div>
                        </div>
                    </div>
                    <div className='playing-XI'>
                        <div className="summary-title">
                            <span className="titles">Playing XI</span></div>
                        <div className="team-playing-XI">
                            <div className="first-team-players"> South Africa
                                <div> Player 1 </div>
                                <div> Player 2 </div>
                                <div> Player 3 </div>
                                <div> Player 4 </div>
                                <div> Player 5 </div>
                                <div> Player 6 </div>
                                <div> Player 7 </div>
                                <div> Player 8 </div>
                                <div> Player 9 </div>
                                <div> Player 10 </div>
                                <div> Player 11 </div>
                            </div>

                            <div className="second-team-players"> India</div>
                            <div> Player 1 </div>
                            <div> Player 2 </div>
                            <div> Player 3 </div>
                            <div> Player 4 </div>
                            <div> Player 5 </div>
                            <div> Player 6 </div>
                            <div> Player 7 </div>
                            <div> Player 8 </div>
                            <div> Player 9 </div>
                            <div> Player 10 </div>
                            <div> Player 11 </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

const mapStateToProps = state => ({
    match: state.matchreducer.match
});

export default connect(
    mapStateToProps,
    { getmatchdetailbyId, getRecentMatches }
)(MatchSummaryDetails);