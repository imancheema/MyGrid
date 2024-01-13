import firebase from "../firebase.js";

const db = firebase.db;

export async function getUsers() {
  const usersCollection = firebase.collection(db, "users");
  const usersSnapshot = await firebase.getDocs(usersCollection);
  const users = usersSnapshot.docs.map((doc) => doc.data());
  return users;
}
