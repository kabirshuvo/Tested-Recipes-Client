import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BengalFoodCard from "../../components/BengalFoodCard/BengalFoodCard";

const BengalFoods = () => {
  const [bengalFoods, setBengalFoods] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/bengalFoods`)
      .then((res) => res.json())
      .then((data) => setBengalFoods(data))
      .catch((error) => console.log(error));
  });
  return (
    <div>
     
      <Container fluid>
        <h3>Popular Bengal Foods are Here</h3>

        <Row xs={1} md={2} lg={3}>
            
            {bengalFoods.map((bFood) => (
                <Col key={bFood.id}>
                    <BengalFoodCard bFood={bFood}></BengalFoodCard>
                </Col>
            ))}
        
        
        </Row>
      </Container>
    </div>
  );
};

export default BengalFoods;

// <Container fluid>
//       <h3>Popular Chefs are here</h3>
//       <Row xs={1} md={2} lg={4}>
//         {chefs.map((chef) => (
//           <Col key={chef.id}>
//             <ChefCard chef={chef} />
//           </Col>
//         ))}
//       </Row>
//     </Container>
