import {
  GET_TEAMS,
  GET_RANKS,
  GET_MATCHBYTEAMID,
<<<<<<< HEAD
  GET_TEAM_BATSMEN,
  GET_TEAM_BOWLERS,
  GET_HIGHEST_TOTALS,
  GET_LOWEST_TOTALS
=======
  GET_TEAM_SEARCH
>>>>>>> 4383b846be8a6e0cd7c6ca5516dada82e5924f35
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
<<<<<<< HEAD
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
=======
    case GET_TEAM_SEARCH:
      return { ...state, teams: action.payload };
>>>>>>> 4383b846be8a6e0cd7c6ca5516dada82e5924f35
    default:
      return state;
  }
}
