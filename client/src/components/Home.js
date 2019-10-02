import React, { Component } from "react";
import { connect } from "react-redux";
import { getNews } from "../actions/Home";
import "./css/Home.css";
import Navbar from "./common/Navbar";
import news_img from "../components/images/vk.jpeg";
import logo from "./images/indialogo.jpg";
import { getRanks } from "../actions/Teams";
// import { getRanks } from "../actions/Teams";

export class Home extends Component {
	componentWillMount() {
		this.props.getNews();
		// this.props.getTeams();
		let ranking = {
			match_type: "Test"
		};
		this.props.getRanks(ranking);
	}
	onClickTest = e => {
		e.preventDefault();
		let ranking = {
			match_type: "Test"
		};
		this.props.getRanks(ranking);
	};

	onClickT20 = e => {
		e.preventDefault();
		let ranking = {
			match_type: "T20"
		};
		this.props.getRanks(ranking);
	};

	onClickOdi = e => {
		e.preventDefault();
		let ranking = {
			match_type: "ODI"
		};
		this.props.getRanks(ranking);
	};
	render() {
		return (
			<div className="div-container">
				<Navbar />
				<div className="div-section">
					<div className="div-news-section">
						{this.props.home.map(news => (
							<div className="div-news">
								<div
									className="div-news-images"
									style={{
										backgroundImage: `url(${news_img})`
									}}
								>
									{/* <img className="news_img" src={news_img} /> */}
								</div>
								<div className="div-news-details">
									<p className="p-news">
										<b>{news.news_title}</b>
									</p>
									<p className="date">{news.news_date} </p>
								</div>
							</div>
						))}
					</div>
					{/* ------------------------------------- */}
					<div className="div-second-section">
						<div className="grid-class-topteam">
							<div className="info-topteam">
								<p className="p-topteam">Most Wins</p>
								<div className="centered">
									<div className="cards">
										<div
											className="cardtest"
											onClick={this.onClickTest}
										>
											<p className="p-card">Test</p>
										</div>
										<div
											className="cardodi"
											onClick={this.onClickOdi}
										>
											<p className="p-card">ODI</p>
										</div>
										<div
											className="cardt20"
											onClick={this.onClickT20}
										>
											<p className="p-card">T20</p>
										</div>
									</div>
								</div>
								<div>
									{this.props.ranks.map(ranks => (
										<div>
											<div className="list">
												<img
													src={logo}
													className="img-card"
												/>
												<p className="p-team-name">
													{ranks.team_name}
												</p>
												<h2 className="h2-team-position">
													{ranks.count}
												</h2>
											</div>
											<hr className="hr-team-card" />
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
					{/* -------------------------------------- */}
				</div>
			</div>
		);
	}
}
const mapStateToProps = state => ({
	home: state.HomeReducer.home,
	ranks: state.TeamsReducer.ranks
});
export default connect(
	mapStateToProps,
	{
		getNews,
		getRanks
	}
)(Home);
