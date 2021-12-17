import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const LatestNews = () => {
    const [latestNews, setLatestNews] = useState([]);
    console.log(latestNews);

    useEffect(() => {
        fetch('http://localhost:5000/news')
            .then(res => res.json())
        .then(data=>setLatestNews(data))
    },[])
  return (
    <div className="news-bg">
      <h2 className="text-center title-1 fs-1"> Latest news {latestNews.length} </h2>
      <Row xs={1} md={4} className="g-1 mb-5">
        {latestNews.map(news => (
          <Col className="g-4">
            <Card >
              <Card.Body>
                {/* <Card.Title>Card Title</Card.Title> */}
                <Card.Subtitle className="mb-2 text-muted">
                  {date}
                </Card.Subtitle>
                <Card.Text>
                  Two Sodexo women recognised in WiHTL Women to Watch and Role Models index
                </Card.Text>
                <Card.Link href="#">More</Card.Link>
                {/* <Card.Link href="#">Another Link</Card.Link> */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default LatestNews;
