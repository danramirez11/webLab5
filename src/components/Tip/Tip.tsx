import './Tip.css';
import useOrder from '../../hooks/useOrder';

const Tip = () => {
    const { addTip } = useOrder();

    return (
        <div className='tip'>
            <h3>Tip</h3>
            <label>
                <input 
                    type="radio" 
                    name="tip" 
                    value="10" 
                    onChange={() => addTip(10)} 
                />
                10%
            </label>
            <label>
                <input 
                    type="radio" 
                    name="tip" 
                    value="15" 
                    onChange={() => addTip(15)} 
                />
                15%
            </label>
            <label>
                <input 
                    type="radio" 
                    name="tip" 
                    value="20" 
                    onChange={() => addTip(20)} 
                />
                20%
            </label>
        </div>
    );
};

export default Tip;
