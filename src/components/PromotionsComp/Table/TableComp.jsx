import React from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const TableComp = () => {
  return (
    <Container style={{ padding: "3rem 1rem" }}>
      <Table striped bordered hover responsive>
        <thead>
          <tr className="bg-dark text-light">
            <th>Date</th>
            <th>Rummy Bonus Code </th>
            <th>Rummy Bonus Offer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Applicable only on 1st deposit </td>
            <td>WELCOME</td>
            <td>100% Bonus upto Rs.5000</td>
          </tr>
          <tr>
            <td>Jul 1 - 31 </td>
            <td>JULY2022 </td>
            <td>Get 15% Bonus Points Upto Rs. 750</td>
          </tr>
          <tr>
            <td>Jul 1 - 8 </td>
            <td>MSD22 </td>
            <td>Get 20% Booster Bonus Upto Rs.1000</td>
          </tr>
          <tr>
            <td>Jul 9 - 15 </td>
            <td>BAKRID22 </td>
            <td>Get 10% Cash Bonus Upto Rs.500</td>
          </tr>
          <tr>
            <td>Jul 16 - 23 </td>
            <td>MIZZLE750 </td>
            <td>Get 15% Booster Bonus Upto Rs.750</td>
          </tr>
          <tr>
            <td>Jul 24 - 31 </td>
            <td>DRSMASH </td>
            <td>Get 10% Cash Bonus Upto Rs.500</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default TableComp;
