import express from "express";
import router from './config/router.js'
import { port } from './config/environment.js'
import { connectDb } from './db/helpers.js'

// middlewares

const app = express()
app.use(express.json())

app.use('/api', router)

async function startServer() {
    try {
        await connectDb()
        console.log('🤘 Mongoose is connected 🤘')
        app.listen(port, () => console.log(`Listening on Port: ${port}`))
    } catch (err) {
        console.log('Something went wrong', err)
    }
}

startServer()