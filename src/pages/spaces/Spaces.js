import React from "react";
import Header from "../../components/Header";
import { Row, Container } from "react-bootstrap";
import SearchBar from "../../components/SearchBar";

function Spaces() {
  const { query, renderSearchBar } = SearchBar();

  console.log(query);
  
  return (
    <>
      <Header />
      <Container className="py-3 d-flex justify-content-center align-items-center">
        <Row>{renderSearchBar}</Row>
      </Container>
    </>
  );
}

export default Spaces;
