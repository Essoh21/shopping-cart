import { Link } from 'react-router-dom';
import cart from '../../icons/bitmap.png';

const Cart = (props) => {

    return (
        <Link to="/checkout">
            <div className='Cart'>
                <img src={cart} alt="cart-icon" />
                <span>{props.numberOfArticles}</span>
            </div>
        </Link>
    )
}

export default Cart;