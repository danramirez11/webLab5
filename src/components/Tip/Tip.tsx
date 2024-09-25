import './Tip.css';

type TipProps = {
    onAddTip: (tip: number) => void;
}

const Tip = ({onAddTip}: TipProps) => {

    return (
        <div className='tip'>
            <h3>Tip</h3>
            <label>
                <input 
                    type="radio" 
                    name="tip" 
                    value="10" 
                    onChange={() => onAddTip(10)} 
                />
                10%
            </label>
            <label>
                <input 
                    type="radio" 
                    name="tip" 
                    value="15" 
                    onChange={() => onAddTip(15)} 
                />
                15%
            </label>
            <label>
                <input 
                    type="radio" 
                    name="tip" 
                    value="20" 
                    onChange={() => onAddTip(20)} 
                />
                20%
            </label>
        </div>
    );
};

export default Tip;
