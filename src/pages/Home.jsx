import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Bricks from "../components/Bricks/Bricks";
import CardComp from "../components/Cards/CardComp";
import HeaderComp from "../components/HeaderComp/HeaderComp";
import Rewards from "../components/Rewards/Rewards";
import TopMostComp from "../components/TopMostComp/TopMostComp";
import Winner from "../components/Winner/Winner";

const Home = () => {
  return (
    <>
      <HeaderComp />
      <TopMostComp />
      <CardComp />
      <Winner />
      <Bricks />
      <Rewards />
    </>
  );
};

export default Home;
