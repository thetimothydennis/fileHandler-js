import React from "react";
import UsernameField from "../form-components/Username.jsx";
import PasswordField from "../form-components/Password.jsx";

function LoginForm() {

    return (
        <form className="auth-form" method="POST" action="/api/auth/login">
            <UsernameField />
            <PasswordField />
            <button className="auth-button" type="submit">Login</button>
        </form>
    )
}

export default LoginForm;