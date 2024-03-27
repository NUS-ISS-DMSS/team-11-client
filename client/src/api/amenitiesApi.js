import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getAllAmenity = async () => {
  try {
    const response = await api.get("/amenity/getAllAmenity");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch amenity:", error);
    throw error;
  }
};
