const pg = require("pg-promise")();
const config = require("config");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const error = require("./middleware/error");
const user = require("./routes/apis/user");
const player = require("./routes/apis/PlayerInfo");
const team = require("./routes/apis/Teams");
const home = require("./routes/apis/home");
const matches = require("./routes/apis/Matches");
const search = require("./routes/apis/Search");
const admin = require("./routes/apis/Admin");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: false
	})
);
// app.use(db);
app.use("/apis/PlayerInfo", player);
app.use("/apis/admin", admin);

app.use("/apis", home);
app.use("/api/cricketalpha/user", user);
app.use("/apis/PlayerInfo", player);
app.use("/cricketalpha", team);
app.use("/api/matches", matches);
app.use("/apis/Search", search);
//piyush
app.use("/apis/admin", admin);

app.use((err, req, res, next) => {});
app.listen(port, () => console.log(`Server is listening on port ${port}`));

module.exports = app;
