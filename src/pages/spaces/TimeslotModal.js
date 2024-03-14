import React, { useState } from "react";
import { Modal, Row, Col, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function TimeslotModal(props) {
  const [checkboxQuery, setCheckboxQuery] = useState([]);
  const timeSlots = [];

  function getUrlParams() {
    var params = {};
    var queryString = window.location.search.substring(1);
    var pairs = queryString.split("&");
    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i].split("=");
      params[pair[0]] = decodeURIComponent(pair[1]);
    }
    return params;
  }

  var urlParams = getUrlParams();
  var userId = urlParams["id"];

  function convertTo24Hour(time12h) {
    const [time, modifier] = time12h.split(" ");

    let [hours, minutes] = time.split(":");
    if (hours === "12") {
      hours = "00";
    }
    if (modifier === "PM") {
      hours = parseInt(hours, 10) + 12;
      if (hours === 24) {
        hours = 12;
      }
    }
    return `${String(hours).padStart(2, "0")}:${minutes}`;
  }

  function convertTo12Hour(time) {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours %= 12;
    hours = hours || 12;
    return `${hours}:${minutes < 10 ? "0" : ""}${minutes} ${ampm}`;
  }

  function generateTimeSlots() {
    const totalHours = props.operatingHours.split(" - ");
    const startTime = convertTo24Hour(totalHours[0]);
    const endTime = convertTo24Hour(totalHours[1]);

    const currentDate = new Date();
    const startDate = new Date(currentDate.toDateString() + " " + startTime);
    const endDate = new Date(currentDate.toDateString() + " " + endTime);

    let currentTime = startDate;

    while (currentTime < endDate) {
      const nextHour = new Date(currentTime);
      if (nextHour < endDate) {
        nextHour.setMinutes(nextHour.getMinutes() + 30);
      } else {
        nextHour.setHours(nextHour.getHours() + 1);
      }

      const startTime12Hour = convertTo12Hour(currentTime);
      const endTime12Hour = convertTo12Hour(nextHour);

      timeSlots.push(`${startTime12Hour}-${endTime12Hour}`);

      currentTime = nextHour;
    }
    return timeSlots;
  }

  const handleChange = (value, event) => {
    if (event.target.checked) {
      setCheckboxQuery((prevValues) => [...prevValues, value]);
    } else {
      setCheckboxQuery((prevValues) =>
        prevValues.filter((item) => item !== value)
      );
    }
  };

  generateTimeSlots();
  console.log(checkboxQuery);

  return (
    <div>
      <Modal
        size="lg"
        show={props.modalshow}
        onHide={props.handleClose}
        centered
      >
        <Modal.Header closeButton className="border-0">
          <h3 className="w-100 d-flex justify-content-center">
            Select A Timeslot
          </h3>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              {timeSlots.map((timeSlot, index) => (
                <Col
                  key={index}
                  xs={3}
                  className="d-flex justify-content-center align-items-center p-2"
                >
                  <div>
                    <input
                      type="checkbox"
                      name={index}
                      onChange={(e) => handleChange(timeSlot, e)}
                    />{" "}
                    {timeSlot}
                  </div>
                </Col>
              ))}
            </Row>
            <Row>
              <div className="d-flex justify-content-center align-items-center mt-4">
                <Link to={`/bookings?id=${userId}`}>
                  <Button variant="primary">Confirm Timeslot</Button>
                </Link>
              </div>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
}
