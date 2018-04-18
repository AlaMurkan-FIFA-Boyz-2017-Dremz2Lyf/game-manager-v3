import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { loginSuccess } from '../../actions';

const REFRESH_TIME = 1000 * 60 * 50;

export class AuthorizerContainer extends Component {
  static propTypes = {
    children: PropTypes.node,
    auth: PropTypes.object.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    loginSuccess: PropTypes.func.isRequired,
  };

  static defaultProps = {
    isLoggedIn: false,
  };

  constructor(props) {
    super(props);
    const { auth } = props;

    this.state = {
      initialLogin: true,
    };

    this.auth = auth;
  }

  componentDidMount() {
    this.auth.userhandler = {
      onSuccess: this.onSuccess,
      onFailure: this.onFailure,
    };

    const curUrl = window.location.href;
    this.auth.useCodeGrantFlow();
    this.auth.parseCognitoWebResponse(curUrl);
    if (!curUrl.includes('?code')) {
      this.onSuccess(null);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { isLoggedIn } = nextProps;
    if (!isLoggedIn) {
      this.auth.signOut();
    }
  }

  onSuccess = (response) => {
    if (this.state.initialLogin) {
      const cleanUri = `${location.protocol}//${location.host}${location.pathname}`;
      window.history.replaceState({}, document.title, cleanUri);
      this.setupTokenRefreshTimer(200);
      this.setState({ initialLogin: false });
    } else {
      this.setupTokenRefreshTimer();
    }
    if (response) this.props.loginSuccess(response);
  };

  onFailure = (error) => {
    console.error('Error getting session:', error); // eslint-disable-line
  };

  setupTokenRefreshTimer(timeout) {
    setTimeout(() => {
      this.auth.getSession();
    }, timeout || REFRESH_TIME);
  }

  render() {
    const { isLoggedIn, children } = this.props;
    if (!isLoggedIn) {
      return (
        <div>Oops</div>
      );
    }
    return (
      <main>
        {children}
      </main>
    );
  }
}

// The isLoggedIn flag will be checked and call the auth.signout method when false
export default connect(state => ({ isLoggedIn: state.player.isLoggedIn }), { /* loginSuccess */ })(AuthorizerContainer);
