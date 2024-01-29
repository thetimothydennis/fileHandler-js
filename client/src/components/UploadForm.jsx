import React from "react";

function UploadForm() {
    return (
        <div>
            <h2>Upload a file</h2>
            <form id="file-form" method="POST" encType="multipart/form-data" action="/api/fileupload">
                <input className="input-field" type="file" name="file-upload" id="fileinput" />
                <input className="input-field" id="file-submit" name="submit-file" type="submit" />
            </form>
        </div>
    )
}

export default UploadForm;