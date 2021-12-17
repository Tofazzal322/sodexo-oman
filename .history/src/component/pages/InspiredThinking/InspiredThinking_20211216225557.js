import React, { useEffect, useState } from "react";
import { Button, Card, CardGroup, Carousel, Col, Row } from "react-bootstrap";

const InspiredThinking = () => {
  const [index, setIndex] = useState(0);
  const [inspired, setInspired]=useState([])

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    fetch("http://localhost:5000/inspired")
      .then(res => res.json())
    .then(data=> setInspired(data))

  },[])


  return (
    <div className="mt-5 container mb-5">
      <h1 className="mt-5 title-1"> Inspired Thinking {inspired.length} </h1>

          <Carousel className="mt-4 inspired-c " activeIndex={index} onSelect={handleSelect}>
              {/* <span aria-hidden="true" className="carousel-control-next-icon" /> */}
        <Carousel.Item>
          {/* <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          /> */}

          <Row xs={2} md={4} className="g-2 ">
            {inspired.slice(0,4).map(item => (
              <Col>
                <Card className="inspired-card">
                  <Card.Img variant="top" src={item.imgUrl} />
                  <Card.Body>
                    <p > <span className="subcategory-text">{item.subCategory}</span> <small className="text-danger">{item.date}</small> </p>
                    <Card.Title className="title-1"> {item.title}  </Card.Title>
                    
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
            {inspired.slice(4,8).map(item => (
              <Col>
                <Card className="inspired-card">
                  <Card.Img variant="top" src={item.imgUrl} />
                  <Card.Body>
                     <p > <span className="subcategory-text">{item.subCategory}</span> <small className="text-danger">{item.date}</small> </p>
                    <Card.Title className="title-1"> {item.title}  </Card.Title>
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
            {inspired.slice(8,12).map(item => (
              <Col>
                <Card className="inspired-card">
                  <Card.Img variant="top" src={item.imgUrl} />
                  <Card.Body>
                     <p > <span className="subcategory-text">{item.subCategory}</span> <small className="text-danger">{item.date}</small> </p>
                    <Card.Title className="title-1"> {item.title}  </Card.Title>
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
