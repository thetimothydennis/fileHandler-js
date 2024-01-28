import { config } from "dotenv";

import { dirname, join } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

import express from "express";
import multer from "multer";

config();

const PORT = process.env.PORT;

const app = express();

const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function (req, file, cb) {
        cb(null, `${file.originalname}`)
    }
});

const upload = multer({ storage: storage });

app.use(express.static(join(__dirname, "client", "dist")));

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.route("/api/fileupload")
    .post(upload.single("file-upload"), (req, res) => {
        let fileUploadObj = {};
        fileUploadObj.path = req.file.path;
        fileUploadObj.filename = req.file.filename;
        fileUploadObj.mimetype = req.file.mimetype;
        fileUploadObj.date = Date.now();
        console.log(fileUploadObj);
        res.sendFile(req.file.filename, { root: __dirname + "/uploads/"});
    })

app.route("/api/getfile")
    .post((req, res) => {
        let filename = req.body["file-get"];
        console.log(filename);
        res.sendFile(filename, { root: __dirname + "/uploads/"})
    })

app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
})

