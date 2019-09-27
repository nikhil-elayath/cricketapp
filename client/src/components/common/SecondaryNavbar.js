import React, { Component } from "react";
import "../css/SecondaryNavbar.css";
import dhoni from "../images/dhoni.jpg";
import { Link } from "react-router-dom";

export default class SecondaryNavbar extends Component {
	render() {
		return (
			<div className="secNavParent">
				<div className="secNavHead">
					<div
						style={{
							backgroundImage: `url(${dhoni})`
						}}
					></div>
					<div>
						<h2>MS Dhoni</h2>
						<h4>India</h4>
					</div>
				</div>
				<div className="secNavLinks">
					<ul>
						<Link className="secLink" to="/info">
							<li>Info</li>
						</Link>
						<Link className="secLink" to="/battingStats">
							<li>Batting Stats</li>
						</Link>
						<Link className="secLink" to="/bowlingStats">
							<li>Bowling Stats</li>
						</Link>
						<Link className="secLink" to="/performance">
							<li>Performance</li>
						</Link>
					</ul>
				</div>
			</div>
		);
	}
}
