import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


const PopularRecipes = () => {


    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/recipes`)
        .then(res => res.json())
        .then(data => setRecipes(data))
        .catch(error => console.log(error))
    }, [])
    return (
        <Container>
        <h3>Categorized Recipes are here</h3>
        <div className="photo-frame">
          <Row style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}} className="card-grid">
            {recipes.map((recipe) => (
              <Col key={recipe.id} xs={12} sm={6} md={4} lg={3}>
                <Card style={{width: '100%', marginBottom: '1rem'}} className="recipe-card">
                  <Link to={`/recipes/${recipe.id}`}>
                    <Card.Img  variant="top" src={recipe.image} alt={recipe.name} />
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