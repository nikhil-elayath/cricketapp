import AdminPlayer from "../AdminPlayerReducer";
import {
  GET_PLAYERS,
  CREATE_PLAYER,
  EDIT_PLAYER,
  DELETE_PLAYER,
  ERROR_TYPE
} from "../../actions/Types";

describe("Testing Users Reducers", () => {
  // for get player
  it("should return a state object with user array equal to the payload in the action when the action type is GET_USER (when the returned state is initial state)", () => {
    const action = {
      type: GET_PLAYERS,
      payload: [{}, {}, {}]
    };
    const returnedState = AdminPlayer(undefined, action);
    expect(returnedState).toEqual({ error: "", player: action.payload });
  });

  it("should return a state object with user array equal to the payload in the action when the action type is GET_USER (when the returned state is not an initial state)", () => {
    const initialState = {
      player: [1, 2, 3, 4, 5]
    };
    const action = {
      type: GET_PLAYERS,
      payload: [{}, {}, {}]
    };
    const returnedState = AdminPlayer(initialState, action);
    expect(returnedState).toEqual({ player: action.payload });
  });

  it("should return the initial state object when the action type is not mentioned or doesn't concern the reducer (when the returned state is initial state)", () => {
    let action = {
      payload: [{}, {}, {}]
    };
    let returnedState = AdminPlayer(undefined, action);
    expect(returnedState).toEqual({ error: "", player: [] });
    action = {
      type: "SOME_TYPE",
      payload: [{}, {}, {}]
    };
    returnedState = AdminPlayer(undefined, action);
    expect(returnedState).toEqual({ error: "", player: [] });
  });

  it("should return a state object with user array equal to the payload in the action when the action type is GET_USERS (when the returned state is not an initial state)", () => {
    const initialState = {
      playerInfo: [1, 2, 3, 4, 5]
    };
    let action = {
      payload: [{}, {}, {}]
    };
    let returnedState = AdminPlayer(initialState, action);
    expect(returnedState).toEqual({ playerInfo: initialState.playerInfo });
    action = {
      type: "SOME_TYPE",
      payload: [{}, {}, {}]
    };
    returnedState = AdminPlayer(initialState, action);
    expect(returnedState).toEqual({ playerInfo: initialState.playerInfo });
  });

  //for create player
  it("should return a state object with user array equal to the payload in the action when the action type is CREATE_USERS (when the returned state is initial state)", () => {
    const action = {
      type: CREATE_PLAYER
      // payload: [{}, {}, {}]
    };
    const returnedState = AdminPlayer(undefined, action);
    expect(returnedState).toEqual({ error: "", player: [] });
  });
  it("should return a state object with user array equal to the payload in the action when the action type is CREATE_USERS (when the returned state is not an initial state)", () => {
    const initialState = {
      player: [1, 2, 3, 4, 5]
    };
    const action = {
      type: CREATE_PLAYER
      // payload: [{}, {}, {}]
    };
    const returnedState = AdminPlayer(initialState, action);
    expect(returnedState).toEqual({ player: initialState.player });
  });

  // for edit player
  it("should return a state object with user array equal to the payload in the action when the action type is CREATE_USERS (when the returned state is initial state)", () => {
    const action = {
      type: EDIT_PLAYER
      // payload: [{}, {}, {}]
    };
    const returnedState = AdminPlayer(undefined, action);
    expect(returnedState).toEqual({ error: "", player: [] });
  });
  it("should return a state object with user array equal to the payload in the action when the action type is CREATE_USERS (when the returned state is not an initial state)", () => {
    const initialState = {
      player: [1, 2, 3, 4, 5]
    };
    const action = {
      type: EDIT_PLAYER
      // payload: [{}, {}, {}]
    };
    const returnedState = AdminPlayer(initialState, action);
    expect(returnedState).toEqual({ player: initialState.player });
  });

  // for delete player
  it("should return a state object with user array equal to the payload in the action when the action type is CREATE_USERS (when the returned state is initial state)", () => {
    const action = {
      type: DELETE_PLAYER
      // payload: [{}, {}, {}]
    };
    const returnedState = AdminPlayer(undefined, action);
    expect(returnedState).toEqual({ error: "", player: [] });
  });
  it("should return a state object with user array equal to the payload in the action when the action type is CREATE_USERS (when the returned state is not an initial state)", () => {
    const initialState = {
      player: [1, 2, 3, 4, 5]
    };
    const action = {
      type: DELETE_PLAYER
      // payload: [{}, {}, {}]
    };
    const returnedState = AdminPlayer(initialState, action);
    expect(returnedState).toEqual({ player: initialState.player });
  });
  // for error type
  it("should return a state object with team array equal to the payload in the action when the action type is GET_TEAM_SEARCH (when the returned state is initial state)", () => {
    const action = {
      type: ERROR_TYPE,
      payload: [{}, {}, {}]
    };
    const returnedState = AdminPlayer(undefined, action);
    expect(returnedState).toEqual({ error: action.payload, player: [] });
  });

  it("should return a state object with user array equal to the payload in the action when the action type is GET_TEAM_SEARCH (when the returned state is not an initial state)", () => {
    const initialState = {
      error: [1, 2, 3, 4, 5]
    };
    const action = {
      type: ERROR_TYPE,
      payload: [{}, {}, {}]
    };
    const returnedState = AdminPlayer(initialState, action);
    expect(returnedState).toEqual({ error: action.payload });
  });
});
