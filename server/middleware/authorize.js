const jwt = require("jsonwebtoken");
const config = require("config");

let validateToken = (req, res, next) => {
  // retrieve token from header
  const token = req.headers["x-access-token"] || req.headers["authorization"];

  //   check if there is a token present or not
  if (!token)
    return res.json({
      login: "failed",
      message: "Token not found"
    });
  // if a token is found then verify if the token is valid
  try {
    const verifyingToken = jwt.verify(token, config.get("jwtPrivateKey"));
    console.log(verifyingToken);
    // assigning the token to the user requesting the service
    req.user = verifyingToken;
    next();
  } catch (error) {
    //   if try fails catch the error
    console.log(error);
    res.json({
      status: 400,
      message: "Invalid token"
    });
  }
};

module.exports = validateToken;
