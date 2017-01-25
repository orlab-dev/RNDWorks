'use strict'

var readerClass = require("./src/com/ibm/core/pdfreader");
var global = require('./src/com/ibm/model/global');

var http = require('http');
http.createServer(function handler(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(global.getFileBuffer());
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
console.log('Type Your PDF path : ');
