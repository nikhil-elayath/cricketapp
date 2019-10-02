import { combineReducers } from "redux";
import users from "./userReducer";
import player from "./PlayerReducer";
import teams from "./TeamsReducer";
import home from "./HomeReducer";

export default combineReducers({
	userReducer: users,
	PlayerReducer: player,
	TeamsReducer: teams,
	HomeReducer: home
});
