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