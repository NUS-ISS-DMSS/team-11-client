import React, { useState, useRef, useCallback } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { getUser } from "../../api/userApi";

export default function SignInForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const emailEl = useRef();
  const passwordEl = useRef();

  const goToHomePage = (id) => {
    window.location.href = `/spaces?userID=` + id;
  }

  const handleSubmit = useCallback(
    () => async (e) => {
      e.preventDefault();
      setIsLoading(true);

      const userData = await getUser(
        emailEl.current?.value,
        passwordEl.current?.value
      );

      if (userData.length === 0) {
        setError("Invalid Email/Password. Please Try Again.");
        setIsLoading(false);
      } else {
        goToHomePage(userData[0].id)
        // window.location.href = `/spaces?userID=` + userData[0].id;
      }
    },
    [setIsLoading, setError, emailEl, passwordEl]
  );

  return (
    <Form onSubmit={handleSubmit()}>
      <Form.Group className="mb-3" controlId="loginEmail">
        <Form.Label className="text-secondary fw-light">Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="johndoe@email.com"
          ref={emailEl}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="loginPassword">
        <Form.Label className="text-secondary fw-light">Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="********"
          ref={passwordEl}
          required
        />
      </Form.Group>
      <div className="d-flex justify-content-center flex-column">
        <Button
          variant="outline-primary"
          className="d-flex justify-content-center mb-2"
          disabled={isLoading}
          type="submit"
        >
          Login
        </Button>
        {error && <Alert variant="danger">{error}</Alert>}
      </div>
    </Form>
  );
}
