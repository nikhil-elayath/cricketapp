const jwt = require("jsonwebtoken");
const config = require("config");
const jwtPrivateKey = config.get("jwtPrivateKey");
var LocalStorage = require("node-localstorage").LocalStorage;
localStorage = new LocalStorage("./storage");
module.exports = payload => {
  const token = jwt.sign(payload, jwtPrivateKey, {
    expiresIn: "30s"
  });
  return token;
};
