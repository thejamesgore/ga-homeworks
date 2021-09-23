import Planet from "../models/planet";
import System from "../models/system";
import { removedAdded } from "./helpers";

async function createSystem(req, res, next) {
      try{
        const newSystem = await System.create(req.body)

        await Planet.updateMany(
            { _id: newSystem.planets },
            { $push: { systems: newSystem._id }}
        )
        return res.status(201).json(newSystem)
    } catch (err) {
        next (err)
    }
}

async function getAllSystems(_req, res, next) {
    try {
        const systems = await System.find()

        if(!systems) {
            return res.status(404).send({ message: 'System does not exist' })
        }

        return res.status(200).json(actors)
    } catch (err) {
        next(err)
    }
}

async function getAllPlanetsForSystem(req, res, next) {
    try {
        const {id} = req.params
        const system = await (await System.findById(id)).populated('planets')

        if(!system) {
            return res.status(404).send({ message: 'System does not exist' })
        }

        return res.status(200).json(system.movies)
    } catch (err) {
        next(err)
    }
}

async function getSystem (req, res, next) {
    try {
        const id = req.params.id
        const system = await System.findById(id)

        if(!system) {
            return res.status(404).send({ message: 'System does not exist' })
        }
    }
}

async function deleteSystem(req, res, next) {
    try{
        const id = req.params.id
        const system = await System.findByIdAndDelete(id)

        if(!system) {
            return res.status(404).send({ message: 'System does not exist' })
        }

        const planetsToRemove = system.planets.map((planet) => planet.toString())
        await Planet.updateMany(
            { _id: planetsToRemove },
            { $pull: { systems: system._id}}
        )

        return res.status(200).json(system)
    } catch (err) {
        next (err)
    }
}

async function updateSystem(req, res, next) {
    try {
        const id = req.params.id
        const system = await System.findById(id)

        if(!system) {
            return res.status(404).send({ message: 'System does not exist' })
        }

        const [removedPlanets, addedPlanets] = removedAdded(
            system.planets.map((planet) => planet.toString()),
            req.body.planets
        )
        system.set(req.body)
        const savedSystem = await system.save()

        await System.updateMany(
            { _id: removedPlanets },
            { $pull: { systems: system._id}},
        )

        await Planet.updateMany(
            { _id: addedPlanets },
            {$pull: { planets: savedSystem._id }}
        )

        return res.status(200).json(system)
    } catch (err) {
        next (err)
    }
}

export default        {
    createSystem,
getAllSystems,
getAllPlanetsForSystem,
getSystem,
deleteSystem,
updateSystem,
}