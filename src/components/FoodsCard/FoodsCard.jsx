

const FoodsCard = ({food}) => {

    const {id, name} = food;
    return (
        <div>
            <h3>Foods Card {id}</h3>

            <p>{name}</p>


        </div>
    );
};

export default FoodsCard;