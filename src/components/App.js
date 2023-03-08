import React from "react";
import { BrowserRouter } from "react-router-dom";
import Body from "./Body";
import Header from "./Header";
import NavBar from "./NavBar";


const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <NavBar />
            <Body />
        </BrowserRouter>

    )
}

export default App;