import React from 'react';
import { Button, Card } from 'react-bootstrap';

const BengalFoodCard = ({bFood}) => {

    console.log(bFood)

    const {id, category, description, image, name} = bFood;

    return (
        <Card className="recipe-card" style={{ width: "100%", height:"100%" }}>
        <Card.Img style={{ width: "100%", height:"19rem" }} variant="top" src={image} alt="" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>{category}</Card.Text>
          <Card.Text>price: lol</Card.Text>
          <small style={{ fontSize: "12px" }}>Order Id: {id}</small>
        </Card.Body>
        <Button>Order Now</Button>
      </Card>
    );
};

export default BengalFoodCard;