import express from 'express'
import { getApiResults } from '../controllers/ApiController.js'

const router = express.Router()
router.route('/countries').get(getApiResults)

export default router