import Planet from '../models/planet.js'
import { planetSeedData } from './planetSeedData.js'
import { connectDb, disconnectDb, resetDb } from './helpers.js'

async function seed() {
    try {
      await connectDb()
      console.log('🤖 Database Connected')
  
      await resetDb()
      console.log('🤖 Database Dropped')
  
      const planet = await Planet.create(planetSeedData)
      console.log(`🤖 ${planet.length} Planet added to the database`)
  
      console.log('🤖 Goodbye')
    } catch (err) {
      console.log('🤖 Something went wrong')
      console.log(err)
    }
    disconnectDb()
  }
  
  seed()