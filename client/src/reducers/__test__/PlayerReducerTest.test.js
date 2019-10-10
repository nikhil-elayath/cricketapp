import {
  GET_PLAYERS,
  GET_SINGLE_PLAYER,
  GET_ALL_BATSMAN,
  GET_ALL_BOWLERS,
  GET_BATSMAN_STATS
} from "../../actions/Types";

import PlayerReducer from "../PlayerReducer";

describe("Testing Player reducer", () => {
  it("should return  state object with player Details array equal to the payload in the action when the action type is GET_PLAYERS(when the state is initial state)", () => {
    const action = {
      type: GET_PLAYERS,
      payload: [],
      singlepl: [[]],
      batpl: [],
      bowlpl: [],
      batsmanStatspl: []
    };
    const returnedState = PlayerReducer(undefined, action);
    expect(returnedState).toEqual({
      playerInfo: action.payload,
      singlePlayer: action.singlepl,
      batsmen: action.batpl,
      bowlers: action.bowlpl,
      batsmanStats: action.batsmanStatspl
    });
  });

  it("should return state object with player details array equal to the payload in the action when the action type is GET_PLAYERS(when state is not initial empty)", () => {
    const initialState = {
      playerInfo: [
        { player_name: "Ms Dhoni" },
        { batting_style: "Right Handed Bat" }
      ],
      singlePlayer: [[]],
      batsmen: [],
      bowlers: [],
      batsmanStats: []
    };

    const action = {
      type: GET_PLAYERS,
      payload: [{}, {}, {}],
      singlepl: [[]],
      batpl: [],
      bowlpl: [],
      batsmanStatspl: []
    };

    const returnedState = PlayerReducer(initialState, action);
    expect(returnedState).toEqual({
      playerInfo: action.payload,
      singlePlayer: action.singlepl,
      batsmen: action.batpl,
      bowlers: action.bowlpl,
      batsmanStats: action.batsmanStatspl
    });
  });

  it("should return  state object with single player Details array equal to the payload in the action when the action type is GET_SINGLE_PLAYER(when the state is initial state)", () => {
    const action = {
      type: GET_SINGLE_PLAYER,
      payload: [[]],
      pl: [],
      batpl: [],
      bowlpl: [],
      batsmanStatspl: []
    };
    const returnedState = PlayerReducer(undefined, action);
    expect(returnedState).toEqual({
      playerInfo: action.pl,
      singlePlayer: action.payload,
      batsmen: action.batpl,
      bowlers: action.bowlpl,
      batsmanStats: action.batsmanStatspl
    });
  });

  it("should return  state object with all batsman  Details array equal to the payload in the action when the action type is GET_ALL_BATSMAN(when the state is initial state)", () => {
    const action = {
      type: GET_ALL_BATSMAN,
      payload: [],
      singlepl: [[]],
      allpl: [],
      bowlpl: [],
      batsmanStatspl: []
    };
    const returnedState = PlayerReducer(undefined, action);
    expect(returnedState).toEqual({
      playerInfo: action.allpl,
      singlePlayer: action.singlepl,
      batsmen: action.payload,
      bowlers: action.bowlpl,
      batsmanStats: action.batsmanStatspl
    });
  });

  it("should return  state object with all bowlers  Details array equal to the payload in the action when the action type is GET_ALL_BOWLERS(when the state is initial state)", () => {
    const action = {
      type: GET_ALL_BOWLERS,
      payload: [],
      singlepl: [[]],
      allpl: [],
      batpl: [],
      batsmanStatspl: []
    };
    const returnedState = PlayerReducer(undefined, action);
    expect(returnedState).toEqual({
      playerInfo: action.allpl,
      singlePlayer: action.singlepl,
      batsmen: action.batpl,
      bowlers: action.payload,
      batsmanStats: action.batsmanStatspl
    });
  });
  it("should return  state object with batsman stats Details array equal to the payload in the action when the action type is GET_BATSMAN_STATS(when the state is initial state)", () => {
    const action = {
      type: GET_BATSMAN_STATS,
      payload: [],
      singlepl: [[]],
      allpl: [],
      batpl: [],
      bowlpl: []
    };
    const returnedState = PlayerReducer(undefined, action);
    expect(returnedState).toEqual({
      playerInfo: action.allpl,
      singlePlayer: action.singlepl,
      batsmen: action.batpl,
      bowlers: action.bowlpl,
      batsmanStats: action.payload
    });
  });
});
