import mongoose from 'mongoose'
import mongooseUniqueValidator from 'mongoose-unique-validator'

const funFanctsSchema = new mongoose.Schema(
  {
    fact: { type: String, required: true, maxlength: 300 },
    createdBy: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const planetSchema = new mongoose.Schema(
  {
    name: String,
    system: [{ type: mongoose.Types.ObjectId, ref: 'Actor' }],
    stars: String,
    constellation: String,
    lightYearsDistanceFromEarth: Number,
    orbitingObjects: String,
    inHabitableZone: Boolean,
    funFacts: [funFanctsSchema],
     createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,

  },
  { versionKey: false }
)

planetSchema.plugin(mongooseUniqueValidator)

const Planet = mongoose.model('Planet', planetSchema)

export default Planet
