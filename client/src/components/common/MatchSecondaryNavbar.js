import React, { Component } from "react";
import "../css/MatchSecondaryNavbar.css";
// import dhoni from "../images/dhoni.jpg";
import Navbar from './Navbar'
import { Link } from "react-router-dom";
// import './css/SecondaryNavbar.css'
import south_africa from "../images/SouthAfrica.jpeg";
import india from "../images/india.jpeg";
import default_user_img from "../images/defaultuserimg.jpg";

export default class MatchSecondaryNavbar extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className="secNavParent">
					<div className="top-div-of-match">
						<div className="short-summary-with-result">

							<span style={{ fontSize: "14px", marginRight: "5px", marginLeft: "15px" }}>Result: </span>
							<span style={{ fontSize: "15px", fontWeight: "500" }}>team_winner outcome</span>
							<div className="Team-data">
								<div className="Team-img" style={{
									backgroundImage: `url(${india})`
								}}></div>
								<div className="Team-name" >teamtwo</div>
								<div className="Team-score">.teamOneScore/teamone_wicket  (50 overs)</div>
							</div>
							<div className="Team-data">
								<div className="Team-img" style={{
									backgroundImage: `url(${south_africa})`
								}}></div>
								<div className="Team-name">teamOne</div>
								<div className="Team-score">teamTwoScore}/teamtwo_wicket  (50 overs)</div>
							</div>
						</div>
						<div className="short-summary-with-player-of-the-match">
							<span className="header-player-of-the-match">Player of the match</span>
							<div className="short-summary-right">
								<div className="default-img" style={{
									backgroundImage: `url(${default_user_img})`
								}}> </div>
								<div style={{ fontSize: "20px", fontWeight: "700", margin: "30px 0 0 15px" }}>player_of_the_match</div>
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
			</div>
		);
	}
}
