import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "./Winner.module.scss";
const Winner = () => {
  return (
    <Container style={{ padding: "3rem 0" }}>
      <Row className="g-3">
        <Col
          sm={12}
          lg={6}
          className="d-flex align-items-start flex-column justify-content-center"
          id={style.content}
        >
          <h1>Winner</h1>
          <p className="text-secondary">
            You start with the default level of bronze with 0 points and these
            levels go all the way up to Platinum with 5000 coins
          </p>
        </Col>
        <Col sm={12} lg={6}>
          <img
            src="https://images.unsplash.com/photo-1634313945702-56a8073970bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80"
            className="w-100"
            alt=""
            style={{ borderRadius: "10px" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Winner;
