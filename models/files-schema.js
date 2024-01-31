import { connect, createConnection, Schema } from "mongoose";
import {config} from "dotenv";
config();

connect(process.env.MONGO_URI, {});

const connection = createConnection(process.env.MONGO_URI);

const FilesSchema = new Schema({
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