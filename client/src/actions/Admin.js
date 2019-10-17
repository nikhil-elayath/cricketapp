import {
  GET_PLAYERS,
  CREATE_PLAYER,
  CREATE_TEAM,
  EDIT_PLAYER,
  EDIT_TEAM,
  DELETE_PLAYER,
  DELETE_TEAM,
  GET_PLAYER_SEARCH,
  GET_TEAM_SEARCH,
  GET_ALLTEAMS,
  ERROR_TYPE
} from "./Types";
import axios from "axios";

// export const getPlayers = () => dispatch => {
// 	return axios
// 		.get("http://localhost:5000/api/cricketalpha/allPlayer")
// 		.then(res => {
// 			console.log("From Player Actions", res.data.data);
// 			dispatch({
// 				type: GET_PLAYERS,
// 				payload: res.data.data
// 			});
// 		})
// 		.catch(err => {
// 			console.log(err);
// 		});
// };
//
export const getPlayers = () => dispatch => {
  console.log(localStorage.getItem("token"));
  return axios
    .get("http://localhost:5000/apis/PlayerInfo/allPlayer", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(res => {
      dispatch({
        type: GET_PLAYERS,
        payload: res.data.data
      });
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    });
};

// export const getTeams = () => dispatch => {
//     return axios
//       .get("http://localhost:5000/api/cricketalpha/allteams")
//       .then(res => {
//         dispatch({
//           type: GET_TEAMS,
//           payload: res.data.data
//         });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

export const getAllTeams = () => dispatch => {
  console.log(localStorage.getItem("token"));
  return axios
    .get("http://localhost:5000/apis/admin/allteam", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(res => {
      dispatch({
        type: GET_ALLTEAMS,
        payload: res.data.data
      });
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    });
};

//   export const createPlayer = player => dispatch => {
//     return axios
//       .post("http://localhost:5000/api/cricketalpha/player/new", player)
//       .then(res => {
//         dispatch({
//           type: CREATE_PLAYER
//         });
//         console.log("User created successfully");
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

//   export const createTeam = team => dispatch => {
//     return axios
//       .post("http://localhost:5000/api/cricketalpha/user/new", team)
//       .then(res => {
//         dispatch({
//           type: CREATE_TEAM
//         });
//         console.log("User created successfully");
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };
export const createTeam = team => dispatch => {
  return axios
    .post("http://localhost:5000/apis/admin/team/new", team, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(res => {
      dispatch({
        type: CREATE_TEAM
      });
      alert("Added one team successfully");
      dispatch(getAllTeams());
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ERROR_TYPE, payload: err.response.data.message });
      console.log(err.response.data.message);
    });
};

export const createPlayer = player => dispatch => {
  return axios
    .post("http://localhost:5000/apis/admin/player/new", player, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(res => {
      dispatch({
        type: CREATE_PLAYER
      });
      alert("Added one player successfully");
      dispatch(getPlayers());
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ERROR_TYPE, payload: err.response.data.message });
      console.log(err.response.data.message);
    });
};

export const editPlayer = player => dispatch => {
  return axios
    .put(
      "http://localhost:5000/apis/admin/editplayer/" + player.player_id,
      player,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    )
    .then(res => {
      dispatch({
        type: EDIT_PLAYER
      });

      alert("Edited Successfully");
    })
    .catch(err => {
      console.log(err);
    });
};

export const editTeam = team => dispatch => {
  return axios
    .put("http://localhost:5000/apis/admin/editteam/" + team.team_id, team, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(res => {
      dispatch({
        type: EDIT_TEAM
      });
      // dispatch(getUsers());
      alert("Edited Successfully");
    })
    .catch(err => {
      console.log(err);
    });
};

export const deletePlayer = player_id => dispatch => {
  return axios
    .delete("http://localhost:5000/apis/admin/deleteplayer/" + player_id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(res => {
      dispatch({
        type: DELETE_PLAYER
      });
      dispatch(getPlayers());
      // alert("Player Deleted Successfully");
    })
    .catch(err => {
      console.log(err);
    });
};

export const deleteTeam = team_id => dispatch => {
  return axios
    .delete("http://localhost:5000/apis/admin/deleteteam/" + team_id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(res => {
      dispatch({
        type: DELETE_TEAM
      });
      dispatch(getAllTeams());
      // alert("Team Deleted Successfully");
    })
    .catch(err => {
      console.log(err);
    });
};

export const getPlayerSearch = searchString => dispatch => {
  return axios
    .get("http://localhost:5000/apis/admin/search/" + searchString)
    .then(res => {
      dispatch({
        type: GET_PLAYER_SEARCH,
        payload: res.data.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const getTeamSearch = searchString => dispatch => {
  return axios
    .get("http://localhost:5000/apis/admin/searchteam/" + searchString)
    .then(res => {
      dispatch({
        type: GET_TEAM_SEARCH,
        payload: res.data.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};
