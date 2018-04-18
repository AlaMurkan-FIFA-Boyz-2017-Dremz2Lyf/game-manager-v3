import { LOGIN_SUCCESS, LOGOUT } from '../../actions/types';

const emptyState = {
  isLoggedIn: false,
};

export default function user(state = emptyState, { type, data }) {
  switch (type) {
    case LOGIN_SUCCESS:
      return Object.assign(
        {},
        emptyState,
        data,
      );
    case LOGOUT:
      return emptyState;
    default:
      return state;
  }
}
