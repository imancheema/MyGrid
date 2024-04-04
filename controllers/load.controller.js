import express from "express";
const router = express.Router();

import {
  getLoads,
  getLoadsByUserId,
  createLoad,
  updateLoad,
  deleteLoad,
} from "../services/loads.service.js";

// get all loads
router.get("/", async (req, res) => {
  const loads = await getLoads();
  res.status(200).send({
    status: "Success",
    message: `Successfully retrieved loads ${JSON.stringify(loads)}`,
    loads,
  });
});

// get load by id
router.get("/:UserID", async (req, res) => {
  try {
    const { UserID } = req?.params;
    if (!UserID) {
      throw new Error("UserId is a required param");
    }
    const loads = await getLoadsByUserId(UserID);

    res.status(200).send({
      status: "Success",
      loads,
    });
  } catch (error) {
    res.status(404).send({
      status: "Error",
      message: error.message,
    });
  }
});

// create a load
router.post("/:UserID", async (req, res) => {
  try {
    const { Name, Type, Powerusage, batteryId } = req?.body;
    const { UserID } = req?.params;
    if (!Name) {
      throw new Error("Missing request parameter: Name");
    }

    const LoadData = {
      Name,
      Type,
      Powerusage,
      batteryId,
    };
    const LoadId = await createLoad(LoadData, UserID);
    res.status(201).send({
      status: "Success",
      message: `Load created with ID: ${LoadId}`,
    });
  } catch (error) {
    res.status(500).send({
      status: "Error",
      message: "Failed to create new load",
      error: `${error.message} req: ${req.body.name}`,
    });
  }
});

// update load details
router.patch("/:userId", async (req, res) => {
  try {
    const UserId = req.params.userId;
    const { Name, Type, Powerusage, batteryId } = req.body;

    const updatedData = {
      Name,
      Type,
      Powerusage,
      batteryId,
    };
    const resultMessage = await updateLoad(UserId, {
      Name,
      Powerusage,
      Type,
      batteryId,
    });
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

// delete load
router.delete("/:LoadId", async (req, res) => {
  try {
    const LoadId = req.params.LoadId;
    const result = await deleteLoad(LoadId);
    res.status(200).send({
      status: "Success",
      message: result,
    });
  } catch (error) {
    res.status(500).send({
      status: "Error",
      message: "Failed to delete load",
      error: error.message,
    });
  }
});

export default router;
