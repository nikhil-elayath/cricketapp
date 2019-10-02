import * as action from "../users";
import {
	GET_USERS,
	CREATE_USERS,
	LOGIN,
	OTP_VERIFICATION,
	EMAIL_VERIFICATION
} from "../Types";
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
		moxios.stubRequest("http://localhost:5000/api/cricketalpha/user/all", {
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
		moxios.stubRequest("http://localhost:5000/api/cricketalpha/user/all", {
			status: 400,
			response: { data: responseOfApi }
		});
		const store = mockstore({});
		const expectedActions = [];
		return store.dispatch(action.getUsers()).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

	it("should craete an acton withthe create_user and the payload should be same as the api response when the response is 20*", () => {
		const responseOfApi = [{}, {}, {}];
		const obj = {
			user_id: "1",
			user_email: "test@tes.com",
			user_name: "test",
			user_password: "tes123",
			isadmin: "false"
		};
		moxios.stubRequest("http://localhost:5000/api/cricketalpha/user/new", {
			status: 200,
			response: { data: responseOfApi }
		});
		const store = mockstore({});
		const expectedActions = [
			{
				type: CREATE_USERS
			}
		];
		return store.dispatch(action.createUsers(obj)).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});
	it("should craete an acton withtye login and the payload should be same as the api response when the response is 20*", () => {
		const responseOfApi = [{}, {}, {}];
		const obj = {
			user_id: "1",
			user_name: "testing",
			user_password: "testing123",
			isadmin: "false"
		};
		moxios.stubRequest("http://localhost:5000/api/cricketalpha/user/new", {
			status: 400,
			response: { data: responseOfApi }
		});
		const store = mockstore({});
		const expectedActions = [];
		return store.dispatch(action.createUsers(obj)).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

	//login

	it("should craete an acton withthe login and the payload should be same as the api response when the response is 20*", () => {
		const responseOfApi = [{}, {}, {}];
		const obj = {
			user_email: "test@tes.com",
			user_password: "tes123"
		};
		moxios.stubRequest(
			"http://localhost:5000/api/cricketalpha/user/login",

			{
				status: 200,
				response: { data: responseOfApi }
			}
		);
		const store = mockstore({});
		const expectedActions = [
			{
				type: LOGIN
			}
		];
		return store.dispatch(action.login(obj)).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});
	it("should craete an acton withtye login and the payload should be same as the api response when the response is 20*", () => {
		const responseOfApi = [{}, {}, {}];
		const obj = {
			user_email: "test@tes.com",
			user_password: "tes123456789"
		};
		moxios.stubRequest(
			"http://localhost:5000/api/cricketalpha/user/login",
			{
				status: 400,
				response: { data: responseOfApi }
			}
		);
		const store = mockstore({});
		const expectedActions = [];
		return store.dispatch(action.login(obj)).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

	// otpVerify
	it("should craete an acton withthe login and the payload should be same as the api response when the response is 20*", () => {
		const responseOfApi = [{}, {}, {}];
		const obj = {
			otp: "5123"
		};
		moxios.stubRequest(
			"http://localhost:5000/api/cricketalpha/user/verify_otp",

			{
				status: 200,
				response: { data: responseOfApi }
			}
		);
		const store = mockstore({});
		const expectedActions = [
			{
				type: OTP_VERIFICATION
			}
		];
		return store.dispatch(action.otpVerify(obj)).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});
	it("should craete an acton withtye login and the payload should be same as the api response when the response is 20*", () => {
		const responseOfApi = [{}, {}, {}];
		moxios.stubRequest(
			"http://localhost:5000/api/cricketalpha/user/verify_otp",
			{
				status: 400,
				response: { data: responseOfApi }
			}
		);
		const store = mockstore({});
		const expectedActions = [];
		return store.dispatch(action.otpVerify({})).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

	//email_verfication

	it("should craete an acton withthe login and the payload should be same as the api response when the response is 20*", () => {
		const responseOfApi = [{}, {}, {}];
		const obj = {
			user_email: "test@test.com"
		};
		moxios.stubRequest(
			"http://localhost:5000/api/cricketalpha/user/verify_email",

			{
				status: 200,
				response: { data: responseOfApi }
			}
		);
		const store = mockstore({});
		const expectedActions = [
			{
				type: EMAIL_VERIFICATION
			}
		];
		return store.dispatch(action.otpSend(obj)).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});
	it("should craete an acton withtye login and the payload should be same as the api response when the response is 20*", () => {
		const responseOfApi = [{}, {}, {}];
		moxios.stubRequest(
			"http://localhost:5000/api/cricketalpha/user/verify_email",
			{
				status: 400,
				response: { data: responseOfApi }
			}
		);
		const store = mockstore({});
		const expectedActions = [];
		return store.dispatch(action.otpSend({})).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});
});
