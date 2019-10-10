import {
  GET_PLAYERS,
  CREATE_PLAYER,
  EDIT_PLAYER,
  DELETE_PLAYER
  // GET_PLAYER_SEARCH
} from "../actions/Types";

const initialState = {
  player: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PLAYERS:
      console.log("GET_PLAYERS");
      return {
        ...state,
        player: action.payload
      };
    case CREATE_PLAYER:
      return state;
    case EDIT_PLAYER:
      return state;
    case DELETE_PLAYER:
      return state;
    // case GET_PLAYER_SEARCH:
    //   return {
    //     ...state,
    //     player: action.payload
    //   };
    default:
      return state;
  }
}
