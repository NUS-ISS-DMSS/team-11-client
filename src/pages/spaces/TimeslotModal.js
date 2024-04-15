import React, { useState } from "react";
import { Modal, Row, Col, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { createTimeSlots } from "../../api/timeSlotsApi";
import { createReservation } from "../../api/reservationsApi";
import ReservationDataBuilder from "./ReservationBuilder";

export default function TimeslotModal(props) {
  const navigate = useNavigate();
  const [checkboxQuery, setCheckboxQuery] = useState();
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [toggleCfm, setToggleCfm] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");

  const timeSlots = [];

  function getUrlParams() {
    return Object.fromEntries(new URLSearchParams(window.location.search));
  }

  const urlParams = getUrlParams();
  const userId = urlParams["userID"];

  function convertTo24Hour(time12h) {
    const [time, modifier] = time12h.split(" ");
    let [hours, minutes] = time.split(":");
    hours = hours === "12" && modifier === "AM" ? "00" : hours;
    hours = modifier === "PM" ? parseInt(hours, 10) + 12 : hours;
    hours = hours === 24 ? 12 : hours;
    return `${String(hours).padStart(2, "0")}:${minutes}`;
  }

  function convertTo12Hour(time) {
    let hours = time.getHours() % 12 || 12;
    const minutes = String(time.getMinutes()).padStart(2, "0");
    const ampm = time.getHours() >= 12 ? "PM" : "AM";
    return `${hours}:${minutes} ${ampm}`;
  }

  function generateTimeSlots() {
    const [startTime, endTime] = props.operatingHours
      .split(" - ")
      .map(convertTo24Hour);

    const currentDate = new Date();
    const startDate = new Date(currentDate.toDateString() + " " + startTime);
    const endDate = new Date(currentDate.toDateString() + " " + endTime);

    let currentTime = startDate;

    while (currentTime < endDate) {
      const nextHour = new Date(currentTime);
      nextHour.setHours(nextHour.getHours() + 1);

      if (nextHour >= endDate) break;

      timeSlots.push(
        `${convertTo12Hour(currentTime)}-${convertTo12Hour(nextHour)}`
      );
      currentTime = nextHour;
    }
    return timeSlots;
  }

  const handleChange = (event) => {
    const [startFullTime, endFullTime] = event.target.value.split("-");
    const startTime = startFullTime.replace(/\s?[AP]M/g, "");
    const endTime = endFullTime.replace(/\s?[AP]M/g, "");
    setSelectedOption(event.target.value);
    setCheckboxQuery({ start_time: startTime, end_time: endTime });
    console.log(checkboxQuery);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleProceed = async (event) => {
    if (checkboxQuery !== null && selectedDate !== "") {
      await createTimeSlots(checkboxQuery);
      setWarningMessage("");
      setToggleCfm(true);
    } else {
      setWarningMessage("Please select a date and timeslot");
    }
  };

  const handleSubmit = async (e) => {
    if (!checkboxQuery || !selectedDate) return;

    const timeSlotId = await createTimeSlots(checkboxQuery);

    const reservationData = new ReservationDataBuilder()
      .setReservationDate(selectedDate)
      .setSpaceId(props.spaceId)
      .setUserId(parseInt(userId))
      .setTimeSlotId(timeSlotId)
      .setStatus("Booked")
      .build();
    
    await createReservation(reservationData);
    navigate(`/bookings?userID=${userId}`);
    setToggleCfm(false);
  };

  generateTimeSlots();

  return (
    <div>
      <Modal
        size="lg"
        show={props.modalshow}
        onHide={props.handleClose}
        centered
      >
        <Modal.Header closeButton className="pb-0 border-0"></Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <h2 className="pt-0 w-100 d-flex justify-content-center">
                Select A Date
              </h2>
            </Row>
            <Row className="d-flex justify-content-center">
              <input
                type="date"
                className="form-control w-50"
                value={selectedDate}
                onChange={handleDateChange}
              />
            </Row>
            <Row>
              <h2 className="pt-4 w-100 d-flex justify-content-center">
                Select A Time Slot
              </h2>
            </Row>
            <Row>
              {timeSlots.map((timeSlot, index) => (
                <Col
                  key={index}
                  xs={3}
                  className="d-flex justify-content-center align-items-center p-2"
                >
                  <div>
                    <input
                      type="radio"
                      name={index}
                      value={timeSlot}
                      checked={selectedOption === timeSlot}
                      onChange={handleChange}
                    />{" "}
                    {timeSlot}
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
          <div className="d-flex justify-content-center align-items-center mt-4">
            {warningMessage && (
              <p style={{ color: "red", fontWeight: "bold" }}>
                {warningMessage}
              </p>
            )}
          </div>
          <div className="d-flex justify-content-center align-items-center mt-4">
            <Button variant="primary" onClick={handleProceed}>
              Proceed
            </Button>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-4">
            {toggleCfm && (
              <Button variant="primary" onClick={handleSubmit}>
                Confirm Booking
              </Button>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
