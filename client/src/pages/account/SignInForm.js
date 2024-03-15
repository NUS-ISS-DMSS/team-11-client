import React, { useState, useRef, useCallback } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { mockAccount } from "../../mocks/mockAccount";


export default function SignInForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const emailEl = useRef();
  const passwordEl = useRef();

  const handleSubmit = useCallback(
    () => (e) => {
      e.preventDefault();
      setIsLoading(true);
      const email = emailEl.current?.value;
      const password = passwordEl.current?.value;

      // for mock data
      const isUserFound = mockAccount.users.find(
        (user) => user.email === email && user.password === password
      );

      if (!isUserFound) {
        setError("Invalid Email/Password. Please Try Again.");
        setIsLoading(false);
      } else {
        window.location.href = `/spaces?id=` + isUserFound.id;
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
