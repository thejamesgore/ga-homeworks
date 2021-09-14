import mongoose from 'mongoose'
import mongooseUniqueValidator from "mongoose-unique-validator";

const planetSchema = new mongoose.Schema({
    name: String,
    system: String,
    stars: String,
    constellation: String,
    lightYearsDistanceFromEarth: Number,
    orbitingObjects: String,
    inHabitableZone: Boolean,
    })

planetSchema.plugin(mongooseUniqueValidator)

const Planet = mongoose.model('Planet', planetSchema)

export default Planet