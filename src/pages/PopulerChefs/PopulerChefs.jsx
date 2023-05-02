import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";


const PopulerChefs = () => {

    const [chefs, setChefs] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/chefs`)
        .then(res => res.json())
        .then(data => setChefs(data))
        .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <h3>Popular Chefs are here</h3>
            {
                chefs.map(chef => <Card key={chef.id}>
                    <Link to={`/chefs/${chef.id}`}>{chef.name}</Link>
                </Card>)
            }
        </div>
    );
};

export default PopulerChefs;