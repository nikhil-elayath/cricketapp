import * as action from "../Home";

import {
	GET_NEWS,
	GET_HOME_RECENT_MATCHES,
	LOADING_START,
	LOADING_STOP
} from "../Types";

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

	// getting all news with status 200
	it("should create an action with type GET_NEWS and the payload should be same as the api response when the response is 200", () => {
		const responseOfApi = [{}, {}, {}];
		moxios.stubRequest("http://localhost:5000/apis/news", {
			status: 200,
			response: { data: responseOfApi }
		});
		const store = mockStore({}, {}, {});
		const expectedActions = [
			{
				type: GET_NEWS,
				payload: responseOfApi
			}
		];
		return store.dispatch(action.getNews()).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

	// getting all news with status 400
	it("should create an action with type GET_NEWS and the payload should be same as the api response when the response is 200", () => {
		const responseOfApi = [{}, {}, {}];
		moxios.stubRequest("http://localhost:5000/apis/news", {
			status: 400,
			response: { data: responseOfApi }
		});
		const store = mockStore({}, {}, {});
		const expectedActions = [];
		return store.dispatch(action.getNews()).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

	// getting all recent matches with status 200 for male
	it("should create an action with type GET_HOME_RECENT_MATCHES and the payload should be same as the api response when the response is 200", () => {
		const responseOfApi = [{}, {}, {}];
		const gender = "male";
		moxios.stubRequest(
			"http://localhost:5000/apis/recentMatches/" + gender,
			{
				status: 200,
				response: { data: responseOfApi }
			}
		);
		const store = mockStore({}, {}, {});
		const expectedActions = [
			{
				type: LOADING_START
			},
			{
				type: LOADING_STOP
			},
			{
				type: GET_HOME_RECENT_MATCHES,
				payload: responseOfApi
			}
		];
		return store.dispatch(action.getRecentMatches(gender)).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

	// getting all recent matches with status 400 for male
	it("should create an action with type GET_HOME_RECENT_MATCHES and the payload should be same as the api response when the response is 400", () => {
		const responseOfApi = [{}, {}, {}];
		const gender = "male";
		moxios.stubRequest(
			"http://localhost:5000/apis/recentMatches/" + gender,
			{
				status: 400,
				response: { data: responseOfApi }
			}
		);
		const store = mockStore({}, {}, {});
		const expectedActions = [
			{
				type: LOADING_START
			}
		];
		return store.dispatch(action.getRecentMatches(gender)).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

	// getting all recent matches with status 200 for female
	it("should create an action with type GET_HOME_RECENT_MATCHES and the payload should be same as the api response when the response is 200", () => {
		const gender = "female";
		const responseOfApi = [{}, {}, {}];
		moxios.stubRequest(
			"http://localhost:5000/apis/recentMatches/" + gender,
			{
				status: 200,
				response: { data: responseOfApi }
			}
		);
		const store = mockStore({}, {}, {});
		const expectedActions = [
			{
				type: LOADING_START
			},
			{
				type: LOADING_STOP
			},
			{
				type: GET_HOME_RECENT_MATCHES,
				payload: responseOfApi
			}
		];
		return store.dispatch(action.getRecentMatches(gender)).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

	// getting all recent matches with status 400 for female
	it("should create an action with type GET_HOME_RECENT_MATCHES and the payload should be same as the api response when the response is 400", () => {
		const gender = "female";
		const responseOfApi = [{}, {}, {}];
		moxios.stubRequest(
			"http://localhost:5000/apis/recentMatches/" + gender,
			{
				status: 400,
				response: { data: responseOfApi }
			}
		);
		const store = mockStore({}, {}, {});
		const expectedActions = [
			{
				type: LOADING_START
			}
		];
		return store.dispatch(action.getRecentMatches(gender)).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});
});
