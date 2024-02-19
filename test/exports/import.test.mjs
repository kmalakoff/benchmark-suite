import assert from 'assert';
import BenchmarkSuite, { MemoryTest, OperationsTest } from 'benchmark-suite';

describe('exports .mjs', () => {
  it('signature', () => {
    assert.equal(typeof BenchmarkSuite, 'function');
    assert.equal(typeof MemoryTest, 'function');
    assert.equal(typeof OperationsTest, 'function');
  });
});
