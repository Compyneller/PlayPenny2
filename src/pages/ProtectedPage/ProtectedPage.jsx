import React from "react";
import { Container } from "react-bootstrap";
import MyAccountComp from "../../components/MyAccountComp/MyAccountComp";
import ProtectedNavBar from "../../components/ProtectedNavBar/ProtectedNavBar";
import style from "./ProtectedPage.module.scss";
const ProtectedPage = () => {
  return (
    <div className={style.wrapper}>
      <ProtectedNavBar />
      <Container className={style.container}>
        <MyAccountComp />
      </Container>
    </div>
  );
};

export default ProtectedPage;
