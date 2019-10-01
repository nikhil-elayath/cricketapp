import {
  GET_PLAYERS,
  GET_SINGLE_PLAYER,
  GET_ALL_BATSMAN,
  GET_ALL_BOWLERS
} from "../actions/Type";
import axios from "axios";

export const getPlayers = () => dispatch => {
  return axios
    .get("http://localhost:5000/apis/PlayerInfo/allPlayer")
    .then(res => {
      console.log("From Player Actions", res.data.data);
      dispatch({
        type: GET_PLAYERS,
        payload: res.data.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const getSinglePlayer = player_id => dispatch => {
  return axios
    .get("http://localhost:5000/apis/PlayerInfo/singlePlayer/" + player_id)
    .then(res => {
      console.log(
        "From Player Actions Single player is: ",
        res.data.data[0].player_name
      );
      dispatch({
        type: GET_SINGLE_PLAYER,
        payload: res.data.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const getBatsmen = match_type => dispatch => {
  return axios
    .post("http://localhost:5000/apis/PlayerInfo/TopBatsman", match_type)
    .then(res => {
      // console.log("From Player Actions batsman data is: ", res.data.data);
      dispatch({
        type: GET_ALL_BATSMAN,
        payload: res.data.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const getBowlers = match_type => dispatch => {
  return axios
    .post("http://localhost:5000/apis/PlayerInfo/TopBowlers", match_type)
    .then(res => {
      console.log("From Player Actions bowler data is: ", res.data.data);
      dispatch({
        type: GET_ALL_BOWLERS,
        payload: res.data.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};
