const express = require("express");
const player = require("./routes/apis/PlayerInfo");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use("/apis/PlayerInfo", player);

const port = process.env.port || 5000;

if (process.env.Node_ENV !== "test")
  app.listen(port, () => console.log(`Server is listening on port '${port}'`));

module.exports = app;
