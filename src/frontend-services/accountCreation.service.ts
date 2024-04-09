import axios from "axios";

const BASE_URL = `http://localhost:3000`;

interface ICreateUser {
    email: string,
    password: string, 
    firstName: string,
    lastName: string,
    phoneNum: string,
    city: string,
    postalCode: string,
}

export const updateUser = async (user: ICreateUser) => {
  try{
    const userKey = JSON.parse(sessionStorage.getItem("user") || "{}");
    const response = await axios.put(`${BASE_URL}/users/${userKey.id}`, user)
    return response.data;
  } catch (error) {
    console.log("Unable to update user profile");
    console.log(error)
  }
}

export const createUser = async({email, password, firstName, lastName, phoneNum, city, postalCode}: ICreateUser) => {
    try {
      const response = await axios.post(`${BASE_URL}/users/`, {
        email,
        password,
        firstName,
        lastName,
        phoneNum,
        city,
        postalCode,
      });
      return response;
    } catch (error) {
      throw new Error(`Unable to create user: ${error}`);
    }
  };

  export const getUserByEmail = async(email: string) => {
    try {
      const response = await axios.get(`${BASE_URL}/users/${email}`);
      return response;
    } catch (error) {
      throw new Error(`Unable to find user by email: ${error}`);
    }
  };