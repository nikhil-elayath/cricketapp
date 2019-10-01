const config = require("config");
const express = require("express");
const user = require("./routes/apis/user");
const cors = require("cors");
const bodyParser = require("body-parser");
const error = require("./middleware/error");
const app = express();

const cricketPostgresURL = config.get("postgresURL");

app.use(cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use("/api/cricketalpha/user", user);
app.use(error);

const port = process.env.port || 5000;
if (process.env.NODE_ENV !== "test")
  app.listen(port, () => console.log(`Server is listening on port ${port}`));

module.exports = app;
