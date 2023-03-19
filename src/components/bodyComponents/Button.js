const Button = (props) => {
    return (
        <button type="button" onClick={props.handleButtonClick}>{props.buttonName}</button>

    )
}

export default Button;