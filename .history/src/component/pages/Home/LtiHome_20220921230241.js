import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Slides from './Slides';

const LtiHome = () => {
    return (
          <div className="home">
  
{/* <SiteBuilding></SiteBuilding> */}
      
      <Row>
        <Col xs={9} className="slides-bg">
          <Slides></Slides>
        </Col>
        <Col xs={3} className=" date-time">
          <Lti
        </Col>
      </Row>
      <Row className="mt-2 scroll-component">
        <Scroll></Scroll>
        </Row>
      
    </div>
    );
};

export default LtiHome;