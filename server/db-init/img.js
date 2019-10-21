const pgp = require("pg-promise")();
const postdb = pgp("postgres://postgres:root@localhost:5432/cricketalpha");

var fs = require("fs");
var imageAsBase64 = fs.readFileSync(process.cwd() + "\\2.jpg", "base64");

try {
  postdb.any(`update news set news_image='${imageAsBase64}'where news_id=2`);
  console.log("inserted");
} catch (err) {
  console.log(err);
}
