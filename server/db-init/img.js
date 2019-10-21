const pgp = require("pg-promise")();
const postdb = pgp("postgres://postgres:root@localhost:5432/cricketalpha");

var fs = require("fs");
var imageAsBase64 = fs.readFileSync(process.cwd() + "\\Cook.jpg", "base64");

try {
  postdb.any(
    `update player set player_image='${imageAsBase64}'where player_id=166`
  );
  console.log("inserted");
} catch (err) {
  console.log(err);
}
