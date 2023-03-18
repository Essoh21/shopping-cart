import cart from '../../icons/bitmap.png';

const Cart = (props) => {
    return (
        <div
            className='Cart'
            onClick={() => {
                alert('should display userCart items ');
            }}
        >
            <img src={cart} alt="cart-icon" />
            <span>{props.numberOfArticles}</span>
        </div>
    )
}

export default Cart;