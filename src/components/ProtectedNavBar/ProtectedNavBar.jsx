import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
const ProtectedNavBar = ({ bg }) => {
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          variant="dark"
          style={{
            background: `${bg}`,

            zIndex: "100",
          }}
        >
          <Container>
            <Navbar.Brand href="/">PlayPenny</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  PlayPenny
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 align-items-center pe-3">
                  <Nav.Link href="/">Lobby</Nav.Link>
                  <Nav.Link href="/promotion">My Account</Nav.Link>
                  <Nav.Link href="/how-to-play">Bring a friend</Nav.Link>
                  <Nav.Link href="/leaderboard">Leader board</Nav.Link>
                  <Nav.Link href="/leaderboard">PlayPenny Rewards</Nav.Link>
                  <Nav.Link href="/leaderboard">Promotions Rewards</Nav.Link>
                  <Nav.Link href="/login">
                    <Button variant="outline-light">Logout</Button>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default ProtectedNavBar;
