import React from "react";
import { useSearchParams } from "react-router-dom";
import ResetPasswordForm from "../auth-forms/ResetPasswordForm.jsx";


function ResetPassword() {
    const [searchParams, setSearchParams] = useSearchParams();
    const token = searchParams.get("token")
    return (
        <div>
            <h1>Reset User Password</h1>
            <ResetPasswordForm />
        </div>
    )
}

export default ResetPassword;