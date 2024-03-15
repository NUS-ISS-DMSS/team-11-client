import React from "react";
import { Carousel } from "react-bootstrap";

export default function Carouselcomponent(props) {
  return (
    <Carousel interval={null}>
      <Carousel.Item>
        <img
          className="mw-100 mh-100 rounded"
          src={props.images[0]}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="mw-100 mh-100 rounded"
          src={props.images[1]}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="mw-100 mh-100 rounded"
          src={props.images[2]}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
