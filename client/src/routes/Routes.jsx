import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../pages/App.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import ChangePassword from "../pages/ChangePassword.jsx";
import ResetPassword from "../pages/ResetPassword.jsx";
import ForgotPassword from "../pages/ForgotPassword.jsx";
import Frontpage from "../pages/Frontpage.jsx";

function RoutesUI() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Frontpage />} />
                <Route path="/app" element={<App />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/changepassword" element={<ChangePassword />} />
                <Route path="/forgotpassword" element={<ForgotPassword />} />
                <Route path="/resetpassword?" element={<ResetPassword />} />
            </Routes>
        </div>
    )
}

export default RoutesUI;