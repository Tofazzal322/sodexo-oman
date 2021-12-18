import React, { useEffect, useState } from "react";
import {  Card,  Carousel, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const InspiredThinking = () => {
  const [index, setIndex] = useState(0);
  const [inspired, setInspired] = useState([]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    fetch("https://quiet-savannah-34726.herokuapp.com/inspired")
      .then((res) => res.json())
      .then((data) => setInspired(data));
  }, []);

  return (
    <div className="mt-5 container mb-5 inspired-container ">
      <h1 className="mt-5 title-1 inspired-title">
        Inspired Thinking {inspired.length}{" "}
      </h1>

      <Carousel
        className="mt-4 inspired-carousel "
        activeIndex={index}
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <Row xs={2} md={4} className="g-2 ">
            {inspired.slice(0, 4).map((item) => (
              <Col>
                <Card className="inspired-card">
                  <Card.Img variant="top" src={item.imgUrl} />
                  <Card.Body>
                    <p>
                      {" "}
                      <span className="subcategory-text">
                        {item.subCategory}
                      </span>{" "}
                      <small className="text-danger">{item.date}</small>{" "}
                    </p>
                    <Card.Title className="title-1">
                      {" "}
                      <Link className="text-decoration" to="/news">
                        {item.title}
                      </Link>{" "}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row xs={2} md={4} className="g-2">
            {inspired.slice(4, 8).map((item) => (
              <Col>
                <Card className="inspired-card">
                  <Card.Img variant="top" src={item.imgUrl} />
                  <Card.Body>
                    <p>
                      {" "}
                      <span className="subcategory-text">
                        {item.subCategory}
                      </span>{" "}
                      <small className="text-danger">{item.date}</small>{" "}
                    </p>
                    <Card.Title className="title-1">
                      {" "}
                      <Link className="text-decoration" to="/news">
                        {item.title}
                      </Link>{" "}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row xs={2} md={4} className="g-2">
            {inspired.slice(8, 12).map((item) => (
              <Col>
                <Card className="inspired-card">
                  <Card.Img variant="top" src={item.imgUrl} />
                  <Card.Body>
                    <p>
                      {" "}
                      <span className="subcategory-text">
                        {item.subCategory}
                      </span>{" "}
                      <small className="text-danger">{item.date}</small>{" "}
                    </p>
                    <Card.Title className="title-1">
                      {" "}
                      <Link className="text-decoration" to="/news">
                        {item.title}
                      </Link>{" "}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default InspiredThinking;
