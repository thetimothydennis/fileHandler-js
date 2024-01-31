import fs from "fs";
import * as files from "../models/files-model.js";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

// stores __dirname for use within ES6 modules
const __dirname = dirname(fileURLToPath(import.meta.url));

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
};

export const getAllFiles = async (req, res) => {
    const allFiles = await files.getAllFiles();
    res.send(allFiles);
};

const uploads_dir = join(__dirname, "..", "uploads");

export const deleteASingleFile = async (req, res) => {
    let fileId = req.params.fileid;
    let fileToDelete = await files.getOneFile(fileId);
    let deleteFromDb = await files.deleteOneFile(fileId);
    fs.unlink(join(uploads_dir, fileToDelete.filename), (err) => {
        if (err) {
            console.log(err);
        }
        console.log(`file ${fileToDelete.filename} removed from filesystem`);
    })
    res.send(deleteFromDb);
};

export const deleteAllFiles = async (req, res) => {
    let deleteDb = await files.deleteAllFiles();
    fs.readdir(uploads_dir, (err, files) => {
        if (err) {
            console.log(err);
        }
        for (let file of files) {
            fs.unlink(join(uploads_dir, file), (err) => {
                if (err) {
                    console.log(err);
                }
                console.log(`files removed from filesystem`)
            })
        }
    })
    res.send(deleteDb)
};