import React from "react";
import { Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./side.module.scss";
const MyAccountSide = () => {
  return (
    <Row className={`g-2 ${style.wrapper}`}>
      <div className="col-3 col-lg-12">
        <Link to="account-overview">
          <Card>
            <Card.Body>Account Overview</Card.Body>
          </Card>
        </Link>
      </div>
      <div className="col-3 col-lg-12">
        <Link to="add-cash">
          <Card>
            <Card.Body>Add Cash</Card.Body>
          </Card>
        </Link>
      </div>
      <div className="col-3 col-lg-12">
        <Link to="/account-overview">
          <Card>
            <Card.Body>Withdraw Cash</Card.Body>
          </Card>
        </Link>
      </div>
      <div className="col-3 col-lg-12">
        <Link to="/account-overview">
          <Card>
            <Card.Body>Profile</Card.Body>
          </Card>
        </Link>
      </div>
      <div className="col-3 col-lg-12">
        <Link to="/account-overview">
          <Card>
            <Card.Body>View Transactions</Card.Body>
          </Card>
        </Link>
      </div>
      <div className="col-3 col-lg-12">
        <Link to="/account-overview">
          <Card>
            <Card.Body>Preferences</Card.Body>
          </Card>
        </Link>
      </div>
      <div className="col-3 col-lg-12">
        <Link to="/account-overview">
          <Card>
            <Card.Body>Loyalty Points</Card.Body>
          </Card>
        </Link>
      </div>
      <div className="col-3 col-lg-12">
        <Link to="/account-overview">
          <Card>
            <Card.Body>Bonus Points</Card.Body>
          </Card>
        </Link>
      </div>
    </Row>
  );
};

export default MyAccountSide;
