const express = require("express");
const router = express.Router();
const pg = require("pg-promise")();
const config = require("config");
const postgresURL = config.get("postgresURL");
const mailId = config.get("mailId");
const mailPass = config.get("mailPass");
const db = pg(postgresURL);
// const db = pg("postgres://postgres:root@localhost:5432/cricketalpha");
const bcrypt = require("bcrypt");
const Validation = require("../../joi-validation/validation");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
global.random = Math.floor(Math.random() * 5999 + 2999);
var generateToken = require("../../middleware/generateToken");
var auth = require("../../middleware/authorize");

router.get("/user/all", async (req, res) => {
  const result = await db.any("select * from users");
  res.status(200).json({
    status: 200,
    data: result,
    message: "Retrived all user_info successfully"
  });
});
//error handling
router.get("/:user_id", async (req, res, next) => {
  let id = req.params.user_id;
  try {
    const result = await db.any(`select * from users where user_id='${id}'`);
    if (!result)
      throw {
        statusCode: 404,
        customMessage: "Cannot find user with the given id"
      };
    res.status(200).json({
      status: 200,
      data: result,
      message: "Retrieved 1 user successfully"
    });
  } catch (error) {
    next(error);
  }
});

router.post("/verify_email", async (req, res, next) => {
  try {
    const email = await db.any(
      `select user_email from users where user_email='${req.body.user_email}'`
    );
    if (email.length != 0) {
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: mailId, // generated ethereal user
          pass: mailPass // generated ethereal password
        }
      });

      // send mail with defined transport object
      let info = transporter.sendMail({
        from: "nodeMailerTest0117@gamil.com", // sender address
        to: req.body.user_email, // list of receivers
        subject: "OTP Verfication ", // Subject line
        html: "<b>Dont share your OTP :  </b><b>" + random + "</b>"
      });
      res.status(200).json({
        status: 200,

        message: "Email verified OTP send successfully"
      });
    } else {
      res.status(404).json({
        status: 404,
        meassage: "Unsuccessfull "
      });
    }
  } catch (error) {
    next(error);
  }
});

router.post("/verify_otp", async (req, res, next) => {
  try {
    let otp = req.body.otp;
    if (otp == random) {
      const salt = await bcrypt.genSalt(10);
      password = await bcrypt.hash(req.body.user_password, salt);
      if (password != 0) {
        const result = await db.any(
          `update users set user_password ='${password}' where user_email='${req.body.user_email}'`
        );
        res.status(200).json({
          status: 200,
          data: result,
          message: "Password update and otp verified successfully"
        });
      } else {
        res.status(400).json({
          status: 400,
          data: result,
          message: "wrong email"
        });
      }
      // res.status(200).json({
      //   status: 200,
      //   // data: ,
      //   message: "otp verified successfully"
      // });
    } else {
      res.status(400).json({
        status: 400,
        // data: ,
        message: "otp invalid"
      });
    }
  } catch (error) {
    next(error);
  }
});
// router.post("/verify_otp", async (req, res, next) => {
//   let otp = req.body.otp;
//   if (otp == random) {
//     res.status(200).json({
//       status: 200,
//       // data: ,
//       message: "otp verified successfully"
//     });
//   } else {
//     res.status(400).json({
//       status: 400,
//       // data: ,
//       message: "otp invalid"
//     });
//   }
// });

// router.put("/new_password", async (req, res, next) => {
//   const salt = await bcrypt.genSalt(10);
//   password = await bcrypt.hash(req.body.user_password, salt);
//   if (password != 0) {
//     const result = await db.any(
//       `update users set user_password ='${password}' where user_email='${req.body.user_email}'`
//     );
//     res.status(200).json({
//       status: 200,
//       data: result,
//       message: "Password update"
//     });
//   } else {
//     res.status(400).json({
//       status: 400,
//       data: result,
//       message: "Error"
//     });
//   }
// });
router.post("/login", async (req, res, next) => {
  try {
    console.log(req.body.user_email);
    const db_result = await db.any(
      `select * from users where user_email = '${req.body.user_email}'`
    );
    if (db_result.length != 1)
      throw {
        statusCode: 404,
        errorMessage: "Email or Password is invalid"
      };

    let compare_result = await bcrypt.compare(
      req.body.user_password,
      db_result[0].user_password
    );

    if (!compare_result)
      throw {
        statusCode: 404,
        errorMessage: "Email or Password is invalid"
      };

    let expiresIn = "2h";
    if (db_result[0].isadmin == 1) expiresIn = "4h";
    let userDetails = {
      user_id: db_result[0].user_id,
      user_email: db_result[0].user_email,
      user_name: db_result[0].user_name,
      isAdmin: db_result[0].isadmin
    };
    token = generateToken(userDetails, expiresIn);
    console.log(token);

    res.status(200).json({
      status: 200,
      successMessage: "Logged in successful",
      token: token,
      loggedInUser: userDetails
    });
  } catch (error) {
    next(error);
  }
});
// router.put("/new_password", async (req, res, next) => {
//   const salt = await bcrypt.genSalt(10);
//   password = await bcrypt.hash(req.body.user_password, salt);
//   if (password != 0) {
//     const result = await db.any(
//       `update user_info set user_password ='${password}' where user_email='${req.body.user_email}'`
//     );
//     res.status(200).json({
//       status: 200,
//       data: result,
//       message: "Password update"
//     });
//   } else {
//     res.status(400).json({
//       status: 400,
//       data: result,
//       message: "Error"
//     });
//   }
// });
// });
router.post("/new", async (req, res, next) => {
  try {
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(req.body.user_password, salt);
    const user_info = {
      user_name: req.body.user_name,
      user_email: req.body.user_email,

      user_password: req.body.user_password,
      isadmin: req.body.isadmin
    };
    Validation(user_info).then(async () => {
      const result = await db.any(
        `insert into users(user_name,isadmin,user_email,user_password) values ( '${req.body.user_name}','${req.body.isadmin}','${req.body.user_email}','${password}') returning user_id`
      );
      // if (!result)
      //   throw {
      //     statusCode: 404,
      //     customMessage: "invalid input"
      //   };
      res.status(200).json({
        status: 200,
        data: result,
        message: "Created 1 user successfully"
      });
    });
  } catch (error) {
    next(error);
    return true;
  }
});

router.delete("/delete/:user_id", async (req, res, next) => {
  const id = req.params.user_id;
  try {
    var result = await db.any(`delete from users where user_id='${id}'`);
    if (!result)
      throw {
        statusCode: 404,
        message: "Cannot find user with the given id"
      };
    res.status(200).json({
      status: 200,
      data: result,
      message: "Deleted 1 user info successfully"
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
