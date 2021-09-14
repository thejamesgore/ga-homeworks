import express from "express";
import planetsController from "../controllers/planetsController.js"

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

export default router;
