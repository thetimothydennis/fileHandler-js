import React from "react";
import GetAFileForm from "./GetAFileForm.jsx";
import GetAllFiles from "./GetAllFiles.jsx";


function GetFilesView() {
    return (
        <div>
            <GetAFileForm />
            <br />
            <GetAllFiles />
        </div>
    )
}

export default GetFilesView;