import express, { json } from 'express'
import 'dotenv/config'
import http from 'http'
import { corsMiddleware } from './middlewares/cors.middleware.js'
import { connectToDataBase } from './infraestructura/mongodb.js'
import { configureWebSocket } from './infraestructura/websockets.js'
import { proccessCollarData } from './usecases/collarDataProcessing.js'
import { subscribeToTopic } from './infraestructura/mqtt.js'
import { Routes } from './routes/index.js'

const app = express()
const server = http.createServer(app)

app.disable('x-powered-by')
app.use(corsMiddleware())
app.use(json())

await connectToDataBase()

configureWebSocket(server)

subscribeToTopic([process.env.MQTT_TOPIC], proccessCollarData)

app.use('/api', Routes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server escuchando en el puerto: ${PORT}`)
})
