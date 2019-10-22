import * as action from "../Matches";
import {
    GET_MATCHES_BY_DATE, GET_RECENT_MATCHES_DATE, GET_MATCH_DETAILS_BY_ID, GET_MATCH_SCORECARD_DETAILS_BY_ID,
    GET_MANHATTAN_GRAPH_BY_ID, GET_PIECHART_ONE_GRAPH_BY_ID, GET_PIECHART_TWO_GRAPH_BY_ID, LOADING_START, LOADING_STOP
} from "../types";
import moxios from "moxios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const url = "http://localhost:5000/api/matches";
const url2 = 'http://127.0.0.1:5000';

describe("Testing Matches actions", () => {
    beforeEach(() => {
        moxios.install();
    });
    afterEach(() => {
        moxios.uninstall();
    });

    it("[GET_MATCHES_BY_DATE] [20*] should create an action with type GET_MATCHES_BY_DATE and the payload should be same as the API response when the response is 20*", () => {
        const responseofAPI = [{}, {}, {}];
        let date = "2016-03-17"
        let gender = "male"
        moxios.stubRequest(url + "/ondate/" + date + "/" + gender, {
            status: 200,
            response: { data: responseofAPI }
        });

        const store = mockStore({});
        const expectedActions = [
            { type: LOADING_START },
            { type: LOADING_STOP },
            {
                type: GET_MATCHES_BY_DATE,
                payload: responseofAPI
            }
        ];
        return store.dispatch(action.getMatchesByDate(date, gender)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it("[GET_MATCHES_BY_DATE] [40*] should go into catch with type GET_MATCHES_BY_DATE and the payload should be same as the API response when the response is 40*", () => {
        const responseofAPI = [{}, {}, {}];
        let date = "2016-03-17"
        let gender = "male"
        moxios.stubRequest(url + "/ondate/" + date + "/" + gender, {
            status: 400,
            response: { data: responseofAPI }
        });

        const store = mockStore({});
        const expectedActions = [
            { type: LOADING_START },
            { type: LOADING_START }
        ];
        return store.dispatch(action.getMatchesByDate(date, gender)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it("[GET_RECENT_MATCHES_DATE] [20*] should create an action with type GET_RECENT_MATCHES_DATE and the payload should be same as the API response when the response is 20*", () => {
        const responseofAPI = [{}, {}, {}];
        let gender = "male"
        moxios.stubRequest(url + "/recent/" + gender, {
            status: 200,
            response: { data: responseofAPI }
        });

        const store = mockStore({});
        const expectedActions = [
            {
                type: GET_RECENT_MATCHES_DATE,
                payload: responseofAPI
            }
        ];
        return store.dispatch(action.getRecentMatchesDate(gender)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it("[GET_RECENT_MATCHES_DATE] [40*] should go into catch with type GET_RECENT_MATCHES_DATE and the payload should be same as the API response when the response is 40*", () => {
        const responseofAPI = [{}, {}, {}];
        let gender = "male"
        moxios.stubRequest(url + "/recent/" + gender, {
            status: 400,
            response: { data: responseofAPI }
        });

        const store = mockStore({});
        const expectedActions = [];
        return store.dispatch(action.getRecentMatchesDate(gender)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
    it("[GET_MATCH_DETAILS_BY_ID] [20*]should create an action with type GET_MATCH_DETAILS_BY_ID and the payload should be same as the API response when the response is 20*", () => {
        const responseofAPI = [{}, {}, {}];
        const id = '1';
        moxios.stubRequest(url + "/summary/" + id, {
            status: 200,
            response: { data: responseofAPI }
        });

        const store = mockStore({});
        const expectedActions = [
            { type: LOADING_START },
            { type: LOADING_STOP },
            {
                type: GET_MATCH_DETAILS_BY_ID,
                payload: responseofAPI
            }
        ];
        return store.dispatch(action.getmatchdetailbyId(id)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it("[GET_MATCH_DETAILS_BY_ID] [40*] should go into catch with type GET_MATCH_DETAILS_BY_ID and the payload should be same as the API response when the response is 40*", () => {
        const responseofAPI = [{}, {}, {}];
        const id = '1';
        moxios.stubRequest(url + "/summary/" + id, {
            status: 400,
            response: { data: responseofAPI }
        });

        const store = mockStore({});
        const expectedActions = [
            { type: LOADING_START },
            { type: LOADING_START }
        ];
        return store.dispatch(action.getmatchdetailbyId(id)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it("[GET_MATCH_SCORECARD_DETAILS_BY_ID] [20*]should create an action with type GET_MATCH_SCORECARD_DETAILS_BY_ID and the payload should be same as the API response when the response is 20*", () => {
        const responseofAPI = [{}, {}, {}];
        const id = '1';
        moxios.stubRequest(url + "/scorecard/" + id, {
            status: 200,
            response: { data: responseofAPI }
        });

        const store = mockStore({});
        const expectedActions = [
            { type: LOADING_START },
            { type: LOADING_STOP },
            {
                type: GET_MATCH_SCORECARD_DETAILS_BY_ID,
                payload: responseofAPI
            }
        ];
        return store.dispatch(action.getMatchScorecardDetailbyId(id)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it("[GET_MATCH_SCORECARD_DETAILS_BY_ID] [40*] should go into catch with type GET_MATCH_SCORECARD_DETAILS_BY_ID and the payload should be same as the API response when the response is 40*", () => {
        const responseofAPI = [{}, {}, {}];
        const id = '1';
        moxios.stubRequest(url + "/scorecard/" + id, {
            status: 400,
            response: { data: responseofAPI }
        });

        const store = mockStore({});
        const expectedActions = [
            { type: LOADING_START },
            { type: LOADING_START }
        ];
        return store.dispatch(action.getMatchScorecardDetailbyId(id)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it("[GET_MANHATTAN_GRAPH_BY_ID] [20*]should create an action with type GET_MANHATTAN_GRAPH_BY_ID and the payload should be same as the API response when the response is 20*", () => {
        const responseofAPI = [{}, {}, {}];
        const id = '1';
        moxios.stubRequest(url2 + "/runsperover/" + id, {
            status: 200,
            response: { data: responseofAPI }
        });

        const store = mockStore({});
        const expectedActions = [
            { type: LOADING_START },
            { type: LOADING_STOP },
            {
                type: GET_MANHATTAN_GRAPH_BY_ID,
                payload: responseofAPI
            }
        ];
        return store.dispatch(action.getManhattanGraphbyId(id)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it("[GET_MANHATTAN_GRAPH_BY_ID] [40*] should go into catch with type GET_MANHATTAN_GRAPH_BY_ID and the payload should be same as the API response when the response is 40*", () => {
        const responseofAPI = [{}, {}, {}];
        const id = '1';
        moxios.stubRequest(url2 + "/runsperover/" + id, {
            status: 400,
            response: { data: responseofAPI }
        });

        const store = mockStore({});
        const expectedActions = [
            { type: LOADING_START },
            { type: LOADING_START }
        ];
        return store.dispatch(action.getManhattanGraphbyId(id)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it("[GET_PIECHART_ONE_GRAPH_BY_ID] [20*]should create an action with type GET_PIECHART_ONE_GRAPH_BY_ID and the payload should be same as the API response when the response is 20*", () => {
        const responseofAPI = [{}, {}, {}];
        const id = '1';
        moxios.stubRequest(url2 + "/playerruns/" + id, {
            status: 200,
            response: { data: responseofAPI }
        });

        const store = mockStore({});
        const expectedActions = [
            { type: LOADING_START },
            { type: LOADING_STOP },
            {
                type: GET_PIECHART_ONE_GRAPH_BY_ID,
                payload: responseofAPI
            }
        ];
        return store.dispatch(action.getPieChartOnebyId(id)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it("[GET_PIECHART_ONE_GRAPH_BY_ID] [40*] should go into catch with type GET_PIECHART_ONE_GRAPH_BY_ID and the payload should be same as the API response when the response is 40*", () => {
        const responseofAPI = [{}, {}, {}];
        const id = '1';
        moxios.stubRequest(url2 + "/playerruns/" + id, {
            status: 400,
            response: { data: responseofAPI }
        });

        const store = mockStore({});
        const expectedActions = [
            { type: LOADING_START },
            { type: LOADING_START }
        ];
        return store.dispatch(action.getPieChartOnebyId(id)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it("[GET_PIECHART_TWO_GRAPH_BY_ID] [20*]should create an action with type GET_PIECHART_TWO_GRAPH_BY_ID and the payload should be same as the API response when the response is 20*", () => {
        const responseofAPI = {};
        const id = '1';
        moxios.stubRequest(url2 + "/bowlerwickets/" + id, {
            status: 200,
            response: { data: responseofAPI }
        });

        const store = mockStore({});
        const expectedActions = [
            { type: LOADING_START },
            { type: LOADING_STOP },
            {
                type: GET_PIECHART_TWO_GRAPH_BY_ID,
                payload: responseofAPI
            },

        ];
        return store.dispatch(action.getPieChartTwobyId(id)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it("[GET_PIECHART_TWO_GRAPH_BY_ID] [40*] should go into catch with type GET_PIECHART_TWO_GRAPH_BY_ID and the payload should be same as the API response when the response is 40*", () => {
        const responseofAPI = [{}, {}, {}];
        const id = '1';
        moxios.stubRequest(url2 + "/bowlerwickets/" + id, {
            status: 400,
            response: { data: responseofAPI }
        });

        const store = mockStore({});
        const expectedActions = [
            { type: LOADING_START },
            { type: LOADING_START }

        ];
        return store.dispatch(action.getPieChartTwobyId(id)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

});
