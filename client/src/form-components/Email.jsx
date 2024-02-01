import React from "react";

function EmailField() {
    return (
        <div id="email-field" className="form-field">
            <label htmlFor="email" id="email-label">Email</label>
            <input type="text" name="email" id="email-input" />
        </div>
    )
}

export default EmailField;