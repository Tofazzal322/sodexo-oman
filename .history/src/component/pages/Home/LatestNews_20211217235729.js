import React, { useEffect, useState } from "react";
import { Card, Carousel, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const LatestNews = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const [latestNews, setLatestNews] = useState([]);
  console.log(latestNews);

  useEffect(() => {
    fetch("http://localhost:5000/news")
      .then((res) => res.json())
      .then((data) => setLatestNews(data));
  }, []);
  return (
    <div className="news-bg ">
      <h2 className="text-center text-light fs-1">
        
        Latest news (<span className="text-warning">{latestNews.length}</span>)
      </h2>
     

      <Carousel
        className="mt-4 carousel-container "
        activeIndex={index}
        onSelect={handleSelect}
      >
      
        <Carousel.Item>
      

          <Row xs={2} md={4} className="g-2">
            {latestNews.slice(0, 4).map((news) => (
              <Col >
                <Card className="news-card">
                
                  <Card.Body>
                    <Card.Title className="title-1">{news.date}</Card.Title>
                    <Card.Text className="text-primary">{news.title}</Card.Text>
                    <Link className="more-btn mt-3" to="/news"> More </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
        
          <Row xs={2} md={4} className="g-2">
            {latestNews.slice(4, 8).map((news) => (
              <Col>
                <Card className="news-card">
                
                  <Card.Body>
                    <Card.Title className="title-1">{news.date}</Card.Title>
                    <Card.Text className="text-primary">{news.title}</Card.Text>
                    <Link className="more-btn mt-3" to="/news"> More </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
        
          <Row xs={2} md={4} className="g-2">
            {latestNews.slice(8, 12).map((news) => (
              <Col>
                <Card className="news-card">
                  {/* <Card.Img
                    variant="top"
                    src="https://uk.sodexo.com/files/live/sites/com-uk/files/Inspired%20Thinking/Schools/BB_derivative2_sustainability_blogthumb_360x270.png?t=thumbnail360"
                  /> */}
                  <Card.Body>
                    <Card.Title className="title-1">{news.date}</Card.Title>
                    <Card.Text className="text-primary">{news.title}</Card.Text>
                    <Link className="more-btn mt-3" to="/news"> More </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default LatestNews;
