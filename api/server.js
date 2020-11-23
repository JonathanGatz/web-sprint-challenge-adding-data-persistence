// build your server here

const  express = require('express');
const helmet= require('helmet');

const apiRouter =  require('./project/router.js')

const server = express();

server.use(helmet());

server.use('/api', apiRouter);

module.exports = server;

