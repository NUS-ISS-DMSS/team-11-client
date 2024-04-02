import api from "./settingApi";

export const getAllSpaces = async () => {
  try {
    const response = await api.get("/spaceAmenities/getAllSpaces");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch spaces:", error);
    throw error;
  }
};
