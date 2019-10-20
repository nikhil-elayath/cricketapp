import {
  GET_RECENT_MATCHES_BY_DATE,
  GET_MATCHES_DATE,
  GET_MATCH_DETAILS_BY_ID,
  GET_MATCH_SCORECARD_DETAILS_BY_ID,
  GET_MANHATTAN_GRAPH_BY_ID,
  GET_PIECHART_ONE_GRAPH_BY_ID,
  GET_PIECHART_TWO_GRAPH_BY_ID
} from "./Types";
import { startLoading, stopLoading } from "./LoadingAction";
import axios from "axios";

const url = "http://localhost:5000/api/matches";
const url2 = "http://127.0.0.1:5000";

export const getMatchesByDate = (date, gender) => dispatch => {
  dispatch(startLoading());
  return axios
    .get(url + "/ondate/" + date + "/" + gender)
    .then(res => {
      dispatch(stopLoading());
      dispatch({
        type: GET_RECENT_MATCHES_BY_DATE,
        payload: res.data.data,
      });
      console.log(res.data);
    })
    .catch(err => {
      dispatch(startLoading());
      console.log(err);
    });
};

export const getMatchesDate = () => dispatch => {
  return axios
    .get(url + "/bydate")
    .then(res => {
      dispatch({
        type: GET_MATCHES_DATE,
        payload: res.data.data,
      });
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    });
};

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
export const getManhattanGraphbyId = id => dispatch => {
  dispatch(startLoading());
  return axios
    .get(url2 + "/runsperover/" + id, {})
    .then(res => {
      dispatch(stopLoading());
      dispatch({
        type: GET_MANHATTAN_GRAPH_BY_ID,
        payload: { manhattan: res.data },
      });
      console.log(res.data);
    })
    .catch(err => {
      dispatch(startLoading());
      console.log(err);
    });
};
export const getPieChartOnebyId = id => dispatch => {
  dispatch(startLoading());
  return axios
    .get(url2 + "/playerruns/" + id, {})
    .then(res => {
      dispatch(stopLoading());
      dispatch({
        type: GET_PIECHART_ONE_GRAPH_BY_ID,
        payload: res.data
      });
      console.log(res.data);
    })
    .catch(err => {
      dispatch(startLoading());
      console.log(err);
    });
};
export const getPieChartTwobyId = id => dispatch => {
  dispatch(startLoading());
  return axios
    .get(url2 + "/bowlerwickets/" + id, {})
    .then(res => {
      dispatch(stopLoading());
      dispatch({
        type: GET_PIECHART_TWO_GRAPH_BY_ID,
        payload: { piechartTwo: res.data },
      });
      console.log(res.data);
    })
    .catch(err => {
      dispatch(startLoading());
      console.log(err);
    });
};
