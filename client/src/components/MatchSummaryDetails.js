import React, { Component } from 'react'


// import MatchSecondaryNavbar from './common/MatchSecondaryNavbar'
import { getmatchdetailbyId, getRecentMatches } from '../actions/Matches'
import { connect } from "react-redux";
import MatchSecondaryNavbar from './common/MatchSecondaryNavbar'
import "./css/MatchSummaryDetails.css"

export class MatchSummaryDetails extends Component {

    componentDidMount() {
        // this.props.getmatchdetailbyId(this.props.location.state.match.match_id);
        this.props.getmatchdetailbyId(1);
    }

    render() {
        console.log(this.props)
        return (
            < div >
                <div>
                    {/* <MatchSecondaryNavbar match={this.props.history.location.state.match} /> */}
                    <MatchSecondaryNavbar />
                </div>
                {/* <Navbar history={this.props.history.location.state.match} />
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
                </div> */}



                <div style={{ marginTop: 250 + "px" }}>
                    {this.props.match.map(match => (
                        <div className="top-container" style={{ height: "700px" }}>
                            <div className="top-left-container">

                                <div className="top-title">Summary Scorecard</div>

                                <div>{match.teamone_name[0].teamone_name}</div>

                                <div className="teamone-top-players">

                                    <div>
                                        {match.team1_batsman.map(t1_batsman => (
                                            <div>{t1_batsman.player_name}</div>))}
                                    </div>
                                    <div style={{ borderRight: "1px solid #272727" }}>
                                        {match.team1_batsman.map(t1_batsman => (
                                            <div>{t1_batsman.total_runs} ({t1_batsman.total_ball})</div>))}
                                    </div>
                                    <div>
                                        {match.team1_bowler.map(t1_bowler => (
                                            <div>{t1_bowler.player_name}</div>))}
                                    </div>
                                    <div style={{ borderRight: "1px solid #272727" }}>
                                        {match.team1_bowler.map(t1_bowler => (
                                            <div>{t1_bowler.total_wicket}/{t1_bowler.given_runs} ({t1_bowler.overs})</div>))}
                                    </div>
                                </div>

                                <div>{match.teamtwo_name[0].teamtwo_name}</div>
                                <div className="teamtwo-top-players">
                                    <div>
                                        {match.team2_batsman.map(t2_batsman => (
                                            <div>{t2_batsman.player_name}</div>))}
                                    </div>
                                    <div style={{ borderRight: "1px solid #272727" }}>
                                        {match.team2_batsman.map(t2_batsman => (
                                            <div>{t2_batsman.total_runs} ({t2_batsman.total_ball})</div>))}
                                    </div>
                                    <div>
                                        {match.team2_bowler.map(t2_bowler => (
                                            <div>{t2_bowler.player_name}</div>))}
                                    </div>
                                    <div style={{ borderRight: "1px solid #272727" }}>
                                        {match.team2_bowler.map(t2_bowler => (
                                            <div>{t2_bowler.total_wicket}/{t2_bowler.given_runs} ({t2_bowler.overs})</div>))}
                                    </div>
                                </div>
                            </div>
                            <div className="match_details" style={{ border: "1px solid #272727" }}>
                                <div className="top-title"> Match Details</div>
                                <div>Series</div>
                                <div style={{ fontWeight: "500" }}> {match.match_details[0].competition}</div>
                                <div> Date</div>

                                <div style={{ fontWeight: "500" }}>
                                    {match.date.map(date => (
                                        <div>{date.match_date}</div>))}
                                </div>
                                <div> Toss</div>
                                <div style={{ fontWeight: "500" }}> {match.match_details[0].toss_winner_team}, elected to {match.match_details[0].toss_decision}</div>
                                <div> Venue</div>
                                <div style={{ fontWeight: "500" }}> {match.match_details[0].venue_name}, {match.match_details[0].venue_city}</div>

                                <div> Umpire</div>
                                {match.umpires.map(umpire => (
                                    <div style={{ fontWeight: "500" }}> {umpire.umpire_name}</div>
                                ))}
                            </div>

                            <div className="bottom-left-container">
                                <div className="top-title"> Playing XI</div>
                                <div className="playingXI">
                                    <div style={{ borderBottom: "1px solid #272727" }}>{match.teamone_name.map(teamone => teamone.teamone_name)}</div>
                                    <div style={{ borderBottom: "1px solid #272727" }}>{match.teamtwo_name.map(teamtwo => teamtwo.teamtwo_name)}</div>
                                    <div>
                                        {match.team_one_XI.map(team1_XI =>
                                            <div>{team1_XI.teamone_players} </div>)}
                                    </div>
                                    <div>
                                        {match.team_two_XI.map(team2_XI =>
                                            <div>{team2_XI.teamtwo_players} </div>)}
                                    </div>
                                </div>
                            </div>

                        </div>))}

                    {/* <div className="topOfSummary">
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
                                        <p>{this.props.match.map(match => match.teamOne_top2_players[0].player_name)}</p>
                                        <p>{this.props.match.map(match => match.teamOne_top2_players[1].player_name)}</p>
                                    </div>

                                    <div className="playerScores">
                                        <p>{this.props.match.map(match => match.teamOne_top2_players[0].total_runs)} ({this.props.match.map(match => match.teamOne_top2_players[0].total_ball_faced)})</p>
                                        <p>{this.props.match.map(match => match.teamOne_top2_players[1].total_runs)} ({this.props.match.map(match => match.teamOne_top2_players[1].total_ball_faced)})</p>
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
                                        <p>{this.props.match.map(match => match.teamTwo_top2_players[0].player_name)}</p>
                                        <p>{this.props.match.map(match => match.teamTwo_top2_players[1].player_name)}</p>
                                    </div>

                                    <div className="playerScores">
                                        <p>{this.props.match.map(match => match.teamTwo_top2_players[0].total_runs)} ({this.props.match.map(match => match.teamTwo_top2_players[0].total_ball_faced)})</p>
                                        <p>{this.props.match.map(match => match.teamTwo_top2_players[1].total_runs)} ({this.props.match.map(match => match.teamTwo_top2_players[1].total_ball_faced)})</p>
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
                    </div> */}
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