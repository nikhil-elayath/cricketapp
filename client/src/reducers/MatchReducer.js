import {
	GET_RECENT_MATCHES,
	GET_MATCHES_DATE,
	GET_MATCH_DETAILS_BY_ID
} from "../actions/Types";

const initialstate = {
	matches: [],
	match_date: [],
	match: []
};

export default function (state = initialstate, action) {
	switch (action.type) {
		case GET_RECENT_MATCHES:
			return { ...state, matches: action.payload };
		case GET_MATCHES_DATE:
			return { ...state, match_date: action.payload };
		case GET_MATCH_DETAILS_BY_ID:
			return { ...state, match: action.payload };
		default:
			return state;
	}
}
