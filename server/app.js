/**
 * Main application file
 */

'use strict';

import express from 'express';
import config from './config/environment';
import http from 'http';

var ExpressStormpath = require('express-stormpath');
var path = require('path');

// Setup server
var app = express();

app.use(ExpressStormpath.init(app,{
  website: true,
  web: {
    spaRoot: path.join(__dirname, '..','client','index.html')
  }
}));

var server = http.createServer(app);
require('./config/express')(app);
require('./routes')(app);

// Start server
function startServer() {
  app.on('stormpath.ready',function() {
  // Start server
  server.listen(config.port, config.ip, function () {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
  });
});
}

setImmediate(startServer);

// Expose app
exports = module.exports = app;
