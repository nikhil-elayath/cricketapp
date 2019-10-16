import React, { Component } from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
import { getSearch } from "../../actions/SerachAction";
import { connect } from "react-redux";

export class Navbar extends Component {
	state = {
		active: true,
		searchInput: ""
	};

	handleSearchInputChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleHamburgerClick = e => {
		e.target.className = { display: "none" };
		console.log("event", e.target.className);
	};
	handleEnter = e => {
		console.log("from handle enter function");
		let search_term = {
			search: this.state.searchInput
		};
		console.log("STATE VALUE", search_term);
		if (e.key === "Enter") {
			console.log(this.props);
			this.props.getSearch(search_term, this.props.history);
			console.log("search history", this.props.search);

			console.log("hit enter");
		}
	};
	OnChange = event => {
		this.setState({ [event.target.name]: event.target.value });
		let search_term = {
			search: this.state.searchInput
		};
		this.props.getSearch(search_term, this.props.history);
	};
	render() {
		// console.log(this.props);
		return (
			<div className="nav-parent">
				<header>
					<Link className="link" to="/">
						<span className="nav-brand" id="nav-brand">
							CricketAlpha
						</span>
					</Link>
					{/* <figure className="brand">Responsive</figure> */}
					<nav className="menu">
						<input type="checkbox" id="menuToggle" />
						<label for="menuToggle" className="menu-icon">
							<i className="fa fa-bars"></i>
						</label>
						<ul>
							<div className="genders">
								<span
									id="men"
									className="active-gender"
									onClick={() =>
										this.props.changeGender("male")
									}
								>
									Men
								</span>
								<span
									id="women"
									onClick={() =>
										this.props.changeGender("female")
									}
								>
									Women
								</span>
							</div>
							<Link className="link" to="/matches" id="matches">
								<li>Matches</li>
							</Link>
							<Link className="link" to="/teams" id="teams">
								<li>Teams</li>
							</Link>
							<Link className="link" to="/players" id="players">
								<li>Players</li>
							</Link>
						</ul>
						<li className="search-box-li">
							<input
								name="searchInput"
								className="search-box"
								value={this.state.searchInput}
								onChange={this.handleSearchInputChange}
								placeholder="Search for Team or Player"
								// onKeyDown={this.handleEnter}
								onChange={this.OnChange}
							/>

							<div
								className="search-result"
								style={{
									display: this.state.searchInput
										? "block"
										: "none"
								}}
							>
								{this.props.search.length !== 0 ? (
									this.props.search.player.length !== 0 ||
									this.props.search.team.length !== 0 ? (
										<>
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
																	<div className="search-suggestion">
																		{
																			mapped_search.player_name
																		}
																	</div>
																</Link>
															</div>
														)
												  )
												: null}
											{this.props.search.team.length != 0
												? this.props.search.team.map(
														mapped_search => (
															<div>
																<Link
																	className="search-list-item"
																	to={{
																		pathname:
																			"/teaminfo/" +
																			mapped_search.team_id
																		// state:{
																	}}
																>
																	<div className="search-suggestion">
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
						<Link className="link" to="/login">
							<i className="fas fa-user"></i>
						</Link>
					</nav>
				</header>
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
