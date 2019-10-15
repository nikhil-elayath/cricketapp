import { GET_NEWS_ID } from "./Types";
import axios from "axios";
import { id } from "date-fns/esm/locale";

export const getNewsById = id => dispatch => {
  console.log("getnews by id", id);
  return axios
    .get("http://localhost:5000/apis/News/newsbyid/" + id)
    .then(res => {
      console.log("From newsbyid actions", res.data.data);
      dispatch({
        type: GET_NEWS_ID,
        payload: res.data.data,
      });
    })
    .catch(err => {
      console.log(err);
    });
};
