import matches from "../MatchReducer";
import {
    GET_RECENT_MATCHES, GET_MATCHES_DATE, GET_MATCH_DETAILS_BY_ID, GET_MATCH_SCORECARD_DETAILS_BY_ID,
    GET_MANHATTAN_GRAPH_BY_ID, GET_PIECHART_ONE_GRAPH_BY_ID, GET_PIECHART_TWO_GRAPH_BY_ID
} from "../../actions/types";

describe("Testing Matches Reducers", () => {

    //GET_RECENT_MATCHES

    it("[GET_RECENT_MATCHES][init-null] should return a state object with matches array equal to the payload in the action when the action type is GET_RECENT_MATCHES (when the returned state is initial state", () => {
        const action = {
            type: GET_RECENT_MATCHES,
            payload: [],
            matchpl: [],
            matchDate: [],
            match_score: [],
            match_stats_manhattan: [],
            match_stats_pie1: [],
            match_stats_pie2: []
        };
        const returnedState = matches(undefined, action);
        expect(returnedState).toEqual({
            matches: action.payload,
            match: action.matchpl,
            match_date: action.matchDate,
            match_score: action.match_score,
            match_stats_manhattan: action.match_stats_manhattan,
            match_stats_pie1: action.match_stats_pie1,
            match_stats_pie2: action.match_stats_pie2
        });
    });

    it("[GET_RECENT_MATCHES] [init-some values] should return a state object with matches array equal to the payload in the action when the action type is GET_RECENT_MATCHES (when the returned state is not an initial state", () => {
        const initialState = {
            matches: [1, 2, 3, 4, 5],
            match_date: [],
            match: [],
            match_score: [],
            match_stats_manhattan: [],
            match_stats_pie1: [],
            match_stats_pie2: []
        };
        const action = {
            type: GET_RECENT_MATCHES,
            payload: [{}, {}, {}],
            matchpl: [],
            matchDate: [],
            match_score: [],
            match_stats_manhattan: [],
            match_stats_pie1: [],
            match_stats_pie2: []
        };
        const returnedState = matches(initialState, action);
        expect(returnedState).toEqual({
            matches: action.payload,
            match: action.matchpl,
            match_date: action.matchDate,
            match_score: action.match_score,
            match_stats_manhattan: action.match_stats_manhattan,
            match_stats_pie1: action.match_stats_pie1,
            match_stats_pie2: action.match_stats_pie2
        });
    });

    it(" [GET_RECENT_MATCHES - SOME TYPE] [init-null] should return the initial state object when the action type is not mentioned or doesn't concern the reducer (when the returned state is initial state", () => {
        let action = {
            type: "SOME_TYPE",
            payload: [],
            match: [],
            match_date: [],
            match_score: [],
            match_stats_manhattan: [],
            match_stats_pie1: [],
            match_stats_pie2: []
        };
        let returnedState = matches(undefined, action);
        expect(returnedState).toEqual({
            matches: action.payload,
            match: action.match,
            match_date: action.match_date,
            match_score: action.match_score,
            match_stats_manhattan: action.match_stats_manhattan,
            match_stats_pie1: action.match_stats_pie1,
            match_stats_pie2: action.match_stats_pie2
        });
    });

    it("[GET_RECENT_MATCHES - SOME TYPE] [[init-some values] should return a state object with matches array equal to the payload in the action when the action type is GET_RECENT_MATCHES (when the returned state is not an initial state", () => {
        const initialState = {
            matches: [{}, {}, {}],
            match_date: [],
            match: [],
            match_score: [],
            match_stats_manhattan: [],
            match_stats_pie1: [],
            match_stats_pie2: []
        };
        let action = {
            type: "SOME_TYPE",
            payload: [{}, {}, {}],
            match: [],
            match_date: [],
            match_score: [],
            match_stats_manhattan: [],
            match_stats_pie1: [],
            match_stats_pie2: []


        };
        let returnedState = matches(initialState, action);
        expect(returnedState).toEqual({
            matches: action.payload,
            match: action.match,
            match_date: action.match_date,
            match_score: action.match_score,
            match_stats_manhattan: action.match_stats_manhattan,
            match_stats_pie1: action.match_stats_pie1,
            match_stats_pie2: action.match_stats_pie2
        });
    });


    //GET_MATCHES_DATE

    it("[GET_MATCHES_DATE][init-null] should return a state object with matches array equal to the payload in the action when the action type is GET_MATCHES_DATE (when the returned state is initial state", () => {
        const action = {
            type: GET_MATCHES_DATE,
            payload: [{}, {}, {}],
            matches: [],
            match: [],
            match_score: [],
            match_stats_manhattan: [],
            match_stats_pie1: [],
            match_stats_pie2: []
        };
        const returnedState = matches(undefined, action);
        expect(returnedState).toEqual({
            match_date: action.payload,
            matches: action.matches,
            match: action.match,
            match_score: action.match_score,
            match_stats_manhattan: action.match_stats_manhattan,
            match_stats_pie1: action.match_stats_pie1,
            match_stats_pie2: action.match_stats_pie2
        });
    });

    it("[GET_MATCHES_DATE] [init-some values] should return a state object with matches array equal to the payload in the action when the action type is GET_MATCHES_DATE (when the returned state is not an initial state", () => {
        const initialState = {
            match_date: [1, 2, 3, 4, 5],
            matches: [],
            match: [],
            match_score: [],
            match_stats_manhattan: [],
            match_stats_pie1: [],
            match_stats_pie2: []
        };
        const action = {
            type: GET_MATCHES_DATE,
            payload: [{}, {}, {}],
            matches: [],
            match: [],
            match_score: [],
            match_stats_manhattan: [],
            match_stats_pie1: [],
            match_stats_pie2: []
        };
        const returnedState = matches(initialState, action);
        expect(returnedState).toEqual({
            match_date: action.payload,
            matches: action.matches,
            match: action.match,
            match_score: action.match_score,
            match_stats_manhattan: action.match_stats_manhattan,
            match_stats_pie1: action.match_stats_pie1,
            match_stats_pie2: action.match_stats_pie2
        });
    });

    it("[GET_MATCHES_DATE- SOME TYPE] [init-null] should return the initial state object when the action type is not mentioned or doesn't concern the reducer (when the returned state is initial state", () => {
        let action = {
            type: "SOME_TYPE",
            match_date: []
        };
        let returnedState = matches(undefined, action);
        expect(returnedState).toEqual({
            match_date: action.match_date,
            matches: [],
            match: [],
            match_score: [],
            match_stats_manhattan: [],
            match_stats_pie1: [],
            match_stats_pie2: []
        });
    });

    it("[GET_MATCHES_DATE - SOME TYPE] [init-some values] should return a state object with matches array equal to the payload in the action when the action type is GET_MATCHES_DATE (when the returned state is not an initial state", () => {
        const initialState = {
            match_date: [{}, {}, {}],
            matches: [{}],
            match: [{}],
            match_score: [{}],
            match_stats_manhattan: [{}],
            match_stats_pie1: [{}],
            match_stats_pie2: [{}]
        };
        let action = {
            type: "SOME_TYPE",
            payload: [{}, {}, {}]

        };
        let returnedState = matches(initialState, action);
        expect(returnedState).toEqual({
            match_date: action.payload,
            match: [{}],
            matches: [{}],
            match_score: [{}],
            match_stats_manhattan: [{}],
            match_stats_pie1: [{}],
            match_stats_pie2: [{}]
        });
    });

    //GET_MATCH_DETAILS_BY_ID

    it("[GET_MATCH_DETAILS_BY_ID] [init-null] should return a state object with matches array equal to the payload in the action when the action type is GET_MATCH_DETAILS_BY_ID (when the returned state is initial state", () => {
        const action = {
            type: GET_MATCH_DETAILS_BY_ID,
            payload: [{}, {}, {}],
            match_date: [],
            matches: [],
            match_score: [],
            match_stats_manhattan: [],
            match_stats_pie1: [],
            match_stats_pie2: []
        };
        const returnedState = matches(undefined, action);
        expect(returnedState).toEqual({
            match: action.payload,
            matches: action.matches,
            match_date: action.matches,
            match_score: action.match_score,
            match_stats_manhattan: action.match_stats_manhattan,
            match_stats_pie1: action.match_stats_pie1,
            match_stats_pie2: action.match_stats_pie2
        });
    });

    it("[GET_MATCH_DETAILS_BY_ID] [init-some values] should return a state object with matches array equal to the payload in the action when the action type is GET_MATCH_DETAILS_BY_ID (when the returned state is not an initial state", () => {
        const initialState = {
            match: [1, 2, 3, 4, 5],
            match_date: [],
            matches: [],
            match_score: [],
            match_stats_manhattan: [],
            match_stats_pie1: [],
            match_stats_pie2: []
        };
        const action = {
            type: GET_MATCH_DETAILS_BY_ID,
            payload: [{}, {}, {}],
            match_date: [],
            matches: [],
            match_score: [],
            match_stats_manhattan: [],
            match_stats_pie1: [],
            match_stats_pie2: []
        };
        const returnedState = matches(initialState, action);
        expect(returnedState).toEqual({
            match: action.payload,
            match_date: action.match_date,
            matches: action.matches,
            match_score: action.match_score,
            match_stats_manhattan: action.match_stats_manhattan,
            match_stats_pie1: action.match_stats_pie1,
            match_stats_pie2: action.match_stats_pie2
        });
    });

    it("[GET_MATCH_DETAILS_BY_ID- SOME TYPE] [init-value] should return the initial state object when the action type is not mentioned or doesn't concern the reducer (when the returned state is initial state", () => {
        let action = {
            type: "SOME_TYPE",
            payload: [{}, {}, {}]
        };
        let returnedState = matches(undefined, action);
        expect(returnedState).toEqual({
            match: [],
            match_date: [],
            matches: [],
            match_score: [],
            match_stats_manhattan: [],
            match_stats_pie1: [],
            match_stats_pie2: []
        });
    });


    it("[GET_MATCH_DETAILS_BY_ID - SOME TYPE] [init-some values] should return a state object with matches array equal to the payload in the action when the action type is GET_MATCH_DETAILS_BY_ID (when the returned state is not an initial state", () => {
        const initialState = {
            match: [1, 2, 3, 4, 5],
            match_date: [{}],
            matches: [{}],
            match_score: [{}],
            match_stats_manhattan: [{}],
            match_stats_pie1: [{}],
            match_stats_pie2: [{}]
        };
        let action = {
            type: "SOME_TYPE",
            payload: [{}, {}, {}]
        };
        let returnedState = matches(initialState, action);
        expect(returnedState).toEqual({
            match: initialState.match,
            match_date: [{}],
            matches: [{}],
            match_score: [{}],
            match_stats_manhattan: [{}],
            match_stats_pie1: [{}],
            match_stats_pie2: [{}]
        });
    });


    //GET_MATCH_SCORECARD_DETAILS_BY_ID

    it("[GET_MATCH_SCORECARD_DETAILS_BY_ID] [init-null] should return a state object with matches array equal to the payload in the action when the action type is GET_MATCH_SCORECARD_DETAILS_BY_ID (when the returned state is initial state", () => {
        const action = {
            type: GET_MATCH_SCORECARD_DETAILS_BY_ID,
            payload: [{}, {}, {}],
            match_date: [],
            matches: [],
            match: [],
            match_stats_manhattan: [],
            match_stats_pie1: [],
            match_stats_pie2: []
        };
        const returnedState = matches(undefined, action);
        expect(returnedState).toEqual({
            match: action.match,
            matches: action.matches,
            match_date: action.matches,
            match_score: action.payload,
            match_stats_manhattan: action.match_stats_manhattan,
            match_stats_pie1: action.match_stats_pie1,
            match_stats_pie2: action.match_stats_pie2
        });
    });

    it("[GET_MATCH_SCORECARD_DETAILS_BY_ID] [init-some values] should return a state object with matches array equal to the payload in the action when the action type is GET_MATCH_SCORECARD_DETAILS_BY_ID (when the returned state is not an initial state", () => {
        const initialState = {
            match: [],
            match_date: [],
            matches: [],
            match_score: [1, 2, 3, 4, 5],
            match_stats_manhattan: [],
            match_stats_pie1: [],
            match_stats_pie2: []
        };
        const action = {
            type: GET_MATCH_SCORECARD_DETAILS_BY_ID,
            payload: [{}, {}, {}],
            match_date: [],
            matches: [],
            match: [],
            match_stats_manhattan: [],
            match_stats_pie1: [],
            match_stats_pie2: []
        };
        const returnedState = matches(initialState, action);
        expect(returnedState).toEqual({
            match: action.match,
            match_date: action.match_date,
            matches: action.matches,
            match_score: action.payload,
            match_stats_manhattan: action.match_stats_manhattan,
            match_stats_pie1: action.match_stats_pie1,
            match_stats_pie2: action.match_stats_pie2
        });
    });

    it("[GET_MATCH_SCORECARD_DETAILS_BY_ID- SOME TYPE] [init-value] should return the initial state object when the action type is not mentioned or doesn't concern the reducer (when the returned state is initial state", () => {
        let action = {
            type: "SOME_TYPE",
            payload: [{}, {}, {}]
        };
        let returnedState = matches(undefined, action);
        expect(returnedState).toEqual({
            match: [],
            match_date: [],
            matches: [],
            match_score: [],
            match_stats_manhattan: [],
            match_stats_pie1: [],
            match_stats_pie2: []
        });
    });


    it("[GET_MATCH_SCORECARD_DETAILS_BY_ID - SOME TYPE] [init-some values] should return a state object with matches array equal to the payload in the action when the action type is GET_MATCH_SCORECARD_DETAILS_BY_ID (when the returned state is not an initial state", () => {
        const initialState = {
            match: [{}],
            match_date: [{}],
            matches: [{}],
            match_score: [1, 2, 3, 4, 5],
            match_stats_manhattan: [{}],
            match_stats_pie1: [{}],
            match_stats_pie2: [{}]
        };
        let action = {
            type: "SOME_TYPE",
            payload: [{}, {}, {}]
        };
        let returnedState = matches(initialState, action);
        expect(returnedState).toEqual({
            match: [{}],
            match_date: [{}],
            matches: [{}],
            match_score: initialState.match_score,
            match_stats_manhattan: [{}],
            match_stats_pie1: [{}],
            match_stats_pie2: [{}]
        });
    });
});

