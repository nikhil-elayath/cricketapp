import {
	GET_RECENT_MATCHES,
	GET_MATCHES_DATE,
	GET_MATCH_DETAILS_BY_ID,
	GET_MATCH_SCORECARD_DETAILS_BY_ID,
	GET_MANHATTAN_GRAPH_BY_ID,
	GET_PIECHART_ONE_GRAPH_BY_ID,
	GET_PIECHART_TWO_GRAPH_BY_ID
} from "../actions/Types";

const initialstate = {
	matches: [],
	match_date: [],
	match: [],
	match_score: [],
	match_stats: []
};

export default function (state = initialstate, action) {
	switch (action.type) {
		case GET_RECENT_MATCHES:
			return { ...state, matches: action.payload };
		case GET_MATCHES_DATE:
			return { ...state, match_date: action.payload };
		case GET_MATCH_DETAILS_BY_ID:
			return { ...state, match: action.payload };
		case GET_MATCH_SCORECARD_DETAILS_BY_ID:
			return { ...state, match_score: action.payload };
		case GET_MANHATTAN_GRAPH_BY_ID:
			return { ...state, match_stats: action.payload };
		case GET_PIECHART_ONE_GRAPH_BY_ID:
			return { ...state, match_stats: action.payload };
		case GET_PIECHART_TWO_GRAPH_BY_ID:
			return { ...state, match_stats: action.payload };
		default:
			return state;
	}

}
