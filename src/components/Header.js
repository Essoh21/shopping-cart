
import Cart from "./headerComponents/Cart";
import Search from "./headerComponents/Search";

const Header = (props) => {
    const numberOfArticles = props.userCart.reduce((prev, cur) => {
        return prev + cur.number;
    }, 0)

    return (
        <div className="Header">
            <Search onSearchChange={props.onSearchChange} searchTerm={props.searchTerm} />
            <Cart numberOfArticles={numberOfArticles}
                userCart={props.userCart}
            />
        </div>
    )
}

export default Header;