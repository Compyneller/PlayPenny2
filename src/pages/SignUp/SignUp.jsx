import React, { useState } from "react";
import {
  Alert,
  Button,
  Card,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../Login/Login.scss";
import LoginBg from "../Login/LoginBg";
import { useUserAuth } from "../../context/AuthContext";
const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { signUp } = useUserAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPass) {
      return setError("Password do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signUp(email, password);
      navigate("/login");
    } catch (error) {
      setError(
        "Failed to create an account, Password must be above 6 character"
      );
    }
    setLoading(false);
  };
  return (
    <div className="login-wrapper">
      <div className="login-bg">
        <LoginBg />
      </div>
      <Container className="d-flex">
        <Card className="m-auto login-card">
          <Link to="/">
            <img
              src="https://img.icons8.com/ios-glyphs/344/multiply.png"
              alt=""
              style={{ filter: "invert(1)" }}
            />
          </Link>
          <Card.Body>
            <Card.Title as="h1">Sign Up</Card.Title>
            <br />
            <Card.Text>
              {error && <Alert variant="danger">{error}</Alert>}
              <form action="" onSubmit={handleSubmit}>
                {/* <Row className="g-2">
                  <div className="col-12 col-lg-6">
                    {" "}
                    <label htmlFor="">First Name</label>
                    <InputGroup className="my-3">
                      <Form.Control
                        placeholder="Enter your First Name"
                        type="text"
                        required
                        className="text-light"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </InputGroup>
                  </div>
                  <div className="col-12 col-lg-6">
                    {" "}
                    <label htmlFor="">Last Name</label>
                    <InputGroup className="my-3">
                      <Form.Control
                        placeholder="Enter your Last Name"
                        type="text"
                        required
                        className="text-light"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </InputGroup>
                  </div>
                </Row> */}
                <label htmlFor="">Email</label>
                <InputGroup className="my-3">
                  <Form.Control
                    placeholder="Enter email"
                    type="mail"
                    required
                    className="text-light"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
                {/* <label htmlFor="">Mobile Number</label>
                <InputGroup className="my-3">
                  <Form.Control
                    placeholder="Enter Mobile Number"
                    type="tel"
                    required
                    className="text-light"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                  />
                </InputGroup> */}
                <label htmlFor="">Password</label>
                <InputGroup className="my-3">
                  <Form.Control
                    placeholder="Enter Password"
                    type="password"
                    required
                    className="text-light"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </InputGroup>
                <label htmlFor="">Confirm Password</label>
                <InputGroup className="my-3">
                  <Form.Control
                    placeholder="Confirm Password"
                    type="password"
                    required
                    className="text-light"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={confirmPass}
                    onChange={(e) => setConfirmPass(e.target.value)}
                  />
                </InputGroup>
                {/* <label htmlFor="">Aadhar Number</label>
                <InputGroup className="my-3">
                  <Form.Control
                    placeholder="Enter Aadhar Number"
                    type="tel"
                    className="text-light"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
                <label htmlFor="">PAN Number</label>
                <InputGroup className="my-3">
                  <Form.Control
                    placeholder="Enter PAN Number"
                    type="tel"
                    className="text-light"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Upload Front Side of Aadhar</Form.Label>
                  <div className="row g-1">
                    <div className="col-10  d-flex">
                      <input
                        type="file"
                        required
                        className="m-auto form-control"
                        accept="image/png, image/jpeg"
                        id="inputGroupFile01"
                        // onChange={(e) => setFrontAadhar(e.target.files[0])}
                      />
                    </div>
                    <div className="col-2 d-flex ">
                      <Button
                        variant="outline-light"
                        // className="mt-3"
                        // onClick={(e) => uploadFrontAadhar(e)}
                      >
                        Upload
                      </Button>
                    </div>
                  </div>
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Upload Back Side of Aadhar</Form.Label>
                  <div className="row g-1">
                    <div className="col-10 d-flex">
                      <input
                        type="file"
                        required
                        className="m-auto form-control"
                        accept="image/png, image/jpeg"
                        id="inputGroupFile02"
                        // onChange={(e) => setBackAadhar(e.target.files[0])}
                      />
                    </div>
                    <div className="col-2">
                      <Button
                        variant="outline-light"
                        // className="mt-3"
                        // onClick={(e) => uploadBackAadhar(e)}
                      >
                        Upload
                      </Button>
                    </div>
                  </div>
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Upload PAN Card</Form.Label>
                  <div className="row g-1">
                    <div className="col-10 d-flex ">
                      <input
                        type="file"
                        required
                        className="m-auto form-control"
                        accept="image/png, image/jpeg"
                        id="inputGroupFile03"
                        // onChange={(e) => setPanImage(e.target.files[0])}
                      />
                    </div>
                    <div className="col-2">
                      <Button
                        // className="mt-3"
                        variant="outline-light"
                        // onClick={(e) => uploadPan(e)}
                      >
                        Upload
                      </Button>
                    </div>
                  </div>
                </Form.Group> */}
                <Button
                  disabled={loading}
                  variant="primary"
                  type="submit"
                  className="w-100"
                >
                  Sign Up
                </Button>
                <br />
                <br />{" "}
                <Link
                  to="/login"
                  className="text-info"
                  style={{ fontWeight: "bold" }}
                >
                  Login In.
                </Link>
              </form>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default SignUp;
