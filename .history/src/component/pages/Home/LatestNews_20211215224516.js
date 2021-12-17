import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const LatestNews = () => {
  return (
    <div className="container">
      <h2> Latest news </h2>
      <Row xs={1} md={4} className="g-4 ">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col className="g-4">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default LatestNews;
