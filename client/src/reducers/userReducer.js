import {
  GET_USERS,
  CREATE_USERS,
  EMAIL_VERIFICATION,
  OTP_VERIFICATION,
  RESET_PASSWORD,
  LOGIN,
  ERROR_TYPE
} from "../actions/Types";

const initialstate = {
  users: [],
  error: ""
};

export default function(state = initialstate, action) {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload };
    case CREATE_USERS:
      return state;
    case EMAIL_VERIFICATION:
      return state;
    case LOGIN:
      return state;
    case RESET_PASSWORD:
      return state;
    case OTP_VERIFICATION:
      return state;
    case ERROR_TYPE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
