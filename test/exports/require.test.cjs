const assert = require('assert');
const BenchmarkSuite = require('benchmark-suite');

describe('exports .cjs', () => {
  it('signature', () => {
    assert.equal(typeof BenchmarkSuite, 'function');
    assert.equal(typeof BenchmarkSuite.MemoryTest, 'function');
    assert.equal(typeof BenchmarkSuite.OperationsTest, 'function');
  });
});
