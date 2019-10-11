const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = (req, res, next) => {
  try {
    console.log(req.headers);
    let returnURL = req.headers["referer"];
    console.log("URL : " + returnURL.split("/")[3]);
    let token = req.headers["x-auth-token"] || req.headers["authorization"];

    if (returnURL.split("/")[3]) {
      console.log(token);
      if (!token)
        throw {
          statusCode: 404,
          customMessage: "No token found"
        };

      token = token.split(" ")[1];
      console.log(token);

      let verifyToken = jwt.verify(token, config.get("jwtPrivateKey"));
      console.log(verifyToken.isAdmin);
      if (returnURL.split("/")[3] != "product") {
        if (!verifyToken.isAdmin) {
          throw {
            statusCode: 404,
            customMessage: "Not admin"
          };
        }
      }
    }

    next();
  } catch (error) {
    next(error);
  }
};
