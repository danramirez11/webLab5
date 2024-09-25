import { Food } from '../../types/types';
import './Menu.css';

type MenuProps = {
    food: Food[];
    onAddFood: (food: Food) => void;
}

const Menu = ({food, onAddFood}: MenuProps) => {
    return (
        <div className='menu'>
        <h2>Menu</h2>
        { food.map((item) => {
            return (
                <div key={item.id} 
                className="menu-item"
                onClick={() => onAddFood(item)}>
                    <p><b>{item.name}</b></p>
                    <p>${item.price}</p>
                </div>
            );
        })}
        </div>
    );
}

export default Menu;