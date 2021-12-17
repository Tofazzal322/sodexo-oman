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
            <img className="rou" src={food.imgUrl} alt="" />
                <h5 className="mt-2 fw-bold title-1"> {food.title} </h5>
                <p className="mt-2 "> {food.paragraph} </p>
                <Button className="button-color fw-bold"> Find out more</Button>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default OurFoodServices;
