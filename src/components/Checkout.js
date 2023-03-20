import Button from "./bodyComponents/Button";
import Item from "./checkoutComponents/Item";

const Checkout = ({ cart, handleInputChange }) => {
    return (
        <div className="Checkout">
            <h4> Shopping Cart</h4>
            <hr />
            <div className="SelectedItems">
                {cart.map((item) => {
                    return <Item key={item.id} title={item.title}
                        src={item.src} number={item.number}
                        handleInputChange={handleInputChange} />
                })}
            </div>
            <hr />
            <div className="Subtotal">
                Subtotal: {58888}$
            </div>
            <Button buttonName={"Checkout"} ClassName={"checkoutButton"} />
        </div>
    )
}

export default Checkout;