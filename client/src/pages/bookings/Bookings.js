import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Header from "../../components/Header";
import ListingAccordion from "./ListingAccordion";
import { mockAccount } from "../../mocks/mockAccount";

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
  var userId = urlParams["id"] == null ? "1" : urlParams["id"];

  // for mock data
  const isUserFound = mockAccount.users.find((user) => user.id === userId);
  useEffect(() => {
    setName(isUserFound.fullName);
    setListingArr(isUserFound.listingsPosted);
  }, [isUserFound]);

  return (
    <Container>
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

      <Container className="d-none d-md-block d-lg-block d-xl-block">
        {listingArr.length > 0 ? (
          <>
            <Container className="d-none d-md-block d-lg-block d-xl-block">
              <Container>
                <Row className="border rounded p-2 bg-black text-white">
                  <Col>ID</Col>
                  <Col>Name of Space</Col>
                  <Col>Created At</Col>
                  <Col>Status</Col>
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
    </Container>
  );
}
