import axios from "axios";
import { Schedule } from "../models/schedule";

const BASE_URL = `http://localhost:3000`;

export const getScheduleByLoadID = async(id: String) => {
    try {
      const response = await axios.get(`${BASE_URL}/schedules/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(`Unable to fetch schedules from user: ${error}`);
    }
  };

  export const createSchedule = async(loadId: string, scheduleData: Schedule) => {
    try {
      
      const response = await axios.post(`${BASE_URL}/schedules/${loadId}`, scheduleData)
      return response;
    } catch (error) {
      throw new Error(`Unable to add schedules, error: ${error}`)
    }
  }

  export const deleteSchedule = async(id: String) => {
    try {
      const response = await axios.delete(`${BASE_URL}/schedules/${id}`, 
      {
        data: { id }
      });
      return response;
    } catch (error) {
      throw new Error(`Unable to delete schedule: ${error}`);
    }
  };