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
                    <Col>
                        <img src="https://uk.sodexo.com/files/live/sites/com-uk/files/Images/04%20Image%20blocks%20550%20x%20309/Our%20Chefs.jpg?t=thumbnail360" alt="" />
                    </Col>
                    <Col>
                        <h1></h1>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default FoodExperience;