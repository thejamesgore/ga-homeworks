import mongoose from 'mongoose'
import mongooseUniqueValidator from "mongoose-unique-validator";

const funFanctsSchema = new mongoose.Schema (
    {
        fact1: { type: String, required: true, maxlength: 300 },
    },
    {
        timestamps: true,
    }
)

const planetSchema = new mongoose.Schema({
    name: String,
    system: [{type: mongoose.Types.ObjectId, ref: 'Actor'}],
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