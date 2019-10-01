import React, { Component } from 'react'
import Navbar from './common/Navbar'
import './css/MatchSummaryDetails.css'
import MatchSecondaryNavbar from './common/MatchSecondaryNavbar'
import { getmatchdetailbyId, getRecentMatches } from '../actions/matches'
import { connect } from "react-redux";

export class MatchSummaryDetails extends Component {

    componentDidMount() {
        // this.props.getmatchdetailbyId(this.props.location.state.matches.id);
        // console.log(this.props.location.state.matches.id)
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
                <div style={{ marginTop: 90 + "px" }}>
                    <div className="topOfSummary">
                        <div className="scoreCardSummary">
                            <div className="title">
                                <h3 style={{ margin: 0 + "px", textAlign: "left", padding: 10 + "px", color: "white" }} > Score Card Summary</h3>
                            </div>
                            <div>
                                <span style={{ float: "left", margin: 16 + "px", fontSize: 25 + "px" }}>India</span>
                            </div>
                            <div className="players">
                                <div className="playerLeft">
                                    <div className="playerinfo">
                                        <p>Sachin</p>
                                        <p>Rohit</p>
                                    </div>

                                    <div className="playerScores">
                                        <p>50 (20)</p>
                                        <p>51 (20)</p>
                                    </div>
                                </div>

                                <div className="playerRight">
                                    <div className="playerinfo">
                                        <p>Sachin</p>
                                        <p>Rohit</p>
                                    </div>

                                    <div className="playerScores">
                                        <p>50 (20)</p>
                                        <p>51 (20)</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span style={{ float: "left", margin: 16 + "px", fontSize: 25 + "px" }}>India</span>
                            </div>
                            <div className="players">
                                <div className="playerLeft">
                                    <div className="playerinfo">
                                        <p>Sachin</p>
                                        <p>Rohit</p>
                                    </div>

                                    <div className="playerScores">
                                        <p>50 (20)</p>
                                        <p>51 (20)</p>
                                    </div>
                                </div>

                                <div className="playerRight">
                                    <div className="playerinfo">
                                        <p>Sachin</p>
                                        <p>Rohit</p>
                                    </div>

                                    <div className="playerScores">
                                        <p>50 (20)</p>
                                        <p>51 (20)</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div></div>
                        <div className="matchDetails">
                            <div className="title">
                                <h3 style={{ margin: 0 + "px", textAlign: "left", padding: 10 + "px", color: "white" }} >
                                    Match Details</h3>
                            </div>
                            <div className="match-title"> Venue</div>
                            <h3 className="match-values">BJjkjbmnbmnb,mb</h3>
                            <div className="match-title">Toss</div>
                            <h3 className="match-values">India, elextwd to bat</h3>
                            <div className="match-title">Player of the match</div>
                            <h3 className="match-values">MS Shoni</h3>
                            <div className="match-title">Umpires</div>
                            <h3 className="match-values">Anil</h3>
                        </div>

                        <div className="playing11">
                            <div className="title">
                                <h3 style={{ margin: 0 + "px", textAlign: "left", padding: 10 + "px", color: "white" }} >
                                    Playing XI</h3>

                            </div>
                            <div className="team-name">
                                dsad
                            </div>
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