import {
  GET_TEAMS,
  GET_RANKS,
  GET_MATCHBYTEAMID,
  GET_TEAM_BATSMEN,
  GET_TEAM_BOWLERS,
  GET_HIGHEST_TOTALS,
  GET_LOWEST_TOTALS,
  GET_TEAM_SEARCH
} from "../actions/Types";

const initialstate = {
  teams: [],
  ranks: [],
  matches: [],
  batsmen: [],
  bowlers: [],
  highesttotals: [],
  lowesttotals: []
};

export default function(state = initialstate, action) {
  switch (action.type) {
    case GET_TEAMS:
      return { ...state, teams: action.payload };
    case GET_RANKS:
      return { ...state, ranks: action.payload };
    case GET_MATCHBYTEAMID:
      return { ...state, matches: action.payload };
    case GET_TEAM_BATSMEN:
      return {
        ...state,
        batsmen: action.payload
      };
    case GET_TEAM_BOWLERS:
      return {
        ...state,
        bowlers: action.payload
      };
    case GET_HIGHEST_TOTALS:
      return {
        ...state,
        highesttotals: action.payload
      };
    case GET_LOWEST_TOTALS:
      return {
        ...state,
        lowesttotals: action.payload
      };
    case GET_TEAM_SEARCH:
      return { ...state, teams: action.payload };
    default:
      return state;
  }
}
