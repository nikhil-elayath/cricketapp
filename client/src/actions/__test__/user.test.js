import * as action from "../users";
import { GET_USERS, CREATE_USERS } from "../types";
import moxios from "moxios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockstore = configureMockStore(middlewares);

describe("Testing user Action", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it("should craete an acton withthe GET_USERs and the payload should be same as the api response when the response is 20*", () => {
    const responseOfApi = [{}, {}, {}];
    moxios.stubRequest("http://localhost:5000/api/cricketaplha/user/all", {
      status: 200,
      response: { data: responseOfApi }
    });
    const store = mockstore({});
    const expectedActions = [
      {
        type: GET_USERS,
        payload: responseOfApi
      }
    ];
    return store.dispatch(action.getUsers()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it("should craete an acton withtye GET_USERS and the payload should be same as the api response when the response is 20*", () => {
    const responseOfApi = [{}, {}, {}];
    moxios.stubRequest("http://localhost:5000/api/cricketaplha/user/all", {
      status: 400,
      response: { data: responseOfApi }
    });
    const store = mockstore({});
    const expectedActions = [];
    return store.dispatch(action.getUsers()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  // it("should craete an acton withthe create_user and the payload should be same as the api response when the response is 20*", () => {
  //   const responseOfApi = [{}, {}, {}];
  //   moxios.stubRequest("http://localhost:5000/api/cricketalpha/user/new", {
  //     status: 200,
  //     response: { data: responseOfApi }
  //   });
  //   const store = mockstore({});
  //   const expectedActions = [
  //     {
  //       type: CREATE_USERS
  //       // payload: responseOfApi
  //     }
  //   ];
  //   return store.dispatch(action.createUsers()).then(() => {
  //     expect(store.getActions()).toEqual(expectedActions);
  //   });
  // });
});
