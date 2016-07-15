/* eslint-env mocha */

import assert from 'assert';
import Message from '../src/Message.js';

/**
 * Sample unit test.
 */
describe('Message', () => {
  const message = new Message();
  it('should render correctly', () => {
    assert.equal(message.render(), 'Hello Appfolio!');
  });
});
