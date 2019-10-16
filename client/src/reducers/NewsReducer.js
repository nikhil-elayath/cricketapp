import {
  GET_PLAYERS,
  GET_STATISTICS,
  GET_PLAYER_STATS,
  GET_TOP_BATSMAN,
  GET_NEWS_ID,
} from "../actions/Types";

const intialState = {
  news: [],
};

export default function(state = intialState, action) {
  switch (action.type) {
    case GET_NEWS_ID:
      return {
        ...state,
        news: action.payload,
      };
    default:
      return state;
  }
}
