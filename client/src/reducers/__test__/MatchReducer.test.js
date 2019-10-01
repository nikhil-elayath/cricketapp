import matches from "../MatchReducer";
import { GET_RECENT_MATCHES, GET_MATCHES_DATE, GET_MATCH_DETAILS_BY_ID } from "../../actions/types";

describe("Testing Matches Reducers", () => {

    //GET_RECENT_MATCHES

    it("[GET_RECENT_MATCHES] should return a state object with matches array equal to the payload in the action when the action type is GET_RECENT_MATCHES (when the returned state is initial state", () => {
        const action = {
            type: GET_RECENT_MATCHES,
            payload: [{}, {}, {}]
        };
        const returnedState = matches(undefined, action);
        expect(returnedState).toEqual({ matches: action.payload });
    });

    it("[GET_RECENT_MATCHES] should return a state object with matches array equal to the payload in the action when the action type is GET_RECENT_MATCHES (when the returned state is not an initial state", () => {
        const initialState = {
            matches: [1, 2, 3, 4, 5],
            match_date: {},
            match: {}
        };
        const action = {
            type: GET_RECENT_MATCHES,
            payload: [{}, {}, {}]
        };
        const returnedState = matches(initialState, action);
        expect(returnedState).toEqual({ matches: action.payload });
    });

    it(" [GET_RECENT_MATCHES] should return the initial state object when the action type is not mentioned or doesn't concern the reducer (when the returned state is initial state", () => {
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

    it("[GET_RECENT_MATCHES] should return a state object with matches array equal to the payload in the action when the action type is GET_RECENT_MATCHES (when the returned state is not an initial state", () => {
        const initialState = {
            matches: [1, 2, 3, 4, 5],
            match_date: {},
            match: {}
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


    //GET_MATCHES_DATE

    it("[GET_MATCHES_DATE] should return a state object with matches array equal to the payload in the action when the action type is GET_MATCHES_DATE (when the returned state is initial state", () => {
        const action = {
            type: GET_MATCHES_DATE,
            payload: [{}, {}, {}]
        };
        const returnedState = matches(undefined, action);
        expect(returnedState).toEqual({ match_date: action.payload });
    });

    it("[GET_MATCHES_DATE] should return a state object with matches array equal to the payload in the action when the action type is GET_MATCHES_DATE (when the returned state is not an initial state", () => {
        const initialState = {
            match_date: [1, 2, 3, 4, 5],
            matches: {},
            match: {}
        };
        const action = {
            type: GET_MATCHES_DATE,
            payload: [{}, {}, {}]
        };
        const returnedState = matches(initialState, action);
        expect(returnedState).toEqual({ match_date: action.payload });
    });

    it("[GET_MATCHES_DATE] should return the initial state object when the action type is not mentioned or doesn't concern the reducer (when the returned state is initial state", () => {
        let action = {
            payload: [{}, {}, {}]
        };
        let returnedState = matches(undefined, action);
        expect(returnedState).toEqual({ match_date: [] });
        action = {
            type: "SOME_TYPE",
            payload: [{}, {}, {}]
        };
        returnedState = matches(undefined, action);
        expect(returnedState).toEqual({ match_date: [] });
    });

    it("[GET_MATCHES_DATE] should return a state object with matches array equal to the payload in the action when the action type is GET_MATCHES_DATE (when the returned state is not an initial state", () => {
        const initialState = {
            match_date: [1, 2, 3, 4, 5],
            matches: {},
            match: {}
        };
        let action = {
            payload: [{}, {}, {}]
        };
        let returnedState = matches(initialState, action);
        expect(returnedState).toEqual({ match_date: initialState.match_date, match: {}, mataches: {} });
        action = {
            type: "SOME_TYPE",
            payload: [{}, {}, {}]
        };
        returnedState = matches(initialState, action);
        expect(returnedState).toEqual({ match_date: initialState.match_date, match: {}, mataches: {} });
    });

    //GET_MATCH_DETAILS_BY_ID

    it("[GET_MATCH_DETAILS_BY_ID] should return a state object with matches array equal to the payload in the action when the action type is GET_MATCH_DETAILS_BY_ID (when the returned state is initial state", () => {
        const action = {
            type: GET_MATCH_DETAILS_BY_ID,
            payload: [{}, {}, {}]
        };
        const returnedState = matches(undefined, action);
        expect(returnedState).toEqual({});
        // expect(returnedState).toEqual({ match: action.payload });
    });

    it("[GET_MATCH_DETAILS_BY_ID] should return a state object with matches array equal to the payload in the action when the action type is GET_MATCH_DETAILS_BY_ID (when the returned state is not an initial state", () => {
        const initialState = {
            match: [1, 2, 3, 4, 5],
            match_date: {},
            matches: {}
        };
        const action = {
            type: GET_MATCH_DETAILS_BY_ID,
            payload: [{}, {}, {}]
        };
        const returnedState = matches(initialState, action);
        expect(returnedState).toEqual({ match: action.payload, match_date: {}, matches: {} });
    });

    it("[GET_MATCH_DETAILS_BY_ID] should return the initial state object when the action type is not mentioned or doesn't concern the reducer (when the returned state is initial state", () => {
        let action = {
            payload: [{}, {}, {}]
        };
        let returnedState = matches(undefined, action);
        expect(returnedState).toEqual({ match: [], match_date: [], matches: [] });
        action = {
            type: "SOME_TYPE",
            payload: [{}, {}, {}]
        };
        returnedState = matches(undefined, action);
        expect(returnedState).toEqual({ match: [], match_date: [], matches: [] });
    });

    //


    it("[GET_MATCH_DETAILS_BY_ID] should return a state object with matches array equal to the payload in the action when the action type is GET_MATCH_DETAILS_BY_ID (when the returned state is not an initial state", () => {
        const initialState = {
            match: [1, 2, 3, 4, 5],
            match_date: {},
            matches: {}
        };
        let action = {
            payload: [{}, {}, {}]
        };
        let returnedState = matches(initialState, action);
        expect(returnedState).toEqual({ match: initialState.match, match_date: {}, matches: {} });
        action = {
            type: "SOME_TYPE",
            payload: [{}, {}, {}]
        };
        returnedState = matches(initialState, action);
        expect(returnedState).toEqual({ match: initialState.match, match_date: {}, matches: {} });
    });


});


