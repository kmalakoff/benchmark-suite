import assert from 'assert';
// @ts-ignore
import BenchmarkSuite, { MemoryTest, OperationsTest } from 'benchmark-suite';

describe('exports .ts', () => {
  it('signature', () => {
    assert.equal(typeof BenchmarkSuite, 'function');
    assert.equal(typeof MemoryTest, 'function');
    assert.equal(typeof OperationsTest, 'function');
  });
});
