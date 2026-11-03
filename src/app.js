const express = require('express');
const routes = require('./routes');
const globalExceptionHandler = require('./middleware/globalExceptionHandler');

function createApp() {
  const app = express();
  app.disable('x-powered-by');
  app.use(express.json());
  app.use(routes);
  app.use(globalExceptionHandler);
  return app;
}

module.exports = { createApp };
