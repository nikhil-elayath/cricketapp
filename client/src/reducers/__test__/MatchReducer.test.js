import matches from "../MatchReducer";
import { GET_RECENT_MATCHES } from "../../actions/types";

describe("Testing Matches Reducers", () => {
    it("should return a state object with matches array equal to the payload in the action when the action type is GET_RECENT_MATCHES (when the returned state is initial state", () => {
        const action = {
            type: GET_RECENT_MATCHES,
            payload: [{}, {}, {}]
        };
        const returnedState = matches(undefined, action);
        expect(returnedState).toEqual({ matches: action.payload });
    });

    it("should return a state object with matches array equal to the payload in the action when the action type is GET_RECENT_MATCHES (when the returned state is not an initial state", () => {
        const initialState = {
            users: [1, 2, 3, 4, 5]
        };
        const action = {
            type: GET_RECENT_MATCHES,
            payload: [{}, {}, {}]
        };
        const returnedState = matches(initialState, action);
        expect(returnedState).toEqual({ matches: action.payload });
    });

    it("should return the initial state object when the action type is not mentioned or doesn't concern the reducer (when the returned state is initial state", () => {
        let action = {
            payload: [{}, {}, {}]
        };
        let returnedState = matches(undefined, action);
        expect(returnedState).toEqual({ matches: [] });
        action = {
            type: "SOME_TYPE",
            payload: [{}, {}, {}]
        };
        returnedState = matches(undefined, action);
        expect(returnedState).toEqual({ matches: [] });
    });

    it("should return a state object with matches array equal to the payload in the action when the action type is GET_RECENT_MATCHES (when the returned state is not an initial state", () => {
        const initialState = {
            matches: [1, 2, 3, 4, 5]
        };
        let action = {
            payload: [{}, {}, {}]
        };
        let returnedState = matches(initialState, action);
        expect(returnedState).toEqual({ matches: initialState.matches });
        action = {
            type: "SOME_TYPE",
            payload: [{}, {}, {}]
        };
        returnedState = matches(initialState, action);
        expect(returnedState).toEqual({ matches: initialState.matches });
    });
});
