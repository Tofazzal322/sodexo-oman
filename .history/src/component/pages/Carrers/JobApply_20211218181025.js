import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const JobApply = () => {
    const [job, setJob]=useState({})
    const { jobsId } = useParams();
    console.log(jobsId,job);

    useEffect(() => {
        fetch(`http://localhost:5000/jobs/${jobsId}`)
            .then(res => res.json())
        .then(data=>setJob(data))
    },[])
    return (
        <div>
            <h1> Job Apply form</h1>
            <div>
                <Row>
                    <Col sm={12} md={7} lg={7}>
                        <h1>{job.title} </h1>
                        <hr />

                        <h3> Job Introduction</h3>
                        <p> WE NEED YOU!</p>
                        <p>As we head into winter, the message from the government is clear - we all must be as vigilant as possible and get a COVID-19 test whenever necessary. We at Sodexo are proud to be continuing our important work supporting the national response to control the virus.</p>
                    
                    </Col>
                    <Col xs={12} md={5} lg={5} >


                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default JobApply;