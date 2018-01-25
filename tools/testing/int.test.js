import 'babel-polyfill';
import 'raf/polyfill';
import { expect } from 'chai';
import sinon from 'sinon';

const metadata = require('../../micro-app.json');

describe('micro app', () => {
  it('should register itself upon loading', () => {
    const spy = sinon.spy();
    window.microAppRegistry = { registerApp: spy };
    require('../../src/app/index');
    expect(spy.callCount).to.equal(1);
    // registers the correct name
    expect(spy.getCall(0).args[0]).to.equal(metadata.name);
    // registers a function that could be a React.Component, or stateless function
    expect(spy.getCall(0).args[1]).to.be.a('function');
  });
});
