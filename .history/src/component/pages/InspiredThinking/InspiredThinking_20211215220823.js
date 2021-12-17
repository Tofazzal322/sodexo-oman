import React from 'react';
import { Button, Card, CardGroup, Col, Row } from 'react-bootstrap';

const InspiredThinking = () => {

    return (
        <div className='mt-5 container'>
            

            
            <h1 className='mt-5 title-1'> Inspired Thinking</h1>
            <Row xs={2} md={4} className="g-2">
  {Array.from({ length: 4 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
        </div>
    );
};

export default InspiredThinking;