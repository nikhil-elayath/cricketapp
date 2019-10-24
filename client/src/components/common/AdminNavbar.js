import React, { Component } from "react";
import "../css/Navbar.css";
import { Link, Redirect } from "react-router-dom";
import { getSearch } from "../../actions/SerachAction";
import { connect } from "react-redux";
import decode from "jwt-decode";

export class AdminNavbar extends Component {
	state = {
		active: true,
		searchInput: "",
		isChecked: window.innerWidth >= 526 ? true : false,
		redirect: false,
		pageLink: this.props.pageLink ? this.props.pageLink : "",
		width: window.innerWidth,
		isAdmin: false
	};

	toggleChange = () => {
		window.innerWidth <= 526
			? this.setState({ isChecked: !this.state.isChecked })
			: console.log("do nothing");
	};

	componentDidMount() {
		window.addEventListener("resize", this.updateDimensions);
		if (localStorage.getItem("token")) {
			let decoded_token = decode(localStorage.getItem("token"));
			this.setState({ isAdmin: decoded_token.isAdmin ? true : false });
		}
	}

	renderRedirect = () => {
		if (this.state.redirect) {
			return <Redirect to="/login" />;
		}
	};

	updateDimensions = () => {
		this.setState({
			width: window.innerWidth,
			isChecked: window.innerWidth >= 526 ? true : false
		});
	};
	logout = () => {
		localStorage.removeItem("token");
		this.setState({ redirect: true });
	};

	render() {
		return (
			<div className="nav-parent">
				{this.renderRedirect()}
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
							id="menu-btn-label"
						>
							<span className="bars"></span>
						</label>

						{/* manage players link */}
						<li
							className="admin-item"
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
							className="admin-item"
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

						{/* manage teams link */}
						<li
							className="admin-item"
							style={{
								display: this.state.isChecked ? "block" : "none"
							}}
							onClick={this.logout}
						>
							<Link className="link" id="logout-admin-page">
								Logout
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
