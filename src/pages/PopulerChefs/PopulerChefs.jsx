import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ChefCard from "../../components/ChefCard/ChefCard";

const PopulerChefs = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch(`https://tested-recipes-server-kabirshuvo.vercel.app/chefs`)
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <Container className="my-5" fluid>
      <h3 className="my-5 text-center bold">Popular Chefs are here</h3>
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
