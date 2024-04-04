import { orderBy } from "firebase/firestore/lite";
import firebase from "../firebase.js";

const db = firebase.db;

export async function getBatteries() {
  const batteriesCollection = firebase.collection(db, "batteries");
  const batteriesSnapshot = await firebase.getDocs(batteriesCollection);
  const batteries = batteriesSnapshot.docs.map(async (doc) => {
    const battery = doc.data();
    const batteryRef = firebase.doc(db, "batteries", battery.batteryId);
    // Get measurements for each battery
    const measurementsCollection = firebase.collection(db, "measurements");
    const measurementsQuery = firebase.query(
      measurementsCollection,
      firebase.where("batteryId", "==", batteryRef), // Assuming batteryId is the field that connects measurements to batteries
      orderBy("timestamp", "desc")
    );
    const measurementsSnapshot = await firebase.getDocs(measurementsQuery);
    const measurements = measurementsSnapshot.docs.map((doc) => doc.data());
    battery.measurements = measurements;
    return battery;
  });

  return Promise.all(batteries);
}

export async function getBatteriesOld() {
  // Get batteries
  const batteriesCollection = firebase.collection(db, "batteries");
  const batteriesSnapshot = await firebase.getDocs(batteriesCollection);
  const batteries = batteriesSnapshot.docs.map((doc) => {
    const battery = doc.data();
    const batteryRef = firebase.doc(db, "batteries", battery.batteryId);
    // Get measurements for each battery
    const measurementsCollection = firebase.collection(db, "measurements");
    const measurementsQuery = firebase.query(
      measurementsCollection,
      firebase.where("batteryId", "==", batteryRef),
      orderBy("timestamp", "desc")
    );
    // const measurementsSnapshot = await firebase.getDocs(measurementsQuery);
    // const measurements = measurementsSnapshot.docs.map((doc) => doc.data());
    firebase.getDocs(measurementsQuery).then((measurementsSnapshot) => {
      const measurements = measurementsSnapshot.docs.map((doc) => {
        return doc.data();
      });
      battery.measurements = measurements;
      return battery;

      //   const measurementsCollection = firebase.collection(db, "measurements");
      //   const batteryRef = firebase.doc(db, "batteries", doc.data().batteryId);
      //   const querySnapshot = await firebase.getDocs(
      //     firebase.query(
      //       measurementsCollection,
      //       firebase.where("batteryId", "==", batteryRef),
      //       orderBy("timestamp", "desc")
      //     )
      //   );
      //   console.log("---CHECK", querySnapshot);
      //   console.log("Query Snapshot:", querySnapshot.docs.length);
      //   const measurements = querySnapshot.docs.map((doc) => {
      //     const data = doc.data();
      //     return {
      //       id: doc.id,
      //       capacitance: data.capacitance || null,
      //       current: data.current || null,
      //       energyConsumption: data.energyConsumption || null,
      //       energyGeneration: data.energyGeneration || null,
      //       stateOfCharge: data.stateOfCharge || null,
      //       stateOfHealth: data.stateOfHealth || null,
      //       temperature: data.temperature || null,
      //       timestamp: data.timestamp || null,
      //       voltage: data.voltage || null,
      //     };
      //   });

      //   console.log("---MEASUREMETN", measurements);
    });
    return battery;
  });
  return batteries;
}

export async function getBatteryById(batteryId) {
  try {
    const batteryReference = firebase.doc(db, "batteries", batteryId); // location of where the battery we are looking for is
    const batterySnapshot = await firebase.getDoc(batteryReference); //the actual battery object
    if (!batterySnapshot.exists()) {
      throw new Error("Battery not found");
    }
    return { id: batterySnapshot.id, ...batterySnapshot.data() };
  } catch (error) {
    throw new Error("Failed to get battery: " + error.message);
  }
}

export async function createBattery(batteryData) {
  try {
    const batteriesCollection = firebase.collection(db, "batteries");
    const batteryRef = firebase.doc(batteriesCollection);
    await firebase.setDoc(batteryRef, {
      name: batteryData.name,
      type: batteryData.type || null,
      description: batteryData.description || null,
      batteryId: batteryRef.id,
    });
    return batteryRef.id;
  } catch (error) {
    console.error("Error creating battery:", error);
    throw new Error(error.message);
  }
}

export async function updateBattery(batteryId, updatedData) {
  try {
    const batteryRef = firebase.doc(db, "batteries", batteryId);
    await firebase.updateDoc(batteryRef, updatedData);
    return "Battery updated successfully";
  } catch (error) {
    throw new Error("Failed to update battery: " + error.message);
  }
}

export async function deleteBattery(batteryId) {
  try {
    const batteryRef = firebase.doc(db, "batteries", batteryId);
    await firebase.deleteDoc(batteryRef);
    return true;
  } catch (error) {
    throw new Error("Failed to delete battery: " + error.message);
  }
}

export async function getMeasurementsByBatteryId(batteryId) {
  try {
    console.log("Battery ID:", batteryId);
    const measurementsCollection = firebase.collection(db, "measurements");
    const batteryRef = firebase.doc(db, "batteries", batteryId);
    const querySnapshot = await firebase.getDocs(
      firebase.query(
        measurementsCollection,
        firebase.where("batteryId", "==", batteryRef),
        orderBy("timestamp", "desc")
      )
    );
    console.log("Query Snapshot:", querySnapshot.docs.length);
    const measurements = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        capacitance: data.capacitance || null,
        chargeRate: data.chargeRate || null,
        current: data.current || null,
        dischargeRate: data.dischargeRate || null,
        powerConsumption: data.energyConsumption || null,
        powerGeneration: data.energyGeneration || null,
        stateOfCharge: data.stateOfCharge || null,
        stateOfHealth: data.stateOfHealth || null,
        temperature: data.temperature || null,
        timestamp: data.timestamp || null,
        voltage: data.voltage || null,
      };
    });
    return measurements;
  } catch (error) {
    throw new Error("Failed to get measurements: " + error.message);
  }
}
