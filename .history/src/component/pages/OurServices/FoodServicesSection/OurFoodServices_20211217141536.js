import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

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
      <Row>
        {ourFood.map((food) => (
            <Col md={6}> 
                <h1></h1>
                <img src={food.imgUrl} alt="" />
            </Col>
        ))}
      </Row>
    </div>
  );
};

export default OurFoodServices;
