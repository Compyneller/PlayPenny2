import React from "react";
import { Button, Card, Row } from "react-bootstrap";

const PersonalDetails = () => {
  return (
    <Card className="text-dark">
      <Card.Header as="h3">Personal Details</Card.Header>
      <Card.Body>
        <Row className="g-3">
          <div className="col-12">
            <Card>
              <Card.Header as="h5">VALIDATION INFORMATION</Card.Header>
              <Card.Body>
                <Row className="g-3">
                  <div className="col-6">Email Address</div>
                  <div className="col-6">shubham.jsx@gmail.com</div>
                </Row>
                <Row className="g-3">
                  <div className="col-6">Mobile No.</div>
                  <div className="col-6">+919999999999</div>
                </Row>
                <Row className="g-3">
                  <div className="col-6">Password</div>
                  <div className="col-6">
                    <Button variant="danger">Change Password</Button>
                  </div>
                </Row>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12">
            <Card>
              <Card.Header as="h5">PERSONAL INFORMATION</Card.Header>
              <Card.Body>
                <Row className="g-3">
                  <div className="col-6">First Name</div>
                  <div className="col-6">Shubham</div>
                </Row>
                <Row className="g-3">
                  <div className="col-6">Last Name</div>
                  <div className="col-6">Sharma</div>
                </Row>
                <Row className="g-3">
                  <div className="col-6">Date of Birth</div>
                  <div className="col-6">N/A</div>
                </Row>
                <Row className="g-3">
                  <div className="col-6">Gender</div>
                  <div className="col-6">Male</div>
                </Row>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12">
            <Card>
              <Card.Header as="h5">ADDRESS INFORMATION</Card.Header>
              <Card.Body>
                <Row className="g-3">
                  <div className="col-6">Address Line 1</div>
                  <div className="col-6">N/A</div>
                </Row>
                <Row className="g-3">
                  <div className="col-6">Address Line 2</div>
                  <div className="col-6">N/A</div>
                </Row>
                <Row className="g-3">
                  <div className="col-6">City</div>
                  <div className="col-6">N/A</div>
                </Row>
                <Row className="g-3">
                  <div className="col-6">State</div>
                  <div className="col-6">N/A</div>
                </Row>
                <Row className="g-3">
                  <div className="col-6">Pin</div>
                  <div className="col-6">N/A</div>
                </Row>
              </Card.Body>
            </Card>
          </div>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default PersonalDetails;
