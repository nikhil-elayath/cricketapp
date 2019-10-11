import AdminTeam from "../AdminTeamReducer";
import {
  GET_TEAMS,
  CREATE_TEAM,
  EDIT_TEAM,
  DELETE_TEAM
} from "../../actions/Types";

describe("Testing Users Reducers", () => {
  // for get player
  it("should return a state object with user array equal to the payload in the action when the action type is GET_USER (when the returned state is initial state)", () => {
    const action = {
      type: GET_TEAMS,
      payload: [{}, {}, {}]
    };
    const returnedState = AdminTeam(undefined, action);
    expect(returnedState).toEqual({ matches: action.payload });
  });

  it("should return a state object with user array equal to the payload in the action when the action type is GET_USER (when the returned state is not an initial state)", () => {
    const initialState = {
      users: [1, 2, 3, 4, 5]
    };
    const action = {
      type: GET_USERS,
      payload: [{}, {}, {}]
    };
    const returnedState = AdminTeam(initialState, action);
    expect(returnedState).toEqual({ matches: action.payload });
  });

  it("should return the initial state object when the action type is not mentioned or doesn't concern the reducer (when the returned state is initial state)", () => {
    let action = {
      payload: [{}, {}, {}]
    };
    let returnedState = AdminTeam(undefined, action);
    expect(returnedState).toEqual({ matches: [] });
    action = {
      type: "SOME_TYPE",
      payload: [{}, {}, {}]
    };
    returnedState = AdminTeam(undefined, action);
    expect(returnedState).toEqual({ matches: [] });
  });

  it("should return a state object with user array equal to the payload in the action when the action type is GET_USERS (when the returned state is not an initial state)", () => {
    const initialState = {
      user: [1, 2, 3, 4, 5]
    };
    let action = {
      payload: [{}, {}, {}]
    };
    let returnedState = AdminTeam(initialState, action);
    expect(returnedState).toEqual({ matches: initialState.user });
    action = {
      type: "SOME_TYPE",
      payload: [{}, {}, {}]
    };
    returnedState = AdminTeam(initialState, action);
    expect(returnedState).toEqual({ matches: initialState.user });
  });

  //for create team
  it("should return a state object with user array equal to the payload in the action when the action type is CREATE_USERS (when the returned state is initial state)", () => {
    const action = {
      type: CREATE_TEAM
      // payload: [{}, {}, {}]
    };
    const returnedState = AdminTeam(undefined, action);
    expect(returnedState).toEqual({ team: [] });
  });
  it("should return a state object with user array equal to the payload in the action when the action type is CREATE_USERS (when the returned state is not an initial state)", () => {
    const initialState = {
      users: [1, 2, 3, 4, 5]
    };
    const action = {
      type: CREATE_TEAM
      // payload: [{}, {}, {}]
    };
    const returnedState = AdminTeam(initialState, action);
    expect(returnedState).toEqual({ team: initialState.users });
  });

  // for edit player
  it("should return a state object with user array equal to the payload in the action when the action type is CREATE_USERS (when the returned state is initial state)", () => {
    const action = {
      type: EDIT_TEAM
      // payload: [{}, {}, {}]
    };
    const returnedState = AdminPlayer(undefined, action);
    expect(returnedState).toEqual({ team: [] });
  });
  it("should return a state object with user array equal to the payload in the action when the action type is CREATE_USERS (when the returned state is not an initial state)", () => {
    const initialState = {
      users: [1, 2, 3, 4, 5]
    };
    const action = {
      type: EDIT_TEAM
      // payload: [{}, {}, {}]
    };
    const returnedState = AdminPlayer(initialState, action);
    expect(returnedState).toEqual({ team: initialState.users });
  });

  // for delete player
  it("should return a state object with user array equal to the payload in the action when the action type is CREATE_USERS (when the returned state is initial state)", () => {
    const action = {
      type: DELETE_TEAM
      // payload: [{}, {}, {}]
    };
    const returnedState = AdminPlayer(undefined, action);
    expect(returnedState).toEqual({ team: [] });
  });
  it("should return a state object with user array equal to the payload in the action when the action type is CREATE_USERS (when the returned state is not an initial state)", () => {
    const initialState = {
      users: [1, 2, 3, 4, 5]
    };
    const action = {
      type: DELETE_TEAM
      // payload: [{}, {}, {}]
    };
    const returnedState = AdminPlayer(initialState, action);
    expect(returnedState).toEqual({ team: initialState.users });
  });
});
