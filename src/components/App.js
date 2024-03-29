
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Shop";
import Header from "./Header";
import Page from "./Page";
import NavBar from "./NavBar";
import Cathegory from "./bodyComponents/Cathegory";
import ItemDetails from "./bodyComponents/ItemDetails";
import { useEffect, useState } from "react";
import Checkout from "./Checkout";
import items from "../imagesSrcs";


const App = () => {
    let savedData = !localStorage.getItem("cart")
        ? []
        : JSON.parse(localStorage.getItem("cart"));
    const [searchTerm, setSearchTerm] = useState("");

    const [cart, setCart] = useState(savedData);
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])


    const images = items.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
    const handleAddToCart = (item) => {
        if (cart.some((cartItem) => cartItem.id === item.id)) {
            return;
        }
        setCart(
            prevousCart => [...prevousCart, item]
        );
    }

    const onSearchChange = (event) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);
    }
    const onQtyChange = (id, event) => {
        const newCart = cart.map(item => {
            if ((item.id === id) && (Number(event.target.value) <= 5)) {
                return { ...item, number: Number(event.target.value) };
            }
            return item;
        });
        setCart(newCart);
    }
    const onRemoveButtonClick = (id) => {
        const newCart = cart.filter(item => item.id !== id);
        setCart(newCart);
    };
    return (
        <BrowserRouter basename="/shopping-cart">
            <Header userCart={cart} onSearchChange={onSearchChange} searchTerm={searchTerm} />
            <NavBar />
            <Routes>
                <Route path="/checkout" element={<Checkout cart={cart} onQtyChange={onQtyChange}
                    onRemoveButtonClick={onRemoveButtonClick} />} />
                <Route path="/"
                    element={<Page cathegory="Planet" userCart={cart}
                        handleAddToCart={handleAddToCart}
                        images={images}
                    />}
                />
                <Route path="/Shop" element={<Shop
                    handleAddToCart={handleAddToCart}
                    images={images}
                />} />
                <Route path="/Shop/:cathegory" element={<Cathegory
                    handleAddToCart={handleAddToCart}
                    images={images}
                />} />
                <Route path="/Shop/Item/:parameter"
                    element={<ItemDetails
                        handleAddToCart={handleAddToCart} />} />
                <Route path="/Shop/:cathegory/Item/:parameter"
                    element={<ItemDetails
                        handleAddToCart={handleAddToCart} />} />
                <Route path="/Item/:parameter"
                    element={<ItemDetails
                        handleAddToCart={handleAddToCart} />} />
                <Route path="/:parameter"
                    element={<ItemDetails
                        handleAddToCart={handleAddToCart} />} />
            </Routes>

        </BrowserRouter>

    )
}

export default App;