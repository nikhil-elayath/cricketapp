import {
  GET_USERS,
  CREATE_USERS,
  EMAIL_VERIFICATION,
  OTP_VERIFICATION,
  RESET_PASSWORD,
  LOGIN
} from "./types";

import axios from "axios";

export const getUsers = () => dispatch => {
  return axios
    .get("http://localhost:5000/api/cricketaplha/user/all", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
    .then(res => {
      dispatch({
        type: GET_USERS,
        payload: res.data.data
      });
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    });
};

export const createUsers = users => dispatch => {
  axios
    .post("http://localhost:5000/api/cricketalpha/user/new", users)
    .then(res => {
      dispatch({
        type: CREATE_USERS
      });
      alert("User created successfully");
    })
    .catch(err => {
      console.log(err);
    });
};

export const login = (users, history) => dispatch => {
  axios
    .post("http://localhost:5000/api/cricketalpha/login", users)
    .then(res => {
      console.log(res.data.token);
      localStorage.setItem("token", res.data.data);
      history.push("/displayproducts");
      dispatch({
        type: LOGIN
      });
      console.log(res.data);
      alert("Login successful");
      // history.push("/displayusers");
    })
    .catch(err => {
      console.log(err);
      alert("Invalid Credentials");
    });
};
//me
export const otpVerify = users => dispatch => {
  axios
    .post("http://localhost:5000/api/cricketalpha/verify_otp", users)
    .then(res => {
      dispatch({
        type: OTP_VERIFICATION
      });
      console.log("OTP verify successfully !!");
      console.log("Password updated successfully !!");
      alert("New password set");
      return true;
    })
    .catch(err => {
      console.log(err);
    });
};
// export const resetPassword = users => dispatch => {
//   console.log("action", users);
//   axios
//     .put("http://localhost:5000/api/cricketalpha/new_password", users)
//     .then(res => {
//       dispatch({
//         type: RESET_PASSWORD
//       });
//       console.log("New password update successfully");
//       alert("New password set");
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };
export const otpSend = users => dispatch => {
  axios
    .post("http://localhost:5000/api/cricketalpha/verify_email", users)
    .then(res => {
      dispatch({
        type: EMAIL_VERIFICATION
      });
      console.log("otp send successfully");
    })
    .catch(err => {
      console.log(err);
    });
};
