import React from "react";
import GetAFileForm from "../components/GetAFileForm.jsx";
import GetAllFiles from "../components/GetAllFiles.jsx";


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