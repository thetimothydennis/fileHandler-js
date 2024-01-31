import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../pages/App.jsx";
import Frontpage from "../pages/Frontpage.jsx";

function RoutesUI() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Frontpage />} />
                <Route path="/app" element={<App />} />
                {/*<Route path="/login" element={} />
                <Route path="/register" element={} />
                <Route path="/changepassword" element={} />
                <Route path="/forgotpassword" element={} />
                <Route path="/resetpassword:token" element={} />*/}
            </Routes>
        </div>
    )
}

export default RoutesUI;