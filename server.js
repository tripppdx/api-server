'use strict';

const express = require('express');
const app = express();

const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
const handle404 = require('./error-handlers/404.js');
const handle500 = require('./error-handlers/500.js');

app.use(express.json());
app.use(logger);
app.use(validator);
app.get('/person', handlePerson);
app.use('*', handle404);
app.use(handle500);

function handlePerson(request, response) {
  let { name } = request.query;
  console.log(name);
  response.send(name);
}

module.exports = {
  server: app,
  start: () => app.listen(3000, () => console.log('Server is up')),
};
