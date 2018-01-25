import 'babel-polyfill';
import 'raf/polyfill';
import chai from 'chai'; // eslint-disable-line
import chaiEnzyme from 'chai-enzyme'; // eslint-disable-line
import sinonChai from 'sinon-chai'; // eslint-disable-line
import './test.setup';

chai.use(sinonChai);
chai.use(chaiEnzyme());

// Include all .js files under `src`, except app.js, reducers.js, and routes.js.
// This is for code coverage
const context = require.context('../../src/app/', true, /.*(components|containers).*\.js$/);

context.keys().forEach(context);
