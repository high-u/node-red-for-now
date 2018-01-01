var http = require('http');
var express = require("express");
var RED = require("node-red");

// Create an Express app
var app = express();

// Add a simple route for static content served from 'public'
app.use("/", express.static("public"));

// Create a server
var server = http.createServer(app);

// Create the settings object - see default settings.js file for other options
var settings = {
  httpAdminRoot: "/",
  httpNodeRoot: "/api/",
  uiPort: 3000,
  functionGlobalContext: {    // enables global context
    // os:require('os'),
  },
  adminAuth: {
    type: "credentials",
    users: [{
      username: process.env.NODE_RED_USERNAME,
      password: process.env.NODE_RED_PASSWORD,
      permissions: "*"
    }]
  },
  debugMaxLength: 1000,
  debugUseColors: true,
  flowFile: 'flows.json',
//  userDir: './node-red',
//  nodesDir: './app/node-red/nodes',
  ui: { path: "ui" },
  logging: {
    console: {
      level: "trace"
    }
  }
};

// Initialise the runtime with a server and settings
RED.init(server, settings);

// Serve the editor UI from /
app.use(settings.httpAdminRoot, RED.httpAdmin);

// Serve the http nodes UI from /
app.use(settings.httpNodeRoot, RED.httpNode);

server.listen(3000);

// Start the runtime
RED.start();