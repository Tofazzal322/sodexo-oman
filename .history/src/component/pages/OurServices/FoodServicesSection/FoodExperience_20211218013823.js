import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const FoodExperience = () => {
const [index, setIndex] = useState(0);
  const [inspired, setInspired] = useState([]);
  const [foodServices, setFoodServices] = useState([]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    fetch("http://localhost:5000/inspired")
      .then((res) => res.json())
      .then((data) => setFoodServices(data));
  }, []);
    

    return (
        <div className='container mt-5 '>
            <h1 className='title-1 fw-bold text-center '> Catering wonderful food experience</h1>
            <div className=' content-center w-50 paragraph-align' >
                <p className='text-center '>The food we eat is changing - consumers are looking for active and healthier options. Consumer demand, legislation and corporate responsibility are combining to shape Sodexo's approach to healthier food and drink.</p>
                <hr />
            </div>
            <div>
                {
                    foodServices.map(item=> <Row className='mt-5'>
                    <Col sm={12} md={5}>
                        <img className='rounded' src={item.imgUrl} alt="" />
                    </Col>
                    <Col sm={12} md={7} >
                        <h2 className='title-1'>Passionate chefs, mouthwatering food</h2>
                        <p className=''>It all starts with our chefs – they deliver food which delights our customers, they are well trained and passionate about what they do.  From corporate catering in staff restaurants to fine dining at world-class sporting events, we operate on many levels aiming to give our customers an exceptional food experience.</p>
                        <Button className='fs-5 fw-bold px-4'> Meet our chefs</Button>
                    </Col>
                </Row>)
                }

                <Row className='mt-5'>
                    <Col sm={12} md={5}>
                        <img className='rounded' src="https://uk.sodexo.com/files/live/sites/com-uk/files/Images/04%20Image%20blocks%20550%20x%20309/Our%20Chefs.jpg?t=thumbnail360" alt="" />
                    </Col>
                    <Col sm={12} md={7} >
                        <h2 className='title-1'>Passionate chefs, mouthwatering food</h2>
                        <p className=''>It all starts with our chefs – they deliver food which delights our customers, they are well trained and passionate about what they do.  From corporate catering in staff restaurants to fine dining at world-class sporting events, we operate on many levels aiming to give our customers an exceptional food experience.</p>
                        <Button className='fs-5 fw-bold px-4'> Meet our chefs</Button>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default FoodExperience;