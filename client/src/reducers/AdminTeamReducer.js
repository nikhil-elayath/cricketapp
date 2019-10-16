import {
  CREATE_TEAM,
  EDIT_TEAM,
  DELETE_TEAM,
  GET_ALLTEAMS,
  GET_TEAM_SEARCH,
  ERROR_TYPE
} from "../actions/Types";

const initialState = {
  team: [],
  error: ""
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
    case ERROR_TYPE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
