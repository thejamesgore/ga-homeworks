import User from '../models/user.js'
import jwt from 'jsonwebtoken'
import { secret } from '../config/environment.js'

async function registerUser(req, res, next) {
  try {
    const user = await User.create(req.body)
    return res.status(201).send(user)
  } catch (err) {
    next(err)
  }
}

async function loginUser(req, res, next) {
  try {
    const user = await User.findOne({ email: req.body.email })

    if (!user) {
      return res.status(404).send({ message: 'User not found' })
    }

    if (!user.validatePassword(req.body.password)) {
      return res.status(401).send({ message: 'Unauthorized' })
    }

    const token = jwt.sign({ userId: user._id }, secret, { expiresIn: '12h' })

    return res.status(202).send({ token, message: 'Login Successful' })
  } catch (err) {
    next(err)
  }
}

export default {
  registerUser,
  loginUser,
}
