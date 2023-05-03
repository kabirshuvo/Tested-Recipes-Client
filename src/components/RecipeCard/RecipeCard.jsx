

const RecipeCard = ({recipe}) => {

    const {id, name, image, description, category, } = recipe;
   
    return (
        <div>
            <h3>{name}</h3> 
            <p>{description}</p>
            <h6>{category}</h6>
            <img src={image} alt="" />
            
        </div>
    );
};

export default RecipeCard;