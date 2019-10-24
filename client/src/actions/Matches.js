import {
  GET_MATCHES_BY_DATE,
  GET_RECENT_MATCHES_DATE,
  GET_MATCH_DETAILS_BY_ID,
  GET_MATCH_SCORECARD_DETAILS_BY_ID,
  GET_MANHATTAN_GRAPH_BY_ID,
  GET_PIECHART_ONE_GRAPH_BY_ID,
  GET_PIECHART_TWO_GRAPH_BY_ID,
} from "./Types";
import { startLoading, stopLoading } from "./LoadingAction";
import axios from "axios";

// [yatin] This url contains path address of node which is used as 
// a backend service for database quering
const url = "http://localhost:5000/api/matches";

// [yatin] This url contains path address of python which is used as 
// a backend service for visualization
const url2 = "http://127.0.0.1:5000";

// [yatin] getMatchesByDate passes date and gender as parameter and 
// fetches the list of matches with thier details for the mentioned
// /provided date.
export const getMatchesByDate = (date, gender) => dispatch => {
  dispatch(startLoading());
  return axios
    .get(url + "/ondate/" + date + "/" + gender)
    .then(res => {
      dispatch(stopLoading());
      dispatch({
        type: GET_MATCHES_BY_DATE,
        payload: res.data.data,
      });
      console.log(res.data);
    })
    .catch(err => {
      dispatch(startLoading());
      console.log(err);
    });
};

// [yatin] getRecentMatchesDate passes gender as parameter and 
// fetches the list of recent dates 
export const getRecentMatchesDate = (gender) => dispatch => {
  return axios
    .get(url + "/recent/" + gender)
    .then(res => {
      dispatch({
        type: GET_RECENT_MATCHES_DATE,
        payload: res.data.data,
      });
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    });
};

// [yatin] getmatchdetailbyId passes match_id as parameter and 
// fetches the summary details for the mentioned/provided match.
export const getmatchdetailbyId = id => dispatch => {
  dispatch(startLoading());
  return axios
    .get(url + "/summary/" + id, {})
    .then(res => {
      dispatch(stopLoading());
      dispatch({
        type: GET_MATCH_DETAILS_BY_ID,
        payload: res.data.data,
      });
      console.log(res.data);
    })
    .catch(err => {
      dispatch(startLoading());
      console.log(err);
    });
};

// [yatin] getMatchScorecardDetailbyId passes match_id as a parameter and 
// fetches the scorecard details for the mentioned/provided match.
export const getMatchScorecardDetailbyId = id => dispatch => {
  dispatch(startLoading());
  return axios
    .get(url + "/scorecard/" + id, {})
    .then(res => {
      dispatch(stopLoading());
      dispatch({
        type: GET_MATCH_SCORECARD_DETAILS_BY_ID,
        payload: res.data.data,
      });
      console.log(res.data);
    })
    .catch(err => {
      dispatch(startLoading());
      console.log(err);
    });
};

// [yatin] getManhattanGraphbyId passes match_id as a parameter and 
// fetches the manhattan graph for the mentioned/provided match.
export const getManhattanGraphbyId = id => dispatch => {
  dispatch(startLoading());
  return axios
    .get(url2 + "/runsperover/" + id, {})
    .then(res => {
      dispatch(stopLoading());
      dispatch({
        type: GET_MANHATTAN_GRAPH_BY_ID,
        payload: res.data,
      });
      console.log(res.data);
    })
    .catch(err => {
      dispatch(startLoading());
      console.log(err);
    });
};

// [yatin] getPieChartOnebyId passes match_id as a parameter and 
// fetches the pichart graph based on players run for both team
//  for the mentioned/provided match.
export const getPieChartOnebyId = id => dispatch => {
  dispatch(startLoading());
  return axios
    .get(url2 + "/playerruns/" + id, {})
    .then(res => {
      dispatch(stopLoading());
      dispatch({
        type: GET_PIECHART_ONE_GRAPH_BY_ID,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch(startLoading());
      console.log(err);
    });
};

// [yatin] getPieChartTwobyId passes match_id as a parameter and 
// fetches the pichart graph based on bowlers wickets for both team
//  for the mentioned/provided match.
export const getPieChartTwobyId = id => dispatch => {
  dispatch(startLoading());
  return axios
    .get(url2 + "/bowlerwickets/" + id, {})
    .then(res => {
      dispatch(stopLoading());
      dispatch({
        type: GET_PIECHART_TWO_GRAPH_BY_ID,
        payload: res.data,
      });
      console.log(res.data);
    })
    .catch(err => {
      dispatch(startLoading());
      console.log(err);
    });
};
