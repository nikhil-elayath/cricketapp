const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = () => {
  console.log(
    "Dcoded token:" +
      JSON.stringify(jwt.decode(global.returend_token, "headstrait"))
  );
  global.decode_token = jwt.decode(
    global.returned_token,
    config.get("jwtPrivateKey")
  );
  decode = decode_token["isadmin"];
  let err_message;
  jwt.verify(global.returned_token, "headstrait", (err, decoded) => {
    if (err) {
      localStorage.removeItem("token");
      console.log(err.message);
      err_meddage = err.message;
    }
  });
  return err_message;
};
