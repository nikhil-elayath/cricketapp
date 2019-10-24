import user from "../userReducer";
import {
  GET_USERS,
  CREATE_USERS,
  LOGIN,
  OTP_VERIFICATION,
  EMAIL_VERIFICATION
} from "../../actions/Types";

describe("Testing Users Reducers", () => {
  it("should return a state object with user array equal to the payload in the action when the action type is GET_USER (when the returned state is initial state)", () => {
    const action = {
      type: GET_USERS,
      payload: [{}, {}, {}]
    };
    const returnedState = user(undefined, action);
    expect(returnedState).toEqual({ error: "", users: action.payload });
  });

  it("should return a state object with user array equal to the payload in the action when the action type is GET_USER (when the returned state is not an initial state)", () => {
    const initialState = {
      users: [1, 2, 3, 4, 5]
    };
    const action = {
      type: GET_USERS,
      payload: [{}, {}, {}]
    };
    const returnedState = user(initialState, action);
    expect(returnedState).toEqual({ users: action.payload });
  });

  it("should return the initial state object when the action type is not mentioned or doesn't concern the reducer (when the returned state is initial state)", () => {
    let action = {
      payload: [{}, {}, {}]
    };
    let returnedState = user(undefined, action);
    expect(returnedState).toEqual({ error: "", users: [] });
    action = {
      type: "SOME_TYPE",
      payload: [{}, {}, {}]
    };
    returnedState = user(undefined, action);
    expect(returnedState).toEqual({ users: [] });
  });

  it("should return a state object with user array equal to the payload in the action when the action type is GET_USERS (when the returned state is not an initial state)", () => {
    const initialState = {
      user: [1, 2, 3, 4, 5]
    };
    let action = {
      payload: [{}, {}, {}]
    };
    let returnedState = user(initialState, action);
    expect(returnedState).toEqual({ user: initialState.user });
    action = {
      type: "SOME_TYPE",
      payload: [{}, {}, {}]
    };
    returnedState = user(initialState, action);
    expect(returnedState).toEqual({ user: initialState.user });
  });

  it("should return a state object with user array equal to the payload in the action when the action type is CREATE_USERS (when the returned state is initial state)", () => {
    const action = {
      type: CREATE_USERS
      // payload: [{}, {}, {}]
    };
    const returnedState = user(undefined, action);
    expect(returnedState).toEqual({ error: "", users: [] });
  });
  it("should return a state object with user array equal to the payload in the action when the action type is CREATE_USERS (when the returned state is not an initial state)", () => {
    const initialState = {
      users: [1, 2, 3, 4, 5]
    };
    const action = {
      type: CREATE_USERS
      // payload: [{}, {}, {}]
    };
    const returnedState = user(initialState, action);
    expect(returnedState).toEqual({ users: initialState.users });
  });

  it("should return a state object with user array equal to the payload in the action when the action type is LOGIN (when the returned state is initial state)", () => {
    const action = {
      type: LOGIN
      // payload: [{}, {}, {}]
    };
    const returnedState = user(undefined, action);
    expect(returnedState).toEqual({ error: "", users: [] });
  });
  it("should return a state object with user array equal to the payload in the action when the action type is LOGIN (when the returned state is not an initial state)", () => {
    const initialState = {
      users: [1, 2, 3, 4, 5]
    };
    const action = {
      type: LOGIN
      // payload: [{}, {}, {}]
    };
    const returnedState = user(initialState, action);
    expect(returnedState).toEqual({ users: initialState.users });
  });

  it("should return a state object with user array equal to the payload in the action when the action type is CREATE_USERS (when the returned state is initial state)", () => {
    const action = {
      type: OTP_VERIFICATION
      // payload: [{}, {}, {}]
    };
    const returnedState = user(undefined, action);
    expect(returnedState).toEqual({ error: "", users: [] });
  });
  it("should return a state object with user array equal to the payload in the action when the action type is CREATE_USERS (when the returned state is not an initial state)", () => {
    const initialState = {
      users: [1, 2, 3, 4, 5]
    };
    const action = {
      type: EMAIL_VERIFICATION
      // payload: [{}, {}, {}]
    };
    const returnedState = user(initialState, action);
    expect(returnedState).toEqual({ users: initialState.users });
  });

  it("should return a state object with user array equal to the payload in the action when the action type is CREATE_USERS (when the returned state is initial state)", () => {
    const action = {
      type: EMAIL_VERIFICATION
      // payload: [{}, {}, {}]
    };
    const returnedState = user(undefined, action);
    expect(returnedState).toEqual({ error: "", users: [] });
  });
  it("should return a state object with user array equal to the payload in the action when the action type is CREATE_USERS (when the returned state is not an initial state)", () => {
    const initialState = {
      users: [1, 2, 3, 4, 5]
    };
    const action = {
      type: OTP_VERIFICATION
      // payload: [{}, {}, {}]
    };
    const returnedState = user(initialState, action);
    expect(returnedState).toEqual({ users: initialState.users });
  });
});
