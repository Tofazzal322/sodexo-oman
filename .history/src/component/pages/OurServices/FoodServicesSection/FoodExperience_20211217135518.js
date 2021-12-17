import React from 'react';
import { Col, Row } from 'react-bootstrap';

const FoodExperience = () => {
    return (
        <div className='container mt-5 '>
            <h1 className='title-1 fw-bold text-center '> Catering wonderful food experience</h1>
            <div className=' content-center w-50 paragraph-align' >
                 <p className='text-center '>The food we eat is changing - consumers are looking for active and healthier options. Consumer demand, legislation and corporate responsibility are combining to shape Sodexo's approach to healthier food and drink.</p>
            </div>
            <div>
                <Row>
                    <Col md={5}>
                        <img src="https://uk.sodexo.com/files/live/sites/com-uk/files/Images/04%20Image%20blocks%20550%20x%20309/Our%20Chefs.jpg?t=thumbnail360" alt="" />
                    </Col>
                    <Col >
                        <h1 className='title-1'>Passionate chefs, mouthwatering food</h1>
                        <p className=''>It all starts with our chefs – they deliver food which delights our customers, they are well trained and passionate about what they do.  From corporate catering in staff restaurants to fine dining at world-class sporting events, we operate on many levels aiming to give our customers an exceptional food experience.</p>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default FoodExperience;