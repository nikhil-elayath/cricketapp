import {
  GET_PLAYERS,
  GET_SINGLE_PLAYER,
  GET_ALL_BATSMAN,
  GET_ALL_BOWLERS,
  GET_BATSMAN_STATS,
  GET_ODI_BATSMAN_STATS,
  GET_T20_BATSMAN_STATS,
  GET_ODI_BOWLER_STATS,
  GET_T20_BOWLER_STATS,
  GET_TEST_BOWLER_STATS,
  GET_TOP_SIXES
} from "./Types";
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
      // console.log("From Player Actions bowler data is: ", res.data.data);
      dispatch({
        type: GET_ALL_BOWLERS,
        payload: res.data.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const getTopSixes = match_type => dispatch => {
  return axios
    .post("http://localhost:5000/apis/PlayerInfo/TopSixes", match_type)
    .then(res => {
      // console.log("From Player Actions bowler data is: ", res.data.data);
      dispatch({
        type: GET_TOP_SIXES,
        payload: res.data.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const getODIBatsmanStats = player_id => dispatch => {
  return axios
    .get("http://localhost:5000/apis/PlayerInfo/ODI-Batsman-Stats/" + player_id)
    .then(res => {
      // console.log("From Player Actions odi Batsman stats is: ", res.data.ODI);
      dispatch({
        type: GET_ODI_BATSMAN_STATS,
        payload: res.data.ODI
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const getODIBowlerStats = player_id => dispatch => {
  return axios
    .get("http://localhost:5000/apis/PlayerInfo/ODIBowlerStats/" + player_id)
    .then(res => {
      console.log(
        "From Player Actions odi BOWLER stats is: ",
        res.data.ODIBowler
      );
      dispatch({
        type: GET_ODI_BOWLER_STATS,
        payload: res.data.ODIBowler
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const getTestBatsmanStats = player_id => dispatch => {
  return axios
    .get(
      "http://localhost:5000/apis/PlayerInfo/Test-Batsman-Stats/" + player_id
    )
    .then(res => {
      // console.log("From Player Actions test Batsman stats is: ", res.data.Test);
      dispatch({
        type: GET_BATSMAN_STATS,
        payload: res.data.Test
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const getTestBowlerStats = player_id => dispatch => {
  return axios
    .get("http://localhost:5000/apis/PlayerInfo/Test-Bowler-Stats/" + player_id)
    .then(res => {
      console.log(
        "From Player Actions test Batsman stats is: ",
        res.data.TestBowler
      );
      dispatch({
        type: GET_TEST_BOWLER_STATS,
        payload: res.data.TestBowler
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const getT20BatsmanStats = player_id => dispatch => {
  return axios
    .get("http://localhost:5000/apis/PlayerInfo/T20-Batsman-Stats/" + player_id)
    .then(res => {
      // console.log("From Player Actions test Batsman stats is: ", res.data.T20);
      dispatch({
        type: GET_T20_BATSMAN_STATS,
        payload: res.data.T20
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const getT20BowlerStats = player_id => dispatch => {
  return axios
    .get("http://localhost:5000/apis/PlayerInfo/T20-Bowler-Stats/" + player_id)
    .then(res => {
      console.log(
        "From Player Actions ODI BOWLER stats is: ",
        res.data.T20Bowler
      );
      dispatch({
        type: GET_T20_BOWLER_STATS,
        payload: res.data.T20Bowler
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const getBatsmanStats = player_id => dispatch => {
  return axios
    .get("http://localhost:5000/apis/PlayerInfo/Batsman-Stats/" + player_id)
    .then(res => {
      console.log("From Player Actions test Batsman stats is: ", res.data.data);
      dispatch({
        type: GET_T20_BOWLER_STATS,
        payload: res.data.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};
