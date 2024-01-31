import React from "react";
import { BrowserRouter } from "react-router-dom";
// import routes from Routes.jsx
import RoutesUI from "./Routes";

function App() {

    return (
        <BrowserRouter>
            <RoutesUI />
        </BrowserRouter>
    )
}

export default App;