import Planet from '../models/planet.js'

async function createComment(req, res, next) {
  try {
    const { id } = req.params
    const planet = await Planet.findById(id)

    if (!planet) {
      return res.status(404).send({ message: 'Planet does not exist' })
    }

    const newComment = req.body
    planet.comments.push(newComment)
    const savePlanet = await planet.save()

    return res.status(200).json(savePlanet)
  } catch (err) {
    next(err)
  }
}

async function deleteComment(req, res, next) {
  try {
    const { commentId, id } = req.params
    const planet = await Planet.findById(id)

    if (!planet) {
      return res.status(404).send({ message: 'Planet does not exist' })
    }

    const comment = planet.comments.id(commentId)
    if (!comment) {
      return res.status(404).send({ message: 'Comment does not exist' })
    }

    comment.remove()
    const savedPlanet = await planet.save()
    return res.status(200).send(savedPlanet)
  } catch (err) {
    next(err)
  }
}

async function updateComment(req, res, next) {
  try {
    const { commentId, id } = req.params
    const planet = await Planet.findById(id)
    if (!planet) {
      return res.status(404).send({ message: 'Planet does not exist' })
    }

    const comment = planet.comments.id(commentId)
    if (!comment) {
      return res.status(404).send({ message: 'Comment does not exist' })
    }

    comment.set(req.body)

    const savedPlanet = await planet.save()
    return res.status(200).send(savedPlanet)
  } catch (err) {
    next(err)
  }
}

export default { createComment, deleteComment, updateComment }
