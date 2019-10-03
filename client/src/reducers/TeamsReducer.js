import { GET_TEAMS, GET_RANKS, GET_MATCHBYTEAMID } from "../actions/Types";

const initialstate = {
  teams: [],
  ranks: [],
  matches: []
};

export default function(state = initialstate, action) {
  switch (action.type) {
    case GET_TEAMS:
      return { ...state, teams: action.payload };
    case GET_RANKS:
      return { ...state, ranks: action.payload };
    case GET_MATCHBYTEAMID:
      return { ...state, matches: action.payload };
    default:
      return state;
  }
}
