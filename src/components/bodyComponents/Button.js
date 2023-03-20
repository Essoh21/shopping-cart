const Button = (props) => {
    return (
        <button type="button"
            onClick={props.handleButtonClick} className={props.ClassName}>
            {props.buttonName}
        </button>

    )
}

export default Button;