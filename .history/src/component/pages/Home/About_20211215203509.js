import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const About = () => {
  return (
    <div>
      
      <Row>
        <Col sm={12} md={6} lg={6}> </Col>
              <Col sm={12} md={6} lg={6}>
                  <h1> About Sodexo</h1>
                  <p>Thanks to our 412,000 employees, Sodexo provides catering, facilities management, employee benefits and personal home services to 100 million consumers daily in 56 countries. At Sodexo we believe in the difference a day makes. That’s why we are proud to focus on people’s essential needs: we see them as key to improve the quality of life. We know that by focusing on the tangible, the real, the concrete improvements, day after day, for millions of people, we have a big impact not only on individuals but also on society and the planet. We believe it all starts with the everyday.</p>
                  <h5> Choose</h5>
                  <Button> Your Indust</Button>

        </Col>
      </Row>
    </div>
  );
};

export default About;
