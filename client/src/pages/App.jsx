import React, {useState, useEffect} from "react";
import UploadForm from "../views/UploadForm.jsx";
import GetFilesView from "../views/GetFilesView.jsx";
import AdminView from "../views/AdminView.jsx";
import NavBar from "../components/NavBar.jsx";

function App() {
  const [render, setRender] = useState(<GetFilesView />);
  const [renderID, setRenderID] = useState("list-files-menu-item");
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (renderID == "list-files-menu-item") {
      setRender(<GetFilesView />)
    } else if (renderID === "upload-menu-item") {
      setRender(<UploadForm />)
    } else if (renderID === "admin-menu-item") {
      setRender(<AdminView />)
    }
  },[renderID])

  useEffect(() => {
    setTimeout(() => {
      setIsAdmin(true);
    }, 2000)
  }, [])

  return (
    <div id="main-container">
      <h1 id="page-header">File Manager Backend</h1>
      <NavBar {...{setRenderID, isAdmin}} />
      {render}
    </div>
  )
}

export default App
