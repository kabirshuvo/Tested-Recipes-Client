
import { Button } from 'react-bootstrap';
import { FaBeer } from 'react-icons/fa';

const HeroSection = () => {
    return (
        <>
         <div>
            <h2>
            Our Recipes are TestdBy Tousands Cliibraties
            </h2>
            <Button>Join the Tested Community <FaBeer></FaBeer></Button>
         </div>
         <div>
            <img src="https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="HeroSection image" />

            <Button>Best Recipes To test <FaBeer></FaBeer></Button>
        
        
        
        </div>   
        </>
    );
};

export default HeroSection;