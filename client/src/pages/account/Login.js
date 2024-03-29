import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Logo from "../../assets/logo.svg";
import ClientImg from "../../assets/client.png";
import SignUpModal from "./SignUpModal";
import SignInForm from "./SignInForm";

export default function Login() {
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="d-flex flex-column justify-content-between w-100 vh-100 p-4">
          <div className="align-self-start p-4">
            <img src={Logo} alt="logo" />
          </div>
          <div className="d-flex flex-column align-items-center h-20 p-4 ">
            <h1 className="fw-bold text-black text-center">
              Join us and discover spaces <br /> to work and study.
            </h1>
            <p className="text-secondary text-center fw-light">
              First time booking spaces? <br /> Click on the button below.
            </p>
            <Button variant="primary" onClick={() => setShow(true)}>
              Book Now
            </Button>
          </div>
          <div className="d-flex flex-column align-items-center h-50 p-4 ">
            <p className="text-secondary text-center fw-light">
              Have an existing account? <br /> Login here.
            </p>
            <SignInForm />
          </div>
        </div>
        <div className="d-flex">
          <img
            src={ClientImg}
            alt="Man working in cafe"
            className="d-xl-block d-none"
          />
        </div>
      </div>

      {/* Sign up modal */}
      <SignUpModal showSignUpModal={showSignUpModal} handleClose={() => setShowSignUpModal(false)} />
    </>
  );
}
