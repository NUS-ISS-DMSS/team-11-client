import api from "./settingApi";

export const getAllReservations = async (userID) => {
  try {
    const response = await api.get(`/reservation/getAllReservations?userID=${userID}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch reservation:", error);
    throw error;
  }
};

export const createReservation = async (reservationData) => {
  try {
    const response = await api.post("/reservation/createReservation", reservationData);
    return response.data;
  } catch (error) {
    console.error("Failed to create reservation:", error);
    throw error;
  }
};

export const deleteListing = async (listingId) => {
  try {
    const response = await api.post("/reservation/deleteListing", listingId, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error("Failed to delete reservation:", error);
    throw error;
  }
};