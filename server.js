/**
simple express server used to serve our distribution files in /dist
**/
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

app = express();
app.use(serveStatic(__dirname + "/dist"));

var port = process.env.PORT || 5000;
app.listen(port);

console.log('Server starting on ' + port);
console.log('Created by Aaron Chen for the PTB family restaurant business.');
console.log('Credits to tons of people from all over the web.');
