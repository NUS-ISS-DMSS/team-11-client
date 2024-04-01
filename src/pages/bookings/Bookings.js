import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Header from "../../components/Header";
import ListingAccordion from "./ListingAccordion";
import { getAllReservations } from "../../api/reservationsApi";

export default function Bookings() {
  const [name, setName] = useState("");
  const [listingArr, setListingArr] = useState([]);

  function getUrlParams() {
    return Object.fromEntries(new URLSearchParams(window.location.search));
  }
  
  const urlParams = getUrlParams();
  const userId = urlParams["userID"];

  useEffect(() => {
    const fetchReservations = async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      const reservationsFound = await getAllReservations(userId);
      if(reservationsFound.length > 0){
        setName(reservationsFound[0].user.full_name);
        setListingArr(reservationsFound);
      }
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
                  <Col className="d-none d-md-block d-lg-block d-xl-block">ID</Col>
                  <Col>Name of Space</Col>
                  <Col>Reservation Date</Col>
                  <Col>Status</Col>
                </Row>
              </Container>
            </Container>
            <ListingAccordion listingArr={listingArr} />
          </>
        ) : (
          <p className="text-black text-center m-4">
            No reservation(s) found. Book one now.
          </p>
        )}
      </Container>
    </>
  );
}
