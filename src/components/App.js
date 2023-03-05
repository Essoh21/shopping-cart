import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";


const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <h1> Hello world! </h1>
        </BrowserRouter>

    )
}

export default App;