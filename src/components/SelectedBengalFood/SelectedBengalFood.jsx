import { Card, Col, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

import { FaHeart } from "react-icons/fa";

const SelectedBengalFood = () => {
  const selectedBanglaFood = useLoaderData();
  console.log(selectedBanglaFood);

  const {
    cookingMethod,
    rating,
    category,
    description,
    image,
    name,
    ingredients,
    price,
  } = selectedBanglaFood;
  return (
    <Row className="justify-content-center">
      <Col md={6}>
        <Card>
          <Card.Img variant="top" src={image} alt={name} />
        </Card>
      </Col>
      <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Header>
              <Card.Title>{name}</Card.Title>
            </Card.Header>
            <Card.Text>{category}</Card.Text>
            <Card.Text>{description}</Card.Text>
            <Card.Text>Ingredients:</Card.Text>
            <Card.Text>Cooking Method: {cookingMethod}</Card.Text>
            <Card.Text>Rating: {rating}</Card.Text>
            <Card.Text>Price: {price}</Card.Text>

            <ul>
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </Card.Body>
         <Card.Footer> <p>Addto Favorite <FaHeart></FaHeart></p></Card.Footer>
        </Card>
      </Col>
    </Row>
  );
};

export default SelectedBengalFood;
