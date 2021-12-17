import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";

const OurFoodServices = () => {
  const [ourFood, setOurFood] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/food-services")
      .then((res) => res.json())
      .then((data) => setOurFood(data));
  }, []);

  return (
    <div className="container">
      <h1 className="text-center mt-5 title-1 fw-bold"> Our food services</h1>
      <Row className="mb-5">
        {ourFood.map((food) => (
          <Col className="mb-5" sm={12} md={6}>
            <img src={food.imgUrl} alt="" />
                <h6 className="mt-2"> {food.title} </h6>
                <p className=""> {food.paragraph} </p>
                <Button> Find out more</Button>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default OurFoodServices;
