import { Button, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link, } from 'react-router-dom';

const BengalFoodCard = ({ bFood }) => {
  
  const { id, category, description, image, name } = bFood;

  const renderTooltip = () => (
    <Tooltip id={`tooltip-${id}`}>{name}</Tooltip>
  );

  return (
    <Card className="recipe-card" style={{ width: "100%", height: "100%" }}>
      <Link to={`/bengalfoods/${id}`}>
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip()}
        >
          <Card.Img
            style={{ width: "100%", height: "19rem" }}
            variant="top"
            src={image}
            alt={name}
          />
        </OverlayTrigger>
      </Link>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{category}</Card.Text>
        <Card.Text>price: lol</Card.Text>
        <small style={{ fontSize: "12px" }}>Order Id: {id}</small>
      </Card.Body>
      <Link to={`/bengalfoods/${id}`}>
        <Button>View Recipe</Button>
      </Link>
    </Card>
  );
};

export default BengalFoodCard;
