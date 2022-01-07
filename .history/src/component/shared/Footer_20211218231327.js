import React from "react";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer-main-container ">
     
      <Row >
        <Row className="d-flex me-3 mb-5 mt-4 ms-5 ">
          <Col> <img src="https://uk.sodexo.com/files/live/sites/com-global/files/01%20Logo/DiversityInc-logo.png" alt="" />
          </Col> 
          <Col>
            <img src="https://uk.sodexo.com/files/live/sites/com-global/files/01%20Logo/DJSI_Member_Logo.png" alt="" />
          </Col> 
      <Col> <img src="https://uk.sodexo.com/files/live/sites/com-global/files/01%20Logo/FTSE4Good-logo.png" alt="" /></Col> 
     <Col> <img src="https://uk.sodexo.com/files/live/sites/com-global/files/01%20Logo/SAM-Gold-2020.png" alt="" /></Col> 
      <Col> <h5 className="text-light"> All our <br /> awards </h5> </Col> </Row>
      <Row className="bg-dark text-light ">
          <Col xs={12}>
            
              <div className="d-flex me-4 mt-4 ">
        <p className="ms-3 ">Contact us</p>
        <p className="ms-3 ">Legal & Privacy</p>
        <p className="ms-3 ">Data Protection policy</p>
        <p className="ms-3 ">Modern slavery Report</p>
        <p className="ms-3 ">Sodexo Oman tax strategy</p>
        
      </div>
      <p className="ms-3 w-100">© 2021 Sodexo. All rights reserved</p>
       </Col>
     </Row>

   </Row>
    </div>
  );
};

export default Footer;
