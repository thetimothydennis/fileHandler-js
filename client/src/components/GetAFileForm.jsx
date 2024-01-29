import React from "react";

function GetAFileForm() {
    return (
        <div>
            <h2>Get a file by filename</h2>
            <form id="get-file" method="POST" action="/getfile">
                <input className="input-field" type="text" name="file-get" />
                <input className="input-field" type="Submit" />
            </form>
        </div>
    )
}

export default GetAFileForm;