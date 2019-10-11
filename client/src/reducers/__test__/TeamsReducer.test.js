import TeamsReducer from "../TeamsReducer";
import {
  GET_TEAMS,
  GET_RANKS,
  GET_MATCHBYTEAMID,
  GET_TEAM_BATSMEN,
  GET_TEAM_BOWLERS,
  GET_HIGHEST_TOTALS,
  GET_LOWEST_TOTALS
} from "../../actions/Types";

describe("Testing TeamsReducer", () => {
  it("should return a state object with teams array equal to the payload in the action when the action type is GET_TEAMS (when the returned state is initial state", () => {
    const action = {
      type: GET_TEAMS,
      payload: [],
      matches: [],
      ranks: [],
      teams: [],
      batsmen: [],
      bowlers: [],
      highesttotals: [],
      lowesttotals: []
    };
    const returnedState = TeamsReducer(undefined, action);
    expect(returnedState).toEqual({
      matches: action.payload,
      ranks: action.payload,
      teams: action.payload,
      batsmen: action.payload,
      bowlers: action.payload,
      highesttotals: action.payload,
      lowesttotals: action.payload
    });
  });

  it("should return a state object with teams array equal to the payload in the action when the action type is GET_TEAMS (when the returned state is not an initial state", () => {
    const initialState = {
      teams: [1, 2, 3, 4, 5]
    };
    const action = {
      type: GET_TEAMS,
      payload: [{}, {}, {}]
    };
    const returnedState = TeamsReducer(initialState, action);
    expect(returnedState).toEqual({ teams: action.payload });
  });

  it("should return a state object with teams array equal to the payload in the action when the action type is GET_RANKS (when the returned state is initial state", () => {
    const action = {
      type: GET_RANKS,
      payload: [],
      matches: [],
      ranks: [],
      teams: [],
      batsmen: [],
      bowlers: [],
      highesttotals: [],
      lowesttotals: []
    };
    const returnedState = TeamsReducer(undefined, action);
    expect(returnedState).toEqual({
      matches: action.payload,
      ranks: action.payload,
      teams: action.payload,
      batsmen: action.payload,
      bowlers: action.payload,
      highesttotals: action.payload,
      lowesttotals: action.payload
    });
  });

  it("should return a state object with teams array equal to the payload in the action when the action type is GET_RANKS (when the returned state is not an initial state", () => {
    const initialState = {
      ranks: [1, 2, 3, 4, 5]
    };
    const action = {
      type: GET_RANKS,
      payload: [{}, {}, {}]
    };
    const returnedState = TeamsReducer(initialState, action);
    expect(returnedState).toEqual({ ranks: action.payload });
  });

  it("should return a state object with teams array equal to the payload in the action when the action type is GET_MATCHBYID (when the returned state is initial state", () => {
    const action = {
      type: GET_MATCHBYTEAMID,
      payload: [],
      matches: [],
      ranks: [],
      teams: [],
      batsmen: [],
      bowlers: [],
      highesttotals: [],
      lowesttotals: []
    };
    const returnedState = TeamsReducer(undefined, action);
    expect(returnedState).toEqual({
      matches: action.payload,
      ranks: action.payload,
      teams: action.payload,
      batsmen: action.payload,
      bowlers: action.payload,
      highesttotals: action.payload,
      lowesttotals: action.payload
    });
  });

  it("should return a state object with teams array equal to the payload in the action when the action type is GET_MATCHBYID (when the returned state is not an initial state", () => {
    const initialState = {
      matches: [1, 2, 3, 4, 5]
    };
    const action = {
      type: GET_MATCHBYTEAMID,
      payload: [{}, {}, {}]
    };
    const returnedState = TeamsReducer(initialState, action);
    expect(returnedState).toEqual({ matches: action.payload });
  });

  it("should return a state object with teams array equal to the payload in the action when the action type is GET_TEAM_BATSMEN (when the returned state is initial state", () => {
    const action = {
      type: GET_TEAM_BATSMEN,
      payload: [],
      matches: [],
      ranks: [],
      teams: [],
      batsmen: [],
      bowlers: [],
      highesttotals: [],
      lowesttotals: []
    };
    const returnedState = TeamsReducer(undefined, action);
    expect(returnedState).toEqual({
      matches: action.payload,
      ranks: action.payload,
      teams: action.payload,
      batsmen: action.payload,
      bowlers: action.payload,
      highesttotals: action.payload,
      lowesttotals: action.payload
    });
  });

  it("should return a state object with teams array equal to the payload in the action when the action type is GET_TEAM_BATSMEN (when the returned state is not an initial state", () => {
    const initialState = {
      batsmen: [1, 2, 3, 4, 5]
    };
    const action = {
      type: GET_TEAM_BATSMEN,
      payload: [{}, {}, {}]
    };
    const returnedState = TeamsReducer(initialState, action);
    expect(returnedState).toEqual({ batsmen: action.payload });
  });

  it("should return a state object with teams array equal to the payload in the action when the action type is GET_TEAM_BOWLERS (when the returned state is initial state", () => {
    const action = {
      type: GET_TEAM_BOWLERS,
      payload: [],
      matches: [],
      ranks: [],
      teams: [],
      batsmen: [],
      bowlers: [],
      highesttotals: [],
      lowesttotals: []
    };
    const returnedState = TeamsReducer(undefined, action);
    expect(returnedState).toEqual({
      matches: action.payload,
      ranks: action.payload,
      teams: action.payload,
      batsmen: action.payload,
      bowlers: action.payload,
      highesttotals: action.payload,
      lowesttotals: action.payload
    });
  });

  it("should return a state object with teams array equal to the payload in the action when the action type is GET_TEAM_BOWLERS (when the returned state is not an initial state", () => {
    const initialState = {
      bowlers: [1, 2, 3, 4, 5]
    };
    const action = {
      type: GET_TEAM_BOWLERS,
      payload: [{}, {}, {}]
    };
    const returnedState = TeamsReducer(initialState, action);
    expect(returnedState).toEqual({ bowlers: action.payload });
  });

  it("should return a state object with teams array equal to the payload in the action when the action type is GET_HIGHEST_TOTALS (when the returned state is initial state", () => {
    const action = {
      type: GET_HIGHEST_TOTALS,
      payload: [],
      matches: [],
      ranks: [],
      teams: [],
      batsmen: [],
      bowlers: [],
      highesttotals: [],
      lowesttotals: []
    };
    const returnedState = TeamsReducer(undefined, action);
    expect(returnedState).toEqual({
      matches: action.payload,
      ranks: action.payload,
      teams: action.payload,
      batsmen: action.payload,
      bowlers: action.payload,
      highesttotals: action.payload,
      lowesttotals: action.payload
    });
  });

  it("should return a state object with teams array equal to the payload in the action when the action type is GET_HIGHEST_TOTALS (when the returned state is not an initial state", () => {
    const initialState = {
      highesttotals: [1, 2, 3, 4, 5]
    };
    const action = {
      type: GET_HIGHEST_TOTALS,
      payload: [{}, {}, {}]
    };
    const returnedState = TeamsReducer(initialState, action);
    expect(returnedState).toEqual({ highesttotals: action.payload });
  });

  it("should return a state object with teams array equal to the payload in the action when the action type is GET_LOWEST_TOTALS (when the returned state is initial state", () => {
    const action = {
      type: GET_LOWEST_TOTALS,
      payload: [],
      matches: [],
      ranks: [],
      teams: [],
      batsmen: [],
      bowlers: [],
      highesttotals: [],
      lowesttotals: []
    };
    const returnedState = TeamsReducer(undefined, action);
    expect(returnedState).toEqual({
      matches: action.payload,
      ranks: action.payload,
      teams: action.payload,
      batsmen: action.payload,
      bowlers: action.payload,
      highesttotals: action.payload,
      lowesttotals: action.payload
    });
  });

  it("should return a state object with teams array equal to the payload in the action when the action type is GET_LOWEST_TOTALS (when the returned state is not an initial state", () => {
    const initialState = {
      lowesttotals: [1, 2, 3, 4, 5]
    };
    const action = {
      type: GET_LOWEST_TOTALS,
      payload: [{}, {}, {}]
    };
    const returnedState = TeamsReducer(initialState, action);
    expect(returnedState).toEqual({ lowesttotals: action.payload });
  });

  it("should return the initial state object when the action type is not mentioned or doesn't concern the reducer (when the returned state is initial state", () => {
    let action = {
      payload: [],
      matches: [],
      ranks: [],
      teams: [],
      batsmen: [],
      bowlers: [],
      highesttotals: [],
      lowesttotals: []
    };
    let returnedState = TeamsReducer(undefined, action);
    expect(returnedState).toEqual({
      teams: [],
      matches: [],
      ranks: [],
      batsmen: [],
      bowlers: [],
      highesttotals: [],
      lowesttotals: []
    });
    action = {
      type: "SOME_TYPE",
      payload: []
    };
    returnedState = TeamsReducer(undefined, action);
    expect(returnedState).toEqual({
      teams: [],
      matches: [],
      ranks: [],
      batsmen: [],
      bowlers: [],
      highesttotals: [],
      lowesttotals: []
    });
  });

  // it("should return a state object with teams array equal to the payload in the action when the action type is GET_TEAMS (when the returned state is not an initial state", () => {
  //   const initialState = {
  //     teams: [1, 2, 3, 4, 5]
  //   };
  //   let action = {
  //     payload: [{}, {}, {}]
  //   };
  //   let returnedState = teams(initialState, action);
  //   expect(returnedState).toEqual({ teams: initialState.teams });
  //   action = {
  //     type: "SOME_TYPE",
  //     payload: [{}, {}, {}]
  //   };
  //   returnedState = teams(initialState, action);
  //   expect(returnedState).toEqual({ teams: initialState.teams });
  // });
});
