import {
  GET_PLAYERS,
  GET_STATISTICS,
  GET_PLAYER_STATS,
  GET_TOP_BATSMAN,
  GET_NEWS,
} from "../actions/Types";

const intialState = {
  home: [],
};

export default function(state = intialState, action) {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        home: action.payload,
      };
    default:
      return state;
  }
}
