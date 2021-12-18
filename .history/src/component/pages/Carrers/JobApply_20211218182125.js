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
        <div className=''>
             <div className="findJob-banner-bg">
        <div className="food-banner-main">
          <div className="findJob-banner-title ">
            <h1 className="title-1 fw-bold "> Our vacancies </h1>
          </div>
          <div className="horizontal-line"></div>
        </div>
      </div>
            <div>
                <Row className='container'>
                    <Col className=''  sm={12} md={7} lg={7}>
                        <h2 className='title-1 mt-5'>{job.title} </h2>
                        <hr />

                        <h3> Job Introduction</h3>
                        <p> WE NEED YOU!</p>
                        <p>As we head into winter, the message from the government is clear - we all must be as vigilant as possible and get a COVID-19 test whenever necessary. We at Sodexo are proud to be continuing our important work supporting the national response to control the virus.</p>
                        <p>Our COVID-19 Testing Sites are key to this and we are seeking additional testing support at many of our centres across the UK.</p>

                        <h4> Role Responsibility</h4>
                        <ol>
                            <li>o be professional, pleasant, friendly, courteous and helpful always whilst carrying out duties to the highest standard</li>
                            <li>To maintain and endorse Government guidelines with reference to Covid19</li>
                            <li>Provide assistance and ensure that site policies and procedures are adhered to</li>
                            <li>o be professional, pleasant, friendly, courteous and helpful always whilst carrying out duties to the highest standard</li>
                            <li>To maintain and endorse Government guidelines with reference to Covid19</li>
                            <li>Provide assistance and ensure that site policies and procedures are adhered to</li>
                            <li>Provide assistance and ensure that site policies and procedures are adhered to</li>
                        </ol>

                        <h4>The Ideal Candidate</h4>
                        <ol>
                            <li>o be professional, pleasant, friendly, courteous and helpful always whilst carrying out duties to the highest standard</li>
                            <li>To maintain and endorse Government guidelines with reference to Covid19</li>
                            <li>Provide assistance and ensure that site policies and procedures are adhered to</li>
                            <li>o be professional, pleasant, friendly, courteous and helpful always whilst carrying out duties to the highest standard</li>
                            <li>To maintain and endorse Government guidelines with reference to Covid19</li>
                            <li>Provide assistance and ensure that site policies and procedures are adhered to</li>
                        </ol>
                        <h4> Package Description</h4>
                        <ol>
                            <li>o be professional, pleasant, friendly, courteous and helpful always whilst carrying out duties to the highest standard</li>
                            <li>To maintain and endorse Government guidelines with reference to Covid19</li>
                            <li>Provide assistance and ensure that site policies and procedures are adhered to</li>
                            <li>o be professional, pleasant, friendly, courteous and helpful always whilst carrying out duties to the highest standard</li>
                            <li>To maintain and endorse Government guidelines with reference to Covid19</li>
                            <li>Provide assistance and ensure that site policies and procedures are adhered to</li>
                            <li>o be professional, pleasant, friendly, courteous and helpful always whilst carrying out duties to the highest standard</li>
                            <li>To maintain and endorse Government guidelines with reference to Covid19</li>
                            <li>Provide assistance and ensure that site policies and procedures are adhered to</li>
                        </ol>
                    
                    </Col>
                    <Col className='' xs={12} md={5} lg={5} >

                        <img className='ms-5 w-100 mt-5' src="https://sdxuk-uploads-eu-west-2.s3.amazonaws.com/R0e92DR9ccP8RjD7Aab2hKD3SewdP9bh5t76i7bjmPS1ba1sr4S4oskRp71.jpg" alt="" />
                        <div>
                            <Row></Row>
                        </div>

                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default JobApply;