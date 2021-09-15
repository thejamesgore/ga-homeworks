import mongoose from 'mongoose'
import mongooseUniqueValidator from "mongoose-unique-validator";

const funFanctsSchema = new mongoose.Schema (
    {
        fact1: { type: String, required: true, maxlength: 300 },
        fact2: { type: String, required: true, maxlength: 300 },
        fact3: { type: String, required: true, maxlength: 300 },
    },
    {
        timestamps: true,
    }
)

const planetSchema = new mongoose.Schema({
    name: String,
    system: String,
    stars: String,
    constellation: String,
    lightYearsDistanceFromEarth: Number,
    orbitingObjects: String,
    inHabitableZone: Boolean,
    funFacts: [funFanctsSchema]
},
{ versionKey: false }
)

planetSchema.plugin(mongooseUniqueValidator)

const Planet = mongoose.model('Planet', planetSchema)

export default Planet