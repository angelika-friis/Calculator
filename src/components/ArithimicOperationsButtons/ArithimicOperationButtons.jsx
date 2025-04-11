const ArithimicOperationButtons = ({ currentValue, setCurrentValue, calculation, setCalculation, answer, setAnswer}) => {
    const handleAddition = () => {
        const addend = calculation + String(currentValue);
        setCurrentValue(0);
        setCalculation(addend + '+');
    }

    const handleSubbtraction = () => {
        const minuend = calculation + String(currentValue);
        setCurrentValue(0);
        setCalculation(minuend + '-');
    }

    const handleMultiplication = () => {
        const multiplikator = calculation + String(currentValue);
        setCurrentValue(0);
        setCalculation(multiplikator + '*');
    }

    const handleDivision = () => {
        const dividend = calculation + String(currentValue);
        setCurrentValue(0);
        setCalculation(dividend + '/');
    }

    const handleCalculation = () => {
        console.log(calculation + String(currentValue))
        let res = Number(eval(calculation + String(currentValue)));
        setAnswer(res);
        setCurrentValue(res);
    }
    
    return (
        <div>
            <button type="button" onClick={handleAddition} >+</button>
            <button type="button" onClick={handleSubbtraction} >-</button>
            <button type="button" onClick={handleMultiplication} >*</button>
            <button type="button" onClick={handleDivision} >/</button>
            <button type="button" onClick={handleCalculation}>=</button >
        </div>
    )
}

export default ArithimicOperationButtons;