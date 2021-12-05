//var http = require('http');
import http from 'http';
import config from './files/config.json' assert { type: "json" };



http.createServer((req,res) => {
    res.write(`application name: ${config.name}\n`);
    res.write(`application version: ${config.version}`);
    res.end()
}).listen(8080);

