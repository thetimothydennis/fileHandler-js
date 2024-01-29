import * as files from "../models/files-model.js";

export const singleFileUpload = async (req, res) => {
    let fileUploadObj = {};
    fileUploadObj.path = req.file.path;
    fileUploadObj.filename = req.file.filename;
    fileUploadObj.mimetype = req.file.mimetype;
    fileUploadObj.date = Date.now();
    const insertOp = await files.addOneFile(fileUploadObj);
    // res.send(insertOp);
    res.redirect("/");
}

export const getASingleFile = async (req, res) => {
    let fileId = req.params.fileid;
    let file = await files.getOneFile(fileId);
    res.send(file);
}

export const getAllFiles = async (req, res) => {
    const allFiles = await files.getAllFiles();
    res.send(allFiles);
}

export const deleteASingleFile = async (req, res) => {
    let fileId = req.params.fileid;
    let deleteFile = await files.deleteOneFile(fileId);
    res.send(deleteFile);
}

export const deleteAllFiles = async (req, res) => {
    let deleteFiles = await files.deleteAllFiles();
    res.send(deleteFiles)
}