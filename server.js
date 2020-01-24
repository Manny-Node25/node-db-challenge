  
const express = require('express');

const ProjectRouter = require('./projects/project-router.js');

const server = express();

server.use(express.json());
server.use('/api', ProjectRouter);

server.get('/', (req, res) => {
    res.send(`<h2>Dragonball Z!!!</h2>`)
});

module.exports = server;