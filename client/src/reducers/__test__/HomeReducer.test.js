import { GET_RECENT_MATCHES } from "../../actions/Types";
import HomeReducer from "../HomeReducer";

describe("Testing Home reducer", () => {
	it("should return  state object with recent matches Details array equal to the payload in the action when the action type is GET_RECENT_MATCHES(when the state is initial state)", () => {
		const action = {
			type: GET_RECENT_MATCHES,
			payload: []
		};
		const returnedState = HomeReducer(undefined, action);
		expect(returnedState).toEqual({
			home: action.payload,
			recent_matches: action.payload
		});
	});

	it("should return state object with player details array equal to the payload in the action when the action type is GET_PLAYERS(when state is not initial empty)", () => {
		const initialState = {
			// REDUCER
			recent_matches: [
				{ teamOne: "India" },
				{ teamTwo: "Pakistan" },
				{ winner: "India" },
				{ match_date: "12-12-12" }
			]
		};

		const action = {
			type: GET_RECENT_MATCHES,
			payload: [{}, {}, {}, {}]
		};

		const returnedState = HomeReducer(initialState, action);
		expect(returnedState).toEqual({
			recent_matches: initialState.recent_matches
		});
	});
});

describe("Testing HomeReducer for type SOME_TYPE", () => {
	// test with initialState
	it("with initialState - return same state action of type SOME_TYPE as it goes to default case", () => {
		const action = {
			type: "SOME_TYPE"
		};
		const returnedState = HomeReducer(undefined, action);
		expect(returnedState).toEqual({
			home: [],
			recent_matches: []
		});
	});

	// test without initialState
	it("w/o initialState - return same state action of type SOME_TYPE as it goes to default case", () => {
		const initialState = {
			// REDUCER
			recent_matches: [
				{ teamOne: "India" },
				{ teamTwo: "Pakistan" },
				{ winner: "India" },
				{ match_date: "12-12-12" }
			]
		};
		const action = {
			type: "SOME_TYPE"
		};
		const returnedState = HomeReducer(initialState, action);
		expect(returnedState).toEqual({
			recent_matches: initialState.recent_matches
		});
	});
});
