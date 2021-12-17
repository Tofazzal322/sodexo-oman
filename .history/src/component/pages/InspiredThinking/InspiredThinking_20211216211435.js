import React, { useState } from "react";
import { Button, Card, CardGroup, Carousel, Col, Row } from "react-bootstrap";

const InspiredThinking = () => {
  const [index, setIndex] = useState(0);
  const [inspired, setInspired]=useState([])

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };



  return (
    <div className="mt-5 container mb-5">
      <h1 className="mt-5 title-1"> Inspired Thinking</h1>

          <Carousel className="mt-4 text-danger" activeIndex={index} onSelect={handleSelect}>
              {/* <span aria-hidden="true" className="carousel-control-next-icon" /> */}
        <Carousel.Item>
          {/* <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          /> */}

          <Row xs={2} md={4} className="g-2">
            {Array.from({ length: 4 }).map((_, idx) => (
              <Col>
                <Card>
                  <Card.Img variant="top" src="https://uk.sodexo.com/files/live/sites/com-uk/files/Inspired%20Thinking/Schools/BB_derivative1_healthyeating_blogthumb_360x270.png?t=thumbnail360" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          {/* <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          /> */}
          <Row xs={2} md={4} className="g-2">
            {Array.from({ length: 4 }).map((_, idx) => (
              <Col>
                <Card>
                  <Card.Img variant="top" src="https://uk.sodexo.com/files/live/sites/com-uk/files/Inspired%20Thinking/Business%20and%20Industry/2021-04-21_Vital%20Spaces_Newsletter1_EnergyManagement_Thumbnail.jpg?t=thumbnail360" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          {/* <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          /> */}
          <Row xs={2} md={4} className="g-2">
            {Array.from({ length: 4 }).map((_, idx) => (
              <Col>
                <Card>
                  <Card.Img variant="top" src="https://uk.sodexo.com/files/live/sites/com-uk/files/Inspired%20Thinking/Schools/BB_derivative2_sustainability_blogthumb_360x270.png?t=thumbnail360" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
        </Carousel.Item>
        {/* <span aria-hidden="true" className="carousel-control-next-icon" /> */}
      </Carousel>
    </div>
  );
};

export default InspiredThinking;
