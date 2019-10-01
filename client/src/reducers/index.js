import { combineReducers } from "redux";

import player from "./PlayerReducer";

export default combineReducers({
  PlayerReducer: player
});
