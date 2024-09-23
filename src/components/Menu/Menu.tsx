import './Menu.css';
import food from '../../data/food';

const Menu = () => {
    return (
        <div>
        <h2>Menu</h2>
        { food.map((item) => {
            return (
                <div key={item.id} className="menu-item">
                    <p><b>{item.name}</b></p>
                    <p>${item.price}</p>
                </div>
            );
        })}
        </div>
    );
}

export default Menu;