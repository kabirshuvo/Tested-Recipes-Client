import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";


const PopularRecipes = () => {


    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/recipes`)
        .then(res => res.json())
        .then(data => setRecipes(data))
        .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <h3>Popular Recipes are here</h3>

            {
                recipes.map(recipe => <Card key={recipe.id}>

                    <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>


                </Card>)
            }
        </div>
    );
};

export default PopularRecipes;