import Bill from "./components/Bill/Bill"
import Header from "./components/Header/Header"
import Menu from "./components/Menu/Menu"
import food from "./data/food"
import useOrder from "./hooks/useOrder"
import './theme/style.css';

const App = () => {
    const { actualBill, addFood, addTip, removeFood, addBill} = useOrder();

    return (
        <>
        <Header/>
        <section>
        <Menu onAddFood={addFood} food={food}/>
        <Bill bill={actualBill} onAddTip={addTip} onRemoveFood={removeFood} onSubmitOrder={addBill}/>
        </section>
        </>
    )
}

export default App