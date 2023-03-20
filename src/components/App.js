
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Shop";
import Header from "./Header";
import Page from "./Page";
import NavBar from "./NavBar";
import Cathegory from "./bodyComponents/Cathegory";
import ItemDetails from "./bodyComponents/ItemDetails";
import { useEffect, useState } from "react";
import Checkout from "./Checkout";


const App = () => {
    let savedData = !localStorage.getItem("cart")
        ? []
        : JSON.parse(localStorage.getItem("cart"));

    const [cart, setCart] = useState(savedData);
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])

    const handleAddToCart = (item) => {

        setCart(
            prevousCart => [...prevousCart, item]
        );
    }

    const onQtyChange = (id, event) => {
        const newCart = cart.map(item => {
            if (item.id === id) {
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
        <BrowserRouter>
            <Header userCart={cart} />
            <NavBar />
            <Routes>
                <Route path="/checkout" element={<Checkout cart={cart} onQtyChange={onQtyChange}
                    onRemoveButtonClick={onRemoveButtonClick} />} />
                <Route path="/"
                    element={<Page cathegory="Planet" userCart={cart}
                        handleAddToCart={handleAddToCart} />} />
                <Route path="/Shop" element={<Shop
                    handleAddToCart={handleAddToCart}
                />} />
                <Route path="/Shop/:cathegory" element={<Cathegory
                    handleAddToCart={handleAddToCart}
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