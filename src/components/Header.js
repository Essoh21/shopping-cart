
import Cart from "./headerComponents/Cart";
import Search from "./headerComponents/Search";

const Header = (props) => {

    return (
        <div className="Header">
            <Search />
            <Cart numberOfArticles={props.userCart.length}
                userCart={props.userCart}
            />
        </div>
    )
}

export default Header;