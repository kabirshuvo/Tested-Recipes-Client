import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import FoodsCard from "../../components/FoodsCard/FoodsCard";
import useTitle from "../../hooks/useTitle";


const Foods = () => {
    const [foods, setFoods] = useState([]);
useTitle('Foods');
  useEffect(() => {
    fetch(`https://tested-recipes-server-kabirshuvo.vercel.app/foods`)
      .then((res) => res.json())
      .then((data) => setFoods(data))
      .catch((error) => console.log(error));
  }, []);
    return (
        <Container fluid>
        <h3>All Foods</h3>
        <Row xs={1} md={2} lg={3}>
          {foods.map((food) => (
            <Col key={food.id}>
              <FoodsCard food={food}></FoodsCard>
            </Col>
          ))}
        </Row>
      </Container>
    );
};

export default Foods;