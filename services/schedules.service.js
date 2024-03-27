import { Query } from "firebase/firestore/lite";
import firebase from "../firebase.js";

const db = firebase.db;

export async function getAllScheduleByUserID(UserID) {
  try {
    const loadCollection = firebase.collection(db, "loads");
    const userRef = firebase.doc(db, "users", UserID);
    const querySnapshot = await firebase.getDocs(
      firebase.query(loadCollection, firebase.where("UserID", "==", userRef))
    );
    //Grab all loads owned by user
    const loads = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      Id: doc.id,
    }));
    //Define the loads
    let allSchedules = [];
    return loads.map(async (load, index) => {
      //For each load
      const loadRef = firebase.doc(db, "loads", load.Id);
      const scheduleCollection = firebase.collection(db, "loadschedules");
      //Grab schedule from load if schedule.loadID = loadref.
      const scheduleQuerySnapshot = await firebase.getDocs(
        firebase.query(
          scheduleCollection,
          firebase.where("loadID", "==", loadRef)
        )
      );
      const schedules = scheduleQuerySnapshot.docs.map((doc) => ({
        ...doc.data(),
        Loadname: load.Name,
      }));
      allSchedules = allSchedules.concat(schedules);

      if (index === loads.length - 1) {
        return allSchedules;
      }
    });
  } catch (error) {
    throw new Error("Failed to get query: " + error.message);
  }
}

export async function getScheduleByLoadId(LoadId) {
  try {
    const scheduleCollection = firebase.collection(db, "loadschedules");
    const loadRef = firebase.doc(db, "loads", LoadId);
    const querySnapshot = await firebase.getDocs(
      firebase.query(
        scheduleCollection,
        firebase.where("loadID", "==", loadRef)
      )
    );
    const schedules = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      Id: doc.id,
    }));
    return schedules;
  } catch (error) {
    throw new Error("Failed to get query: " + error.message);
  }
}

export async function createSchedule(ScheduleData, LoadId) {
  try {
    //TODO: check if schedules has the same name
    const loadRef = firebase.doc(db, "loads", LoadId);
    const scheduleCollection = firebase.collection(db, "loadschedules");
    const newScheduleRef = await firebase.addDoc(scheduleCollection, {
      EndRecur: ScheduleData.EndRecur,
      EndTime: ScheduleData.EndTime,
      StartRecur: ScheduleData.StartRecur,
      StartTime: ScheduleData.StartTime,
      dayofweek: ScheduleData.dayofweek,
      loadID: loadRef,
    });
    return newScheduleRef.id;
  } catch (error) {
    console.error("Error creating schedule:", error);
    throw new Error(error.message);
  }
}

export async function deleteSchedule(ScheduleId) {
  try {
    const scheduleRef = firebase.doc(db, "loadschedules", ScheduleId);
    await firebase.deleteDoc(scheduleRef);
    return "Schedule deleted successfully";
  } catch (error) {
    throw new Error("Failed to delete schedule: " + error.message);
  }
}
