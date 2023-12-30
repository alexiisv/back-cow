const express = require('express');
const cors = require('cors');
const mqtt = require('mqtt');
const cookieParser = require('cookie-parser');
const { createServer } = require('http')

const { dbConnection } = require('../database/config');
const { ttsConnection, listenMessage } = require('../mqtt')
const { startJobs } = require('../controllers/tasks');
const { socketController } = require('../sockets/controller');

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;
        this.server = createServer(this.app);
        // this.io = require('socket.io')(this.server, {
        //     cors: {
        //       origin: process.env.CORS_ORIGIN,
        //       methods: ["GET", "POST"]
        //     },
        //     path: `${process.env.SUBPATH || ''}/socket.io`
        // });

        // Middlewares
        this.middlewares();

        // Mqtt connection to TTS
        this.connectTTS();

        // Application's routes
        this.routes();

        // Sockets
        this.sockets();
    }

    async connectDB() {
        await dbConnection();
        startJobs(); // Tasks require connection to DB
    }

    async connectTTS() {
        const client = await ttsConnection();
        listenMessage(client, this.app);
    }

    middlewares() {
        // CORS
        this.app.use(cors({ preflightContinue: true }));

        // Read cookies 
        this.app.use(cookieParser())

        // Read json format in body
        this.app.use(express.json());

        // Public directory
        this.app.use(express.static('public'));

    }

    listen() {
        this.server.listen( this.port, () => {
            console.log('Server running on port', this.port );
        });
    }

}

module.exports = Server;
