import {
  GET_TEAMS,
  GET_RANKS,
  GET_MATCHBYTEAMID,
  GET_TEAM_BATSMEN,
  GET_TEAM_BOWLERS,
  GET_TEAM_FIXTURES,
  GET_HIGHEST_TOTALS,
  GET_LOWEST_TOTALS
} from "./Types";

import axios from "axios";

export const getTeams = match_type => dispatch => {
  return axios
    .post("http://localhost:5000/cricketalpha/teams", match_type)
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

export const getMatch = (team_id, match_type) => dispatch => {
  return axios
    .post(
      "http://localhost:5000/cricketalpha/teams/match/" + team_id,
      match_type
    )
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

export const getTeamBatsmen = match_type => dispatch => {
  return axios
    .post("http://localhost:5000/cricketalpha/teams/topbatsmen", match_type)
    .then(res => {
      dispatch({
        type: GET_TEAM_BATSMEN,
        payload: res.data.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const getTeamBowlers = match_type => dispatch => {
  return axios
    .post("http://localhost:5000/cricketalpha/teams/topbowlers", match_type)
    .then(res => {
      dispatch({
        type: GET_TEAM_BOWLERS,
        payload: res.data.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const getFixtures = (team_id, match_type) => dispatch => {
  return axios
    .post(
      "http://localhost:5000/cricketalpha/teams/fixtures/" + team_id,
      match_type
    )
    .then(res => {
      dispatch({
        type: GET_TEAM_FIXTURES,
        payload: res.data.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const getHighestTotals = (team_id, match_type) => dispatch => {
  return axios
    .post(
      "http://localhost:5000/cricketalpha/teams/highesttotals/" + team_id,
      match_type
    )
    .then(res => {
      dispatch({
        type: GET_HIGHEST_TOTALS,
        payload: res.data.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const getLowestTotals = (team_id, match_type) => dispatch => {
  return axios
    .post(
      "http://localhost:5000/cricketalpha/teams/lowesttotals/" + team_id,
      match_type
    )
    .then(res => {
      dispatch({
        type: GET_LOWEST_TOTALS,
        payload: res.data.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};
