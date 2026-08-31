import assert from 'assert';
import Suite, { MemoryTest, OperationsTest } from 'benchmark-suite';

describe('exports .mjs', () => {
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
