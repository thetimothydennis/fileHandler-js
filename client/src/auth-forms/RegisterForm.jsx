import React from "react";
import UsernameField from "../form-components/Username.jsx";
import PasswordField from "../form-components/Password.jsx";
import SecondPasswordField from "../form-components/SecondPasswordField.jsx";
import EmailField from "../form-components/Email.jsx";

function RegisterForm() {

    return (
        <form className="auth-form" method="POST" action="/api/auth/register">
            <EmailField />
            <UsernameField />
            <PasswordField />
            <SecondPasswordField />
            <button className="auth-button" type="submit">Register Account</button>
        </form>
    )
}

export default RegisterForm;