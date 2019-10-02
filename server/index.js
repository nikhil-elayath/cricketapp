const pg = require("pg-promise")();
const config = require("config");
const postgresURL = config.get("postgresURL");
const cors = require("cors");
const matches = require('./routes/apis/matches')
const error = require('./middleware/error')
const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use('/api/matches', matches);
app.use((err, req, res, next) => {
	next(error);
})

const port = process.env.port || 5000;

const port = process.env.port || 5000;
if (process.env.NODE_ENV !== "test")
	app.listen(port, () => console.log(`Server is listig on port ${port}`));

module.exports = app;


