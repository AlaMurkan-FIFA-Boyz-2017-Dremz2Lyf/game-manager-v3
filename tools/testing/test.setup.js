const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });

if (process.env.NODE_ENV === 'test') {
  global.fetch = require('jest-fetch-mock');
  global.Headers = () => {};
}
