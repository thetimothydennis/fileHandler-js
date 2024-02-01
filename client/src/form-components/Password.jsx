import React from "react";

function PasswordField() {
    return (
        <div id="password-field" className="form-field">
            <label htmlFor="password" id="password-label">Password</label>
            <input type="password" name="password" id="password-input" />
        </div>
    )
}

export default PasswordField;