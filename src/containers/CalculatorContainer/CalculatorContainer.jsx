import { useEffect, useState } from "react";
import ButtonsNumbers from "../../components/ButtonsNumbers/ButtonsNumbers";
import DeleteButton from "../../components/DeleteButton/DeleteButton";
import ArithimicOperationButtons from "../../components/ArithimicOperationsButtons/ArithimicOperationButtons";

const CalculatorContainer = () => {
    const [currentValue, setCurrentValue] = useState('');
    const [calculation, setCalculation] = useState('');
    const [answer, setAnswer] = useState(null);

    const clear = () => {
        setCurrentValue('');
        setCalculation('');
        setAnswer(null);
    }

    const makeNeg = () => {
        setCurrentValue(currentValue * -1);
    }

    return (
        <div className="board">
            {/* <input type="numbers" value={currentValue} placeholder="0" onChange={(e) => setCurrentValue(e.target.value)}/> */}
            <p>{currentValue}</p>
            <ButtonsNumbers currentValue={currentValue} setCurrentValue={setCurrentValue}/>
            <ArithimicOperationButtons currentValue={currentValue} setCurrentValue={setCurrentValue} calculation={calculation} setCalculation={setCalculation} answer={answer} setAnswer={setAnswer} />
            <button type="button" onClick={clear}>AC</button>
            <button type="button" onClick={makeNeg}>+/-</button>
            <DeleteButton currentValue={currentValue} setCurrentValue={setCurrentValue} />
        </div>
    )
}

export default CalculatorContainer;