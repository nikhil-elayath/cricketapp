import { GET_RECENT_MATCHES } from './types'
import axios from "axios";

const url = 'http://localhost:5000/api/matches';

export const getRecentMatches = () => dispatch => {
    return axios
        .get(url + "/recent", {
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