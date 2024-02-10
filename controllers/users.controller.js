import express from "express";
import { getUsers } from "../services/users.service.js";

const router = express.Router();

//gets all users
router.get("/", async (req, res) => {
  const users = await getUsers();

  res.status(200).send({
    status: "Success",
    message: `Successfully retrieved users ${JSON.stringify(users)}`,
  });

  //create user
  //gets specific user by email
  //edit user
  //delete user
});

export default router;
