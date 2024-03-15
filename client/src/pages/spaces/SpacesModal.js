import React, { useState } from "react";
import { Modal, Button, Row, Col, Container, Badge } from "react-bootstrap";
import Carouselcomponent from "../../components/Carousel";
import TimeslotModal from "./TimeslotModal";
import {
  Clock,
  Map,
  Telephone,
  BatteryCharging,
  Droplet,
  Wifi,
  BellSlash,
  Speaker,
  Stoplights,
} from "react-bootstrap-icons";

export default function SpacesModal(props) {
  let [TSmodalshow, setTSmodalshow] = useState(false);

  return (
    <div>
      {!TSmodalshow ? (
        <Modal
          size="lg"
          show={props.modalshow}
          onHide={props.handleClose}
          centered
        >
          <Modal.Header closeButton className="border-0" />
          <Modal.Body>
            <Container>
              <Row>
                <Col sm={true} className="d-flex pt-5">
                  <Carouselcomponent images={props.images} />
                </Col>

                <Col sm={true} className="d-flex pt-2">
                  <div>
                    <h4>{props.name}</h4>
                    <span className="d-flex pb-3">{props.description}</span>
                    <span className="d-flex flex-row pb-2">
                      <Col xs={1}>
                        <Map />
                      </Col>
                      <Col xs={11}>{props.address}</Col>
                    </span>
                    <span className="d-flex flex-row">
                      <Col xs={1}>
                        <Clock />
                      </Col>
                      <Col xs={11}>
                        {props.operationDays}
                        <br />
                        {props.operatingHours}
                      </Col>
                    </span>
                    <span className="d-flex flex-row">
                      <Col xs={1}>
                        <Telephone />
                      </Col>
                      <Col xs={11}>{props.contactNum}</Col>
                    </span>
                    <span className="d-flex flex-wrap pb-4">
                      {props.keywords.map((keyword) => {
                        if (keyword === "Wifi") {
                          return (
                            <div key={keyword} className="p-1">
                              <Badge bg="success">
                                <div>{keyword}</div>
                                <Wifi />
                              </Badge>
                            </div>
                          );
                        } else if (keyword === "Socket") {
                          return (
                            <div key={keyword} className="p-1">
                              <Badge bg="success">
                                <div>{keyword}</div>
                                <BatteryCharging />
                              </Badge>
                            </div>
                          );
                        } else if (keyword === "Toilet") {
                          return (
                            <div key={keyword} className="p-1">
                              <Badge bg="info">
                                <div>{keyword}</div>
                                <Droplet />
                              </Badge>
                            </div>
                          );
                        } else if (keyword === "Parking") {
                          return (
                            <div key={keyword} className="p-1">
                              <Badge bg="info">
                                <div>{keyword}</div>
                                <Stoplights />
                              </Badge>
                            </div>
                          );
                        } else if (keyword === "Quiet") {
                          return (
                            <div key={keyword} className="p-1">
                              <Badge bg="secondary">
                                <div>{keyword}</div>
                                <BellSlash />
                              </Badge>
                            </div>
                          );
                        } else if (keyword === "Noisy") {
                          return (
                            <div key={keyword} className="p-1">
                              <Badge bg="secondary">
                                <div>{keyword}</div>
                                <Speaker />
                              </Badge>
                            </div>
                          );
                        }
                        return console.log("Cards Error");
                      })}
                    </span>

                    <div className="d-flex justify-content-center align-items-center">
                      <Button
                        variant="primary"
                        onClick={() => {
                          setTSmodalshow(true);
                        }}
                      >
                        Book Space
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Modal>
      ) : (
        <TimeslotModal
          modalshow={TSmodalshow}
          handleClose={() => setTSmodalshow(false)}
          operatingHours={props.operatingHours}
        />
      )}
    </div>
  );
}
