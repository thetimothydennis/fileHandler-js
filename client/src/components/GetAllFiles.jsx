import React, {useState, useEffect} from "react";
import axios from "axios";

function GetAllFiles() {

    const [files, setFiles] = useState([]);

    async function apiCall() {
        let response = await axios.get("/api/files")
        console.log(response.data)
        setFiles(response.data);
    }

    useEffect(() => {
        apiCall();
    }, [])

    return (
        <div>
            <h2>Files currently in database</h2>
            {files.map(file => <p key={file._id}><a href={`/${file.path}`} rel="noreferrer" target="_blank">{file.filename}</a></p>)}
        </div>
    )
}

export default GetAllFiles;