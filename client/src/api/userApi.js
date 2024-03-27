import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getAllUsers = async () => {
  try {
    const response = await api.get("/user/getAllUsers");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch users:", error);
    throw error;
  }
};



export const createUser = async (userData) => {
  try {
    const response = await api.post("/user/createUser", userData);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch users:", error);
    throw error;
  }
};
