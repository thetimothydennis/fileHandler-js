import React from "react";

function NavBar(props) {

    function handleMenuClick(e) {
        props.setRenderID(e.target.id)
    }

    return (
        <div id="nav-bar">
            {props.isAdmin ? 
                    <ul id="nav-menu">
                        <li onClick={handleMenuClick} id="upload-menu-item" className="nav-item">Upload</li>
                        <li onClick={handleMenuClick} id="list-files-menu-item" className="nav-item">List All Files</li>
                        <li onClick={handleMenuClick} id="admin-menu-item" className="nav-item">Admin</li>
                    </ul> : ""
            }
        </div>
    )
}

export default NavBar;