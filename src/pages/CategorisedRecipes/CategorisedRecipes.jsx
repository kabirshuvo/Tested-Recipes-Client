
import { useLoaderData } from 'react-router-dom';
import RecipeCard from '../../components/RecipeCard/RecipeCard';

const CategorisedRecipes = () => {
    // const {id} = useParams();
    const categorisedRecipes = useLoaderData();
    return (
        <div>
           numbers of Recipes Abailable: {categorisedRecipes.length}
{
    categorisedRecipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe}></RecipeCard>)
}
        </div>
    );
};

export default CategorisedRecipes;