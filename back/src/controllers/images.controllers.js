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

const createMultiple = async (req, res, next) => {
  if (!req.files) {
    return next();
  }
  req.files.map(async (file) => {
    try {
      return await Images.createOne({ src: file.filename, alt: file.originalname.split(".")[0], project_id: req.id });
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

  const upload = multer({
    storage,
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
  createMultiple,
  uploadFile,
};
