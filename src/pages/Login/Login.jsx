import React from "react";
import "./Login.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="login-bg">
        <div className="pattern0 fireworks fire0">
          <div className="ring_1" />
          <div className="ring_2" />
        </div>
        <div className="pattern1 fireworks fire1">
          <div className="ring_1" />
          <div className="ring_2" />
        </div>
        <div className="pattern2 fireworks fire2">
          <div className="ring_1" />
          <div className="ring_2" />
        </div>
        <div className="pattern3 fireworks fire3">
          <div className="ring_1" />
          <div className="ring_2" />
        </div>
        <div className="pattern4 fireworks fire4">
          <div className="ring_1" />
          <div className="ring_2" />
        </div>
        <div className="pattern5 fireworks fire5">
          <div className="ring_1" />
          <div className="ring_2" />
        </div>
        <div className="pattern6 fireworks fire6">
          <div className="ring_1" />
          <div className="ring_2" />
        </div>
        <div className="pattern7 fireworks fire7">
          <div className="ring_1" />
          <div className="ring_2" />
        </div>
        <div className="pattern8 fireworks fire8">
          <div className="ring_1" />
          <div className="ring_2" />
        </div>
        <div className="pattern9 fireworks fire9">
          <div className="ring_1" />
          <div className="ring_2" />
        </div>
        <div className="pattern10 fireworks fire10">
          <div className="ring_1" />
          <div className="ring_2" />
        </div>
        <div className="pattern11 fireworks fire11">
          <div className="ring_1" />
          <div className="ring_2" />
        </div>
        <div className="pattern12 fireworks fire12">
          <div className="ring_1" />
          <div className="ring_2" />
        </div>
        <div className="pattern13 fireworks fire13">
          <div className="ring_1" />
          <div className="ring_2" />
        </div>
        <div className="pattern14 fireworks fire14">
          <div className="ring_1" />
          <div className="ring_2" />
        </div>
        <div className="pattern15 fireworks fire15">
          <div className="ring_1" />
          <div className="ring_2" />
        </div>
        <div className="pattern16 fireworks fire16">
          <div className="ring_1" />
          <div className="ring_2" />
        </div>
        <div className="pattern17 fireworks fire17">
          <div className="ring_1" />
          <div className="ring_2" />
        </div>
        <div className="pattern18 fireworks fire18">
          <div className="ring_1" />
          <div className="ring_2" />
        </div>
        <div className="pattern19 fireworks fire19">
          <div className="ring_1" />
          <div className="ring_2" />
        </div>
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
              <form action="">
                <label htmlFor="">Mobile Number</label>

                <InputGroup className="my-3">
                  <Form.Control
                    placeholder="Enter your Mobile No."
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
                <label htmlFor="">Password</label>
                <InputGroup className="my-3">
                  <Form.Control
                    placeholder="Enter Password"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
                <Button variant="primary">Login</Button>
              </form>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Login;
