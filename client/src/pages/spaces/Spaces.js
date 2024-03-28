import React, { useState } from "react";
import Header from "../../components/Header";
import { Row, Col, Container } from "react-bootstrap";
import SearchBar from "../../components/SearchBar";
import SpacesSetting from "./SpacesSetting";
import Cardcomponent from "../../components/Cards";

function Spaces() {
  const { query, renderSearchBar } = SearchBar();
  const { filterAmenities, cardsettings } = SpacesSetting();
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
          {filterAmenities.map(({ label, value }) => (
            <Col
              key={value}
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
                !cardsetting.amenities.some((amenity) =>
                  checkboxQuery.includes(amenity.toLowerCase())
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
                  daysClosed={cardsetting.days_closed}
                  operatingHours={
                    cardsetting.operate_hour_st +
                    " AM" +
                    " - " +
                    cardsetting.operate_hour_et +
                    " PM"
                  }
                  contactNum={cardsetting.contact_num}
                  station={cardsetting.station}
                  amenities={cardsetting.amenities}
                  image={cardsetting.image}
                />
              </div>
            ))}
        </div>
      </Container>
    </>
  );
}

export default Spaces;
