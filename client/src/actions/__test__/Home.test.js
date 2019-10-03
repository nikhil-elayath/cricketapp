import * as action from "../Home";

import { GET_NEWS } from "../Types";

import moxios from "moxios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Testing Home Actions", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it("should create an action with type GET_NEWS and the payload should be same as the api response when the response is 200", () => {
    const responseOfApi = [{}, {}, {}];
    moxios.stubRequest("http://localhost/api/news", {
      status: 200,
      response: { data: responseOfApi },
    });
    const store = mockStore({});
    const expectedActions = [
      {
        type: GET_NEWS,
        payload: responseOfApi,
      },
    ];
    return store.dispatch(action.getNews()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
