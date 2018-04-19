const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const fetch = require('jest-fetch-mock');

enzyme.configure({ adapter: new Adapter() });

if (process.env.NODE_ENV === 'test') {
  jest.setMock('node-fetch', fetch);
}
