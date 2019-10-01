import React, { Component } from "react";
import "../css/MatchSecondaryNavbar.css";
// import dhoni from "../images/dhoni.jpg";
import { Link } from "react-router-dom";

export default class MatchSecondaryNavbar extends Component {
	render() {
		return (
			<div className="secNavParent">
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
		);
	}
}
