import React from 'react';
import { shallow } from 'enzyme';

import { AuthorizerContainer } from '../';


describe.only('<AuthorizerContainer />', () => {
  let authMock;
  let useCodeGrantFlow;
  let parseCognitoWebResponse;
  let signOut;
  let getSession;
  let windowReplaceStateMock;
  let loginSuccessMock;

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
  });

  describe('children', () => {
    it('should render its children inside the main tag', () => {
      const children = (<h1>Test</h1>);
      const wrapper = shallow(
        <AuthorizerContainer auth={authMock} loginSuccess={loginSuccessMock}>
          {children}
        </AuthorizerContainer>,
      );
      expect(wrapper.contains(<div>Oops</div>)).toBe(true);
    });
  });
});
