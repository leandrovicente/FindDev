const express = require("express");
const mongose = require("mongoose");
const routes = require("./routes");
const app = express();
mongose.connect(
  "mongodb+srv://leandro:leandro@leandro-x1nfl.mongodb.net/week10?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(express.json());
app.use(routes);
app.listen(3333);
