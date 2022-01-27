const projectRouter = require("express").Router();
const { ProjectController, ImagesController } = require("../controllers");
const { validateCreateProject, validatePutProject, removeLastImages } = require("../middleware/Project");

projectRouter.get("/", ProjectController.findAll);
projectRouter.get("/:id", ProjectController.findOneById);

projectRouter.post(
  "/",
  ImagesController.uploadFile,
  validateCreateProject,
  ProjectController.createOne,
  ImagesController.create,
  ProjectController.findOneById,
);

projectRouter.put("/:id", validatePutProject, ProjectController.updateOne, ProjectController.findOneById);

projectRouter.delete("/:id", removeLastImages, ProjectController.deleteOne);

module.exports = projectRouter;
