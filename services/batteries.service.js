import firebase from "../firebase.js";

const db = firebase.db;

export async function getBatteries() {
  const batteriesCollection = firebase.collection(db, "batteries");
  const batteriesSnapshot = await firebase.getDocs(batteriesCollection);
  const batteries = batteriesSnapshot.docs.map((doc) => doc.data());
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
    console.log("Creating battery with data:", batteryData);

    //TODO: check if battery has the same name

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
        firebase.where("batteryId", "==", batteryRef)
      )
    );
    console.log("Query Snapshot:", querySnapshot.docs.length);
    const measurements = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        capacitance: data.capacitance || null,
        current: data.current || null,
        energyConsumption: data.energyConsumption || null,
        energyGeneration: data.energyGeneration || null,
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
