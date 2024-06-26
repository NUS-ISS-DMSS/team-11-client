import React from "react";
import { Container, Button, Stack } from "react-bootstrap";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
  
  var pathname = window.location.pathname;

  function getUrlParams() {
    return Object.fromEntries(new URLSearchParams(window.location.search));
  }
  
  const urlParams = getUrlParams();
  const userId = urlParams["userID"];

  return (
    <>
      <Stack
        direction="horizontal"
        className="border-2 border-bottom py-3 bg-light"
      >
        <Container className="d-flex justify-content-between ">
          <Link to={`/spaces?userID=` + userId}>
            <img src={Logo} alt="logo" />
          </Link>
          <div>
            {pathname.includes("/spaces") ? (
              <Link to={`/bookings?userID=` + userId}>
                <Button size="sm">Bookings</Button>
              </Link>
            ) : (
              <Link to={`/spaces?userID=` + userId}>
                <Button size="sm">Spaces</Button>
              </Link>
            )}
            <Link to="/" style={{ marginLeft: "4px" }}>
              <Button variant="dark" size="sm">
                Log out
              </Button>
            </Link>
          </div>
        </Container>
      </Stack>
    </>
  );
}
