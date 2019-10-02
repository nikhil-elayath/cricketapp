import { GET_RECENT_MATCHES, GET_MATCHES_DATE, GET_MATCH_DETAILS_BY_ID } from './Types'
import axios from "axios";

const url = 'http://localhost:5000/api/matches';

export const getRecentMatches = (date) => dispatch => {
    return axios
        .get(url + "/recent/" + date, {
        })
        .then(res => {
            dispatch({
                type: GET_RECENT_MATCHES,
                payload: res.data.data
            });
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        });
};

export const getMatchesDate = () => dispatch => {
    return axios
        .get(url + "/bydate", {
        })
        .then(res => {
            dispatch({
                type: GET_MATCHES_DATE,
                payload: res.data.data
            });
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        });
};

export const getmatchdetailbyId = (id) => dispatch => {
    return axios
        .get(url + "/summary/" + id, {
        })
        .then(res => {
            dispatch({
                type: GET_MATCH_DETAILS_BY_ID,
                payload: res.data.data
            });
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        });
};

