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
    const newUserRef = firebase.doc(usersCollection);
    await firebase.setDoc(newUserRef, {
      email: userData.email,
      password: userData.password,
      firstName: userData.firstName,
      lastName: userData.lastName,
      phoneNum: userData.phoneNum,
      city: userData.city,
      postalCode: userData.postalCode,
      userID: newUserRef.id,
    });
    return newUserRef.id;
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error(error.message);
  }
}

export async function getUserByEmail(userEmail){
  try{
    const userCollection = firebase.collection(db, "users");
    const userSnapshot = await firebase.getDocs(userCollection);
    const user = userSnapshot.docs.map((doc) => ({...doc.data(), id:doc.id})).filter((user)=> user.email === userEmail)
    if (!user.length) {
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    throw new Error("Failed to get user: " + error.message);
  }
}

export async function updateUser(userID, updatedData){
  try {
    const userRef = firebase.doc(db, "users", userID);
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