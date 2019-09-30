const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");
const config = require("config");

const news = require("./routes/apis/news");
const error = require("./middleware/error");

app.use(bodyParser.json());
app.use(cors());
app.use(
	bodyParser.urlencoded({
		extended: false
	})
);

app.use(logger("common"));
app.use("/api/news", news);

app.use(error);

if (process.env.NODE_ENV !== "test")
	app.listen(port, () => {
		console.log(`Server listening at http://localhost:${port}`);
	});

module.exports = app;
