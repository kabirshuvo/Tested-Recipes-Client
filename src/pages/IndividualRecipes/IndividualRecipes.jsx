
import { useLoaderData } from "react-router-dom";
import BengalIndvRecipesCard from "../../components/bengalIndvRecipesCard/bengalIndvRecipesCard";
import useTitle from "../../hooks/useTitle";


const IndividualRecipes = () => {

    useTitle('IndividualRecipes')

   const individualChefsRecipes = useLoaderData();

    

    

    return (
        <div>
            <p>Individual recipes {individualChefsRecipes.length} </p>
            <>
            {
                individualChefsRecipes.map(icr => <BengalIndvRecipesCard key={icr.id} icr={icr}></BengalIndvRecipesCard>)
            }
            </>
        </div>
    );
};

export default IndividualRecipes;

{/* <div>
           numbers of Recipes Abailable: {categorisedRecipes.length}
{
    categorisedRecipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe}></RecipeCard>)
}
        </div> */}