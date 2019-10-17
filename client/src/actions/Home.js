import {
  GET_PLAYERS,
  GET_STATISTICS,
  GET_PLAYER_STATS,
  GET_TOP_BATSMAN,
  GET_NEWS
} from "./Types";
import axios from "axios";

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
