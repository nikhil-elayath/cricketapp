import * as action from "../matches";
import { GET_RECENT_MATCHES } from "../types";
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

    it("should create an action with type GET_RECENT_MATCHES and the payload should be same as the API response when the response is 20*", () => {
        const responseofAPI = [{}, {}, {}];
        moxios.stubRequest(url + "/recent", {
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
        return store.dispatch(action.getRecentMatches()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it("should go into catch with type GET_RECENT_MATCHES and the payload should be same as the API response when the response is 40*", () => {
        const responseofAPI = [{}, {}, {}];
        moxios.stubRequest(url + "/recent", {
            status: 400,
            response: { data: responseofAPI }
        });

        const store = mockStore({});
        const expectedActions = [];
        return store.dispatch(action.getRecentMatches()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
