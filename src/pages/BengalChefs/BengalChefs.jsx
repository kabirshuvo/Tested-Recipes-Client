import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


const BengalChefs = () => {
    const [indvRecipes, SetIndvRecipes] = useState([]);

    useEffect(() => {
        fetch(`https://tested-recipes-server-kabirshuvo.vercel.app/bengalchefs`)
        .then(res => res.json())
        .then(data => SetIndvRecipes(data))
        .catch(error => console.log(error))
    })
    // to={`/recipes/${recipe.id}`}
    
    return (
        <div>
      <h3 className="text-center py-5">Bengal Popular Chefs are here </h3>
      <Container style={{height: '100%'}} fluid>
        <Row>
          {indvRecipes.map((indvrecipe) => (
            <Col key={indvrecipe.id} xs={12} sm={6} md={4}>
              <Card className="mb-3">
                <Card.Img style={{height: '29rem'}} variant="top" src={indvrecipe.picture} alt={indvrecipe.name} />
                <Card.Body>
                  <Card.Title>{indvrecipe.name}</Card.Title>
                  <Card.Text>
                    Experience: {indvrecipe.experience} years<br />
                    Recipes: {indvrecipe.recipes}<br />
                    Likes: {indvrecipe.likes}<br />
                    Specialty: {indvrecipe.specialty}<br />
                    Awards: {indvrecipe.awards.join(', ')}
                  </Card.Text>
                </Card.Body>
                <Link to={`/banglarchef/bengalchefs/${indvrecipe.id}`}><Button style={{width: '100%'}}>View Recipes</Button></Link>
              </Card>
            </Col>
          ))}
        </Row>
        
      </Container>
    </div>
    );
};

export default BengalChefs;