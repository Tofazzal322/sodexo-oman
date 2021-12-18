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
                    <Col ></Col>
                    <Col></Col>
                </Row>
            </div>
        </div>
    );
};

export default JobApply;