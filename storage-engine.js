import fs from "fs";

function getDestination (req, file, cb) {
    cb(null, './uploads/');
}

function MyCustomStorage (opts) {
    this.getDestination = (opts.destination || getDestination);
}

MyCustomStorage.prototype._handleFile = function _handleFile (req, file, cb) {
    this.getDestination(req, file, function (err, path) {
        if (err) return cb(err)

        let outStream = fs.createWriteStream(path);

        file.stream.pipe(outStream);
        outStream.on('error', cb);
        outStream.on('finish', function () {
            cb(null, {
                path: path,
                size: outStream.bytesWritten
            });
        })
    })
}

MyCustomStorate.prototype._removeFile = function _removeFile (req, file, cb) {
    fs.unlink(file.path, cb);
}

export default function (opts) {
    return new MyCustomStorage(opts);
}