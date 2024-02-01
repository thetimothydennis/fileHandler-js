import React from "react";

function SecondPasswordField() {
    return (
        <div id="second-password-field" className="form-field">
            <label htmlFor="second-password" id="second-password-label">Retype password</label>
            <input required minLength="6" maxLength="25" type="password" name="second-password" id="second-password-input" />
        </div>
    )
}

export default SecondPasswordField;