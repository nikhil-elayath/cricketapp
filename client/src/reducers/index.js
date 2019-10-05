import { combineReducers } from "redux";
import users from "./userReducer";
import player from "./PlayerReducer";
import teams from "./TeamsReducer";
import home from "./HomeReducer";
import matches from "./MatchReducer";
import adminplayer from "./AdminPlayerReducer";
import adminteam from "./AdminTeamReducer";

export default combineReducers({
  userReducer: users,
  PlayerReducer: player,
  TeamsReducer: teams,
  HomeReducer: home,
  matchreducer: matches,
  AdminPlayerReducer: adminplayer,
  AdminTeamReducer: adminteam
});
