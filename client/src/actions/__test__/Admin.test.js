import * as action from "../Admin";
import {
  GET_PLAYERS,
  GET_ALLTEAMS,
  CREATE_PLAYER,
  CREATE_TEAM,
  EDIT_PLAYER,
  EDIT_TEAM,
  DELETE_PLAYER,
  DELETE_TEAM,
  LOADING_START,
  LOADING_STOP,
  ERROR_TYPE,
  GET_PLAYER_SEARCH,
  GET_TEAM_SEARCH
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
        type: LOADING_START
      },
      {
        type: LOADING_STOP
      },
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
    const expectedActions = [
      {
        type: LOADING_START
      },
      {
        type: LOADING_START
      }
    ];
    return store.dispatch(action.getPlayers()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  //for get team

  it("should craete an acton withthe GET_TEAM and the payload should be same as the api response when the response is 20*", () => {
    const responseOfApi = [{}, {}, {}];
    moxios.stubRequest("http://localhost:5000/apis/admin/allteam", {
      status: 200,
      response: { data: responseOfApi }
    });
    const store = mockstore({});
    const expectedActions = [
      {
        type: LOADING_START
      },
      {
        type: LOADING_STOP
      },
      {
        type: GET_ALLTEAMS,
        payload: responseOfApi
      }
    ];
    return store.dispatch(action.getAllTeams()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it("should craete an acton withtye GET_TEAMS and the payload should be same as the api response when the response is 20*", () => {
    const responseOfApi = [{}, {}, {}];
    moxios.stubRequest("http://localhost:5000/apis/admin/allteam", {
      status: 400,
      response: { data: responseOfApi }
    });
    const store = mockstore({});
    const expectedActions = [
      {
        type: LOADING_START
      },
      {
        type: LOADING_START
      }
    ];
    return store.dispatch(action.getAllTeams()).then(() => {
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
      },
      {
        type: LOADING_START
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
  it("should create an acton with the create player and the payload should be same as the api response when the response is 400*", () => {
    const responseOfApi = [{}, {}, {}];
    moxios.stubRequest("http://localhost:5000/apis/admin/player/new", {
      status: 400,
      response: { data: responseOfApi }
    });
    const store = mockstore({});
    const expectedActions = [
      {
        type: ERROR_TYPE
      }
    ];
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
      },
      {
        type: LOADING_START
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
    const expectedActions = [
      {
        type: ERROR_TYPE
      }
    ];
    return store.dispatch(action.createTeam()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  //for edit player
  it("should edit an acton with the EDIT_PLAYER and the payload should be same as the api response when the response is 200", () => {
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

    moxios.stubRequest(
      "http://localhost:5000/apis/admin/editplayer/" + obj.player_id,
      obj,
      {
        status: 200,
        response: { data: responseOfApi }
      }
    );
    const store = mockstore({}, {}, {});
    const expectedActions = [
      {
        type: EDIT_PLAYER
      },
      {
        type: LOADING_START
      }
    ];
    // return store.dispatch(action.createPlayer(obj)).then(() => {
    //   expect(store.getActions()).toEqual(expectedActions);
    // });
    console.log("Expected actions is: ", expectedActions);
    return store.dispatch(action.editPlayer(obj)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it("should create an acton with the EDIT_PLAYER and  api response when the response is 400", () => {
    const responseOfApi = [{}, {}, {}];
    const obj = [];
    moxios.stubRequest(
      "http://localhost:5000/apis/admin/editplayer/" + obj.player_id,
      obj,
      {
        status: 400,
        response: { data: responseOfApi }
      }
    );
    const store = mockstore({});
    const expectedActions = [
      {
        type: EDIT_PLAYER
      },
      {
        type: LOADING_START
      }
    ];
    return store.dispatch(action.editPlayer(obj)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  // for Edit team

  it("should edit an acton with the EDIT_TEAM and the payload should be same as the api response when the response is 200*", () => {
    const responseOfApi = [{}, {}, {}];
    const obj = {
      team_id: "1",
      team_name: "country"
    };
    moxios.stubRequest(
      "http://localhost:5000/apis/admin/editteam/" + obj.team_id,
      obj,
      {
        status: 200,
        response: { data: responseOfApi }
      }
    );
    const store = mockstore({});
    const expectedActions = [
      {
        type: EDIT_TEAM
      },
      {
        type: LOADING_START
      }
    ];
    return store.dispatch(action.editTeam(obj)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it("should create an acton with the EDIT_TEAM when api response when the response is 400", () => {
    const responseOfApi = [{}, {}, {}];
    const obj = [];
    moxios.stubRequest(
      "http://localhost:5000/apis/admin/editteam/" + obj.team_id,
      obj,
      {
        status: 400,
        response: { data: responseOfApi }
      }
    );
    const store = mockstore({});
    const expectedActions = [
      {
        type: EDIT_TEAM
      },
      {
        type: LOADING_START
      }
    ];
    return store.dispatch(action.editTeam(obj)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  //for delete player
  it("should create an action with the DELETE_PLAYER", () => {
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
      },
      {
        type: LOADING_START
      }
    ];
    return store.dispatch(action.deletePlayer(player_id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it("should create an action with the DELETE_PLAYER", () => {
    const responseOfApi = [{}, {}, {}];
    const player_id = "";
    moxios.stubRequest(
      "http://localhost:5000/apis/admin/deleteplayer/" + player_id,
      {
        status: 400,
        response: { data: responseOfApi }
      }
    );
    const store = mockstore({});
    const expectedActions = [];
    return store.dispatch(action.deletePlayer(player_id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  //for delete team
  it("should craete an acton with the DELETE_TEAM", () => {
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
      { type: DELETE_TEAM },
      {
        type: LOADING_START
      }
    ];
    return store.dispatch(action.deleteTeam(team_id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it("should craete an acton with the DELETE_TEAM", () => {
    const responseOfApi = [{}, {}, {}];
    const team_id = "";
    moxios.stubRequest(
      "http://localhost:5000/apis/admin/deleteteam/" + team_id,
      {
        status: 400,
        response: { data: responseOfApi }
      }
    );
    const store = mockstore({});
    const expectedActions = [];
    return store.dispatch(action.deleteTeam(team_id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  //for seach team action

  it("should create an acton with the GET_TEAM_SEARCH and the payload should be same as the api response when the response is 200*", () => {
    const responseOfApi = [{}, {}, {}];
    const searchString = "india";
    moxios.stubRequest(
      "http://localhost:5000/apis/admin/searchteam/" + searchString,
      {
        status: 200,
        response: { data: responseOfApi }
      }
    );
    const store = mockstore({});
    const expectedActions = [
      {
        type: GET_TEAM_SEARCH,
        payload: responseOfApi
      }
    ];
    return store.dispatch(action.getTeamSearch(searchString)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  // it("should craete an acton with the GET_TEAM_SEARCH and the payload should be same as the api response when the response is 400", () => {
  //   const responseOfApi = [{}, {}, {}];
  //   const searchString = "";
  //   moxios.stubRequest(
  //     "http://localhost:5000/apis/admin/searchteam/" + searchString,
  //     {
  //       status: 400,
  //       response: { data: responseOfApi }
  //     }
  //   );
  //   const store = mockstore({});
  //   const expectedActions = [];
  //   return store.dispatch(action.getTeamSearch()).then(() => {
  //     expect(store.getActions()).toEqual(expectedActions);
  //   });
  // });
  it("should craete an acton with the GET_PLAYER_SEARCH and the payload should be same as the api response when the response is 200*", () => {
    const responseOfApi = [{}, {}, {}];
    const searchString = "india";
    moxios.stubRequest(
      "http://localhost:5000/apis/admin/search/" + searchString,
      {
        status: 200,
        response: { data: responseOfApi }
      }
    );
    const store = mockstore({});
    const expectedActions = [
      {
        type: GET_PLAYER_SEARCH,
        payload: responseOfApi
      }
    ];
    return store.dispatch(action.getPlayerSearch(searchString)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
