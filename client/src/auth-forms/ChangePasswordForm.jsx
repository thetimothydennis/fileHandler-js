import React from "react";
import PasswordField from "../form-components/Password";
import SecondPasswordField from "../form-components/SecondPasswordField";

function ChangePasswordForm() {

    return (
        <form className="auth-form" method="POST" action="/api/auth/changepassword">
            <PasswordField />
            <SecondPasswordField />
            <button className="auth-button" type="submit">Change Password</button>
        </form>
    )
}

export default ChangePasswordForm;