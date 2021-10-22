'use strict';

const express = require('express');
const app = express();

const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
const handle404 = require('./error-handlers/404.js');
const handle500 = require('./error-handlers/500.js');

const { food, clothes } = require('./model');
const clothesRouter = require('./routes/clothes.js');
const foodRouter = require('./routes/food.js');

app.use(express.json());
app.use(logger);
// app.use(validator);
app.use('/food', foodRouter);
app.use('/clothes', clothesRouter);
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
  start: port => {
    app.listen(port, () => console.log('Server is up')), port;
  },
};
