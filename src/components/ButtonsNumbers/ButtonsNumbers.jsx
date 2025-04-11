const ButtonsNumbers = ({ currentValue, setCurrentValue }) => {
    const handleClick = (num) => {
        setCurrentValue(currentValue * 10 + num)
    }

    return (
        <div className="buttonpad">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
                <button key={'btn-' + num} type="button" onClick={(e) => handleClick(num)}>{num}</button>
            ))}
        </div>
    )
}

export default ButtonsNumbers;