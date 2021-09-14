import express from 'express'
import router from './config/router.js'

const app = express()

const port = 3030

app.use(express.json())

app.use('/api', router)

app.get('/', function (req, res) {
    res.send('Welcome to the countries API')
})

app.listen(port, () => {
    console.log(`Countries API listening at http://localhost:${port}`)
})