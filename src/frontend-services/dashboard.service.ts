import axios from "axios";

const BASE_URL = `http://localhost:3000`;

interface ICreateBattery {
  name: string,
  type?: string, 
  description?: string,
}

export interface Battery {
  batteryId: string;
  name: string;
  type?: string;
  description?: string;
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

// export const getMostRecentMeasurementForBattery = async (batteryId: string) => {
//   try {
//     const response = await axios.get(`${BASE_URL}/batteries/${batteryId}/measurements`);
//     return response.data.measurements;
//   } catch (error) {
//     throw new Error(`Unable to fetch measurements for batteryId=[${batteryId}]: ${error}`);
//   }
// }


export const simulateData = async (batteryId: string, withLoad: boolean, numberOfLoads: number, userId: string) => {
  await axios.post(`${BASE_URL}/batteries/${batteryId}/simulate`, {
    withLoad,
    numberOfLoads,
    userId,
  });
}
export const deleteBattery = async(batteryId: string) => {
  try {
    const response = await axios.delete(`${BASE_URL}/batteries/${batteryId}`);
    return response.data;
  } catch (error) {
    throw new Error(`Unable to delete battery with id=[${batteryId}] ${error}`)
  }
}

export const updateBattery = async (battery: Battery) => {
  try {
    const response = await axios.put(`${BASE_URL}/batteries/${battery.batteryId}`, battery);
    return response.data;
  } catch (error) {
    throw new Error(`Unable to update battery with id=[${battery.batteryId}]: ${error}`);
  }
};

