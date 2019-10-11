import { GET_SEARCH } from "../actions/Types";

const initialState = {
	search: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_SEARCH:
			console.log("GET_SEARCH from reducer");
			return {
				...state,
				search: action.payload
			};

		default:
			return state;
	}
}
