import { expect } from 'chai';

import * as utils from '../index';

describe('Utilities', () => {
  describe('processStats', () => {
    it('should take a string and return an object with home and away keys', () => {
      const result = utils.processStats('');
      expect(result).to.be.an('object');
      expect(result).to.have.all.keys(['home', 'away']);
    });
  });
});
