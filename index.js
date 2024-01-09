// required imports
const express = require("express");
const cors = require("cors");

// controller imports
const usersController = require("./controllers/users.controller");
const batteriesController = require("./controllers/batteries.controller");

// initializations
const port = 3000;
const app = express();
app.use(cors());

app.use("/users", usersController);
app.use("/batteries", batteriesController);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
