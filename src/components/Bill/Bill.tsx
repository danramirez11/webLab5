import useOrder from "../../hooks/useOrder";
import { BillType } from "../../types/types";
import FoodItem from "../FoodItem/FoodItem";
import Tip from "../Tip/Tip";
import './Bill.css';

type BillProps = {
    bill: BillType;
}

const Bill = ({bill}: BillProps) => {
    const { removeFood } = useOrder();

    return (
        <div className="bill">
            <h2>Bill</h2>

            {bill.food.length === 0 ? 
            
            <p>No food selected</p> : 

            <>

            <div className="bill-foods">
                {bill.food.map((item) => {
                    return (
                        <FoodItem key={item.id} food={item} onDelete={removeFood}/>
                    );
                })}
            </div>

            <Tip/>

            <h3>Totals</h3>

            <div className="bill-totals">
                <p>Subtotal: <b>${bill.subtotal}</b></p>
                <p>Tip: <b>${bill.tip}</b></p>
                <p>Total: <b>${bill.total}</b></p>
            </div>
            
            <button>Place Order</button>
            </>
            
            }
        </div>
    );
}

export default Bill;