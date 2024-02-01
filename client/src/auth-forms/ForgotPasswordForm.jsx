import React from "react";
import EmailField from "../form-components/Email";

function ForgotPasswordForm() {

    return (
        <form className="auth-form" method="POST" action="/api/auth/forgotpassword">
            <EmailField />
            <button className="auth-button" type="submit">Forgot Password</button>
        </form>
    )
}

export default ForgotPasswordForm;