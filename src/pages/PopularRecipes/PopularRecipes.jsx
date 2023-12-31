import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const PopularRecipes = () => {
  const [recipes, setRecipes] = useState([]);
useTitle('Popular Recipes')
  useEffect(() => {
    fetch(`https://tested-recipes-server-kabirshuvo.vercel.app/recipes`)
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <Container className="my-5">
      <h3 className="text-center my-5">Categorized Recipes are here</h3>
      <div className="photo-frame">
        <Row
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
          className="card-grid"
        >
          {recipes.map((recipe) => (
            <Col key={recipe.id} xs={12} sm={6} md={4} lg={3}>
              <Card
                style={{ width: "100%", marginBottom: "1rem" }}
                className="recipe-card"
              >
                <Link to={`/recipes/${recipe.id}`}>
                  <Card.Img
                    variant="top"
                    src={recipe.image}
                    alt={recipe.name}
                  />
                  <Card.Body>
                    <Card.Title>{recipe.name}</Card.Title>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default PopularRecipes;
