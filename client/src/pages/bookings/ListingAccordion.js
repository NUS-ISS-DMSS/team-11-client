import React from "react";
import { Col, Accordion, Container, Row, Button } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";

export default function ListingAccordion(props) {
  const formatDate = (dateString) => {
    const parts = dateString.split("-");
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${parts[0]}-${monthNames[parseInt(parts[1], 10) - 1]}-${parts[2]}`;
  };

  function handleDelete(e, listingId) {}

  return (
    <>
      <Container>
        {props.listingArr.map((list, index) => {
          const formattedDate = formatDate(list.reservation_date);
          return (
            <div key={list.id}>
              <Accordion alwaysOpen>
                <Accordion.Item eventKey={index}>
                  <Accordion.Header>
                    <Container>
                      <Row className="align-items-center">
                        <Col className="d-none d-md-block d-lg-block d-xl-block">
                          <div>{list.id}</div>
                        </Col>
                        <Col>
                          <div>{list.space.name}</div>
                        </Col>
                        <Col>
                          <div>{formattedDate}</div>
                        </Col>
                      </Row>
                    </Container>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Container>
                      <Row>
                        <Col xs={12} sm={8} md={6} xl={3} className="mb-2">
                          <small className="text-secondary d-block">
                            Image
                          </small>
                          <img
                            className="mw-100 mh-100 rounded"
                            src={"/images/" + list.space.image}
                            alt="resImage"
                          />
                        </Col>
                        <Col xs={12} sm={8} md={6} xl={3}>
                          <small className="text-secondary">Description</small>
                          <p className="text-black">{list.space.description}</p>
                          <small className="text-secondary">Address</small>
                          <p className="text-black">
                            {`${list.space.address}`}
                          </p>
                        </Col>
                        <Col xs={12} sm={8} md={6} xl={3}>
                          <small className="text-secondary">
                            Train Station
                          </small>
                          <p className="text-black">{list.space.station}</p>
                          <small className="text-secondary">
                            Operating Hours
                          </small>
                          <p className="text-black">
                            {`${list.space.operate_hour_st} AM - ${list.space.operate_hour_et} PM`}
                          </p>
                          <small className="text-secondary">
                            Day(s) closed
                          </small>
                          <p className="text-black">{list.space.days_closed}</p>
                          <small className="text-secondary">
                            Contact Number
                          </small>
                          <p className="text-black">{list.space.contact_num}</p>
                        </Col>
                        <Col xs={12} sm={8} md={6} xl={3}>
                          <small className="text-secondary">
                            Reservation Date
                          </small>
                          <p className="text-black">{formattedDate}</p>

                          <small className="text-secondary">
                            Reservation Time Slot
                          </small>
                          <p className="text-black">
                            {" "}
                            {list.timeSlot.start_time +
                              " AM - " +
                              list.timeSlot.end_time +
                              " PM"}
                          </p>

                          <small className="text-secondary">
                            Please ensure you arrive 5-10 minutes before the
                            reservation time.
                          </small>
                        </Col>
                        <Col
                          xs={12}
                          sm={8}
                          md={6}
                          xl={3}
                          className="d-flex w-100 justify-content-end my-4"
                        >
                          <Button
                            variant="danger"
                            onClick={(e) => handleDelete(e, list._id)}
                          >
                            <Trash size={18} color="white" />
                          </Button>
                        </Col>
                      </Row>
                    </Container>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          );
        })}
      </Container>
    </>
  );
}
