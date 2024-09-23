import useOrder from '../../hooks/useOrder';
import { Food } from '../../types/types';
import './Menu.css';

type MenuProps = {
    food: Food[];
}

const Menu = ({food}: MenuProps) => {
    const { addFood } = useOrder();

    return (
        <div className='menu'>
        <h2>Menu</h2>
        { food.map((item) => {
            return (
                <div key={item.id} 
                className="menu-item"
                onClick={() => addFood(item)}>
                    <p><b>{item.name}</b></p>
                    <p>${item.price}</p>
                </div>
            );
        })}
        </div>
    );
}

export default Menu;