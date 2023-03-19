import AddToCart from "./AddToCart"
import Buy from "./Buy"

const BuyCard = (props) => {
    return (
        <div className="BuyCard">
            <div>
                <h4>
                    Price: {props.price} $
                </h4>
            </div>
            <div>
                <AddToCart
                    handleAddToCartClick={() => {
                        props.handleAddToCart(props.currentItem);
                    }}
                />
                <Buy />
            </div>
        </div>
    )
}

export default BuyCard;