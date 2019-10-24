import React, { Component } from "react";
import { connect } from "react-redux";
import { getNews, getRecentMatches } from "../actions/Home";
import "./css/Home.css";
import { getRanks } from "../actions/Teams";
import MostWins from "./MostWins";
import { Link } from "react-router-dom";
import Navbar from "./common/Navbar";
import Loader from "react-loader-spinner";

export class Home extends Component {
	componentDidMount() {
		console.log("home mounted");
		this.props.getNews();
		this.props.getRecentMatches(this.props.gender);
	}

	render() {
		console.log("find layout", this.props);
		return (
			<div>
				<Navbar
					gender={this.props.gender}
					changeGender={getGender =>
						this.props.changeGender(getGender)
					}
					showGender={true}
				/>
				<div className="div-section">
					<div className="div-news-section">
						{this.props.home.map(news => (
							<Link
								className="link-news"
								to={{
									pathname: "/newsbyid/" + news.news_id
								}}
							>
								<div className="div-news">
									<div
										className="div-news-images"
										style={{
											backgroundImage: `url(data:image/jpeg;base64,${news.news_image}`
										}}
									/>
									<div className="div-news-details">
										<p id="p-news" className="p-news">
											<b>{news.news_title}</b>
										</p>
										<p
											id="home-news-date"
											className="home-news-date"
										>
											{news.news_date}
										</p>
									</div>
								</div>
							</Link>
						))}
					</div>

					<div id="div-second-section">
						<div id="home-recent-matches">
							<div id="home-recent-matches-title">
								Recent Matches
							</div>

							{this.props.isLoading ? (
								<div className="loader-div">
									<Loader
										type="TailSpin"
										color="#2980b9"
										height="80"
										width="80"
									/>
									<span
										style={{
											marginTop: "20px",
											fontSize: "12px"
										}}
									>
										Loading Recent Matches
									</span>
								</div>
							) : (
									<>
										{this.props.recent_matches.map(
											match => (
												<div
													id="link-recent-matches"
													onClick={() => {
														this.props.history.push(
															"/match/details/" + match.match_id,
															{
																match
															}
														);
													}}
												>
													<div id="home-match">
														<div id="team-score">
															<p id="home-recent-matches-teamOne">
																{
																	match.teamOne
																}
															</p>
															<p id="home-recent-matches-team-one-score">
																{
																	match.teamOneScore
																}
																/
															{
																	match.teamone_wicket
																}
															</p>
														</div>
														<div id="team-score">
															<p id="home-recent-matches-teamTwo">
																{
																	match.teamTwo
																}{" "}
															</p>
															<p id="home-recent-matches-team-two-score">
																{
																	match.teamTwoScore
																}
																/{" "}
																{
																	match.teamtwo_wicket
																}{" "}
															</p>
														</div>
														<div id="home-recent-matches-result">
															<p id="home-recent-matches-team-winner">
																{
																	match.team_winner
																}{" "}
																{
																	match.won_by
																}{" "}
															</p>
														</div>
														<div id="home-recent-match-date">
															{
																match.match_date
															}
														</div>
													</div>
												</div>
											)
										)}
									</>
								)}
						</div>

						<MostWins
							gender={this.props.gender}
							changeGender={getGender =>
								this.props.changeGender(getGender)
							}
						/>
					</div>
				</div>
			</div>
		);
	}
}
const mapStateToProps = state => ({
	home: state.HomeReducer.home,
	ranks: state.TeamsReducer.ranks,
	recent_matches: state.HomeReducer.recent_matches,
	isLoading: state.LoadingReducer.isLoading
});
export default connect(
	mapStateToProps,
	{
		getNews,
		getRanks,
		getRecentMatches
	}
)(Home);
