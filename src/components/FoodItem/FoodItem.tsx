import { Food } from "../../types/types";
import './FoodItem.css';

type FoodItemProps = {
    food: Food;
    onRemoveFood: (food: Food) => void;
}

const FoodItem = ({food, onRemoveFood}: FoodItemProps) => {
    return (
        <div className="foodItem">
            <div>
                <p>{food.name} - ${food.price}</p>
                <p>Quantity: {food.quantity} - <b>${food.price*food.quantity}</b></p>
            </div>
            <button onClick={() => onRemoveFood(food)}>X</button>
        </div>
    );
}

export default FoodItem;