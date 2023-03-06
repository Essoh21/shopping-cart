import cart from '../../icons/bitmap.png';

const Cart = (props) => {
    return (
        <div className='Cart'>
            <img src={cart} alt="cart-icon" />
            <span>{props.numberOfArticles}</span>
        </div>
    )
}

export default Cart;