import * as action from "../Teams";
import {
  GET_TEAMS,
  GET_RANKS,
  GET_MATCHBYTEAMID,
  GET_TEAM_BATSMEN,
  GET_TEAM_BOWLERS,
  GET_TEAM_STATS
} from "../Types";
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

  it("should create action with type GET_RANKS and the payload should be same as the api response when the response is 200", () => {
    const responseOfApi = [{}, {}, {}];
    let gender = "male";
    moxios.stubRequest(
      "http://localhost:5000/cricketalpha/teams/rankings/" + gender,
      {
        status: 200,
        response: { data: responseOfApi }
      }
    );
    const store = mockStore({});
    const expectedActions = [
      {
        type: GET_RANKS,
        payload: responseOfApi
      }
    ];
    return store.dispatch(action.getRanks(gender)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should create action with type GET_RANKS and the payload should be same as the api response when the response is 400", () => {
    const responseOfApi = [{}, {}, {}];
    let gender = "malee";
    moxios.stubRequest(
      "http://localhost:5000/cricketalpha/teams/rankings/" + gender,
      {
        status: 400,
        response: { data: responseOfApi }
      }
    );
    const store = mockStore({});
    const expectedActions = [];
    return store.dispatch(action.getRanks(gender)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should create action with type GET_TEAM_BATSMEN and the payload should be same as the api response when the response is 200", () => {
    const responseOfApi = [{}, {}, {}];
    let gender = "male";
    moxios.stubRequest(
      "http://localhost:5000/cricketalpha/teams/topbatsmen/" + gender,
      {
        status: 200,
        response: { data: responseOfApi }
      }
    );
    const store = mockStore({});
    const expectedActions = [
      {
        type: GET_TEAM_BATSMEN,
        payload: responseOfApi
      }
    ];
    return store.dispatch(action.getTeamBatsmen(gender)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should create action with type GET_TEAM_BATSMEN and the payload should be same as the api response when the response is 400", () => {
    const responseOfApi = [{}, {}, {}];
    let gender = "malee";
    moxios.stubRequest(
      "http://localhost:5000/cricketalpha/teams/topbatsmen/" + gender,
      {
        status: 400,
        response: { data: responseOfApi }
      }
    );
    const store = mockStore({});
    const expectedActions = [];
    return store.dispatch(action.getTeamBatsmen(gender)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should create action with type GET_TEAM_BOWLERS and the payload should be same as the api response when the response is 200", () => {
    const responseOfApi = [{}, {}, {}];
    let gender = "male";
    moxios.stubRequest(
      "http://localhost:5000/cricketalpha/teams/topbowlers/" + gender,
      {
        status: 200,
        response: { data: responseOfApi }
      }
    );
    const store = mockStore({});
    const expectedActions = [
      {
        type: GET_TEAM_BOWLERS,
        payload: responseOfApi
      }
    ];
    return store.dispatch(action.getTeamBowlers(gender)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should create action with type GET_TEAM_BOWLERS and the payload should be same as the api response when the response is 400", () => {
    const responseOfApi = [{}, {}, {}];
    let gender = "malee";
    moxios.stubRequest(
      "http://localhost:5000/cricketalpha/teams/topbowlers/" + gender,
      {
        status: 400,
        response: { data: responseOfApi }
      }
    );
    const store = mockStore({});
    const expectedActions = [];
    return store.dispatch(action.getTeamBowlers(gender)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  // it("should create action with type GET_MATCHBYTEAMID and the payload should be same as the api response when the response is 200", () => {
  //   const responseOfApi = [{}, {}, {}];
  //   let team_id = 3;
  //   let gender = "male";
  //   moxios.stubRequest(
  //     "http://localhost:5000/cricketalpha/teams/match/" +
  //       team_id +
  //       "/" +
  //       gender,
  //     {
  //       status: 200,
  //       response: { data: responseOfApi }
  //     }
  //   );
  //   const store = mockStore({});
  //   const expectedActions = [
  //     {
  //       type: GET_MATCHBYTEAMID,
  //       payload: responseOfApi
  //     }
  //   ];
  //   return store.dispatch(action.getMatch(team_id, gender)).then(() => {
  //     expect(store.getActions()).toEqual(expectedActions);
  //   });
  // });

  // it("should create action with type GET_MATCHBYTEAMID and the payload should be same as the api response when the response is 400", () => {
  //   const responseOfApi = [{}, {}, {}];
  //   let team_id = 3000;
  //   let gender = "male";
  //   moxios.stubRequest(
  //     "http://localhost:5000/cricketalpha/teams/match/" +
  //       team_id +
  //       "/" +
  //       gender,
  //     {
  //       status: 400,
  //       response: { data: responseOfApi }
  //     }
  //   );
  //   const store = mockStore({});
  //   const expectedActions = [];
  //   return store.dispatch(action.getMatch(team_id, gender)).then(() => {
  //     expect(store.getActions()).toEqual(expectedActions);
  //   });
  // });

  // it("should create action with type GET_TEAM_STATS and the payload should be same as the api response when the response is 200", () => {
  //   const responseOfApi = [{}, {}, {}];
  //   let gender = "male";
  //   moxios.stubRequest(
  //     "http://localhost:5000/cricketalpha/teams/rankings/" + gender,
  //     {
  //       status: 200,
  //       response: { data: responseOfApi }
  //     }
  //   );
  //   const store = mockStore({});
  //   const expectedActions = [
  //     {
  //       type: GET_TEAM_STATS,
  //       payload: responseOfApi
  //     }
  //   ];
  //   return store.dispatch(action.getRanks()).then(() => {
  //     expect(store.getTeamStats()).toEqual(expectedActions);
  //   });
  // });
});
