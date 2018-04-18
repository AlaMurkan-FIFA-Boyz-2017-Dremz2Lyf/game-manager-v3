import { loginSuccess, logout } from '../';

import { LOGIN_SUCCESS, LOGOUT } from '../types';

describe('user - actions', () => {
  describe('loginSuccess', () => {
    it('should return just a login action if the user has valid roles.', () => {
      const result = loginSuccess({});

      expect(result).toHaveProperty('type', LOGIN_SUCCESS);
    });
  });

  describe('logout', () => {
    const result = logout();
    it('should return an action with the correct type', () => {
      expect(result).toHaveProperty('type', LOGOUT);
    });
  });
});
