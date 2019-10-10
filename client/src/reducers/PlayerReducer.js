import {
  GET_PLAYERS,
  GET_SINGLE_PLAYER,
  GET_ALL_BATSMAN,
  GET_ALL_BOWLERS,
  GET_TOP_SIXES,
  GET_BATSMAN_STATS,
  GET_ODI_BATSMAN_STATS,
  GET_T20_BATSMAN_STATS,
  GET_ODI_BOWLER_STATS,
  GET_T20_BOWLER_STATS,
  GET_TEST_BOWLER_STATS
} from "../actions/Types";

const initialState = {
  playerInfo: [],
  singlePlayer: [[]],
  batsmen: [],
  bowlers: [],
  topSixes: [],
  batsmanStats: [[{}]],
  odiBatsmanStats: [[{}]],
  t20BatsmanStats: [[{}]],
  odiBowlerStats: [[]],
  t20BowlerStats: [[{}]],
  testBowlerStats: [[{}]]
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
    case GET_TOP_SIXES:
      return {
        ...state,
        topSixes: action.payload
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

    default:
      return state;
  }
}
