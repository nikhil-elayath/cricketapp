import { GET_RECENT_MATCHES } from "../actions/types";

const initialstate = {
    matches: []
};

export default function (state = initialstate, action) {
    switch (action.type) {
        case GET_RECENT_MATCHES:
            return { ...state, matches: action.payload };
        default:
            return state;
    }
}
