import { combineReducers } from "redux";
import users from "./userReducer";
import player from "./PlayerReducer";
import teams from "./TeamsReducer";
import home from "./HomeReducer";
import matches from "./MatchReducer";
<<<<<<< HEAD
import Search from "./Search";
=======
>>>>>>> 4383b846be8a6e0cd7c6ca5516dada82e5924f35
import adminplayer from "./AdminPlayerReducer";
import adminteam from "./AdminTeamReducer";

export default combineReducers({
<<<<<<< HEAD
	userReducer: users,
	PlayerReducer: player,
	TeamsReducer: teams,
	HomeReducer: home,
	matchreducer: matches,
	SearchReducer: Search,

	//piyush
	AdminPlayerReducer: adminplayer,
	AdminTeamReducer: adminteam
=======
  userReducer: users,
  PlayerReducer: player,
  TeamsReducer: teams,
  HomeReducer: home,
  matchreducer: matches,
  AdminPlayerReducer: adminplayer,
  AdminTeamReducer: adminteam
>>>>>>> 4383b846be8a6e0cd7c6ca5516dada82e5924f35
});
