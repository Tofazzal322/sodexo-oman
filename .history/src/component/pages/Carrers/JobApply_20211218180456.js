import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const JobApply = () => {
    const { jobsId } = useParams();
    console.log(jobsId);
    return (
        <div>
            <h1> Job Apply form</h1>
            <div>
                <Row>
                    <Col sm={12} md={7}> lg={ }</Col>
                    <Col xs={12} md={5}></Col>
                </Row>
            </div>
        </div>
    );
};

export default JobApply;