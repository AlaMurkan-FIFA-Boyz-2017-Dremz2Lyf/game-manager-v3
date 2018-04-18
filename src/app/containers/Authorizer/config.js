export default {
  ClientId: process.env.CLIENT_ID,
  AppWebDomain: process.env.APP_WEB_DOMAIN,
  TokenScopesArray: ['email', 'profile', 'openid'],
  RedirectUriSignIn: process.env.SIGN_IN_URI,
  RedirectUriSignOut: process.env.SIGN_IN_URI,
};
