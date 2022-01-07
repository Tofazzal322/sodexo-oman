import React from 'react';

const StrategicFacilities = () => {
    return (
        <div className="container">
      <h1 className="text-center mt-5 mb-5 title-1 title-font-size "> Our food services</h1>
      <Row className="mb-5">
        {ourFood.map((food) => (
          <Col className="mb-5" sm={12} md={6}>
            <img className="rounded" src={food.imgUrl} alt="" />
                <h5 className="mt-2 fw-bold title-1"> {food.title} </h5>
                <p className="mt-2 "> {food.paragraph} </p>
                <Link to="/latestNews"> <Button className="button-color fw-bold"> Find out more</Button></Link>
          </Col>
        ))}
      </Row>
    </div>
    );
};

export default StrategicFacilities;