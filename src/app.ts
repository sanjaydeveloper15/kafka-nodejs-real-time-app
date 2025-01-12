import express, { Application } from 'express'
import { configDotenv } from 'dotenv'
configDotenv()
const app: Application = express()
const port: number = parseInt(process.env.PORT || '1000', 10) // 10 radix: decimal, 16 radix: hexadecimal, 8 radix: octal, securing 01000

// middleware to parse json, available in express since 4.16 version, earlier same we were acheiving with body-parser package
app.use(express.json({ limit: '5mb' }))
app.use(express.urlencoded({ limit: '5mb', extended: true }))

// listen server
app.listen(port, async () => {
    return console.log(`Server listening on port ${port}`)
})

export default app
