import Planet from '../models/planet.js'
import System from '../models/system.js'
import { connectDb, disconnectDb } from './helpers.js'
​
async function cleanupFacts() {
  try {
    await connectDb()
    console.log('🤖 Database Connected')
​
    const planets = await Planet.find()
    
    const user = await User.findOne({
      email: 'user@community.wiki',
    })
​
    
    for (let planet of planets) {
      planet.facts.forEach((fact) => {
        
        fact.set({
          createdBy: user._id,
        })
      })
      if (planet.createdBy) {
        const createdByUser = await User.findById(planet.createdBy)
        if (createdByUser) {
          console.log('planet', planet, 'created by', createdByUser)
          
          continue
        }
      }
      planet.set({ createdBy: user._id })
      await planet.save()
      console.log(planet)
    }
  } catch (err) {
    console.log('🤖 Something went wrong')
    console.log(err)
  }
  disconnectDb()
}
​
cleanupFacts()