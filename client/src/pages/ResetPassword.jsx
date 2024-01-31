import React from "react";
import { useSearchParams } from "react-router-dom";

function ResetPassword() {
    const [searchParams, setSearchParams] = useSearchParams();
    const token = searchParams.get("token")
    return (
        <div>
            <h1>Reset User Password</h1>
        </div>
    )
}

export default ResetPassword;