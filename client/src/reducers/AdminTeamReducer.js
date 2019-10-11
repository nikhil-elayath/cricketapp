import {
  CREATE_TEAM,
  EDIT_TEAM,
  DELETE_TEAM,
  GET_ALLTEAMS,
  GET_TEAM_SEARCH
} from "../actions/Types";

const initialState = {
  team: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALLTEAMS:
      console.log("GET_ALLTEAMS");
      return {
        ...state,
        team: action.payload
      };
    case CREATE_TEAM:
      return state;
    case EDIT_TEAM:
      return state;
    case DELETE_TEAM:
      return state;
    case GET_ALLTEAMS:
      return state;
    case GET_TEAM_SEARCH:
      return {
        ...state,
        team: action.payload
      };
    default:
      return state;
  }
}
