const DeleteButton = ({ currentValue, setCurrentValue }) => {
    const handleDelete = () => {
        setCurrentValue((currentValue - (currentValue % 10)) / 10);
    }

    return (
        <button
            type="button"
            onClick={(e) => {handleDelete()}}
        >
            DEL
        </button>
    )
}

export default DeleteButton;