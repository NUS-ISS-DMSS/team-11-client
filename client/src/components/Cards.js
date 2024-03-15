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
          <Carouselcomponent images={props.images} alt="slides images" />
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
        keywords={props.keywords}
        images={props.images}
      />
    </div>
  );
}
