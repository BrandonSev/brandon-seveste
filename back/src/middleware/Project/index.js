const fs = require("fs");
const path = require("path");
const { Project, Images } = require("../../models");

const validateCreateProject = (req, res, next) => {
  const { title, description, start_date, end_date, active, tags } = req.body;
  if (description && title && start_date && end_date && tags) {
    const projectInformation = {};
    if (title) {
      projectInformation.title = title;
    }
    if (description) {
      projectInformation.description = description;
    }
    if (start_date) {
      projectInformation.start_date = start_date;
    }
    if (end_date) {
      projectInformation.end_date = end_date;
    }
    if (tags) {
      projectInformation.tags = tags;
    }
    if (active) {
      projectInformation.active = active;
    }
    req.projectInformation = projectInformation;
    return next();
  }
  return res.status(422).json({ message: "Vous devez fournir toutes les valeurs nécessaires" });
};

const validatePutProject = async (req, res, next) => {
  const { title, description, start_date, end_date, tags, active } = req.body;
  const { id } = req.params;
  try {
    const [result] = await Project.findOneById(id);
    if (!result.length) return res.status(404).send();
    const projectInformation = {};
    if (title) {
      projectInformation.title = title;
    }
    if (description) {
      projectInformation.description = description;
    }
    if (start_date) {
      projectInformation.start_date = start_date;
    }
    if (end_date) {
      projectInformation.end_date = end_date;
    }
    if (active !== undefined) {
      projectInformation.active = active;
    }
    if (tags) {
      projectInformation.tags = tags;
    }
    req.projectInformation = projectInformation;
    return next();
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const removeLastImages = async (req, res, next) => {
  try {
    const [images] = await Images.findImagesByProjectId(req.params.id);
    if (!images.length) return next();
    images.forEach((image) => {
      // eslint-disable-next-line consistent-return
      fs.unlink(path.join(__dirname, `../../../public/images/${image.src}`), (err) => {
        if (err) return res.status(500).send();
      });
    });
    return next();
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

module.exports = { validateCreateProject, validatePutProject, removeLastImages };
