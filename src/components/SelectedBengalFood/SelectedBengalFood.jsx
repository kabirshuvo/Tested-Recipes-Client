
import { useLoaderData } from 'react-router-dom';

const SelectedBengalFood = () => {
    const selectedBanglaFood = useLoaderData();
    console.log(selectedBanglaFood);

    const {category, id, image, name, description} = selectedBanglaFood
    return (
        <div>
            <h2>{name}</h2>
            <small>{id}</small>
            <img src={image} alt={name} />
            <p>{category}</p>
            <p>{description}</p>
        </div>
    );
};

export default SelectedBengalFood;