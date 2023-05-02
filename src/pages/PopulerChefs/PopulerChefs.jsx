import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ChefCard from "../../components/ChefCard/ChefCard";

const PopulerChefs = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/chefs`)
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <Container fluid>
      <h3>Popular Chefs are here</h3>
      <Row xs={1} md={2} lg={4}>
        {chefs.map((chef) => (
          <Col key={chef.id}>
            <ChefCard chef={chef} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PopulerChefs;
