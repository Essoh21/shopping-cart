import Button from "./bodyComponents/Button";
import Item from "./checkoutComponents/Item";

const Checkout = ({ cart, onQtyChange, onRemoveButtonClick }) => {

    const subbtotal = cart.reduce((prev, cur) => prev + (cur.number * Number(cur.price)), 0)
    return (
        <div className="Checkout">
            <h4> Shopping Cart</h4>
            <hr />
            <div className="SelectedItems">
                {cart.map((item) => {
                    return <Item key={item.id} title={item.title}
                        price={item.price}
                        src={item.src} number={item.number}
                        handleQtyChange={(event) => {
                            onQtyChange(item.id, event)
                        }}
                        handleButtonClick={() => onRemoveButtonClick(item.id)}
                    />
                })}
            </div>
            <hr />
            <div className="Subtotal">
                Subtotal: {subbtotal}$
            </div>
            <Button buttonName={"Checkout"} ClassName={"checkoutButton"} />
        </div>
    )
}

export default Checkout;