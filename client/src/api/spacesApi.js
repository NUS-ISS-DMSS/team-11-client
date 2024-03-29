import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getAllSpaces = async () => {
  try {
    const response = await api.get("/spaceAmenities/getAllSpaces");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch spaces:", error);
    throw error;
  }
};
