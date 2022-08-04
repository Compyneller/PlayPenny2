import React, { useState } from "react";
import "./Login.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginBg from "./LoginBg";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    const body = {
      email,
      password: pass,
    };
    console.log(body);
    const response = await axios.post(
      "http://34.207.41.229:4100/playpenny/login",
      body,
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
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
            <Card.Title as="h1">Login</Card.Title>
            <br />
            <Card.Text>
              <form action="" onSubmit={(e) => handleLogin(e)}>
                <label htmlFor="">Mobile Number</label>
                <InputGroup className="my-3">
                  <Form.Control
                    placeholder="Enter your Mobile No."
                    aria-label="Username"
                    className="text-light"
                    aria-describedby="basic-addon1"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
                <label htmlFor="">Password</label>
                <InputGroup className="my-3">
                  <Form.Control
                    placeholder="Enter Password"
                    aria-label="Username"
                    className="text-light"
                    aria-describedby="basic-addon1"
                    required
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                  />
                </InputGroup>
                <Button type="submit" variant="primary">
                  Login
                </Button>
                <br />
                <br />
                New user signup{" "}
                <Link to="/signup" style={{ fontWeight: "bold" }}>
                  Here.
                </Link>
              </form>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Login;
