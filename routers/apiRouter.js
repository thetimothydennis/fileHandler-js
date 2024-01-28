import express from "express";
import * as apiControllers from "../controllers/api-controllers.js";
import multer from "multer";

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
        res.sendFile(filename, { root: __dirname + "/uploads/"})
    })

router.route("/api/fileupload")
    .post(upload.single("file-upload"), apiControllers.singleFileUpload)

router.route("/api/getfile/:fileid")
    .get(apiControllers.getASingleFile)
    .delete(apiControllers.deleteASingleFile)

router.route("/api/files")
    .get(apiControllers.getAllFiles)
    .delete(apiControllers.deleteAllFiles)

export default router;