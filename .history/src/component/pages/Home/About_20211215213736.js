import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <Row className="container">
        <Col className="p-5" sm={12} md={6} lg={6}>
                  <img
                      className="img-fluid rounded"
            src="https://uk.sodexo.com/files/live/sites/com-global/files/16%20Miscellaneous/Homepage%20image%20742x568px.jpg"
            alt=""
          />
        </Col>
        <Col className="p-4" sm={12} md={6} lg={6}>
          <h1 className="title-1"> About Sodexo</h1>
          <p className="text-secondary">
            Thanks to our 412,000 employees, Sodexo provides catering,
            facilities management, employee benefits and personal home services
            to 100 million consumers daily in 56 countries. At Sodexo we believe
            in the difference a day makes. That’s why we are proud to focus on
            people’s essential needs: we see them as key to improve the quality
            of life. We know that by focusing on the tangible, the real, the
            concrete improvements, day after day, for millions of people, we
            have a big impact not only on individuals but also on society and
            the planet. We believe it all starts with the everyday.
          </p>
          <h5> Choose</h5>
          <div>
            <Button className="me-3 button-color"> Your Industry</Button>
            <Button className="button-color"> Discover now </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default About;
