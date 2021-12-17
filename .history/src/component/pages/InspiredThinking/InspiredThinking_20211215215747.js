import React from 'react';
import { Button, Card } from 'react-bootstrap';

const InspiredThinking = () => {
    return (
        <div className='mt-5 container'>
            <h1 className='mt-5 title-1'> Inspired Thinking</h1>
            <Card sm={4} >
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

        </div>
    );
};

export default InspiredThinking;