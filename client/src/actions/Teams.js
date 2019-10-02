import { GET_TEAMS, GET_RANKS, GET_MATCHBYTEAMID } from "./Types";

import axios from "axios";
import { randomFill } from "crypto";

export const getTeams = () => dispatch => {
  return axios
    .get("http://localhost:5000/cricketalpha/teams")
    .then(res => {
      dispatch({
        type: GET_TEAMS,
        payload: res.data.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const getRanks = ranking => dispatch => {
  return axios
    .post("http://localhost:5000/cricketalpha/teams/rankings", ranking)
    .then(res => {
      dispatch({
        type: GET_RANKS,
        payload: res.data.data
      });
      console.log("from actions", ranking);
    })
    .catch(err => {
      console.log(err);
    });
};

export const getMatch = team_id => dispatch => {
  return axios
    .get("http://localhost:5000/cricketalpha/teams/match/" + team_id)
    .then(res => {
      dispatch({
        type: GET_MATCHBYTEAMID,
        payload: res.data.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};
