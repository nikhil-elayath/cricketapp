import TeamsReducer from "../TeamsReducer";
import { GET_TEAMS, GET_RANKS, GET_MATCHBYTEAMID } from "../../actions/Types";

describe("Testing TeamsReducer", () => {
  it("should return a state object with teams array equal to the payload in the action when the action type is GET_TEAMS (when the returned state is initial state", () => {
    const action = {
      type: GET_TEAMS,
      payload: [],
      matches: [],
      ranks: [],
      teams: []
    };
    const returnedState = TeamsReducer(undefined, action);
    expect(returnedState).toEqual({
      matches: action.payload,
      ranks: action.payload,
      teams: action.payload
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
      teams: []
    };
    const returnedState = TeamsReducer(undefined, action);
    expect(returnedState).toEqual({
      matches: action.payload,
      ranks: action.payload,
      teams: action.payload
    });
  });

  it("should return a state object with teams array equal to the payload in the action when the action type is GET_TEAMS (when the returned state is not an initial state", () => {
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
      teams: []
    };
    const returnedState = TeamsReducer(undefined, action);
    expect(returnedState).toEqual({
      matches: action.payload,
      ranks: action.payload,
      teams: action.payload
    });
  });

  it("should return a state object with teams array equal to the payload in the action when the action type is GET_TEAMS (when the returned state is not an initial state", () => {
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

  it("should return the initial state object when the action type is not mentioned or doesn't concern the reducer (when the returned state is initial state", () => {
    let action = {
      payload: [],
      matches: [],
      ranks: [],
      teams: []
    };
    let returnedState = TeamsReducer(undefined, action);
    expect(returnedState).toEqual({ teams: [], matches: [], ranks: [] });
    action = {
      type: "SOME_TYPE",
      payload: []
    };
    returnedState = TeamsReducer(undefined, action);
    expect(returnedState).toEqual({ teams: [], matches: [], ranks: [] });
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
