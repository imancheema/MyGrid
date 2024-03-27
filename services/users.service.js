import firebase from "../firebase.js";

const db = firebase.db;

//Get Users
export async function getUsers() {
  const usersCollection = firebase.collection(db, "users");
  const usersSnapshot = await firebase.getDocs(usersCollection);
  const users = usersSnapshot.docs.map((doc) => doc.data());
  return users;
}

//Create User
export async function createUser(userData){
  try {
    console.log("Creating user with data:", userData);
    const usersCollection = firebase.collection(db, "users");
    const newUserRef = await firebase.addDoc(usersCollection, {
      email: userData.email,
      password: userData.password,
      firstName: userData.firstName,
      lastName: userData.lastName,
      phoneNum: userData.phoneNum,
      city: userData.city,
      postalCode: userData.postalCode,
    });
    return newUserRef.id;
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error(error.message);
  }
}

export async function getUserByEmail(userEmail){
  try{
    const userReference = firebase.doc(db, "users", userEmail);
    const userSnapshot = await firebase.getDoc(userReference);
    if (!userSnapshot.exists()) {
      throw new Error("User not found");
    }
    return { id: userSnapshot.id, ...userSnapshot.data() };
  } catch (error) {
    throw new Error("Failed to get user: " + error.message);
  }
}

export async function updateUser(userEmail, updatedData){
  try {
    const userRef = firebase.doc(db, "batteries", userEmail);
    await firebase.updateDoc(userRef, updatedData);
    return "User Info updated sucessfully";
  } catch (error) {
    throw new Error("Failed to update user info: " + error.message);
  }
}

export async function deleteUser(userEmail){
  try {
    const userRef = firebase.doc(db, "users", userEmail);
    await firebase.deleteDoc(userRef);
    return "User sucessfully deleted";
  } catch (error) {
    throw new Error("Failed to delete user: " + error.message);
  }
}