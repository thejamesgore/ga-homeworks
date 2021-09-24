import express from 'express'
import planetsController from '../controllers/planetsController.js'
import factsController from '../controllers/factsController.js'
import userController from '../controllers/userController.js'
import { secureRoute } from '../middleware/secureRoute.js'

const router = express.Router()

router
  .route('/planets')
  .get(planetsController.getAllPlanets)
  .post(secureRoute, planetsController.createPlanet)

router
  .route('/planets/:id')
  .get(planetsController.getPlanet)
  .delete(secureRoute, planetsController.deletePlanet)
  .put(secureRoute, planetsController.updatePlanet)

router.route('planets/:id/facts').post(secureRoute, factsController.createfact)

router
  .route('/planets/:id/facts/:factId')
  .delete(secureRoute, factsController.deletefact)
  .put(secureRoute, factsController.updatefact)

router.route('/register').post(userController.registerUser)
router.route('/login').post(userController.loginUser)

export default router
