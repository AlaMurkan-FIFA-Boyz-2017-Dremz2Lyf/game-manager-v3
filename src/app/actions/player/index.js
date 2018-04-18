import { LOGIN_SUCCESS, LOGOUT } from './types';

export const loginSuccess = data => ({
  type: LOGIN_SUCCESS,
  data,
});

export const logout = () => ({
  type: LOGOUT,
});
