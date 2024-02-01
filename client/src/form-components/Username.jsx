import React from "react";

function UsernameField() {
    return (
        <div id="username-field" className="form-field">
            <label htmlFor="username" id="username-label">Username</label>
            <input type="text" name="username" id="username-input" />
        </div>
    )
}

export default UsernameField;