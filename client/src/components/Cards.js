import React, { useState } from "react";
import { Card, Badge, Col } from "react-bootstrap";
import Carouselcomponent from "./Carousel";
import SpacesModal from "../pages/spaces/SpacesModal"
import {
  Clock,
  Map,
  BatteryCharging,
  Droplet,
  Wifi,
  BellSlash,
  Speaker,
  Stoplights,
} from "react-bootstrap-icons";

export default function Cardcomponent(props) {

  let [modalshow, setModalshow] = useState(false);
  let daysClosed = props.daysClosed.split(", ");
  let operationDays = "";

  // days operating checker
  function operation_check() {
    if (daysClosed[0] === "None") {
      operationDays = "Opens Daily ";
    } else {
      operationDays = "Closed on " + props.daysClosed;
    }
  }

  // function calls
  operation_check();

  return (
    <div>
      <Card style={{ maxWidth: "20em" }}>
        <Card.Header className="p-0">
          {/* <Carouselcomponent images={props.images} alt="slides images" /> */}
        </Card.Header>

        <div onClick={() => setModalshow(true)}>
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <div style={{ fontSize: "13px" }}>
              <div className="d-flex flex-row pb-2">
                <Col xs={1}>
                  <Map />
                </Col>
                <Col xs={11}>{props.address}</Col>
              </div>

              <div className="d-flex flex-row">
                <Col xs={1}>
                  <Clock />
                </Col>
                <Col xs={11}>
                  {operationDays}
                  <br />
                  {props.operatingHours}
                </Col>
              </div>

              <div className="d-flex flex-wrap">
                {props.amenities.map((amenity) => {
                    if (amenity === "Wifi") {
                      return (
                        <div key={amenity} className="p-1">
                          <Badge bg="success">
                            <div>{amenity}</div>
                            <Wifi />
                          </Badge>
                        </div>
                      );
                    } else if (amenity === "Socket") {
                      return (
                        <div key={amenity} className="p-1">
                          <Badge bg="success">
                            <div>{amenity}</div>
                            <BatteryCharging />
                          </Badge>
                        </div>
                      );
                    } else if (amenity === "Toilet") {
                      return (
                        <div key={amenity} className="p-1">
                          <Badge bg="info">
                            <div>{amenity}</div>
                            <Droplet />
                          </Badge>
                        </div>
                      );
                    } else if (amenity === "Parking") {
                      return (
                        <div key={amenity} className="p-1">
                          <Badge bg="info">
                            <div>{amenity}</div>
                            <Stoplights />
                          </Badge>
                        </div>
                      );
                    } else if (amenity === "Quiet") {
                      return (
                        <div key={amenity} className="p-1">
                          <Badge bg="secondary">
                            <div>{amenity}</div>
                            <BellSlash />
                          </Badge>
                        </div>
                      );
                    } else if (amenity === "Noisy") {
                      return (
                        <div key={amenity} className="p-1">
                          <Badge bg="secondary">
                            <div>{amenity}</div>
                            <Speaker />
                          </Badge>
                        </div>
                      );
                    }
                  return console.log("Cards Error");
                })}
              </div>
            </div>
          </Card.Body>
        </div>
      </Card>

      <SpacesModal
        modalshow={modalshow}
        handleClose={() => setModalshow(false)}
        name={props.name}
        description={props.description}
        address={props.address}
        operationDays={operationDays}
        operatingHours={props.operatingHours}
        contactNum={props.contactNum}
        station={props.station}
        amenities={props.amenities}
        // images={props.images}
      />
    </div>
  );
}
