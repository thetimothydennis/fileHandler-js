import React, {useState, useEffect} from "react";
import axios from "axios";

function GetAllFiles() {

    const [files, setFiles] = useState([]);

    async function apiCall() {
        let response = await axios.get("/api/files")
        setFiles(response.data);
    }

    async function handleDeleteFileClick(e) {
        await axios.delete(`/api/getfile/${e.target.id}`).then(() => {
            return window.location = "/";
        })
    }

    useEffect(() => {
        apiCall();
    }, [])

    return (
        <div>
            <h2>Files currently in database</h2>
            <table>
            {files.map(file => 
                <tr key={file._id}>
                    <td>
                        <a href={`/${file.path}`} rel="noreferrer" target="_blank">{file.filename}</a>
                    </td>
                    <td>
                        <button id={file._id} onClick={handleDeleteFileClick}>Delete</button>
                    </td>
                </tr>)}
            </table>
        </div>
    )
}

export default GetAllFiles;