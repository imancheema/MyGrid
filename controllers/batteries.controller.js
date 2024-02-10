import express from "express";
const router = express.Router();

import {
  getBatteries,
  getBatteryById,
  createBattery,
  updateBattery,
  deleteBattery,
  getMeasurementsByBatteryId,
} from "../services/batteries.service.js";

// get all batteries
router.get("/", async (req, res) => {
  const batteries = await getBatteries();
  res.status(200).send({
    status: "Success",
    message: `Successfully retrieved batteries ${JSON.stringify(batteries)}`,
    batteries,
  });
});

// get battery by id
router.get("/:batteryId", async (req, res) => {
  try {
    const { batteryId } = req?.params;
    if (!batteryId) {
      throw new Error("BatteryId is a required param");
    }
    const battery = await getBatteryById(batteryId);

    res.status(200).send({
      status: "Success",
      battery,
    });
  } catch (error) {
    res.status(404).send({
      status: "Error",
      message: error.message,
    });
  }
});

// create battery
router.post("/", async (req, res) => {
  try {
    const { name, description, type } = req?.body;
    if (!name) {
      throw new Error("Missing request parameter: name");
    }

    const batteryData = {
      name,
      type,
      description,
    };

    const newBatteryId = await createBattery(batteryData);
    res.status(201).send({
      status: "Success",
      message: `Battery created with ID: ${newBatteryId}`,
    });
  } catch (error) {
    res.status(500).send({
      status: "Error",
      message: "Failed to create battery",
      error: `${error.message} req: ${req.body.name}`,
    });
  }
});

// update battery details
router.put("/:batteryId", async (req, res) => {
  try {
    const batteryId = req.params.id;
    const { name, type, description } = req.body;
    const updatedData = {
      name,
      type,
      description,
    };
    const resultMessage = await updateBattery(batteryId, updatedData);
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

// delete battery
router.delete("/:batteryId", async (req, res) => {
  try {
    const batteryId = req.params.id;
    const result = await deleteBattery(batteryId);
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

// get measurements by batteryId
router.get("/:batteryId/measurements", async (req, res) => {
  try {
    const batteryId = req.params.id;
    const measurements = await getMeasurementsByBatteryId(batteryId);
    res.status(200).send({
      status: "Success",
      measurements,
    });
  } catch (error) {
    res.status(404).send({
      status: "Error",
      message: error.message,
    });
  }
});

// get measurements by batteryId and time

// module.exports = router;
export default router;
