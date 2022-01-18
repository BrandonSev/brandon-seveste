const { Project, Images } = require("../models");

const findAll = async (req, res) => {
  try {
    const [results] = await Project.findAll();
    return res.status(200).send(results);
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const findOneById = async (req, res) => {
  const id = req.params.id ? req.params.id : req.id;
  const statusCode = req.method === "POST" ? 201 : 200;
  if (!id || !Number(id)) return res.status(400).json({ message: "Vous devez fournir un id valide" });
  try {
    const [results] = await Project.findOneById(id);
    if (results.length === 0) return res.status(404).send();
    const [images] = await Images.findImagesByProjectId(id);
    return res.status(statusCode).json({ ...results[0], images });
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const createOne = async (req, res, next) => {
  try {
    const [result] = await Project.createOne(req.projectInformation);
    req.id = result.insertId;
    return next();
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const updateOne = async (req, res, next) => {
  const { id } = req.params;
  try {
    await Project.updateOne(req.projectInformation, id);
    return next();
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const deleteOne = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await Project.deleteOne(id);
    if (result.affectedRows === 0) return res.status(404).send();
    return res.status(204).send();
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

module.exports = { findAll, findOneById, createOne, updateOne, deleteOne };
