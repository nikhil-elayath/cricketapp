import React, { Component } from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
import { getSearch } from "../../actions/SerachAction";
import { connect } from "react-redux";

export class AdminNavbar extends Component {
	state = {
		active: true,
		searchInput: "",
		isChecked: window.innerWidth >= 526 ? true : false,
		width: window.innerWidth
	};

	toggleChange = () => {
		this.setState({ isChecked: !this.state.isChecked });
	};

	componentDidMount() {
		window.addEventListener("resize", this.updateDimensions);
	}

	updateDimensions = () => {
		this.setState({
			width: window.innerWidth,
			isChecked: window.innerWidth >= 526 ? true : false
		});
	};

	render() {
		return (
			<div className="nav-parent">
				<nav className="menu admin">
					<ul className="admin-ul">
						{/* brand name which is at left of navbar */}
						<li className="nav-brand-li admin-nav-brand">
							<Link to="/" id="nav-brand">
								CricketAlpha
							</Link>
						</li>

						{/* hidden checkbox to show and hide the menu in small screen device */}
						<input
							type="checkbox"
							id="menu-btn"
							className="menu-btn"
							checked={this.state.isChecked}
							onClick={this.toggleChange}
							// hidden="hidden"
						/>

						{/* label for checkbox which makes the hamburger menu */}
						<label
							className="menu-icon"
							for="menu-btn"
							style={{
								display:
									this.state.width < 526 ? "block" : "none"
							}}
						>
							<span className="bars"></span>
						</label>

						{/* manage matches link */}
						<li
							className="item"
							style={{
								display: this.state.isChecked ? "block" : "none"
							}}
							onClick={this.toggleChange}
						>
							<Link
								className="link"
								to="/adminplayer"
								id="adminplayer"
							>
								Manage Players
							</Link>
						</li>

						{/* manage teams link */}
						<li
							className="item"
							style={{
								display: this.state.isChecked ? "block" : "none"
							}}
							onClick={this.toggleChange}
						>
							<Link
								className="link"
								to="/adminteam"
								id="adminteam"
							>
								Manage Teams
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	search: state.SearchReducer.search
});

export default connect(
	mapStateToProps,
	{ getSearch }
)(AdminNavbar);
