import React, { useState, useEffect, useCallback, useRef } from "react";
import { Form, Modal, Button, Alert } from "react-bootstrap";
import { getAllUsers, createUser } from "../../api/userApi";

export default function SignUpModal(props) {
  const [register, setRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [accountArr, setAccountArr] = useState([]);

  const fullNameEl = useRef();
  const emailEl = useRef();
  const passwordEl = useRef();

  useEffect(() => {
    const fetchUsers = async () => {
      setAccountArr(await getAllUsers());
    };
    fetchUsers();
  }, []);

  const isUserExist = useCallback(
    (email) => {
      return accountArr.some((user) => user.email === email);
    },
    [accountArr]
  );

  const handleSubmit = useCallback(
    () => (e) => {
      e.preventDefault();
      setIsLoading(true);

      //validate if email is used
      const isUserFound = isUserExist(emailEl.current.value);

      //for posting to api
      const userData = {
        full_name: fullNameEl.current.value,
        email: emailEl.current.value,
        password: passwordEl.current.value,
      };

      if (isUserFound) {
        setError(
          "There's an account registered with this email. Please try another email."
        );
        setIsLoading(false);
      } else {
        const newUser = async () => {
          // const newUser = await createUser(userData);
          setRegister(true);
        };
        newUser();
      }
    },
    [isUserExist, setAccountArr, setIsLoading, setError]
  );

  return (
    <Modal
      show={props.show}
      onHide={() => {
        setIsLoading(false);
        setRegister(false);
        setError("");
        props.handleClose();
      }}
      centered
    >
      <Form onSubmit={handleSubmit()}>
        <Modal.Header closeButton className="border-0" />
        <Modal.Body className="w-75 mx-auto p-2">
          <Form.Group className="mb-3" controlId="fullname">
            <Form.Label className="fw-light">Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="John Doe"
              ref={fullNameEl}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label className="fw-light">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="johndoe@email.com"
              ref={emailEl}
              required
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="password">
            <Form.Label className="fw-light">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="********"
              ref={passwordEl}
              required
            />
          </Form.Group>

          <div className="d-flex justify-content-center mb-2">
            <Button variant="dark" type="submit" disabled={isLoading}>
              Continue to sign up
            </Button>
          </div>
          {register && (
            <Alert variant="success" className="text-center">
              You are registered successfully! <br />
              Press the "x" button and login.
            </Alert>
          )}
          {error && <Alert variant="danger">{error}</Alert>}
          <div className="d-flex justify-content-center mb-3">
            <Button
              variant="link"
              size="sm"
              className="text-decoration-none text-black"
              onClick={() => {
                setIsLoading(false);
                setRegister(false);
                setError("");
                props.handleClose();
              }}
            >
              Have an account? Login here
            </Button>
          </div>
        </Modal.Body>
      </Form>
    </Modal>
  );
}
