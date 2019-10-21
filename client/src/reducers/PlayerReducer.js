import {
  GET_PLAYERS,
  GET_SINGLE_PLAYER,
  GET_BATSMAN_STATS,
  GET_ODI_BATSMAN_STATS,
  GET_T20_BATSMAN_STATS,
  GET_ODI_BOWLER_STATS,
  GET_T20_BOWLER_STATS,
  GET_TEST_BOWLER_STATS,
  GET_PLAYER_SEARCH,
  GET_TOP_PLAYERS
} from "../actions/Types";

const initialState = {
  playerInfo: [],
  singlePlayer: [[]],

  topPlayer: [[]],

  batsmanStats: [[]],
  odiBatsmanStats: [[]],
  t20BatsmanStats: [[]],
  odiBowlerStats: [[]],
  t20BowlerStats: [[]],
  testBowlerStats: [[]],
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
    case GET_TOP_PLAYERS:
      console.log("GET_TOP_PLAYERS");
      return {
        ...state,
        topPlayer: action.payload
      };

    case GET_BATSMAN_STATS:
      return {
        ...state,
        batsmanStats: action.payload
      };

    case GET_TEST_BOWLER_STATS:
      return {
        ...state,
        testBowlerStats: action.payload
      };

    case GET_ODI_BATSMAN_STATS:
      return {
        ...state,
        odiBatsmanStats: action.payload
      };

    case GET_ODI_BOWLER_STATS:
      return {
        ...state,
        odiBowlerStats: action.payload
      };

    case GET_T20_BATSMAN_STATS:
      return {
        ...state,
        t20BatsmanStats: action.payload
      };

    case GET_T20_BOWLER_STATS:
      return {
        ...state,
        t20BowlerStats: action.payload
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
