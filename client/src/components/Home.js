// Author : Nikhil Elayath
// The landing page of the component which consists of the navbar, recent news section, recent matches and most wins. Most wins is a reusable component which is just being called.

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
//this function calls the get News function which is defined in the actions which will retrive all the data from the news table.		
	this.props.getNews();
// calling the recentMatches function and passing the gender as a parameter so that it fetches recent matches bassed on gender type.
		this.props.getRecentMatches(this.props.gender);
	}

	render() {
		return (
			<div>
{/* Navbar is a reusable component*/}
				<Navbar
					gender={this.props.gender}
					changeGender={getGender =>
						this.props.changeGender(getGender)
					}
					showGender={true}
				/>
				<div className="div-section">
					<div className="div-news-section">
						{/* mappin the news data from the redux  */}
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
{/* Most wins component being called  */}
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
