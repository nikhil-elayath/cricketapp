const config = require("config");
const express = require("express");
const cricketalpha = require("./routes/apis/CricketAlpha");
const cors = require("cors");
const bodyParser = require("body-parser");
const error = require("./middleware/error");
const app = express();

// const cricketPostgresURL = config.get("cricketPostgresURL");

app.use(cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use("/api/cricketalpha/", cricketalpha);
app.use(error);

const port = process.env.port || 5000;
if (process.env.NODE_ENV !== "test")
  app.listen(port, () => console.log(`Server is listening on port ${port}`));

module.exports = app;
