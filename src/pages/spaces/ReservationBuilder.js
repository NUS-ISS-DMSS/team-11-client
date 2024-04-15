export default class ReservationDataBuilder {
    constructor() {
      this.data = {};
    }

    setReservationDate(date) {
      this.data.reservation_date = date;
      return this;
    }

    setSpaceId(spaceId) {
      this.data.space = { id: spaceId };
      return this;
    }

    setUserId(userId) {
      this.data.user = { id: userId };
      return this;
    }

    setTimeSlotId(timeSlotId) {
      this.data.timeSlot = { id: timeSlotId };
      return this;
    }

    setStatus(status) {
      this.data.status = status;
      return this;
    }

    build() {
      return this.data;
    }
  }