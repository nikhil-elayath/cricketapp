import teams from "../TeamsReducer";
import { GET_TEAMS } from "../../actions/Types";

describe("Testing TeamsReducer", () => {
  it("should return a state object with teams array equal to the payload in the action when the action type is GET_TEAMS (when the returned state is initial state", () => {
    const action = {
      type: GET_TEAMS,
      payload: [{}, {}, {}]
    };
    const returnedState = teams(undefined, action);
    expect(returnedState).toEqual({ teams: action.payload });
  });

  it("should return a state object with teams array equal to the payload in the action when the action type is GET_TEAMS (when the returned state is not an initial state", () => {
    const initialState = {
      teams: [1, 2, 3, 4, 5]
    };
    const action = {
      type: GET_TEAMS,
      payload: [{}, {}, {}]
    };
    const returnedState = teams(initialState, action);
    expect(returnedState).toEqual({ teams: action.payload });
  });

  it("should return the initial state object when the action type is not mentioned or doesn't concern the reducer (when the returned state is initial state", () => {
    let action = {
      payload: [{}, {}, {}]
    };
    let returnedState = teams(undefined, action);
    expect(returnedState).toEqual({ teams: [] });
    action = {
      type: "SOME_TYPE",
      payload: [{}, {}, {}]
    };
    returnedState = teams(undefined, action);
    expect(returnedState).toEqual({ teams: [] });
  });

  it("should return a state object with teams array equal to the payload in the action when the action type is GET_TEAMS (when the returned state is not an initial state", () => {
    const initialState = {
      teams: [1, 2, 3, 4, 5]
    };
    let action = {
      payload: [{}, {}, {}]
    };
    let returnedState = teams(initialState, action);
    expect(returnedState).toEqual({ teams: initialState.teams });
    action = {
      type: "SOME_TYPE",
      payload: [{}, {}, {}]
    };
    returnedState = teams(initialState, action);
    expect(returnedState).toEqual({ teams: initialState.teams });
  });
});
