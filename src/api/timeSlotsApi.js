import api from "./settingApi";

export const createTimeSlots = async (timeSlots) => {
    try {
      const allTimeSlots = await api.get("/timeSlot/getAllTimeSlots");
      const existingTimeSlot = allTimeSlots.data.find(
        (slot) =>
          slot.start_time === timeSlots.start_time &&
          slot.end_time === timeSlots.end_time
      );
  
      if (existingTimeSlot) {
        return existingTimeSlot.id;
      } else {
        await api.post("/timeSlot/createTimeSlots", timeSlots);
      }
    } catch (error) {
      console.error("Failed to create or fetch time slots:", error);
      throw error;
    }
  };
