import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {
  const { id, name, image, specialty, experience } = chef;

  return (
    <Container>
      <Row >
        <Col>
          <Card key={id} data-chef={chef}>
            <Link to={`/chefs/${id}`}>{name}</Link>
            <h3>Speciality: {specialty}</h3>
            <img style={{ width: '100%', height:'19rem' }} src={image} alt="" />
            <h6>{experience} of Experience</h6>
            <Link to={`/chefs/${id}`}><Button>Get a schedule</Button></Link>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ChefCard;