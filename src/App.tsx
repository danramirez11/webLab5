import Bill from "./components/Bill/Bill"
import Header from "./components/Header/Header"
import Menu from "./components/Menu/Menu"
import food from "./data/food"
import useOrder from "./hooks/useOrder"
import './theme/style.css';

const App = () => {
    const { actualBill } = useOrder();

    return (
        <>
        <Header/>
        <section>
        <Menu food={food}/>
        <Bill bill={actualBill}/>
        </section>
        </>
    )
}

export default App