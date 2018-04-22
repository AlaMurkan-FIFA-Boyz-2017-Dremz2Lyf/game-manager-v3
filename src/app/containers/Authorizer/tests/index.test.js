import React from 'react';
import { shallow } from 'enzyme';

import { AuthorizerContainer, mapStateToProps } from '../';


describe('<AuthorizerContainer />', () => {
  let authMock;
  let useCodeGrantFlow;
  let parseCognitoWebResponse;
  let signOut;
  let getSession;
  let windowReplaceStateMock;
  let loginSuccessMock;
  let wrapper;
  const children = (<h1>Test</h1>);

  beforeEach(() => {
    windowReplaceStateMock = jest.fn();
    window.history.replaceState = windowReplaceStateMock;
    loginSuccessMock = jest.fn();
    useCodeGrantFlow = jest.fn();
    parseCognitoWebResponse = jest.fn();
    signOut = jest.fn();
    getSession = jest.fn();

    authMock = {
      useCodeGrantFlow,
      parseCognitoWebResponse,
      signOut,
      getSession,
    };
    wrapper = shallow(
      <AuthorizerContainer auth={authMock} loginSuccess={loginSuccessMock}>
        {children}
      </AuthorizerContainer>,
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render a error message if the user is not logged in', () => {
    expect(wrapper.contains(<div>Oops</div>)).toBe(true);
  });

  it('should render it\'s children if the user is logged in', () => {
    wrapper.setProps({ isLoggedIn: true });
    expect(wrapper.contains(children)).toBe(true);
  });

  describe('componentWillReceiveProps', () => {
    it('should not call signOut if the user is still logged in from nextProps', () => {
      wrapper.instance().componentWillReceiveProps({ isLoggedIn: true });
      expect(signOut).not.toHaveBeenCalled();
    });
    it('should call signout if the user is not logged in from nextProps', () => {
      wrapper.instance().componentWillReceiveProps({ isLoggedIn: false });
      expect(signOut).toHaveBeenCalled();
    });
  });
});

describe('mapStateToProps', () => {
  it('should return isLoggedIn from the player object in state', () => {
    const state = {
      player: {
        isLoggedIn: false,
      },
    };
    const result = mapStateToProps(state);
    expect(result).toEqual({ isLoggedIn: false });
  });
});
