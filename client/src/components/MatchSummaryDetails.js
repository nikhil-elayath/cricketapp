import React, { Component } from 'react'
import Navbar from './common/Navbar'
import './css/MatchSummaryDetails.css'
import './css/SecondaryNavbar.css'
// import MatchSecondaryNavbar from './common/MatchSecondaryNavbar'
import { getmatchdetailbyId, getRecentMatches } from '../actions/Matches'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import south_africa from "./images/SouthAfrica.jpeg";
import india from "./images/india.jpeg";
import default_user_img from "./images/defaultuserimg.jpg";

export class MatchSummaryDetails extends Component {

    componentDidMount() {
        this.props.getmatchdetailbyId(this.props.location.state.match.match_id);
        console.log(this.props.location.state.match.match_id)
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <Navbar />
                <div className="secNavParent">
                    <div className="top-div-of-match">
                        <div className="short-summary-with-result">

                            <span style={{ fontSize: "14px", marginRight: "5px", marginLeft: "15px" }}>Result: </span>
                            <span style={{ fontSize: "15px", fontWeight: "500" }}>{this.props.location.state.match.team_winner} {this.props.match.map(match => match.outcome)}</span>
                            <div className="Team-data">
                                <div className="Team-img" style={{
                                    backgroundImage: `url(${india})`
                                }}></div>
                                <div className="Team-name" >{this.props.location.state.match.teamtwo}</div>
                                <div className="Team-score">{this.props.location.state.match.teamOneScore}/{this.props.location.state.match.teamone_wicket}  (50 overs)</div>
                            </div>
                            <div className="Team-data">
                                <div className="Team-img" style={{
                                    backgroundImage: `url(${south_africa})`
                                }}></div>
                                <div className="Team-name">{this.props.location.state.match.teamOne}</div>
                                <div className="Team-score">{this.props.location.state.match.teamTwoScore}/{this.props.location.state.match.teamtwo_wicket}  (50 overs)</div>
                            </div>
                        </div>
                        <div className="short-summary-with-player-of-the-match">
                            <span className="header-player-of-the-match">Player of the match</span>
                            <div className="short-summary-right">
                                <div className="default-img" style={{
                                    backgroundImage: `url(${default_user_img})`
                                }}> </div>
                                <div style={{ fontSize: "20px", fontWeight: "700", margin: "30px 0 0 15px" }}>{this.props.match.map(match => match.player_of_the_match)}</div>
                            </div>
                        </div>


                    </div>
                    <div className="secNavLinks">
                        <ul>
                            <Link className="secLink" to="/summary">
                                <li>Summary</li>
                            </Link>
                            <Link className="secLink" to="/scoreboard">
                                <li>ScoreBoard</li>
                            </Link>
                            <Link className="secLink" to="/statistics">
                                <li>Statistics</li>
                            </Link>
                        </ul>
                    </div>
                </div>



                <div style={{ marginTop: 220 + "px" }}>
                    <div className="topOfSummary">
                        <div className="scoreCardSummary">
                            <div className="title">
                                <h3 style={{ margin: 0 + "px", textAlign: "left", padding: 10 + "px", color: "white" }} > Score Card Summary</h3>
                            </div>
                            <div>
                                <span style={{ float: "left", margin: 16 + "px", fontSize: 25 + "px" }}>{this.props.location.state.match.teamtwo}</span>
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
                                <span style={{ float: "left", margin: 16 + "px", fontSize: 25 + "px" }}>{this.props.location.state.match.teamOne}</span>
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
                            <h3 className="match-values">{this.props.match.map(match => match.venue_name)}, {this.props.match.map(match => match.venue_city)}</h3>
                            <div className="match-title">Toss</div>
                            <h3 className="match-values">{this.props.match.map(match => match.toss_winner)}, elected to {this.props.match.map(match => match.toss_decision)}</h3>
                            <div className="match-title">Player of the match</div>
                            <h3 className="match-values">{this.props.match.map(match => match.player_of_the_match)}</h3>
                            <div className="match-title">Umpires</div>
                            {this.props.match.map(match => (
                                match.umpires.map(umpire =>
                                    <h3 className="match-values"> {umpire.umpire_name}</h3>)
                            ))}
                        </div>

                        <div className="playing11">
                            <div className="title">
                                <h3 style={{ margin: 0 + "px", textAlign: "left", padding: 10 + "px", color: "white" }} >
                                    Playing XI</h3>

                            </div>
                            <div>
                                <div className="team-names">

                                    <div className="teamone-name">{this.props.match.map(match => match.teamtwo_name)}
                                    </div>
                                    <div className="teamtwo-name">{this.props.match.map(match => match.teamone_name)}</div>
                                </div>
                                <div className="team-players-list">
                                    <div>
                                        {this.props.match.map(match => (
                                            match.teamtwo_players.map(first_team => (
                                                <div className='teamone-players-name'>{first_team.teamtwo_players}</div>
                                            ))))}
                                    </div>
                                    <div>
                                        {this.props.match.map(match => (
                                            match.teamone_players.map(second_team => (
                                                <div className='teamotwo-players-name'>{second_team.teamone_players}</div>
                                            ))))}
                                    </div>
                                </div>
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