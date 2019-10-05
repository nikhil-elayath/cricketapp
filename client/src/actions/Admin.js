import {
  GET_PLAYERS,
  GET_TEAMS,
  CREATE_PLAYER,
  CREATE_TEAM,
  EDIT_PLAYER,
  EDIT_TEAM,
  DELETE_PLAYER,
  DELETE_TEAM
} from "../Types";
import axios from "axios";
import { EDIT_PLAYER } from "./Types";

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
    .get("http://localhost:5000/api/cricketalpha/allPlayer", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
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

export const getTeams = () => dispatch => {
  console.log(localStorage.getItem("token"));
  return axios
    .get("http://localhost:5000/api/cricketalpha/allteams", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
    .then(res => {
      dispatch({
        type: GET_TEAMS,
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
  axios
    .post("http://localhost:5000/api/cricketalpha/team/new", team, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
    .then(res => {
      dispatch({
        type: CREATE_TEAM
      });
      alert("Added one team successfully");
      dispatch(getTeams());
    })
    .catch(err => {
      console.log(err);
      alert("Try Again");
    });
};

export const createPlayer = player => dispatch => {
  axios
    .post("http://localhost:5000/api/cricketalpha/player/new", player, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
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
      alert("Try Again");
    });
};

export const editPlayer = player => dispatch => {
  axios
    .put(
      "http://localhost:5000/api/cricketalpha/player/update/" +
        player.player_id,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      },
      player
    )
    .then(res => {
      dispatch({
        type: EDIT_PLAYER
      });
      dispatch(getUsers());
      alert("Updated Successfully");
    })
    .catch(err => {
      console.log(err);
    });
};

export const editTeam = team => dispatch => {
  axios
    .put(
      "http://localhost:5000/api/cricketalpha/player/update/" + team.team_id,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      },
      team
    )
    .then(res => {
      dispatch({
        type: EDIT_TEAM
      });
      dispatch(getUsers());
      alert("Updated Successfully");
    })
    .catch(err => {
      console.log(err);
    });
};

export const deletePlayer = player_id => dispatch => {
  axios
    .delete("http://localhost:5000/api/player/delete/" + player_id, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
    .then(res => {
      dispatch({
        type: DELETE_PLAYER
      });
      dispatch(getPlayers());
      alert("Player Deleted Successfully");
    })
    .catch(err => {
      console.log(err);
    });
};

export const deleteTeam = team_id => dispatch => {
  axios
    .delete("http://localhost:5000/api/player/delete/" + team_id, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
    .then(res => {
      dispatch({
        type: DELETE_TEAM
      });
      dispatch(getPlayers());
      alert("Team Deleted Successfully");
    })
    .catch(err => {
      console.log(err);
    });
};
