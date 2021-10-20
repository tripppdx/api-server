'use strict';

module.exports = function (request, response, next) {
  if (request.query.name) {
    next();
  } else {
    console.log('failed validation');
    next('something went wrong');
  }
};
