import React, { useState } from "react";
import Header from "../../components/Header";
import { Row, Col, Container } from "react-bootstrap";
import SearchBar from "../../components/SearchBar";
import SpacesSetting from "./SpacesSetting";
import Cardcomponent from "../../components/Cards";

function Spaces() {
  const { query, renderSearchBar } = SearchBar();
  const { filterkeywords, cardsettings } = SpacesSetting();
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

      <Container>
        <div className="d-flex flex-wrap justify-content-center align-items-center">
          {cardsettings
            .filter((cardsetting) => {
              if (
                query &&
                !cardsetting.station.toLowerCase().includes(query.toLowerCase())
              ) {
                return false;
              }

              if (
                checkboxQuery.length > 0 &&
                !cardsetting.keywords.split(", ").some((keyword) =>
                  checkboxQuery.includes(keyword.toLowerCase())
                )
              ) {
                return false;
              }
              return true;
            })
            .map((cardsetting) => (
              <div
                key={cardsetting.name}
                className="d-flex justify-content-center align-items-center p-4"
              >
                <Cardcomponent
                  name={cardsetting.name}
                  description={cardsetting.description}
                  address={cardsetting.address}
                  daysClosed={cardsetting.daysClosed}
                  operatingHours={
                    cardsetting.operatingHours_start +
                    " AM" +
                    " - " +
                    cardsetting.operatingHours_end +
                    " PM"
                  }
                  contactNum={cardsetting.contactNum}
                  station={cardsetting.station}
                  keywords={cardsetting.keywords.split(", ")}
                  images={cardsetting.images}
                />
              </div>
            ))}
        </div>
      </Container>
    </>
  );
}

export default Spaces;
