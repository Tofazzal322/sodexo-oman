import React from 'react';

const LtiHome = () => {
    return (
          <div className="home">
  
{/* <SiteBuilding></SiteBuilding> */}
      
      <Row>
        <Col xs={9} className="slides-bg">
          <Slides></Slides>
        </Col>
        <Col xs={3} className=" date-time">
          <DateTime></DateTime>
        </Col>
      </Row>
      <Row className="mt-2 scroll-component">
        <Scroll></Scroll>
        </Row>
      
    </div>
    );
};

export default LtiHome;