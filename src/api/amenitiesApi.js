import api from "./settingApi";

export const getAllAmenity = async () => {
  try {
    const response = await api.get("/amenity/getAllAmenity");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch amenity:", error);
    throw error;
  }
};
