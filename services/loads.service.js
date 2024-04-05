import { Query } from "firebase/firestore/lite";
import firebase from "../firebase.js";

const db = firebase.db;

export async function getLoads() {
  const loadCollection = firebase.collection(db, "loads");
  const loadSnapshot = await firebase.getDocs(loadCollection);
  const loads = loadSnapshot.docs.map((doc) => ({
    ...doc.data(),
    Id: doc.id,
  }));
  return loads;
}

export async function getLoadsByUserId(UserId) {
  try {
    const loadCollection = firebase.collection(db, "loads");
    const userRef = firebase.doc(db, "users", UserId);
    const querySnapshot = await firebase.getDocs(
      firebase.query(loadCollection, firebase.where("UserID", "==", userRef))
    );
    const loads = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      Id: doc.id,
    }));
    return loads;
  } catch (error) {
    throw new Error("Failed to get query: " + error.message);
  }
}

export async function createLoad(LoadData, UserId) {
  try {
    //TODO: check if loads has the same name
    const { Name, Type, Powerusage, batteryId } = LoadData;
    const loadCollection = firebase.collection(db, "loads");
    const userRef = firebase.doc(db, "users", UserId);
    const batteryRef = firebase.doc(db, "batteries", batteryId);
    const newLoadRef = await firebase.addDoc(loadCollection, {
      Name,
      Type,
      Powerusage,
      UserID: userRef,
      battery: batteryRef,
      batteryId: batteryId,
    });
    return newLoadRef.id;
  } catch (error) {
    console.error("Error creating load:", error);
    throw new Error(error.message);
  }
}

export async function updateLoad(UserId, updatedData) {
  try {
    const loadRef = firebase.doc(db, "loads", UserId);
    const batteryRef = firebase.doc(db, "batteries", updatedData.batteryId);
    await firebase.updateDoc(loadRef, {
      ...updatedData,
      battery: batteryRef,
      batteryId: updatedData.batteryId,
    });
    return "Load updated successfully";
  } catch (error) {
    throw new Error("Failed to update load: " + error.message);
  }
}

export async function deleteLoad(LoadId) {
  try {
    const loadRef = firebase.doc(db, "loads", LoadId);
    await firebase.deleteDoc(loadRef);
    return "Load deleted successfully";
  } catch (error) {
    throw new Error("Failed to delete load: " + error.message);
  }
}
