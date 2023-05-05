
import { useLoaderData } from 'react-router-dom';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import useTitle from '../../hooks/useTitle';

const CategorisedRecipes = () => {
    // const {id} = useParams();
   useTitle('Categorised Recipes')
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