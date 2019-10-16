import { GET_SEARCH } from "./Types";
import axios from "axios";
import Search from "../reducers/Search";

export const getSearch = (search_term, history) => dispatch => {
  console.log("actions getsearch", search_term);
  return axios
    .post("http://localhost:5000/apis/Search/search", search_term)
    .then(res => {
      console.log("From Search Actions", res.data.data);
      dispatch({
        type: GET_SEARCH,
        payload: res.data.data,
      });
      console.log("before pushing");

      history.push("/playerInfo/" + res.data.data[0].player_id);
      history.puh("/teamdetails/" + res.data.data[1].team_id);
    })
    .catch(err => {
      console.log(err);
    });
};
