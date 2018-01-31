import 'babel-polyfill';
import 'raf/polyfill';
import chai from 'chai'; // eslint-disable-line
import './test.setup';

// Include all .js files under `src`, except app.js, reducers.js, and routes.js.
// This is for code coverage
const context = require.context('../../src/app/', true, /.*(components|containers|utilities).*\.js$/);

context.keys().forEach(context);
