const { Project } = require("../../models");

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
    if (active) {
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

module.exports = { validateCreateProject, validatePutProject };
