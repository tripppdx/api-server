'use strict';

const { db } = require('./model');
const app = require('./server.js');
const PORT = process.env.PORT || 3000;

db.sync().then(() => {
  app.start(PORT);
});
