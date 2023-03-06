import Cart from "./headerComponents/Cart";
import Search from "./headerComponents/Search";

const Header = () => {
    return (
        <div className="Header">
            <Search />
            <Cart numberOfArticles="3" />
        </div>
    )
}

export default Header;