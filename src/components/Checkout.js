import Button from "./bodyComponents/Button";

const Checkout = (props) => {
    return (
        <div className="Checkout">
            <h4> Shopping Cart</h4>
            <hr />
            <div className="SelectedItems">

            </div>
            <Button buttonName={Checkout} />
        </div>
    )
}

export default Checkout;