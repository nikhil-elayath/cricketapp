import * as action from "../PlayerAction";
import {
  GET_ALL_BATSMAN,
  GET_ALL_BOWLERS,
  GET_SINGLE_PLAYER,
  GET_BATSMAN_STATS,
  GET_TOP_SIXES,
  GET_ODI_BATSMAN_STATS,
  GET_T20_BATSMAN_STATS,
  GET_ODI_BOWLER_STATS,
  GET_T20_BOWLER_STATS,
  GET_TEST_BOWLER_STATS
} from "../Types";
import moxios from "moxios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

// let url = "http://localhost:5000/apis/PlayerInfo/singlePlayer/";

describe("Testing Players action", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it("should create an action of type GET_ALL_BATSMAN and the payload should be same as the API response from the server when Match Type is Test with status code 200", () => {
    const responseOfApi = [];
    let match_type = { match_type: "Test" };
    moxios.stubRequest(
      "http://localhost:5000/apis/PlayerInfo/TopBatsman",

      {
        status: 200,
        response: { data: responseOfApi }
      }
    );
    // console.log("response: ", data);
    const store = mockStore({}, {}, {});
    const expectedActions = [
      {
        type: GET_ALL_BATSMAN,
        payload: responseOfApi
      }
    ];
    // console.log("expected actions:", expectedActions);
    return store.dispatch(action.getBatsmen(match_type)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should create an action of type GET_ALL_BATSMAN and the payload should be same as the API response from the server when Match Type is ODI with status code 200", () => {
    const responseOfApi = [];
    let match_type = { match_type: "ODI" };
    moxios.stubRequest(
      "http://localhost:5000/apis/PlayerInfo/TopBatsman",

      {
        status: 200,
        response: { data: responseOfApi }
      }
    );
    // console.log("response: ", data);
    const store = mockStore({}, {}, {});
    const expectedActions = [
      {
        type: GET_ALL_BATSMAN,
        payload: responseOfApi
      }
    ];
    // console.log("expected actions:", expectedActions);
    return store.dispatch(action.getBatsmen(match_type)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should create an action of type GET_ALL_BATSMAN and the payload should be same as the API response from the server when Match Type is T20 with status code 200", () => {
    const responseOfApi = [];
    let match_type = { match_type: "T20" };
    moxios.stubRequest(
      "http://localhost:5000/apis/PlayerInfo/TopBatsman",

      {
        status: 200,
        response: { data: responseOfApi }
      }
    );
    // console.log("response: ", data);
    const store = mockStore({}, {}, {});
    const expectedActions = [
      {
        type: GET_ALL_BATSMAN,
        payload: responseOfApi
      }
    ];
    // console.log("expected actions:", expectedActions);
    return store.dispatch(action.getBatsmen(match_type)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should create an action of type GET_ALL_BATSMAN and the payload should be same as the API response from the server when Match Type is neither test,nor odi nor T20  with status code 400", () => {
    const responseOfApi = [];
    let match_type = { match_type: "Testasd" };
    moxios.stubRequest(
      "http://localhost:5000/apis/PlayerInfo/TopBatsman",

      {
        status: 200,
        response: { data: responseOfApi }
      }
    );
    // console.log("response: ", data);
    const store = mockStore({}, {}, {});
    const expectedActions = [
      {
        type: GET_ALL_BATSMAN,
        payload: responseOfApi
      }
    ];
    // console.log("expected actions:", expectedActions);
    return store.dispatch(action.getBatsmen(match_type)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should create an action of type GET_ALL_BOWLERS and the payload should be same as the API response from the server with status code 200", () => {
    const responseOfApi = [];
    let match = { match_type: "ODI" };
    moxios.stubRequest(
      "http://localhost:5000/apis/PlayerInfo/TopBowlers",

      {
        status: 200,
        response: { data: responseOfApi }
      }
    );
    // console.log("response: ", data);
    const store = mockStore({}, {}, {});
    const expectedActions = [
      {
        type: GET_ALL_BOWLERS,
        payload: responseOfApi
      }
    ];
    // console.log("expected actions:", expectedActions);
    return store.dispatch(action.getBowlers(match)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should create an action of type GET_ALL_BOWLERS and the payload should be same as the API response from the server with status code 200", () => {
    const responseOfApi = [];
    let match = { match_type: "ODI" };
    moxios.stubRequest(
      "http://localhost:5000/apis/PlayerInfo/TopBowlers",

      {
        status: 200,
        response: { data: responseOfApi }
      }
    );
    // console.log("response: ", data);
    const store = mockStore({}, {}, {});
    const expectedActions = [
      {
        type: GET_ALL_BOWLERS,
        payload: responseOfApi
      }
    ];
    // console.log("expected actions:", expectedActions);
    return store.dispatch(action.getBowlers(match)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should create an action of type GET_TOP_SIXES and the payload should be same as the API response from the server with status code 200", () => {
    const responseOfApi = [];
    let match = { match_type: "ODI" };
    moxios.stubRequest(
      "http://localhost:5000/apis/PlayerInfo/TopSixes",

      {
        status: 200,
        response: { data: responseOfApi }
      }
    );
    // console.log("response: ", data);
    const store = mockStore({}, {}, {});
    const expectedActions = [
      {
        type: GET_TOP_SIXES,
        payload: responseOfApi
      }
    ];
    // console.log("expected actions:", expectedActions);
    return store.dispatch(action.getTopSixes(match)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should create an action of type GET_SINGLE_PLAYER and the payload should be same as the API response from the server with status code 200", () => {
    const responseOfApi = [[]];
    let player_id = 455;
    moxios.stubRequest(
      "http://localhost:5000/apis/PlayerInfo/singlePlayer/" + player_id,
      {
        status: 200,
        response: { data: responseOfApi }
      }
    );
    // console.log("response: ", re);
    const store = mockStore({}, {}, {});
    const expectedActions = [
      {
        type: GET_SINGLE_PLAYER,
        payload: responseOfApi
      }
    ];
    // console.log("expected actions:", expectedActions);
    return store.dispatch(action.getSinglePlayer(player_id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  // BOWLERS ACTION

  it("should create an action of type GET_ODI_BOWLER_STATS and the payload should be same as the API response from the server with status code 200", () => {
    const responseOfApi = [[]];
    let player_id = 256;
    moxios.stubRequest(
      "http://localhost:5000/apis/PlayerInfo/ODIBowlerStats/" + player_id,
      {
        status: 200,
        response: { ODIBowler: responseOfApi }
      }
    );
    // console.log("response: ", response);
    const store = mockStore({}, {}, {});
    const expectedActions = [
      {
        type: GET_ODI_BOWLER_STATS,
        payload: responseOfApi
      }
    ];
    // console.log("expected actions:", expectedActions);
    return store.dispatch(action.getODIBowlerStats(player_id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should create an action of type GET_TEST_BOWLER_STATS and the payload should be same as the API response from the server with status code 200", () => {
    const responseOfApi = [[]];
    let player_id = 268;
    moxios.stubRequest(
      "http://localhost:5000/apis/PlayerInfo/Test-Bowler-Stats/" + player_id,
      {
        status: 200,
        response: { TestBowler: responseOfApi }
      }
    );
    // console.log("response: ", re);
    const store = mockStore({}, {}, {});
    const expectedActions = [
      {
        type: GET_TEST_BOWLER_STATS,
        payload: responseOfApi
      }
    ];
    // console.log("expected actions:", expectedActions);
    return store.dispatch(action.getTestBowlerStats(player_id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should create an action of type GET_T20_BOWLER_STATS and the payload should be same as the API response from the server with status code 200", () => {
    const responseOfApi = [[]];
    let player_id = 268;
    moxios.stubRequest(
      "http://localhost:5000/apis/PlayerInfo/T20-Bowler-Stats/" + player_id,
      {
        status: 200,
        response: { T20Bowler: responseOfApi }
      }
    );
    // console.log("response: ", re);
    const store = mockStore({}, {}, {});
    const expectedActions = [
      {
        type: GET_T20_BOWLER_STATS,
        payload: responseOfApi
      }
    ];
    // console.log("expected actions:", expectedActions);
    return store.dispatch(action.getT20BowlerStats(player_id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  // /// /// // // // // // BATSMAN STATS/////// ////// ///// /////
  it("should create an action of type GET_T20_BATSMAN_STATS and the payload should be same as the API response from the server with status code 200", () => {
    const responseOfApi = [[]];
    let player_id = 268;
    moxios.stubRequest(
      "http://localhost:5000/apis/PlayerInfo/T20-Batsman-Stats/" + player_id,
      {
        status: 200,
        response: { T20: responseOfApi }
      }
    );
    // console.log("response: ", re);
    const store = mockStore({}, {}, {});
    const expectedActions = [
      {
        type: GET_T20_BATSMAN_STATS,
        payload: responseOfApi
      }
    ];
    // console.log("expected actions:", expectedActions);
    return store.dispatch(action.getT20BatsmanStats(player_id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should create an action of type GET_ODI_BATSMAN_STATS and the payload should be same as the API response from the server with status code 200", () => {
    const responseOfApi = [[]];
    let player_id = 268;
    moxios.stubRequest(
      "http://localhost:5000/apis/PlayerInfo/ODI-Batsman-Stats/" + player_id,
      {
        status: 200,
        response: { ODI: responseOfApi }
      }
    );
    // console.log("response: ", re);
    const store = mockStore({}, {}, {});
    const expectedActions = [
      {
        type: GET_ODI_BATSMAN_STATS,
        payload: responseOfApi
      }
    ];
    // console.log("expected actions:", expectedActions);
    return store.dispatch(action.getODIBatsmanStats(player_id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should create an action of type GET_BATSMAN_STATS and the payload should be same as the API response from the server with status code 200", () => {
    const responseOfApi = [[]];
    let player_id = 268;
    moxios.stubRequest(
      "http://localhost:5000/apis/PlayerInfo/Test-Batsman-Stats/" + player_id,
      {
        status: 200,
        response: { Test: responseOfApi }
      }
    );
    // console.log("response: ", re);
    const store = mockStore({}, {}, {});
    const expectedActions = [
      {
        type: GET_BATSMAN_STATS,
        payload: responseOfApi
      }
    ];
    // console.log("expected actions:", expectedActions);
    return store.dispatch(action.getTestBatsmanStats(player_id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  //  ############## NEGATIVE ###################

  it("should create an action of type GET_BATSMAN_STATS and  response from the server should be with status code 200", () => {
    const responseOfApi = [[]];
    let player_id = 268;
    moxios.stubRequest(
      "http://localhost:5000/apis/PlayerInfo/Test-Batsman-Stats/" + player_id,
      {
        status: 200,
        response: { Test: responseOfApi }
      }
    );
    // console.log("response: ", re);
    const store = mockStore({}, {}, {});
    const expectedActions = [
      {
        type: GET_BATSMAN_STATS,
        payload: responseOfApi
      }
    ];
    // console.log("expected actions:", expectedActions);
    return store.dispatch(action.getTestBatsmanStats(player_id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
