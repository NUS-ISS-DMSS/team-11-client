import api from "./settingApi";

export const getAllUsers = async () => {
  try {
    const response = await api.get("/user/getAllUsers");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch users:", error);
    throw error;
  }
};

export const getUser = async (email, password) => {
    try {
      const response = await api.get(`/user/getUser?email=${email}&password=${password}`);
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
