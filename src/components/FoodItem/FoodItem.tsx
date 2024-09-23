import { Food } from "../../types/types";

const FoodItem = (food: Food) => {
    return (
        <div>
            <p>{food.name} - ${food.price}</p>
            <p>Quantity: {food.quantity} - <b>${food.price*food.quantity}</b></p>
        </div>
    );
}

export default FoodItem;