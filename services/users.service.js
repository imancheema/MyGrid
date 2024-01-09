const { db, collection, getDocs } = require("../firebase");

async function getUsers() {
  const usersCollection = collection(db, "users");
  const usersSnapshot = await getDocs(usersCollection);
  const users = usersSnapshot.docs.map((doc) => doc.data());
  return users;
}

module.exports = { getUsers };
