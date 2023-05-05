import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FaHeart,  FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";

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

  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Row className="justify-content-center">
      <Col md={6}>
        <Card style={{ height: "100%" }}>
          <Card.Img variant="top" src={image} alt={name} />
        </Card>
      </Col>
      <Col md={6}>
        <Card style={{ height: "100%", display: "flex", flexDirection: "column" }}>
          <Card.Body>
            <Card.Header>
              <Card.Title>{name}</Card.Title>
            </Card.Header>
            <Card.Text>{category}</Card.Text>
            <Card.Text>{description}</Card.Text>
            <Card.Text>Ingredients:</Card.Text>
            <ul>
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <Card.Text>Cooking Method: {cookingMethod}</Card.Text>
            <Card.Text>
  Rating:{" "}
  <Rating
    initialRating={rating}
    emptySymbol={<FaRegStar />}
    fullSymbol={<FaStar />}
    fractions={2}
    readonly
  />
</Card.Text>
            <Card.Text>Price: {price}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <p
              onClick={handleFavoriteClick}
              style={{ color: isFavorite ? "red" : "black", cursor: "pointer" }}
            >
              Add to Favorite <FaHeart />
            </p>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  );
};

export default SelectedBengalFood;
