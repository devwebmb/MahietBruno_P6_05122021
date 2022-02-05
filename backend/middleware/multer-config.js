// Import
const multer = require("multer");

// Types de fichiers acceptés
const MINE_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
};

// enregistrement des fichiers
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images");
  },
  filename: (req, file, callback) => {
    const name = file.fieldname.split(" ").join("_");
    const extension = MINE_TYPES[file.mimetype];
    callback(null, name + Date.now() + "." + extension);
  },
});

// export
module.exports = multer({ storage: storage }).single("image");
