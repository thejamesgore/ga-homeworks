import Planet from '../models/planet.js'

async function createfact(req, res, next) {
  try {
    const { id } = req.params
    const planet = await Planet.findById(id)

    if (!planet) {
      return res.status(404).send({ message: 'Planet does not exist' })
    }

    const newfact = req.body
    planet.facts.push(newfact)
    const savePlanet = await planet.save()

    return res.status(200).json(savePlanet)
  } catch (err) {
    next(err)
  }
}

async function deletefact(req, res, next) {
  try {
    const { factId, id } = req.params
    const planet = await Planet.findById(id)

    if (!planet) {
      return res.status(404).send({ message: 'Planet does not exist' })
    }

    const fact = planet.facts.id(factId)
    if (!fact) {
      return res.status(404).send({ message: 'fact does not exist' })
    }

    fact.remove()
    const savedPlanet = await planet.save()
    return res.status(200).send(savedPlanet)
  } catch (err) {
    next(err)
  }
}

async function updatefact(req, res, next) {
  try {
    const { factId, id } = req.params
    const planet = await Planet.findById(id)
    if (!planet) {
      return res.status(404).send({ message: 'Planet does not exist' })
    }

    const fact = planet.facts.id(factId)
    if (!fact) {
      return res.status(404).send({ message: 'fact does not exist' })
    }

    fact.set(req.body)

    const savedPlanet = await planet.save()
    return res.status(200).send(savedPlanet)
  } catch (err) {
    next(err)
  }
}

export default { createfact, deletefact, updatefact }
