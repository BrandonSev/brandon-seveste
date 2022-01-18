const mainRouter = require("express").Router();
const projectRouter = require("./project.routes");

mainRouter.use("/project", projectRouter);

module.exports = mainRouter;
