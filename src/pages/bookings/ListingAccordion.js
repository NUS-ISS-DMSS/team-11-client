import React from "react";
import { Col, Accordion, Container, Row, Badge, Button } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
// import axios from "axios";
import Carouselcomponent from "../../components/Carousel";

export default function ListingAccordion(props) {

  function handleDelete(e, listingId) {
    // e.stopPropagation();
    // props.listingArr.filter(listing => listing.id !== listingId);
    // console.log(`Deleted listing ${listingId}`);

    // const config = {
    //   method: "delete",
    //   url: `https://workgowhere.herokuapp.com/private-user/delete/${id}/${listingId}`,
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // };
    // axios(config)
    //   .then(result => {
    //     console.log("Deleted successfully", result);
    //     window.location.reload(true);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }

  return (
    <>
      <Container>
        {props.listingArr.map((list, index) => {
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
                          <div>{list.name}</div>
                        </Col>
                        <Col>
                          <div>{list.createdAt}</div>
                        </Col>
                        <Col className="d-none d-md-block d-lg-block d-xl-block">
                          <h5 className="m-0">
                            <Badge bg="success">Live</Badge>
                          </h5>
                        </Col>
                      </Row>
                    </Container>
                  </Accordion.Header>
                  {/* Accordion content */}
                  <Accordion.Body>
                    <Container>
                      <Row>
                        <Col xs={12} sm={8} md={6} xl={3} className="mb-2">
                          <small className="text-secondary d-block">
                            Images
                          </small>
                          <Carouselcomponent images={list.images} />
                        </Col>
                        <Col xs={12} sm={8} md={6} xl={3}>
                          <small className="text-secondary">Description</small>
                          <p className="text-black">{list.description}</p>
                          <small className="text-secondary">Address</small>
                          <p className="text-black">
                            {`${list.address}`}
                          </p>
                        </Col>
                        <Col xs={12} sm={8} md={6} xl={3}>
                          <small className="text-secondary">Train Station</small>
                          <p className="text-black">{list.station}</p>
                          <small className="text-secondary">
                            Operating Hours
                          </small>
                          <p className="text-black">
                            {`${list.operatingHours.start} AM - ${list.operatingHours.end} PM`}
                          </p>
                          <small className="text-secondary">
                            Day(s) closed
                          </small>
                          <p className="text-black">
                            {list.operatingHours.daysClosed.join(", ")}
                          </p>
                          <small className="text-secondary">
                            Contact Number
                          </small>
                          <p className="text-black">{list.contactNum}</p>
                        </Col>
                        <Col xs={12} sm={8} md={6} xl={3}>
                          <small className="text-secondary">Website</small>
                          <a
                            href={list.website}
                            className="text-black d-block mb-2"
                          >
                            {list.website}
                          </a>
                          <small className="text-secondary">
                            Reservation Website
                          </small>
                          <a
                            href={list.reservationUrl}
                            className="text-black d-block mb-2"
                          >
                            {list.reservationUrl}
                          </a>
                          <small className="text-secondary">Keywords</small>
                          <div className="flex">
                            {list.keywords.map((word, index) => {
                              return (
                                <p className="text-black m-0" key={index}>
                                  {`- ${word}`}
                                </p>
                              );
                            })}
                          </div>
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
                            onClick={e => handleDelete(e, list._id)}
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
