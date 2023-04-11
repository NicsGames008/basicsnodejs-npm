'use strict';

const { join } = require('path');
const fs = require('fs');
const serveFavicon = require('serve-favicon');
const http = require('http');
const express = require('express');
const hostname = '127.0.0.1';
const port = 3000;

const app = express();

app.use(express.static('public'));
app.use(serveFavicon(join(__dirname, 'public/images', 'favicon.ico')));

const server = http.createServer((req, res) => {
  fs.readFile('index.html', function (err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;