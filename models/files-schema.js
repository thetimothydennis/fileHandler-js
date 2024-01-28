import mongoose from "mongoose";
import {config} from "dotenv";
config();

mongoose.connect(process.env.MONGO_URI, {});

const connection = mongoose.createConnection(process.env.MONGO_URI);

const FilesSchema = new mongoose.Schema({
    filename: {
        type: String,
        required: true,
    },
    uploadDate: Date,
    path: {
        type: String,
        required: true
    },
    filetype: {
        type: String
    }
})

export const Files = connection.model("Files", FilesSchema)