import { GET_NEWS, GET_HOME_RECENT_MATCHES } from "./Types";
import axios from "axios";

import { startLoading, stopLoading } from "./LoadingAction";

export const getNews = () => dispatch => {
	axios
		.get("http://localhost:5000/apis/news")
		.then(res => {
			dispatch({
				type: GET_NEWS,
				payload: res.data.data
			});
			console.log("from 'then' get news");
		})

		.catch(err => console.log(err));
};

// fetching recent matches
export const getRecentMatches = gender => dispatch => {
	dispatch(startLoading());
	console.log("from actions of home recent matches", gender);
	axios
		.get("http://localhost:5000/apis/recentMatches/" + gender)
		.then(res => {
			dispatch(stopLoading());
			dispatch({
				type: GET_HOME_RECENT_MATCHES,
				payload: res.data.data
			});
			console.log("from 'then' get RECENT MATCHES");
		})

		.catch(err => {
			// dispatch(stopLoading())
			console.log(err);
		});
};
