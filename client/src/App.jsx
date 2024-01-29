import React, {useState, useEffect} from "react";
import UploadForm from "./components/UploadForm";
import GetAFileForm from "./components/GetAFileForm";
import GetAllFiles from "./components/GetAllFiles";
import './App.css'
import DeleteAllFromDb from "./components/DeleteAllFilesFromDb";

function App() {

  
  return (
    <>
      <h1>File Manager Backend</h1>
      <UploadForm />
      <br />
      <GetAFileForm />
      <br />
      <GetAllFiles />
      <br />
      <DeleteAllFromDb />
    </>
  )
}

export default App
