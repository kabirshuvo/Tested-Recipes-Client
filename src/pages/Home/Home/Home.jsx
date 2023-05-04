import BengalChefs from "../../BengalChefs/BengalChefs";
import BengalFoods from "../../BengalFoods/BengalFoods";
import HeroSection from "../../HeroSection/HeroSection";
import PopularRecipes from "../../PopularRecipes/PopularRecipes";
import PopulerChefs from "../../PopulerChefs/PopulerChefs";


const Home = () => {
    return (
        <div>
        <HeroSection></HeroSection>
        <BengalFoods></BengalFoods>
        <BengalChefs></BengalChefs>
        <PopularRecipes></PopularRecipes>
        <PopulerChefs></PopulerChefs>
        </div>
    );
};

export default Home;