import React from "react";
import style from "./HeaderComp.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import image from "../../assets/18973620 [Converted].png";
import svg from "../../assets/wave (2).svg";
const HeaderComp = () => {
  return (
    <div className={style.wrapper}>
      <Container>
        <Row className="g-3">
          <Col sm={12} lg={6} className={style.content}>
            <h1>PLAYPENNY</h1>
            <h4>Get Playpenny for:</h4>
            <br />
            <div className={style.icons}>
              <img
                src="https://img.icons8.com/ios-filled/344/windows-11.png"
                height={50}
                width={50}
                alt=""
              />
              <img
                src="https://img.icons8.com/dotty/344/mac-client.png"
                height={50}
                width={50}
                alt=""
              />
              <img
                src="https://img.icons8.com/external-sbts2018-solid-sbts2018/344/external-playstore-basic-ui-elements-2.2-sbts2018-solid-sbts2018.png"
                height={50}
                width={50}
                alt=""
              />
              <img
                src="https://img.icons8.com/ios-filled/344/mac-os.png"
                height={50}
                width={50}
                alt=""
              />
            </div>
          </Col>
          <Col sm={12} lg={6}>
            <img src={image} alt="" className="w-100" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderComp;
