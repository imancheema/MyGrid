import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  addDoc,
  deleteDoc,
  query,
  where,
  setDoc,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCq46pXc4XJiPLrSIfp_U-mmXoagxWIlZ0",
  authDomain: "battery-storage-optimization.firebaseapp.com",
  projectId: "battery-storage-optimization",
  storageBucket: "battery-storage-optimization.appspot.com",
  messagingSenderId: "815533661849",
  appId: "1:815533661849:web:43e1c6f4b5eb9df3206208",
  measurementId: "G-06GN8HN986",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);

const firebase = {
  db,
  auth,
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  addDoc,
  deleteDoc,
  query,
  where,
  setDoc,
};

export default firebase;
