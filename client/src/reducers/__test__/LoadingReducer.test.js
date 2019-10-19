import Loading from "../LoadingReducer";
import { LOADING_START, LOADING_STOP } from "../../actions/Types";

describe("Testing Users Reducers", () => {
  //
  it("should return a state object with array equal to the payload in the action when the action type is LOADING_START (when the returned state is initial state)", () => {
    const action = {
      type: LOADING_START,
      payload: [{}, {}, {}]
    };
    const returnedState = Loading(undefined, action);
    expect(returnedState).toEqual({ isLoading: true });
  });

  it("should return a state object with array equal to the payload in the action when the action type is LOADING_START (when the returned state is initial state)", () => {
    const initialState = {
      //   users: [1, 2, 3, 4, 5]
    };
    const action = {
      type: LOADING_STOP,
      payload: [{}, {}, {}]
    };
    const returnedState = Loading(initialState, action);
    expect(returnedState).toEqual({ isLoading: false });
  });

  //   it("should return the initial state object when the action type is not mentioned or doesn't concern the reducer (when the returned state is initial state)", () => {
  //     let action = {
  //       payload: [{}, {}, {}]
  //     };
  //     let returnedState = AdminTeam(undefined, action);
  //     expect(returnedState).toEqual({ matches: [] });
  //     action = {
  //       type: "SOME_TYPE",
  //       payload: [{}, {}, {}]
  //     };
  //     returnedState = AdminTeam(undefined, action);
  //     expect(returnedState).toEqual({ matches: [] });
  //   });

  //   it("should return a state object with user array equal to the payload in the action when the action type is GET_USERS (when the returned state is not an initial state)", () => {
  //     const initialState = {
  //       user: [1, 2, 3, 4, 5]
  //     };
  //     let action = {
  //       payload: [{}, {}, {}]
  //     };
  //     let returnedState = AdminTeam(initialState, action);
  //     expect(returnedState).toEqual({ matches: initialState.user });
  //     action = {
  //       type: "SOME_TYPE",
  //       payload: [{}, {}, {}]
  //     };
  //     returnedState = AdminTeam(initialState, action);
  //     expect(returnedState).toEqual({ matches: initialState.user });
  //   });
});
