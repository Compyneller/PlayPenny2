import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AccordionComp from "../components/AccordionComp";
import CardComp from "../components/Cards/CardComp";
import HeaderComp from "../components/HeaderComp/HeaderComp";
import TopMostComp from "../components/TopMostComp/TopMostComp";
import WhatWinner from "../components/WhatWinnerSays/WhatWinner";
import Winner from "../components/Winner/Winner";

const Home = () => {
  return (
    <>
      <HeaderComp />
      <TopMostComp />
      <CardComp />
      <WhatWinner />
      <Container style={{ padding: "3rem 0" }}>
        <Row className="g-3">
          <Col sm={12} lg={6}>
            <AccordionComp />
          </Col>
          <Col sm={12} lg={6}>
            <AccordionComp />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
