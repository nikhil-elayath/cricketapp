import * as action from "../Admin";
import {
  GET_PLAYERS,
  GET_TEAMS,
  CREATE_PLAYER,
  CREATE_TEAM,
  EDIT_PLAYER,
  EDIT_TEAM,
  DELETE_PLAYER,
  DELETE_TEAM
} from "../Types";
import moxios from "moxios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
let id;

const middlewares = [thunk];
const mockstore = configureMockStore(middlewares);
//for get player
describe("Testing user Action", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it("should craete an acton withthe GET_PLAYER and the payload should be same as the api response when the response is 20*", () => {
    const responseOfApi = [{}, {}, {}];
    moxios.stubRequest("http://localhost:5000/apis/PlayerInfo/allPlayer", {
      status: 200,
      response: { data: responseOfApi }
    });
    const store = mockstore({});
    const expectedActions = [
      {
        type: GET_PLAYERS,
        payload: responseOfApi
      }
    ];
    return store.dispatch(action.getPlayers()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      // id = response.body.data[0].player_id;
    });
  });
  it("should craete an acton withtye GET_PLAYER and the payload should be same as the api response when the response is 20*", () => {
    const responseOfApi = [{}, {}, {}];
    moxios.stubRequest("http://localhost:5000/apis/PlayerInfo/allPlayer", {
      status: 400,
      response: { data: responseOfApi }
    });
    const store = mockstore({});
    const expectedActions = [];
    return store.dispatch(action.getPlayers()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  //for get team

  it("should craete an acton withthe GET_TEAM and the payload should be same as the api response when the response is 20*", () => {
    const responseOfApi = [{}, {}, {}];
    moxios.stubRequest("http://localhost:5000/cricketalpha/teams", {
      status: 200,
      response: { data: responseOfApi }
    });
    const store = mockstore({});
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
  it("should craete an acton withtye GET_TEAMS and the payload should be same as the api response when the response is 20*", () => {
    const responseOfApi = [{}, {}, {}];
    moxios.stubRequest("http://localhost:5000/cricketalpha/teams", {
      status: 400,
      response: { data: responseOfApi }
    });
    const store = mockstore({});
    const expectedActions = [];
    return store.dispatch(action.getTeams()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  // for create player
  it("should craete an acton withthe create_player and the payload should be same as the api response when the response is 20*", () => {
    const responseOfApi = [{}, {}, {}];
    const obj = {
      player_id: "1",
      player_name: "yatin",
      player_country: "india",
      batting_style: "right-hand",
      bowling_style: "Right-arm fast",
      player_dob: "1994-10-9",
      player_gender: "male",
      player_role: "Batsmen",
      debut_odi_match: "pakistan",
      debut_test_match: "pakistan",
      debut_t20_match: "pakistan"
    };

    moxios.stubRequest("http://localhost:5000/apis/admin/player/new", {
      status: 200,
      response: { data: responseOfApi }
    });
    const store = mockstore({}, {}, {});
    const expectedActions = [
      {
        type: CREATE_PLAYER
      }
    ];
    // return store.dispatch(action.createPlayer(obj)).then(() => {
    //   expect(store.getActions()).toEqual(expectedActions);
    // });
    console.log("Expected actions is: ", expectedActions);
    return store.dispatch(action.createPlayer(obj)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it("should create an acton with the create team and the payload should be same as the api response when the response is 20*", () => {
    const responseOfApi = [{}, {}, {}];
    moxios.stubRequest("http://localhost:5000/apis/admin/player/new", {
      status: 400,
      response: { data: responseOfApi }
    });
    const store = mockstore({});
    const expectedActions = [];
    return store.dispatch(action.createPlayer()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  // for create team

  it("should craete an acton withthe create_team and the payload should be same as the api response when the response is 20*", () => {
    const responseOfApi = [{}, {}, {}];
    const obj = {
      team_id: "1",
      team_name: "country"
    };
    moxios.stubRequest("http://localhost:5000/apis/admin/team/new", obj, {
      status: 200,
      response: { data: responseOfApi }
    });
    const store = mockstore({});
    const expectedActions = [
      {
        type: CREATE_TEAM
      }
    ];
    return store.dispatch(action.createTeam()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it("should create an acton with the create team and the payload should be same as the api response when the response is 20*", () => {
    const responseOfApi = [{}, {}, {}];
    moxios.stubRequest("http://localhost:5000/apis/admin/team/new", {
      status: 400,
      response: { data: responseOfApi }
    });
    const store = mockstore({});
    const expectedActions = [];
    return store.dispatch(action.createTeam()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  //for delete player
  it("should craete an acton withthe delete player and the payload should be same as the api response when the response is 20*", () => {
    const responseOfApi = [{}, {}, {}];
    const player_id = "1";

    moxios.stubRequest(
      "http://localhost:5000/apis/admin/deleteplayer/" + player_id,
      {
        status: 200,
        response: { data: responseOfApi }
      }
    );
    const store = mockstore({});
    const expectedActions = [
      {
        type: DELETE_PLAYER
      }
    ];
    return store.dispatch(action.deletePlayer(player_id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  // it("should create an acton with the delete and the payload should be same as the api response when the response is 20*", () => {
  //   const responseOfApi = [{}, {}, {}];
  //   const player_id = "a";
  //   moxios.stubRequest(
  //     "http://localhost:5000/apis/admin/deleteplayer" + player_id,
  //     {
  //       status: 400,
  //       response: { data: responseOfApi }
  //     }
  //   );
  //   const store = mockstore({});
  //   const expectedActions = [];
  //   return store.dispatch(action.deletePlayer(player_id)).then(() => {
  //     expect(store.getActions()).toEqual(expectedActions);
  //   });
  // });

  //for delete team
  it("should craete an acton withthe create_user and the payload should be same as the api response when the response is 20*", () => {
    const responseOfApi = [{}, {}, {}];
    const team_id = "1";
    moxios.stubRequest(
      "http://localhost:5000/apis/admin/deleteteam/" + team_id,

      {
        status: 200,
        response: { data: responseOfApi }
      }
    );
    const store = mockstore({});
    const expectedActions = [
      {
        type: DELETE_TEAM
      }
    ];
    return store.dispatch(action.deleteTeam(team_id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  // it("should create an acton with the login and the payload should be same as the api response when the response is 20*", () => {
  //   const responseOfApi = [{}, {}, {}];
  //   moxios.stubRequest("http://localhost:5000/apis/admin/deleteteam/", {
  //     status: 400,
  //     response: { data: responseOfApi }
  //   });
  //   const store = mockstore({});
  //   const expectedActions = [];
  //   return store.dispatch(action.deleteTeam()).then(() => {
  //     expect(store.getActions()).toEqual(expectedActions);
  //   });
  // });
});
