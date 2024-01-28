import mongoose from "mongoose";
import { Files } from "./files-schema.js";

// get all files
export const getAllFiles = async () => {
    try {
        const files = await Files.find({});
        return files;
    }
    catch (err) {
        return err.message;
    }
}

// get one file
export const getOneFile = async (fileId) => {
    try {
        let file = await Files.findById(fileId);
        return file;
    }
    catch (err) {
        return err.message;
    }
}

// add one file
export const addOneFile = async (fileObj) => {
    console.log(fileObj);
    try {
        let { path, filename, mimetype, date } = fileObj;
        const insertFile = new Files({
            filename,
            uploadDate: date,
            path,
            filetype: mimetype
        })
        const saveFiletoDb = await insertFile.save();
        console.log(saveFiletoDb)
        return saveFiletoDb;
    }
    catch (err) {
        return err.message;
    }
}

// update one file
export const updateOneFile = async (fileId, fileObj) => {
    try {

    }
    catch (err) {
        return err.message;
    }
}

// delete one file
export const deleteOneFile = async (fileId) => {
    try {
        let deleteFile = await Files.deleteOne({_id: fileId});
        return deleteFile;
    }
    catch (err) {
        return err.message;
    }
}

// delete all files
export const deleteAllFiles = async () => {
    try {
        let deleteFiles = await Files.deleteMany({});
        return deleteFiles;
    }
    catch (err) {
        return err.message;
    }
}