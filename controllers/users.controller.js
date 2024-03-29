import express from "express";
const router = express.Router();

import { 
  getUsers,
  createUser,
  deleteUser,
  getUserByEmail,
  updateUser, 
} from "../services/users.service.js";

//gets all users
router.get("/", async (req, res) => {
  const users = await getUsers();

  res.status(200).send({
    status: "Success",
    message: `Successfully retrieved users ${JSON.stringify(users)}`,
  });
});

//create user
router.post("/", async (req,res) => {
  try {
    const {email, password, firstName, lastName, phoneNum, city, postalCode} = req?.body;
    if (!email){
      throw new Error("Missing requester paramter: email");
    }

    const userData = {
      email,
      password,
      firstName,
      lastName,
      phoneNum,
      city,
      postalCode,
    };

    const newUser = await createUser(userData);
    res.status(201).send({
      status: "Success",
      message: `New User Sucessfully created with email and password: ${newUser}`,
    });
  } catch (error) {
    res.status(500).send({
      status: "Error",
      message: "Failed to create user",
      error: `${error.message} req: ${req.body.name}`, 
    });
  }
});

//gets specific user by email
router.get("/:userEmail", async(req, res) => {
  try{
    const { userEmail } = req?.params;
    if (!userEmail) {
      throw new Error("Email is a required param");
    }
    const user = await getUserByEmail(userEmail); //Create this method in user.services

    res.status(200).send({
      status: "Success",
      user,
    });
  } catch (error) {
    res.status(404).send({
      status: "Error",
      message: error.message,
    });
  }
});

//edit user
router.put("/:id", async (req, res) => {
  try {
    const userID = req.params.id;
    const {email, password, firstName, lastName, phoneNum, city, postalCode} = req.body;
    const updatedData = {
      email,
      password,
      firstName,
      lastName,
      phoneNum,
      city,
      postalCode,
    };
    const resultMessage = await updateUser(userID, updatedData);
    res.status(200).send({
      status: "Success",
      message: resultMessage,
    });
  } catch (error) {
    res.status(500).send({
      status: "Error",
      message: error.message,
    });
  }
});

//delete user
router.delete("/:userEmail", async (req, res) => {
  try{
    const useremail = req.params.id;
    const result = await deleteUser(userEmail);
    res.status(200).send({
      status: "Success",
      message: result,
    });
  } catch (error) {
    res.status(500).send({
      status: "Error",
      message: "Failed to delete battery",
      error: error.message,
    });
  }
});

export default router;
