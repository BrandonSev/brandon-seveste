const mainRouter = require("express").Router();
const projectRouter = require("./project.routes");
const imagesRouter = require("./images.routes");

mainRouter.use("/projects", projectRouter);

mainRouter.use("/images", imagesRouter);

module.exports = mainRouter;
