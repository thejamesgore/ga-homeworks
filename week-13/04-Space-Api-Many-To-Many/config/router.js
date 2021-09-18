import express from "express";
import planetsController from "../controllers/planetsController.js";
import commentsController from "../controllers/commentsController.js";

const router = express.Router();

router
  .route("/planets")
  .get(planetsController.getAllPlanets)
  .post(planetsController.createPlanet);

router
  .route("/planets/:id")
  .get(planetsController.getPlanet)
  .delete(planetsController.deletePlanet)
  .put(planetsController.updatePlanet);

router.route("planets/:id/comments").post(commentsController.createComment);

router
  .route("/planets/:id/comments/:commentId")
  .delete(commentsController.deleteComment)
  .put(commentsController.updateComment);

export default router; 
