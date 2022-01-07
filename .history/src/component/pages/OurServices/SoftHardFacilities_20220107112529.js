import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
const SoftHardFacilities = () => {
    const [index, setIndex] = useState(0);
  
  const [foodServices, setFoodServices] = useState([]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    fetch("https://quiet-savannah-34726.herokuapp.com/inspired")
      .then((res) => res.json())
      .then((data) => setFoodServices(data));
  }, []);
    return (
       <div className="container mt-5 ">
      {/* <h1 className="title-1 fw-bold text-center ">
        {" "}
        Catering wonderful food experience
      </h1> */}
      <div className=" content-center w-50 paragraph-align">
        <p className="text-center ">
          The food we eat is changing - consumers are looking for active and
          healthier options. Consumer demand, legislation and corporate
          responsibility are combining to shape Sodexo's approach to healthier
          food and drink.
        </p>
        <hr />
      </div>
      <div>
        {foodServices.slice(0, 8).map((item) => (
          <Row className="mt-5">
            <Col sm={12} md={5}>
              <img className="rounded" src={item.imgUrl} alt="" />
            </Col>
            <Col sm={12} md={7}>
              <h2 className="title-1">{item.title}</h2>
              <p className="">{item.paragraph.slice(0, 400)}</p>
              <Button className="fs-5 fw-bold px-4"> Explore more</Button>
            </Col>
          </Row>
        ))}
      </div>
    </div>
    );
};

export default SoftHardFacilities;