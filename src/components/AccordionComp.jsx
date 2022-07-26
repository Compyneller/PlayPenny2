import React from "react";
import { Accordion } from "react-bootstrap";
import { AccData } from "../Config/AccordionData";
const AccordionComp = () => {
  return (
    <Accordion defaultActiveKey="0">
      {AccData.map((items, index) => {
        return (
          <Accordion.Item eventKey={index}>
            <Accordion.Header>{items.heading}</Accordion.Header>
            <Accordion.Body>{items.text}</Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};

export default AccordionComp;
