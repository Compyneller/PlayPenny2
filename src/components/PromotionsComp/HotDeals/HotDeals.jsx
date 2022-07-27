import React from "react";
import { Card, Container, Row } from "react-bootstrap";

const HotDeals = () => {
  return (
    <Container style={{ padding: "3rem 1rem" }}>
      <h1>Hot Deals</h1>
      <Row className="g-3">
        <div className="col-12 col-lg-6">
          <Card>
            <Card.Body className="d-flex flex-column align-items-center justify-content-center">
              <h5 className="m-auto">Weekly LeaderBoard</h5>
              <p className="m-auto">Check the exciting prizes to be won</p>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 col-lg-6">
          <Card>
            <Card.Body className="d-flex flex-column align-items-center justify-content-center">
              <h5 className="m-auto">DR Smash</h5>
              <p className="m-auto">10% Bonus upto Rs. 500</p>
            </Card.Body>
          </Card>
        </div>
      </Row>
    </Container>
  );
};

export default HotDeals;
