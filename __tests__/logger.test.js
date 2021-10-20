'use strict';

const logger = require('../middleware/logger.js');

describe('Testing logger middleware', () => {
  let consoleSpy;
  let req = {};
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

  it('Properly logs output', () => {
    logger(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });
  it('Properly calls next', () => {
    logger(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});
