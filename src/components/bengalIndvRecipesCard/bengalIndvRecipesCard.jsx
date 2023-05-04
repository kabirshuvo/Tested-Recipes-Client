import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

import { FaHeart } from 'react-icons/fa';

const BengalIndvRecipesCard = ({icr}) => {

    const {name, id, description, category, image} = icr;

    return (
        <Card>
      <Row>
        <Col md={4}>
          <Card.Img variant="top" src={image} alt={name} />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>Category: {category}</Card.Text>
            <Button variant="primary">View Recipes</Button>
            <p>Like <FaHeart></FaHeart></p>

          </Card.Body>
        </Col>
      </Row>
    </Card>
    );
};

export default BengalIndvRecipesCard;