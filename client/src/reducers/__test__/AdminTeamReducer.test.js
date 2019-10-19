import AdminTeam from "../AdminTeamReducer";
import {
  GET_ALLTEAMS,
  CREATE_TEAM,
  EDIT_TEAM,
  DELETE_TEAM,
  GET_TEAM_SEARCH,
  ERROR_TYPE
} from "../../actions/Types";

describe("Testing Users Reducers", () => {
  // for get player
  it("should return a state object with team array equal to the payload in the action when the action type is GET_TEAMS (when the returned state is initial state)", () => {
    const action = {
      type: GET_ALLTEAMS,
      payload: [{}, {}, {}]
    };
    const returnedState = AdminTeam(undefined, action);
    expect(returnedState).toEqual({ error: "", team: action.payload });
  });

  it("should return a state object with user array equal to the payload in the action when the action type is GET_TEAMS (when the returned state is not an initial state)", () => {
    const initialState = {
      team: [1, 2, 3, 4, 5]
    };
    const action = {
      type: GET_ALLTEAMS,
      payload: [{}, {}, {}]
    };
    const returnedState = AdminTeam(initialState, action);
    expect(returnedState).toEqual({ team: action.payload });
  });

  it("should return the initial state object when the action type is not mentioned or doesn't concern the reducer (when the returned state is initial state)", () => {
    let action = {
      payload: [{}, {}, {}]
    };
    let returnedState = AdminTeam(undefined, action);
    expect(returnedState).toEqual({ error: "", team: [] });
    action = {
      type: "SOME_TYPE",
      payload: [{}, {}, {}]
    };
    returnedState = AdminTeam(undefined, action);
    expect(returnedState).toEqual({ error: "", team: [] });
  });

  it("should return a state object with team array equal to the payload in the action when the action type is GET_TEAMS (when the returned state is not an initial state)", () => {
    const initialState = {
      team: [1, 2, 3, 4, 5]
    };
    let action = {
      payload: [{}, {}, {}]
    };
    let returnedState = AdminTeam(initialState, action);
    expect(returnedState).toEqual({ team: initialState.team });
    action = {
      type: "SOME_TYPE",
      payload: [{}, {}, {}]
    };
    returnedState = AdminTeam(initialState, action);
    expect(returnedState).toEqual({ team: initialState.team });
  });

  //for create team
  it("should return a state object with team array when the action type is CREATE_TEAM", () => {
    const action = {
      type: CREATE_TEAM
    };
    const returnedState = AdminTeam(undefined, action);
    expect(returnedState).toEqual({ error: "", team: [] });
  });
  it("should return a state object with team array when the action type is CREATE_TEAM", () => {
    const initialState = {
      team: [1, 2, 3, 4, 5]
    };
    const action = {
      type: CREATE_TEAM
    };
    const returnedState = AdminTeam(initialState, action);
    expect(returnedState).toEqual({ team: initialState.team });
  });

  // for edit team
  it("should return a state object with team array when the action type is EDIT_TEAM", () => {
    const action = {
      type: EDIT_TEAM
      // payload: [{}, {}, {}]
    };
    const returnedState = AdminTeam(undefined, action);
    expect(returnedState).toEqual({ error: "", team: [] });
  });
  it("should return a state object with team array when the action type is EDIT_TEAM", () => {
    const initialState = {
      team: [1, 2, 3, 4, 5]
    };
    const action = {
      type: EDIT_TEAM
      // payload: [{}, {}, {}]
    };
    const returnedState = AdminTeam(initialState, action);
    expect(returnedState).toEqual({ team: initialState.team });
  });

  // for delete player
  it("should return a state object with team array and error when the action type is DELETE_TEAM", () => {
    const action = {
      type: DELETE_TEAM
      // payload: [{}, {}, {}]
    };
    const returnedState = AdminTeam(undefined, action);
    expect(returnedState).toEqual({ error: "", team: [] });
  });
  it("should return a state object with team array when the action type is DELETE_TEAM", () => {
    const initialState = {
      team: [1, 2, 3, 4, 5]
    };
    const action = {
      type: DELETE_TEAM
      // payload: [{}, {}, {}]
    };
    const returnedState = AdminTeam(initialState, action);
    expect(returnedState).toEqual({ team: initialState.team });
  });

  // // for search
  it("should return a state object with team array equal to the payload in the action when the action type is GET_TEAM_SEARCH (when the returned state is initial state)", () => {
    const action = {
      type: GET_TEAM_SEARCH,
      payload: [{}, {}, {}]
    };
    const returnedState = AdminTeam(undefined, action);
    expect(returnedState).toEqual({ error: "", team: action.payload });
  });

  it("should return a state object with user array equal to the payload in the action when the action type is GET_TEAM_SEARCH (when the returned state is not an initial state)", () => {
    const initialState = {
      team: [1, 2, 3, 4, 5]
    };
    const action = {
      type: GET_TEAM_SEARCH,
      payload: [{}, {}, {}]
    };
    const returnedState = AdminTeam(initialState, action);
    expect(returnedState).toEqual({ team: action.payload });
  });

  // for error type
  it("should return a state object with team array equal to the payload in the action when the action type is GET_TEAM_SEARCH (when the returned state is initial state)", () => {
    const action = {
      type: ERROR_TYPE,
      payload: [{}, {}, {}]
    };
    const returnedState = AdminTeam(undefined, action);
    expect(returnedState).toEqual({ error: action.payload, team: [] });
  });

  it("should return a state object with user array equal to the payload in the action when the action type is GET_TEAM_SEARCH (when the returned state is not an initial state)", () => {
    const initialState = {
      error: [1, 2, 3, 4, 5]
    };
    const action = {
      type: ERROR_TYPE,
      payload: [{}, {}, {}]
    };
    const returnedState = AdminTeam(initialState, action);
    expect(returnedState).toEqual({ error: action.payload });
  });
});
