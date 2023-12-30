const cors = require('cors');
const express = require('express');
const { ttsConnection, listenMessage } = require('./mqtt');
const { dbConnection } = require('./database/config');
const { recordsGet } = require('./controllers/cows.controllers');
require('dotenv').config();

const app = express()
const port = 3000


app.get('/Hello', (req, res) => {
  res.send('Hello World!')
})


app.get('/cows', recordsGet)


app.use(cors())

app.use(express.static('public'));

app.listen(port, async() => {
  const client = await ttsConnection();
  await dbConnection();
  listenMessage(client);
  console.log(`Example app listening on port ${port}`)
})

