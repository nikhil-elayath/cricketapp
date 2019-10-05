import {
  GET_TEAMS,
  CREATE_TEAM,
  EDIT_TEAM,
  DELETE_TEAM
} from "../actions/Types";

const initialState = {
  team: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TEAMS:
      console.log("GET_TEAM");
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
    default:
      return state;
  }
}
