import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Shop";
import Header from "./Header";
import Page from "./Page";
import NavBar from "./NavBar";
import Cathegory from "./bodyComponents/Cathegory";


const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <NavBar />
            <Routes>
                <Route path="/" element={<Page cathegory="Planet" />} />
                <Route path="Shop" element={<Shop />} />
                <Route path="Shop/:cathegory" element={<Cathegory />} />
            </Routes>

        </BrowserRouter>

    )
}

export default App;