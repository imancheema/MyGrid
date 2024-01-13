import axios from "axios";

const BASE_URL = `http://localhost:3000`;

interface ICreateBattery {
  name: string,
  type?: string, 
  description?: string,
}

export const createBattery = async({name , type, description}: ICreateBattery) => {
  try {
    const response = await axios.post(`${BASE_URL}/batteries/`, {
      name,
      type,
      description
    });
    return response;
  } catch (error) {
    throw new Error(`Unable to create battery: ${error}`);
  }
};

export const getAllBatteries = async() => {
  try {
    const response = await axios.get(`${BASE_URL}/batteries/`);
    return response.data;
  } catch (error) {
    throw new Error(`Unable to fetch all batteries: ${error}`);
  }
};
