import HeroSection from "../../HeroSection/HeroSection";
import PopularRecipes from "../../PopularRecipes/PopularRecipes";
import PopulerChefs from "../../PopulerChefs/PopulerChefs";


const Home = () => {
    return (
        <div>
        <HeroSection></HeroSection>
        <PopularRecipes></PopularRecipes>
        <PopulerChefs></PopulerChefs>
        </div>
    );
};

export default Home;