import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  res.status(200).send({
    status: "Success",
    message: `Not Implemented yet`,
  });
});

// create battery
// get all batteries
// get specific battery by id
// update battery details
// delete battery
// get measurements by batteryId
// get measurements by batteryId and time

export default router;
