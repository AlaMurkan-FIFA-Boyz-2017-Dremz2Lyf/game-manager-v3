import * as utils from '../index';

describe('Utilities', () => {
  describe('processStats', () => {
    it('should take a string and return an object with home and away keys', () => {
      const result = utils.processStats(['']);
      expect(result).toHaveProperty('home', { '': NaN });
      expect(result).toHaveProperty('away', { '': NaN });
    });
  });
});
