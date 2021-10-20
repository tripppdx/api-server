'use strict';

const validator = require('../middleware/validator.js');

describe('Testing logger middleware', () => {
  let consoleSpy;
  let req = {
    query: {},
  };
  let res = {};
  let next = jest.fn();

  beforeEach(() => {
    // Attach to the console
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    // Detaching from the console
    consoleSpy.mockRestore();
  });

  it('Properly calls next', () => {
    req.query = '?name=Foo';
    validator(req, res, next);
    expect(next).toHaveBeenCalled();
  });

  it('Properly logs output', () => {
    validator(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });
});
