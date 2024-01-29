import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UploadFile from "./UploadFile.jsx";
import GetFile from "./GetFile.jsx";
import Frontpage from "./Frontpage.jsx";

function RoutesUI() {
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Frontpage />} />
                <Route path="/add-files" element={<UploadFile />} />
                <Route pth="/all-files" element={<GetFile />} />
            </Routes>
        </BrowserRouter>
    </div>
}

export default RoutesUI;