import express from "express";
const router = express.Router();

import {
  createSchedule,
  getScheduleByLoadId,
  deleteSchedule,
} from "../services/schedules.service.js";

//Get schedule by load id
router.get("/:UserID", async (req, res) => {
  try {
    const UserID = req?.params.UserID;
    if (!UserID) {
      throw new Error("UserId is a required param");
    }
    const schedule = await getScheduleByLoadId(UserID);
    //const schedule = await getAllScheduleByUserID(UserID);
    res.status(200).send({
      status: "Success",
      schedule,
    });
  } catch (error) {
    res.status(404).send({
      status: "Error",
      message: error.message,
    });
  }
});

// create a load
router.post("/:loadID", async (req, res) => {
  try {
    const { EndRecur, End, StartRecur, Start, Dayofweek } = req?.body;
    const { loadID } = req?.params;

    const scheduleData = {
      EndRecur,
      EndTime: End,
      StartRecur,
      StartTime: Start,
      dayofweek: Dayofweek,
    };
    const LoadId = await createSchedule(scheduleData, loadID);
    res.status(201).send({
      status: "Success",
      message: `Schedule created with ID: ${LoadId}`,
    });
  } catch (error) {
    res.status(500).send({
      status: "Error",
      message: "Failed to create new schedule",
      error: `${error.message} req: ${req.body.name}`,
    });
  }
});

// delete schedule
router.delete("/:ScheduleId", async (req, res) => {
  const { ScheduleId } = req?.params;
  try {
    const result = await deleteSchedule(ScheduleId);
    res.status(200).send({
      status: "Success",
      message: result,
    });
  } catch (error) {
    res.status(500).send({
      status: "Error",
      message: "Failed to delete schedule",
      error: error.message,
    });
  }
});

export default router;
