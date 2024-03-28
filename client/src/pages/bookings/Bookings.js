import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Header from "../../components/Header";
import ListingAccordion from "./ListingAccordion";
import { getAllReservations } from "../../api/reservationsApi";

export default function Bookings() {
  const [name, setName] = useState("");
  const [listingArr, setListingArr] = useState([]);

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
  var userId = urlParams["userID"];

  useEffect(() => {
    const fetchReservations = async () => {
      const reservationsFound = await getAllReservations(userId);
      setName(reservationsFound[0].user.full_name);
      setListingArr(reservationsFound);
    };
    fetchReservations();
  }, [userId]);


  return (
    <>
      <Header />
      <Container className="py-4">
        <Row>
          <Col>
            <h3 className="fw-bold text-black">
              Welcome <span className="text-primary">{name}</span>
            </h3>
            <p className="fw-light text-secondary">
              You can manage your reservation(s) here.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="d-md-block d-lg-block d-xl-block">
        {listingArr.length > 0 ? (
          <>
            <Container className="d-md-block d-lg-block d-xl-block">
              <Container>
                <Row className="border rounded p-2 bg-black text-white">
                  <Col>ID</Col>
                  <Col>Name of Space</Col>
                  <Col>Reservation Date</Col>
                </Row>
              </Container>
            </Container>
            <ListingAccordion listingArr={listingArr} />
          </>
        ) : (
          <p className="text-black text-center m-4">
            No listing(s) found. List one now.
          </p>
        )}
      </Container>
    </>
  );
}
