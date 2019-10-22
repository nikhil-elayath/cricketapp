import {
  GET_PLAYERS,
  GET_SINGLE_PLAYER,
  GET_BATSMAN_STATS,
  GET_ODI_BATSMAN_STATS,
  GET_T20_BATSMAN_STATS,
  GET_ODI_BOWLER_STATS,
  GET_T20_BOWLER_STATS,
  GET_TEST_BOWLER_STATS,
  GET_TOP_PLAYERS
} from "../../actions/Types";

import PlayerReducer from "../PlayerReducer";

describe("Testing Player reducer", () => {
  ////// ############## ALL PLAYER //////////////////////

  it("should return  state object with player Details array equal to the payload in the action when the action type is GET_PLAYERS(when the state is initial state)", () => {
    const action = {
      type: GET_PLAYERS,
      payload: [],
      singlepl: [[]],
      topPl: [[]],
      batsmanStatspl: [[]],
      odiBatsmanStatspl: [[]],
      t20BatsmanStatspl: [[]],
      odiBowlerStatspl: [[]],
      t20BowlerStatspl: [[]],
      testBowlerStatspl: [[]]
    };
    const returnedState = PlayerReducer(undefined, action);
    expect(returnedState).toEqual({
      playerInfo: action.payload,
      singlePlayer: action.singlepl,
      topPlayer: action.topPl,
      odiBatsmanStats: action.odiBatsmanStatspl,
      t20BatsmanStats: action.t20BatsmanStatspl,
      batsmanStats: action.batsmanStatspl,
      odiBowlerStats: action.odiBowlerStatspl,
      t20BowlerStats: action.t20BowlerStatspl,
      testBowlerStats: action.testBowlerStatspl
    });
  });

  ////// ############## SINGLE PLAYER //////////////////////

  it("should return state object with player details array equal to the payload in the action when the action type is GET_PLAYERS(when state is not initial empty)", () => {
    const initialState = {
      playerInfo: [{ player_name: "MS DHONI" }, { player_id: 12 }]
    };
    const action = {
      type: GET_PLAYERS,
      payload: [{}, {}, {}]
    };
    const returnedState = PlayerReducer(initialState, action);
    console.log(returnedState);
    expect(returnedState).toEqual({ playerInfo: action.payload });
  });

  it("should return  state object with single player Details array equal to the payload in the action when the action type is GET_SINGLE_PLAYER(when the state is initial state)", () => {
    const action = {
      type: GET_SINGLE_PLAYER,
      payload: [[]],
      pl: [],
      topPl: [[]],
      batsmanStatspl: [[]],
      odiBatsmanStatspl: [[]],
      t20BatsmanStatspl: [[]],
      odiBowlerStatspl: [[]],
      t20BowlerStatspl: [[]],
      testBowlerStatspl: [[]]
    };
    const returnedState = PlayerReducer(undefined, action);
    expect(returnedState).toEqual({
      playerInfo: action.pl,
      singlePlayer: action.payload,

      topPlayer: action.topPl,
      odiBatsmanStats: action.odiBatsmanStatspl,
      t20BatsmanStats: action.t20BatsmanStatspl,
      batsmanStats: action.batsmanStatspl,
      odiBowlerStats: action.odiBowlerStatspl,
      t20BowlerStats: action.t20BowlerStatspl,
      testBowlerStats: action.testBowlerStatspl
    });
  });

  ////// ############## SINGLE PLAYER //////////////////////

  it("should return  state object with top players Details array equal to the payload in the action when the action type is GET_TOP_PLAYERS(when the state is initial state)", () => {
    const action = {
      type: GET_TOP_PLAYERS,
      payload: [[]],
      singlepl: [[]],
      allpl: [],
      batsmanStatspl: [[]],
      odiBatsmanStatspl: [[]],
      t20BatsmanStatspl: [[]],
      odiBowlerStatspl: [[]],
      t20BowlerStatspl: [[]],
      testBowlerStatspl: [[]]
    };
    const returnedState = PlayerReducer(undefined, action);
    expect(returnedState).toEqual({
      playerInfo: action.allpl,
      singlePlayer: action.singlepl,
      topPlayer: action.payload,
      odiBatsmanStats: action.odiBatsmanStatspl,
      t20BatsmanStats: action.t20BatsmanStatspl,
      batsmanStats: action.batsmanStatspl,
      odiBowlerStats: action.odiBowlerStatspl,
      t20BowlerStats: action.t20BowlerStatspl,
      testBowlerStats: action.testBowlerStatspl
    });
  });

  ////// ############## Top PLAYER //////////////////////

  it("should return state object with top player details array equal to the payload in the action when the action type is GET_TOP_PLAYERS(when state is not initial empty)", () => {
    const initialState = {
      topPlayer: [{ player_name: "MS DHONI" }, { player_id: 12 }]
    };
    const action = {
      type: GET_TOP_PLAYERS,
      payload: [{}, {}, {}]
    };
    const returnedState = PlayerReducer(initialState, action);
    console.log(returnedState);
    expect(returnedState).toEqual({ topPlayer: action.payload });
  });

  ////// ############## TEST BATSMAN STATS //////////////////////

  it("should return  state object with batsman stats Details array equal to the payload in the action when the action type is GET_BATSMAN_STATS(when the state is initial state)", () => {
    const action = {
      type: GET_BATSMAN_STATS,
      payload: [],
      singlepl: [[]],
      allpl: [],
      topPl: [[]],
      odiBatsmanStatspl: [[]],
      t20BatsmanStatspl: [[]],
      odiBowlerStatspl: [[]],
      t20BowlerStatspl: [[]],
      testBowlerStatspl: [[]]
    };
    const returnedState = PlayerReducer(undefined, action);
    expect(returnedState).toEqual({
      batsmanStats: action.payload,
      playerInfo: action.allpl,
      singlePlayer: action.singlepl,
      odiBowlerStats: action.odiBowlerStatspl,
      t20BowlerStats: action.t20BowlerStatspl,
      testBowlerStats: action.testBowlerStatspl,
      topPlayer: action.topPl,
      odiBatsmanStats: action.odiBatsmanStatspl,
      t20BatsmanStats: action.t20BatsmanStatspl
    });
  });

  ////// ############## ODI BATSMAN PLAYER //////////////////////

  it("should return  state object with odi batsman stats Details array equal to the payload in the action when the action type is GET_ODI_BATSMAN_STATS(when the state is initial state)", () => {
    const action = {
      type: GET_ODI_BATSMAN_STATS,
      payload: [[]],
      singlepl: [[]],
      allpl: [],
      topPl: [[]],

      batsmanStatspl: [[]],
      t20BatsmanStatspl: [[]],
      odiBowlerStatspl: [[]],
      t20BowlerStatspl: [[]],
      testBowlerStatspl: [[]]
    };
    const returnedState = PlayerReducer(undefined, action);
    expect(returnedState).toEqual({
      odiBatsmanStats: action.payload,
      playerInfo: action.allpl,
      singlePlayer: action.singlepl,
      odiBowlerStats: action.odiBowlerStatspl,
      t20BowlerStats: action.t20BowlerStatspl,
      testBowlerStats: action.testBowlerStatspl,
      topPlayer: action.topPl,
      batsmanStats: action.batsmanStatspl,
      t20BatsmanStats: action.t20BatsmanStatspl
    });
  });

  ////// ############## T20 BATSMAN PLAYER //////////////////////

  it("should return  state object with t20 batsman stats Details array equal to the payload in the action when the action type is GET_T20_BATSMAN_STATS(when the state is initial state)", () => {
    const action = {
      type: GET_T20_BATSMAN_STATS,
      payload: [[]],
      singlepl: [[]],
      allpl: [],
      topPl: [[]],

      batsmanStatspl: [[]],
      odiBatsmanStatspl: [[]],
      odiBowlerStatspl: [[]],
      t20BowlerStatspl: [[]],
      testBowlerStatspl: [[]]
    };
    const returnedState = PlayerReducer(undefined, action);
    expect(returnedState).toEqual({
      t20BatsmanStats: action.payload,
      playerInfo: action.allpl,
      singlePlayer: action.singlepl,
      odiBowlerStats: action.odiBowlerStatspl,
      t20BowlerStats: action.t20BowlerStatspl,
      testBowlerStats: action.testBowlerStatspl,
      topPlayer: action.topPl,
      batsmanStats: action.batsmanStatspl,
      odiBatsmanStats: action.odiBatsmanStatspl
    });
  });

  ////// ############## TEST BOWLER PLAYER //////////////////////

  it("should return  state object with test bowler stats Details array equal to the payload in the action when the action type is GET_TEST_BOWLER_STATS(when the state is initial state)", () => {
    const action = {
      type: GET_TEST_BOWLER_STATS,
      payload: [[]],
      singlepl: [[]],
      allpl: [],
      topPl: [[]],

      batsmanStatspl: [[]],
      odiBatsmanStatspl: [[]],
      odiBowlerStatspl: [[]],
      t20BowlerStatspl: [[]],
      t20BatsmanStatspl: [[]]
    };
    const returnedState = PlayerReducer(undefined, action);
    expect(returnedState).toEqual({
      testBowlerStats: action.payload,
      playerInfo: action.allpl,
      singlePlayer: action.singlepl,
      odiBowlerStats: action.odiBowlerStatspl,
      t20BowlerStats: action.t20BowlerStatspl,
      t20BatsmanStats: action.t20BatsmanStatspl,
      topPlayer: action.topPl,
      batsmanStats: action.batsmanStatspl,
      odiBatsmanStats: action.odiBatsmanStatspl
    });
  });

  ////// ############## ODI BOWLER PLAYER //////////////////////

  it("should return  state object with odi bowler stats Details array equal to the payload in the action when the action type is GET_ODI_BOWLER_STATS(when the state is initial state)", () => {
    const action = {
      type: GET_ODI_BOWLER_STATS,
      payload: [[]],
      singlepl: [[]],
      allpl: [],
      topPl: [[]],

      batsmanStatspl: [[]],
      odiBatsmanStatspl: [[]],
      testBowlerStatspl: [[]],
      t20BowlerStatspl: [[]],
      t20BatsmanStatspl: [[]]
    };
    const returnedState = PlayerReducer(undefined, action);
    expect(returnedState).toEqual({
      odiBowlerStats: action.payload,
      playerInfo: action.allpl,
      singlePlayer: action.singlepl,
      t20BowlerStats: action.t20BowlerStatspl,
      testBowlerStats: action.testBowlerStatspl,
      t20BatsmanStats: action.t20BatsmanStatspl,
      topPlayer: action.topPl,
      batsmanStats: action.batsmanStatspl,
      odiBatsmanStats: action.odiBatsmanStatspl
    });
  });

  ////// ############## T20 Bowler PLAYER //////////////////////

  it("should return  state object with t20 bowler stats Details array equal to the payload in the action when the action type is GET_T20_BOWLER_STATS(when the state is initial state)", () => {
    const action = {
      type: GET_T20_BOWLER_STATS,
      payload: [[]],
      singlepl: [[]],
      allpl: [],
      topPl: [[]],

      batsmanStatspl: [[]],
      odiBatsmanStatspl: [[]],
      testBowlerStatspl: [[]],
      odiBowlerStatspl: [[]],
      t20BatsmanStatspl: [[]]
    };
    const returnedState = PlayerReducer(undefined, action);
    expect(returnedState).toEqual({
      t20BowlerStats: action.payload,
      playerInfo: action.allpl,
      singlePlayer: action.singlepl,
      odiBowlerStats: action.odiBowlerStatspl,
      testBowlerStats: action.testBowlerStatspl,
      t20BatsmanStats: action.t20BatsmanStatspl,
      topPlayer: action.topPl,
      batsmanStats: action.batsmanStatspl,
      odiBatsmanStats: action.odiBatsmanStatspl
    });
  });

  ////// ############## WHEN THE TYPE IS SOME TYPE  //////////////////////

  it("with initialState - return same state action of type SOME_TYPE as it goes to default case", () => {
    const action = {
      type: "SOME_TYPE"
    };
    const returnedState = PlayerReducer(undefined, action);
    expect(returnedState).toEqual({
      singlePlayer: [[]],
      playerInfo: [],
      topPlayer: [[]],
      batsmanStats: [[]],
      odiBatsmanStats: [[]],
      t20BatsmanStats: [[]],
      odiBowlerStats: [[]],
      t20BowlerStats: [[]],
      testBowlerStats: [[]]
    });
  });
});
