import { combineReducers } from "redux";
import users from "./userReducer";
import player from "./PlayerReducer";
import teams from "./TeamsReducer";
import home from "./HomeReducer";
import matches from "./MatchReducer";
import Search from "./Search";
import adminplayer from "./AdminPlayerReducer";
import adminteam from "./AdminTeamReducer";
import news from "./NewsReducer";
import NewsReducer from "./NewsReducer";

export default combineReducers({
  userReducer: users,
  PlayerReducer: player,
  TeamsReducer: teams,
  HomeReducer: home,
  matchreducer: matches,
  SearchReducer: Search,

  //piyush
  AdminPlayerReducer: adminplayer,
  AdminTeamReducer: adminteam,
  //nikhil
  NewsReducer: news,
});
