const imagesRouter = require("express").Router();
const { ImagesController } = require("../controllers");

imagesRouter.get("/", ImagesController.findAll);
imagesRouter.get("/:id", ImagesController.findOneById);

module.exports = imagesRouter;
