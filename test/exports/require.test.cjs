const assert = require('assert');
const { default: Suite, MemoryTest, OperationsTest } = require('benchmark-suite');

describe('exports .cjs', () => {
  it('Suite', () => {
    assert.equal(typeof Suite, 'function');
  });
  it('MemoryTest', () => {
    assert.equal(typeof MemoryTest, 'function');
  });
  it('OperationsTest', () => {
    assert.equal(typeof OperationsTest, 'function');
  });
});
