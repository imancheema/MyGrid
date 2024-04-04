import axios from "axios";

const BASE_URL = `http://localhost:3000`;

interface ICreateLoad {
  Id: string;
  Name: string;
  Type?: string;
  Powerusage?: number;
  batteryId: string;
}

export const createLoad = async({Name , Type, Powerusage, batteryId}: ICreateLoad, Uid: String) => {
  try {
    const response = await axios.post(`${BASE_URL}/loads/${Uid}`, {
      Name,
      Type,
      Powerusage,
      batteryId,
    });
    return response;
  } catch (error) {
    throw new Error(`Unable to create load: ${error}`);
  }
};

export const editLoad = async({Name , Type, Powerusage, Id, batteryId}: ICreateLoad) => {
  try {
    const response = await axios.patch(`${BASE_URL}/loads/${Id}`, {
      Name,
      Type,
      Powerusage,
      batteryId,
    });
    return response;
  } catch (error) {
    throw new Error(`Unable to create load: ${error}`);
  }
};

export const getAllLoads = async() => {
  try {
    const response = await axios.get(`${BASE_URL}/loads/`);
    return response.data;
  } catch (error) {
    throw new Error(`Unable to fetch all loads: ${error}`);
  }
};

export const getLoadsByUserID = async(id: String) => {
  try {
    const response = await axios.get(`${BASE_URL}/loads/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Unable to fetch loads from user: ${error}`);
  }
};
export const deleteLoad = async(id: String) => {
  try {
    const response = await axios.delete(`${BASE_URL}/loads/${id}`, 
    {
      data: {id }
    });
    return response;
  } catch (error) {
    throw new Error(`Unable to delete load: ${error}`);
  }
};
