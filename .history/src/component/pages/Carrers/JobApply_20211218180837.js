import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const JobApply = () => {
    const [job, setJob]=useState({})
    const { jobsId } = useParams();
    console.log(jobsId);

    useEffect(() => {
        fetch(`http://localhost:5000/jobs/${}`)
            .then(res => res.json())
        .then(data=>setJob(data))
    },[])
    return (
        <div>
            <h1> Job Apply form</h1>
            <div>
                <Row>
                    <Col sm={12} md={7} lg={7}>
                    <h1>{job} </h1>
                    
                    </Col>
                    <Col xs={12} md={5} lg={5} >


                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default JobApply;