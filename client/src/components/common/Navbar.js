import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

export default class Navbar extends Component {
	render() {
		return (
			<div className="navParent">
				<nav>
					<Link className="link" to="/">
						<span className="navBrand">CricketAlpha</span>
					</Link>
					<div className="navLinks">
						<ul>
							<Link className="link" to="/matches">
								<li>Matches</li>
							</Link>
							<Link className="link" to="/teams">
								<li>Teams</li>
							</Link>
							<Link className="link" to="/players">
								<li>Players</li>
							</Link>
							<Link className="link" to="/stats">
								<li>Stats</li>
							</Link>
							<Link className="link" to="/search">
								<i className="fas fa-search"></i>
							</Link>
							<Link className="link" to="/login">
								<i className="fas fa-user"></i>
							</Link>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}
