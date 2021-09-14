import Planet from "../models/planet.js";

async function getAllPlanets(_req, res, next) {
  try {
    const planets = await Planet.find();
    return res.status(200).json(planets);
  } catch (err) {
    next(err)
  }
}

async function createPlanet(req, res, next) {
    try {
        const newPlanet = await Planet.create(req.body)
        return res.status(201).json(newPlanet)
    } catch (err) {
        next(err)
    }
}

async function getPlanet(req, res, next) {
    const id = req.params.id

    try {
        const planet = await Planet.findById(id)
        return res.status(200).json(planet)
    } catch (err) {
        next (err)
    }
}

async function deletePlanet(req, res, next) {
    const id = req.params.id

    try {
        const planet = await Planet.findByIdAndDelete(id)
        return res.status(200).json(planet)
    } catch (err) {
        next(err)
    }
}

async function updatePlanet(req, res, next) {
    const id = req.params.findById

    try{
        const planet = await Planet.findById(id)
        planet.set(req.body)
        planet.save()
        return res.status(200).json(planet)
    } catch (err) {
        next(err)
    }
}

export default {
    getAllPlanets,
    createPlanet,
    getPlanet,
    deletePlanet,
    updatePlanet,
}