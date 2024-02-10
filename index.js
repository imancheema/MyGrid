// required imports
import express from "express";
import cors from "cors";
import "dotenv/config";

// controller imports
import usersController from "./controllers/users.controller.js";
import batteriesController from "./controllers/batteries.controller.js";

// initializations
export const port = process.env.BE_DEV_PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors());

app.use("/users", usersController);
app.use("/batteries", batteriesController);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
