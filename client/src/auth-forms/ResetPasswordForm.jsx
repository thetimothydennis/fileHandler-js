import React from "react";
import PasswordField from "../form-components/Password";
import SecondPasswordField from "../form-components/SecondPasswordField";

function ResetPasswordForm() {

    return (
        <form className="auth-form" method="POST" action="/api/auth/resetpassword">
            <PasswordField />
            <SecondPasswordField />
            <button className="auth-button" type="submit">Reset Password</button>
        </form>
    )
}

export default ResetPasswordForm;