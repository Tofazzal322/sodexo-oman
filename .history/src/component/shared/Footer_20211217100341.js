import React from "react";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="bg-dark text-light">
     <Row></Row>
     <Row> <Col> <img src="" alt="" /> </Col> </Row>
     <Row> <Col></Col> </Row>
     <Row> <Col></Col> </Row>
     <Row> <Col></Col> </Row>
     <Row> <Col></Col> </Row>
      <Row>
         <div className="d-flex me-3">
        <p className="ms-3">Contact us</p>
        <p className="ms-3">Legal & Privacy</p>
        <p className="ms-3">Data Protection policy</p>
        <p className="ms-3">Modern slavery Report</p>
        <p className="ms-3">Sodexo Oman tax strategy</p>
        <p className="ms-3">Sitemap</p>
      </div>
      <p className="ms-3">© 2021 Sodexo. All rights reserved</p>
     </Row>
    </div>
  );
};

export default Footer;
