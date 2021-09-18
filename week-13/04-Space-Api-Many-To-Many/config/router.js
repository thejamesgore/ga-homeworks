import express from 'express'
import planetsController from '../controllers/planetsController.js'
import commentsController from '../controllers/commentsController.js'
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

router
  .route('planets/:id/comments')
  .post(secureRoute, commentsController.createComment)

router
  .route('/planets/:id/comments/:commentId')
  .delete(secureRoute, commentsController.deleteComment)
  .put(secureRoute, commentsController.updateComment)

router.route('/register').post(userController.registerUser)
router.route('/login').post(userController.loginUser)

export default router
