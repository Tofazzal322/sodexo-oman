import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const LatestNews = () => {
    
  return (
    <div className=" news-bg">
      <h2 className="text-center title-1 fs-1"> Latest news </h2>
      <Row xs={1} md={4} className="g-1 mb-5">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col className="g-4">
            <Card >
              <Card.Body>
                {/* <Card.Title>Card Title</Card.Title> */}
                <Card.Subtitle className="mb-2 text-muted">
                  DECEMBER 13, 2021
                </Card.Subtitle>
                <Card.Text>
                  Two Sodexo women recognised in WiHTL Women to Watch and Role Models index
                </Card.Text>
                <Card.Link href="#">More</Card.Link>
                {/* <Card.Link href="#">Another Link</Card.Link> */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default LatestNews;
