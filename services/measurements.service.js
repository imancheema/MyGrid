import firebase from "../firebase.js";
import { getLoadsByUserId } from "./loads.service.js";
const db = firebase.db;

export async function addMeasurementByBatteryId(
  batteryId,
  {
    time,
    current,
    voltageConsumption,
    voltageGeneration,
    temperature,
    powerConsumption,
    powerGeneration,
    chargeRate,
    dischargeRate,
    stateOfHealth,
    stateOfCharge,
  }
) {
  try {
    console.log("Adding measurement by battery ID to database:", batteryId);

    const measurementsCollection = firebase.collection(db, "measurements");
    const measurementRef = firebase.doc(measurementsCollection);
    const batteryRef = firebase.doc(db, "batteries", batteryId);
    await firebase.setDoc(measurementRef, {
      batteryId: batteryRef,
      timestamp: time,
      current,
      voltageConsumption,
      voltageGeneration,
      temperature,
      powerConsumption,
      powerGeneration,
      chargeRate,
      dischargeRate,
      stateOfHealth,
      stateOfCharge,
    });

    console.log("Measurement added successfully.");
  } catch (error) {
    console.error("Error adding measurement by battery ID to database:", error);
    throw error; // Re-throw the caught error
  }
}

const getRandom = (min, max, precision) => {
  const value = Math.random() * (max - min) + min;
  return value.toFixed(precision) * 1;
};

export async function simulateData({ batteryId, numberOfEntries = 1 }) {
  const userId = "mv0QrbUwy9N7tCq0lyER";
  const loads = await getLoadsByUserId(userId);

  // console.log("-------loads", loadsResponse);
  const totalPowerUsage = loads.reduce(
    (accumulator, load) => accumulator + load.Powerusage,
    0
  );

  const numberOfLoads = loads.length;
  const responses = [];
  for (let i = 0; i < numberOfEntries; i++) {
    let variant = getRandom(0, 1, 2);
    let time = Date.now() - i * 60000;
    let current = getRandom(14, 15, 2) + numberOfLoads * variant;
    let voltageConsumption =
      getRandom(104, 109, 6) - numberOfLoads * variant * 2;
    let voltageGeneration =
      getRandom(104, 109, 6) - numberOfLoads * variant * 0.5;
    let temperature = getRandom(298, 301, 6) + numberOfLoads * variant;
    let powerConsumption =
      voltageConsumption * current + numberOfLoads * variant;
    let powerGeneration = voltageGeneration * current;
    let chargeRate = (powerGeneration - powerConsumption) / voltageGeneration;
    let dischargeRate =
      (powerConsumption - powerGeneration) / voltageConsumption;

    let stateOfHealth = getRandom(80, 95, 2) - numberOfLoads * variant;
    let stateOfCharge = getRandom(73, 97, 2) - numberOfLoads * variant;

    try {
      const res = await addMeasurementByBatteryId(batteryId, {
        time,
        current,
        voltageConsumption,
        voltageGeneration,
        temperature,
        powerConsumption,
        powerGeneration,
        chargeRate,
        dischargeRate,
        stateOfHealth,
        stateOfCharge,
      });
      responses.push(res);
    } catch (error) {
      console.log(
        "Unable to add simulated measurement...skipping this loop",
        error
      );
    }
  }
}
