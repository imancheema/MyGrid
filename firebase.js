const { initializeApp } = require("firebase/app");
const {
  getFirestore,
  collection,
  getDocs,
} = require("firebase/firestore/lite");

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
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

module.exports.db = db;
module.exports.collection = collection;
module.exports.getDocs = getDocs;
