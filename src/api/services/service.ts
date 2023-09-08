import { BASE_URL } from "api/config";
import axios from "axios";

export const fetchData = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};
