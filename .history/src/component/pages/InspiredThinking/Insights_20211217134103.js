import React, { useEffect, useState } from 'react';

const Insights = () => {
    const [index, setIndex] = useState(0);
  const [inspired, setInspired] = useState([]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    fetch("http://localhost:5000/inspired")
      .then((res) => res.json())
      .then((data) => setInspired(data));
  }, []);
    
    return (
        <div className='mb-5 mt-5'>
            <h1 className='title-1 fw-bold text-center'> Insights </h1>
            <Carousel
        className="mt-4 inspired-carousel "
        activeIndex={index}
        onSelect={handleSelect}
      >
               <Carousel.Item>
          {/* <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          /> */}

          <Row xs={2} md={4} className="g-2 ">
            {inspired.slice(0, 4).map((item) => (
              <Col>
                <Card className="inspired-card">
                  <Card.Img variant="top" src={item.imgUrl} />
                  <Card.Body>
                    <p>
                      {" "}
                      <span className="subcategory-text">
                        {item.subCategory}
                      </span>{" "}
                      <small className="text-danger">{item.date}</small>{" "}
                    </p>
                    <Card.Title className="title-1">
                      {" "}
                      <Link className="text-decoration" to="/news">
                        {item.title}
                      </Link>{" "}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          {/* <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          /> */}
          <Row xs={2} md={4} className="g-2">
            {inspired.slice(4, 8).map((item) => (
              <Col>
                <Card className="inspired-card">
                  <Card.Img variant="top" src={item.imgUrl} />
                  <Card.Body>
                    <p>
                      {" "}
                      <span className="subcategory-text">
                        {item.subCategory}
                      </span>{" "}
                      <small className="text-danger">{item.date}</small>{" "}
                    </p>
                    <Card.Title className="title-1">
                      {" "}
                      <Link className="text-decoration" to="/news">
                        {item.title}
                      </Link>{" "}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          {/* <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          /> */}
          <Row xs={2} md={4} className="g-2">
            {inspired.slice(8, 12).map((item) => (
              <Col>
                <Card className="inspired-card">
                  <Card.Img variant="top" src={item.imgUrl} />
                  <Card.Body>
                    <p>
                      {" "}
                      <span className="subcategory-text">
                        {item.subCategory}
                      </span>{" "}
                      <small className="text-danger">{item.date}</small>{" "}
                    </p>
                    <Card.Title className="title-1">
                      {" "}
                      <Link className="text-decoration" to="/news">
                        {item.title}
                      </Link>{" "}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
        </Carousel.Item>
        {/* <span aria-hidden="true" className="carousel-control-next-icon" /> */}
      </Carousel>
            
        </div>
    );
};

export default Insights;