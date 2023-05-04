import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BengalFoodCard from "../../components/BengalFoodCard/BengalFoodCard";

const BengalFoods = () => {
  const [bengalFoods, setBengalFoods] = useState([]);

 

  useEffect(() => {
    fetch(`https://tested-recipes-server-kabirshuvo.vercel.app/bengalFoods`)
      .then((res) => res.json())
      .then((data) => setBengalFoods(data))
      .catch((error) => console.log(error));
  });
  return (
    <div>
     
      <Container fluid>
        <h3 className="text-center p-4">Popular Bengal Foods are Here</h3>

        <Row  xs={1} md={2} lg={3}>
            
            {bengalFoods.map((bFood) => (
                <Col className="py-2" key={bFood.id}>
                    <BengalFoodCard bFood={bFood}></BengalFoodCard>
                </Col>
            ))}
        
        
        </Row>
      </Container>
    </div>
  );
};

export default BengalFoods;


