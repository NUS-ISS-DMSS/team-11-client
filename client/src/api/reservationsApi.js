import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getAllReservations = async (userID) => {
  try {
    const response = await api.get(`/reservation/getAllReservations?userID=${userID}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch reservation:", error);
    throw error;
  }
};
