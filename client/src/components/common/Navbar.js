import React, { Component } from "react";
import "../css/Navbar.css";
import { Link, Redirect } from "react-router-dom";
import { getSearch } from "../../actions/SerachAction";
import { connect } from "react-redux";
import decode from "jwt-decode";

let decoded_token;

export class Navbar extends Component {
	state = {
		active: true,
		searchInput: "",
		isChecked: window.innerWidth >= 526 ? true : false,
		width: window.innerWidth,
		redirect: false,
		pageLink: this.props.pageLink ? this.props.pageLink : "",
		showGender: this.props.showGender
	};

	toggleChange = pageLink => {
		this.setState({ pageLink });
		window.innerWidth <= 526
			? this.setState({ isChecked: !this.state.isChecked })
			: console.log("do nothing");
	};

	handleSearchInputChange = e => {
		this.setState({ [e.target.name]: e.target.value });
		let search_term = {
			search: this.state.searchInput
		};
		this.props.getSearch(search_term, this.props.history);
	};

	componentDidMount() {
		window.addEventListener("resize", this.updateDimensions);
		if (localStorage.getItem("token")) {
			decoded_token = decode(localStorage.getItem("token"));
		}
	}

	updateDimensions = () => {
		this.setState({
			width: window.innerWidth,
			isChecked: window.innerWidth >= 526 ? true : false
		});
	};

	renderRedirect = () => {
		if (this.state.redirect) {
			return <Redirect to="/login" />;
		}
	};

	logout = () => {
		localStorage.removeItem("token");
		this.setState({ redirect: true });
	};

	render() {
		return (
			<div className="nav-parent">
				{this.renderRedirect()}
				<nav className="menu">
					<ul>
						{/* brand name which is at left of navbar */}
						<li className="nav-brand-li">
							<Link
								to="/"
								id="nav-brand"
								onClick={() => {
									this.setState({ pageLink: "" });
								}}
							>
								CricketAlpha
							</Link>
						</li>

						{/* toggle gender buttons for men and women */}
						<div
							className="genders"
							style={{
								display: this.state.showGender
									? "default"
									: "none"
							}}
						>
							<span
								id="men"
								className={
									this.props.gender === "male"
										? "active-gender"
										: ""
								}
								onClick={() => this.props.changeGender("male")}
							>
								Men
							</span>
							<span
								id="women"
								className={
									this.props.gender === "female"
										? "active-gender"
										: ""
								}
								onClick={() =>
									this.props.changeGender("female")
								}
							>
								Women
							</span>
						</div>

						{/* hidden checkbox to show and hide the menu in small screen device */}
						<input
							type="checkbox"
							id="menu-btn"
							className="menu-btn"
							checked={this.state.isChecked}
							onClick={() =>
								this.toggleChange(this.state.pageLink)
							}
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

						{/* matches link */}
						<li
							className={
								this.state.pageLink == "matches"
									? "item active-link"
									: "item"
							}
							style={{
								display: this.state.isChecked ? "block" : "none"
							}}
							onClick={() => this.toggleChange("matches")}
						>
							<Link className="link" to="/matches" id="matches">
								Matches
							</Link>
						</li>

						{/* teams link */}
						<li
							className={
								this.state.pageLink == "teams"
									? "item active-link"
									: "item"
							}
							style={{
								display: this.state.isChecked ? "block" : "none"
							}}
							onClick={() => this.toggleChange("teams")}
						>
							<Link className="link" to="/teams" id="teams">
								Teams
							</Link>
						</li>

						{/* players link */}
						<li
							className={
								this.state.pageLink == "players"
									? "item active-link"
									: "item"
							}
							style={{
								display: this.state.isChecked ? "block" : "none"
							}}
							onClick={() => this.toggleChange("players")}
						>
							<Link className="link" to="/players" id="players">
								Players
							</Link>
						</li>

						{/* search box list item */}
						<li className="search-box-li">
							{/* search box to search for players and teams */}
							<input
								id="searchInput"
								name="searchInput"
								className="search-box"
								value={this.state.searchInput}
								onChange={this.handleSearchInputChange}
								placeholder="Search for Team or Player"
							/>

							{/* shows search result after entering text in search boc */}

							<div
								className="search-result"
								style={{
									display: this.state.searchInput
										? "block"
										: "none"
								}}
							>
								{/* checks whether search has entries or not 
								if not then prints no result found */}
								{this.props.search.length !== 0 ? (
									this.props.search.player.length !== 0 ||
									this.props.search.team.length !== 0 ? (
										<>
											{/* checks for player array length in seaarch
										if present map all the player available */}
											{this.props.search.player.length !==
											0
												? this.props.search.player.map(
														mapped_search => (
															<div>
																<Link
																	className="search-list-item"
																	to={{
																		pathname:
																			"/playerInfo/" +
																			mapped_search.player_id
																		// state:{
																	}}
																>
																	<div
																		style={{
																			backgroundImage: `url(data:image/jpeg;base64,${mapped_search.player_image}`
																		}}
																	></div>
																	<div
																		className="search-suggestion"
																		id={
																			"player-search-" +
																			mapped_search.player_id
																		}
																	>
																		{
																			mapped_search.player_name
																		}
																	</div>
																</Link>
															</div>
														)
												  )
												: null}

											{/* checks for team array length in seaarch
										if present map all the team available */}
											{this.props.search.team.length !== 0
												? this.props.search.team.map(
														mapped_search => (
															<div>
																<Link
																	className="search-list-item"
																	to={{
																		pathname:
																			"/teamdetails/" +
																			mapped_search.team_id
																		// state:{
																	}}
																>
																	<div
																		style={{
																			backgroundImage: `url(data:image/jpeg;base64,${mapped_search.team_image}`
																		}}
																	></div>
																	<div
																		className="search-suggestion"
																		id={
																			"team-search-" +
																			mapped_search.team_id
																		}
																	>
																		{
																			mapped_search.team_name
																		}
																	</div>
																</Link>
															</div>
														)
												  )
												: null}
										</>
									) : (
										<div className="search-no-result">
											<div style={{ color: "#272727" }}>
												No result found
											</div>
										</div>
									)
								) : null}
							</div>
						</li>

						{/* icon for login */}
						<li
							className="login-icon"
							style={{
								display: this.state.isChecked ? "block" : "none"
							}}
						>
							<Link className="link" to="/login">
								<i className="fas fa-user"></i>
							</Link>
							<div className="user-options-links">
								{!localStorage.getItem("token") ? (
									<>
										<div>
											<Link
												className="user-options-item"
												to="/login"
											>
												<div id="login">Login</div>
											</Link>
										</div>
										<div>
											<Link
												className="user-options-item"
												to="/register"
											>
												<div id="register">
													Register
												</div>
											</Link>
										</div>
									</>
								) : decoded_token ? (
									decoded_token.isAdmin ? (
										<>
											<div>
												<Link
													className="user-options-item"
													to="/adminteam"
												>
													<div id="manage-teams">
														Manage Teams
													</div>
												</Link>
											</div>
											<div>
												<Link
													className="user-options-item"
													to="/adminplayer"
												>
													<div id="manage-players">
														Manage Players
													</div>
												</Link>
											</div>
											<div>
												<Link
													className="user-options-item"
													onClick={this.logout}
												>
													<div id="logout-admin">
														Logout
													</div>
												</Link>
											</div>
										</>
									) : (
										<div>
											<Link
												className="user-options-item"
												onClick={this.logout}
											>
												<div id="logout">Logout</div>
											</Link>
										</div>
									)
								) : null}
							</div>
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
)(Navbar);
