// external imports
const multer = require('multer');
const path = require('path');
const createError = require('http-errors');

function uploader(
    subfolder_path,
    allowed_file_types,
    max_file_size,
    error_message
) {
    // file upload folder
    const UPLOADS_FOLDER = `${__dirname}/../public/uploads/${subfolder_path}/`;

    // define the storage
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, UPLOADS_FOLDER);
        },
        filename: (req, file, cb) => {
            const fileExist = path.extname(file.originalname);
            const fileName =
                file.originalname
                    .replace(fileExist, '')
                    .toLowerCase().split(' ')
                    .join('-') + '-' +
                Date.now();
            cb(null, fileName + fileExist);
        },
    });

    // prepare the final multer upload object
    const upload = multer({
        storage: storage,
        limits: {
            fileSize: max_file_size
        },
        fileFilter: (req, file, cb) => {
            if (allowed_file_types.includes(file.mimetype)) {
                cb(null, true)
            } else {
                cb(createError(error_message))
            }
        }
    })

    return upload;
}

module.exports = uploader;