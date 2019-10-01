import * as action from "../PlayerAction";
import { GET_ALL_BATSMAN } from "../Type";
import moxios from "moxios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Testing Players action", () => {
  beforeEach(() => {
    moxios.install;
  });
  afterEach(() => {
    moxios.uninstall;
  });

  it("should create an action of type GET_ALL_BATSMAN and the payload should be same as the API response from the server with status code 200", () => {
    const responseOfApi = [{}];
    moxios.stubRequest("http://localhost:5000/apis/PlayerInfo/allBatsman", {
      status: 200,
      response: { data: responseOfApi }
    });
    // console.log("response: ", data);
    const store = mockStore({});
    const expectedActions = [
      {
        type: GET_ALL_BATSMAN,
        payload: responseOfApi
      }
    ];
    console.log("expected actions:", expectedActions);
    return store.dispatch(action.getBatsmen()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
