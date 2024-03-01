import React, { useState } from "react";
import Header from "../../components/Header";
import { Row, Col, Container } from "react-bootstrap";
import SearchBar from "../../components/SearchBar";
import SpacesSetting from "./SpacesSetting";

function Spaces() {
  const { query, renderSearchBar } = SearchBar();
  const { filterkeywords } = SpacesSetting();
  const [checkboxQuery, setCheckboxQuery] = useState([]);

  const handleChange = (value, event) => {
    if (event.target.checked) {
      setCheckboxQuery((prevValues) => [...prevValues, value]);
    } else {
      setCheckboxQuery((prevValues) =>
        prevValues.filter((item) => item !== value)
      );
    }
  };

  console.log(query);
  console.log(checkboxQuery);

  return (
    <>
      <Header />
      <Container className="py-3 d-flex justify-content-center align-items-center">
        <Row>{renderSearchBar}</Row>
      </Container>

      <Container className="d-flex justify-content-center align-items-center">
        <Row>
          {filterkeywords.map(({ _id, label, value }) => (
            <Col
              key={_id}
              xs={4}
              className="d-flex justify-content-center align-items-center p-2"
            >
              <div>
                <input
                  type="checkbox"
                  name={label}
                  onChange={(e) => handleChange(value, e)}
                />{" "}
                {label}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Spaces;
