import React from "react";
import { Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div style={{ width: "100%", background: "#0D1043", padding: "3rem 0" }}>
      <Container className="text-center text-light">
        <Row className="g-3">
          <div className="col-6 col-lg-3">
            <h5>WORLD CLASS SECURITY</h5>
            <li>Comodo SSL Secured</li>
            <li>Stringent Fair Play safeguards</li>
            <li>3rd party audited / verified RNG</li>
          </div>
          <div className="col-6 col-lg-3">
            <h5>DOWNLOAD MOBILE APP</h5>
            <img
              src="https://www.deccanrummy.com/images/homepage/android.png"
              alt=""
            />
            <img
              src="https://www.deccanrummy.com/images/homepage/iphone.png"
              alt=""
            />
          </div>
          <div className="col-6 col-lg-3">
            <h5>PLAYPENNY</h5>
          </div>
          <div className="col-6 col-lg-3">
            <h5>FOLLOW US</h5>
            <div className="row g-2">
              <div className="col-3">
                <img
                  style={{ filter: "invert(1)" }}
                  src="https://img.icons8.com/ios-filled/344/facebook-new.png"
                  alt=""
                  className="w-50"
                />
              </div>
              <div className="col-3">
                <img
                  style={{ filter: "invert(1)" }}
                  src="https://img.icons8.com/ios-filled/344/instagram-new--v1.png"
                  alt=""
                  className="w-50"
                />
              </div>
              <div className="col-3">
                <img
                  style={{ filter: "invert(1)" }}
                  src="https://img.icons8.com/ios-glyphs/344/twitter--v1.png"
                  alt=""
                  className="w-50"
                />
              </div>
              <div className="col-3">
                <img
                  style={{ filter: "invert(1)" }}
                  src="https://img.icons8.com/ios-filled/344/linkedin-circled--v1.png"
                  alt=""
                  className="w-50"
                />
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
