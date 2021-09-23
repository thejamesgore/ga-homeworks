import mongoose from 'mongoose'
import mongooseUniqueValidator from 'mongoose-unique-validator'

const systemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  planets: [{ type: mongoose.Types.ObjectId, ref: 'Planet' }],
})

systemSchema.plugin(mongooseUniqueValidator)

const System = mongoose.model('System', systemSchema)

export default System
