import React from "react";
import axios from "axios";

const handleClick = async function() {
    let deleteAll = await axios.delete("/api/delete-files").then(() => {
        return window.location = "/";
    })
    console.log(deleteAll.data);
}

function DeleteAllFromDb() {
    return (
        <div>
            <button className="action-button" onClick={handleClick}>Delete All From DB</button>
        </div>
    )
}

export default DeleteAllFromDb;