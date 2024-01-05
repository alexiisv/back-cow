const { Server } = require('socket.io');
const http = require('http');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { ttsConnection, listenMessage } = require('./mqtt');
const { dbConnection } = require('./database/config');
const { recordsGet } = require('./controllers/cows.controllers');

const PORT = process.env.PORT || 3000

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

app.use(cors({
  origin: (_, callback) => {
    return callback(null, true)
  }
}));

app.get('/hi', (req, res) => {
  res.json({
    ok: true,
    msg: 'Hola mundo'
  })
});

app.get('/cows', recordsGet)

app.use(cors())



io.on('connection', (socket) => {
  console.log('a user has connected!')

  socket.on('disconnect', () => {
    console.log('a user has disconnected')
  })
});


server.listen(PORT, async () => {
  const client = await ttsConnection();
  await dbConnection();
  listenMessage(client, io);
  console.log(`Server escuchando en el puerto: ${PORT}`)
});
