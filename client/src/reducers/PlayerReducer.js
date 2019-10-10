import {
  GET_PLAYERS,
  GET_SINGLE_PLAYER,
  GET_ALL_BATSMAN,
  GET_ALL_BOWLERS,
  GET_PLAYER_SEARCH
} from "../actions/Types";

const initialState = {
  playerInfo: [],
  singlePlayer: [[]],
  batsmen: [],
  bowlers: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PLAYERS:
      console.log("GET_PLAYERS");
      return {
        ...state,
        playerInfo: action.payload
      };
    case GET_SINGLE_PLAYER:
      console.log("GET_SINGLE_PLAYER");
      return {
        ...state,
        singlePlayer: action.payload
      };
    case GET_ALL_BATSMAN:
      return {
        ...state,
        batsmen: action.payload
      };
    case GET_ALL_BOWLERS:
      return {
        ...state,
        bowlers: action.payload
      };
    case GET_PLAYER_SEARCH:
      return {
        ...state,
        playerInfo: action.payload
      };
    default:
      return state;
  }
}
