import * as action from "../matches";
import { GET_RECENT_MATCHES, GET_MATCHES_DATE } from "../types";
import moxios from "moxios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const url = "http://localhost:5000/api/matches";

describe("Testing Matches actions", () => {
    beforeEach(() => {
        moxios.install();
    });
    afterEach(() => {
        moxios.uninstall();
    });

    it("[GET_RECENT_MATCHES]should create an action with type GET_RECENT_MATCHES and the payload should be same as the API response when the response is 20*", () => {
        const responseofAPI = [{}, {}, {}];
        let date = "2008-03-09"
        moxios.stubRequest(url + "/recent/" + date, {
            status: 200,
            response: { data: responseofAPI }
        });

        const store = mockStore({});
        const expectedActions = [
            {
                type: GET_RECENT_MATCHES,
                payload: responseofAPI
            }
        ];
        return store.dispatch(action.getRecentMatches(date)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it("[GET_RECENT_MATCHES] should go into catch with type GET_RECENT_MATCHES and the payload should be same as the API response when the response is 40*", () => {
        const responseofAPI = [{}, {}, {}];
        moxios.stubRequest(url + "/recent/" + "2008-03-09", {
            status: 400,
            response: { data: responseofAPI }
        });

        const store = mockStore({});
        const expectedActions = [];
        return store.dispatch(action.getRecentMatches("2008-03-09")).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it("[GET_MATCHES_DATE]should create an action with type GET_MATCHES_DATE and the payload should be same as the API response when the response is 20*", () => {
        const responseofAPI = [{}, {}, {}];
        moxios.stubRequest(url + "/bydate", {
            status: 200,
            response: { data: responseofAPI }
        });

        const store = mockStore({});
        const expectedActions = [
            {
                type: GET_MATCHES_DATE,
                payload: responseofAPI
            }
        ];
        return store.dispatch(action.getMatchesDate()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it("[GET_MATCHES_DATE] should go into catch with type GET_MATCHES_DATE and the payload should be same as the API response when the response is 40*", () => {
        const responseofAPI = [{}, {}, {}];
        moxios.stubRequest(url + "/bydate", {
            status: 400,
            response: { data: responseofAPI }
        });

        const store = mockStore({});
        const expectedActions = [];
        return store.dispatch(action.getMatchesDate()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
