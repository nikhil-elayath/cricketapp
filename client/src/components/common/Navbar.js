import React, { Component } from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
import { getSearch } from "../../actions/SerachAction";
import { connect } from "react-redux";

export class Navbar extends Component {
	state = {
		active: true,
		searchInput: "",
		isChecked: window.innerWidth >= 526 ? true : false,
		width: window.innerWidth
	};

	toggleChange = () => {
		this.setState({ isChecked: !this.state.isChecked });
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
				<nav className="menu">
					<ul>
						<li className="nav-brand-li">
							<Link to="/" id="nav-brand">
								CricketAlpha
							</Link>
						</li>
						<div className="genders">
							<span
								id="men"
								className={
									this.props.gender == "male"
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
									this.props.gender == "female"
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
						<input
							type="checkbox"
							id="menu-btn"
							className="menu-btn"
							checked={this.state.isChecked}
							onClick={this.toggleChange}
							// hidden="hidden"
						/>
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
						<li
							className="item"
							style={{
								display: this.state.isChecked ? "block" : "none"
							}}
						>
							<Link className="link" to="/matches" id="matches">
								Matches
							</Link>
						</li>
						<li
							className="item"
							style={{
								display: this.state.isChecked ? "block" : "none"
							}}
						>
							<Link className="link" to="/teams" id="teams">
								Teams
							</Link>
						</li>
						<li
							className="item"
							style={{
								display: this.state.isChecked ? "block" : "none"
							}}
						>
							<Link className="link" to="/players" id="players">
								Players
							</Link>
						</li>
						<li className="search-box-li">
							<input
								id="searchInput"
								name="searchInput"
								className="search-box"
								value={this.state.searchInput}
								onChange={this.handleSearchInputChange}
								placeholder="Search for Team or Player"
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
																			"/teamdetails/" +
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
						<li
							className="login-icon"
							style={{
								display: this.state.isChecked ? "block" : "none"
							}}
						>
							<Link className="link" to="/login">
								<i className="fas fa-user"></i>
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
)(Navbar);
