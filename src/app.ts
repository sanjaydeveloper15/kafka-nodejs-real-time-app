import express from 'express'
import { configDotenv } from 'dotenv'
configDotenv()
const app = express()
const port = process.env.PORT

// middleware to parse json, available in express since 4.16 version, earlier same we were acheiving with body-parser package
app.use(express.json({ limit: '5mb' }))
app.use(express.urlencoded({ limit: '5mb', extended: true }))

// listen server
app.listen(port, async () => {
    return console.log(`Server listening on port ${port}`)
})
