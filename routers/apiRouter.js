import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import * as apiControllers from "../controllers/api-controllers.js";
import multer from "multer";

// stores __dirname for use within ES6 modules
const __dirname = dirname(fileURLToPath(import.meta.url));

const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function (req, file, cb) {
        cb(null, `${file.originalname}`)
    }
});

const upload = multer({ storage: storage });

const router = express.Router();

router.route("/getfile")
    .post((req, res) => {
        let filename = req.body["file-get"];
        res.sendFile(filename, { root: __dirname + "../uploads/"})
    })

router.get("/uploads/:filename", (req, res) => {
    let filename = req.params.filename;
    res.sendFile(filename, { root: __dirname + "/../uploads/"})
})

router.route("/api/fileupload")
    .post(upload.single("file-upload"), apiControllers.singleFileUpload)

router.route("/api/getfile/:fileid")
    .get(apiControllers.getASingleFile)
    .delete(apiControllers.deleteASingleFile)

router.route("/api/files")
    .get(apiControllers.getAllFiles)

router.delete("/api/delete-files", apiControllers.deleteAllFiles)

export default router;