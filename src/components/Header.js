
import { useEffect, useState } from "react";
import Cart from "./headerComponents/Cart";
import Search from "./headerComponents/Search";

const Header = () => {

    const [storedData, setStoredData] = useState([]);
    useEffect(() => {
        const data = localStorage.getItem("cart");
        if (data) {
            setStoredData(JSON.parse(data));
        }

    }, []);

    return (
        <div className="Header">
            <Search />
            <Cart numberOfArticles={storedData.length} />
        </div>
    )
}

export default Header;