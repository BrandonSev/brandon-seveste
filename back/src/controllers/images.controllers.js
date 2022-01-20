const multer = require("multer");
const { Images } = require("../models");

const findAll = async (req, res) => {
  try {
    const [results] = await Images.findAll();
    return res.status(200).json(results);
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const findOneById = async (req, res) => {
  const id = req.params.id ? req.params.id : req.id;
  const statusCode = req.method === "POST" ? 201 : 200;

  try {
    const [result] = await Images.findOneById(id);
    if (!result.length) {
      res.status(404).send();
    } else {
      res.status(statusCode).json(result);
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const create = async (req, res, next) => {
  if (!req.files) {
    return next();
  }
  req.files.map(async (file) => {
    try {
      return await Images.createOne({
        src: file.filename,
        alt: file.originalname.split(".")[0],
        project_id: req.id,
      });
    } catch (e) {
      return res.status(500).send(e.message);
    }
  });
  return next();
};

const uploadFile = (req, res, next) => {
  const storage = multer.diskStorage({
    destination: (_req, _file, cb) => {
      cb(null, "public/images");
    },
    filename: (_, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  });
  const fileFilter = (request, file, cb) => {
    const typeArray = file.mimetype.split("/");
    const fileType = typeArray[1];
    if (fileType === "jpg" || fileType === "png" || fileType === "jpeg") {
      return cb(null, true);
    }
    return res.status(422).send({ message: "Seulement les formats, jpg / png / jpeg" });
  };
  const upload = multer({
    storage,
    fileFilter,
  }).array("images", 10);

  return upload(req, res, async (err) => {
    if (err) {
      return res.status(500).json(err);
    }
    if (req.files) {
      req.body = JSON.parse(req.body.data);
    }
    return next();
  });
};

module.exports = {
  findAll,
  findOneById,
  create,
  uploadFile,
};
