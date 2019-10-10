import AdminPlayer from "../AdminPlayerReducer";
import {
  GET_PLAYERS,
  CREATE_PLAYER,
  EDIT_PLAYER,
  DELETE_PLAYER
} from "../../actions/Types";

describe("Testing Users Reducers", () => {
  // for get player
  it("should return a state object with user array equal to the payload in the action when the action type is GET_USER (when the returned state is initial state)", () => {
    const action = {
      type: GET_PLAYERS,
      payload: [{}, {}, {}]
    };
    const returnedState = AdminPlayer(undefined, action);
    expect(returnedState).toEqual({ playerInfo: action.payload });
  });

  it("should return a state object with user array equal to the payload in the action when the action type is GET_USER (when the returned state is not an initial state)", () => {
    const initialState = {
      users: [1, 2, 3, 4, 5]
    };
    const action = {
      type: GET_USERS,
      payload: [{}, {}, {}]
    };
    const returnedState = AdminPlayer(initialState, action);
    expect(returnedState).toEqual({ playerInfo: action.payload });
  });

  it("should return the initial state object when the action type is not mentioned or doesn't concern the reducer (when the returned state is initial state)", () => {
    let action = {
      payload: [{}, {}, {}]
    };
    let returnedState = AdminPlayer(undefined, action);
    expect(returnedState).toEqual({ playerInfo: [] });
    action = {
      type: "SOME_TYPE",
      payload: [{}, {}, {}]
    };
    returnedState = AdminPlayer(undefined, action);
    expect(returnedState).toEqual({ playerInfo: [] });
  });

  it("should return a state object with user array equal to the payload in the action when the action type is GET_USERS (when the returned state is not an initial state)", () => {
    const initialState = {
      user: [1, 2, 3, 4, 5]
    };
    let action = {
      payload: [{}, {}, {}]
    };
    let returnedState = AdminPlayer(initialState, action);
    expect(returnedState).toEqual({ playerInfo: initialState.user });
    action = {
      type: "SOME_TYPE",
      payload: [{}, {}, {}]
    };
    returnedState = AdminPlayer(initialState, action);
    expect(returnedState).toEqual({ playerInfo: initialState.user });
  });

  //for create player
  it("should return a state object with user array equal to the payload in the action when the action type is CREATE_USERS (when the returned state is initial state)", () => {
    const action = {
      type: CREATE_PLAYER
      // payload: [{}, {}, {}]
    };
    const returnedState = AdminPlayer(undefined, action);
    expect(returnedState).toEqual({ player: [] });
  });
  it("should return a state object with user array equal to the payload in the action when the action type is CREATE_USERS (when the returned state is not an initial state)", () => {
    const initialState = {
      users: [1, 2, 3, 4, 5]
    };
    const action = {
      type: CREATE_PLAYER
      // payload: [{}, {}, {}]
    };
    const returnedState = AdminPlayer(initialState, action);
    expect(returnedState).toEqual({ player: initialState.users });
  });

  // for edit player
  it("should return a state object with user array equal to the payload in the action when the action type is CREATE_USERS (when the returned state is initial state)", () => {
    const action = {
      type: EDIT_PLAYER
      // payload: [{}, {}, {}]
    };
    const returnedState = AdminPlayer(undefined, action);
    expect(returnedState).toEqual({ player: [] });
  });
  it("should return a state object with user array equal to the payload in the action when the action type is CREATE_USERS (when the returned state is not an initial state)", () => {
    const initialState = {
      users: [1, 2, 3, 4, 5]
    };
    const action = {
      type: EDIT_PLAYER
      // payload: [{}, {}, {}]
    };
    const returnedState = AdminPlayer(initialState, action);
    expect(returnedState).toEqual({ player: initialState.users });
  });

  // for delete player
  it("should return a state object with user array equal to the payload in the action when the action type is CREATE_USERS (when the returned state is initial state)", () => {
    const action = {
      type: DELETE_PLAYER
      // payload: [{}, {}, {}]
    };
    const returnedState = AdminPlayer(undefined, action);
    expect(returnedState).toEqual({ player: [] });
  });
  it("should return a state object with user array equal to the payload in the action when the action type is CREATE_USERS (when the returned state is not an initial state)", () => {
    const initialState = {
      users: [1, 2, 3, 4, 5]
    };
    const action = {
      type: DELETE_PLAYER
      // payload: [{}, {}, {}]
    };
    const returnedState = AdminPlayer(initialState, action);
    expect(returnedState).toEqual({ player: initialState.users });
  });
});
