
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
    const chefDetailInfo = useLoaderData();
    console.log(chefDetailInfo);

    const {likes, experience, name, image} = chefDetailInfo;

    return (
        <div>
            <h3>{name}</h3>
            <p>{likes}</p>
            <img src={image} alt="" />
            <p>{experience}</p>


        </div>
    );
};

export default ChefDetails;

