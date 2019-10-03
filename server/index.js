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
const matches = require("./routes/apis/matches");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: false
	})
);
<<<<<<< HEAD
app.use('/api/matches', matches);
app.use((err, req, res, next) => {
  next(error);
})

const port = process.env.port || 5000;
if (process.env.NODE_ENV !== "test")
  app.listen(port, () => console.log(`Server is listig on port ${port}`));
=======

app.use("/apis", home);
app.use("/api/cricketalpha/user", user);
app.use("/apis/PlayerInfo", player);
app.use("/cricketalpha", team);
app.use("/api/matches", matches);

app.use(error);

const port = process.env.port || 5000;
if (process.env.NODE_ENV !== "test")
	app.listen(port, () => console.log(`Server is listening on port ${port}`));
>>>>>>> 1a788a270023b2a18fae9ca644f695cc95dc9de0

module.exports = app;


