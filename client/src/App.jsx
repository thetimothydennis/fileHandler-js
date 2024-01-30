import React, {useState, useEffect} from "react";
import UploadForm from "./components/UploadForm";
import GetFilesView from "./components/GetFilesView";
import './App.css'
import DeleteAllFromDb from "./components/DeleteAllFilesFromDb";
import NavBar from "./components/NavBar";

function App() {
  const [render, setRender] = useState(<GetFilesView />);
  const [renderID, setRenderID] = useState("list-files-menu-item");

  useEffect(() => {
    if (renderID == "list-files-menu-item") {
      setRender(<GetFilesView />)
    } else if (renderID === "upload-menu-item") {
      setRender(<UploadForm />)
    } else if (renderID === "remove-files-menu-item") {
      setRender(<DeleteAllFromDb />)
    }
  },[renderID])

  return (
    <>
      <h1>File Manager Backend</h1>
      <NavBar {...{setRenderID, renderID}} />
      {render}
      {/* <UploadForm />
      <br />
      <GetAFileForm />
      <br />
      <GetAllFiles />
      <br />
      <DeleteAllFromDb /> */}
    </>
  )
}

export default App
