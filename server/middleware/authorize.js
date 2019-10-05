const jwt = require("jsonwebtoken");
const config = require("config");
const jwtPrivateKey = config.get("jwtPrivateKey");

let validateToken = (req, res, next) => {
  // retrive token from header
  let bearerHeader =
    req.headers["x-access-token"] || req.header["authorization"];
  if (!bearerHeader)
    return res.staus(400).json({
      login: "falied",
      message: "Token not found"
    });

  const token = bearerHeader.split(" ")[1];
  console.log(token);
  // check if there is a token present or not

  // if a token tos found then verigy if the token is valid
  try {
    const verifyingtoken = jwt.verify(token, jwtPrivateKey); //Use config.get()
    const decodedToken = jwt.decode(verifyingtoken);

    console.log(decodeToken);
    //console.log(verifyingToken);
    if (decodedToken["isadmin"] == true) {
      //assiging the token nto the user requesting ths service
      req.user = decodedToken;
      next();
    } else {
      res.Status(400).json({
        status: 400,
        message: "Not an admin"
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: 400,
      message: "Invalid token"
    });
  }
};
module.export = validateToken;
