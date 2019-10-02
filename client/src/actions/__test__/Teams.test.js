import * as action from "../Teams";
import { GET_TEAMS } from "../Types";
import moxios from "moxios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Testing the Actions", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it("should create action with type GET_TEAMS and the payload should be same as the api response when the response is 200", () => {
    const responseOfApi = [{}, {}, {}];
    moxios.stubRequest("http://localhost:5000/cricketalpha/teams", {
      status: 200,
      response: { data: responseOfApi }
    });
    const store = mockStore({});
    const expectedActions = [
      {
        type: GET_TEAMS,
        payload: responseOfApi
      }
    ];
    return store.dispatch(action.getTeams()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it("should create action with type GET_TEAMS and the payload should be same as the api response when the response is 400", () => {
    const responseOfApi = [{}, {}, {}];
    moxios.stubRequest("http://localhost:5000/cricketalpha/teams", {
      status: 400,
      response: { data: responseOfApi }
    });
    const store = mockStore({});
    const expectedActions = [];
    return store.dispatch(action.getTeams()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
