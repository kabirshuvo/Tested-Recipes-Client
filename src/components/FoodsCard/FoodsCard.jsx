import { Card } from "react-bootstrap";


const FoodsCard = ({food}) => {

    const { name, image, description, category} = food;
    return (
        <div>
            <Card>
                <Card.Header>{name}</Card.Header>
                <Card.Img> <img src={image}  /></Card.Img>
                <Card.Body>{description}</Card.Body>
                <Card.Footer>{category}</Card.Footer>
            </Card>


        </div>
    );
};

export default FoodsCard;
