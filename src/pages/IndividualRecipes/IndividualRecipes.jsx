
import { useLoaderData } from "react-router-dom";


const IndividualRecipes = () => {

   const individualChefsRecipes = useLoaderData();

    console.log(individualChefsRecipes)

    const {name} = individualChefsRecipes

    return (
        <div>
            <p>Individual recipes {name}</p>
        </div>
    );
};

export default IndividualRecipes;