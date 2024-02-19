const assert = require('assert');

const BenchmarkSuite = require('benchmark-suite');

describe('async await', () => {
  describe('Memory', () => {
    it('time 100', async () => {
      let cycles = 0;
      let completes = 0;

      const suite = new BenchmarkSuite('Suite Name', 'Memory');
      suite.add('Test 1', (fn) => {
        for (let i = 0; i < 100; i++) {
          const array = new Array(100);
          array.reverse();
        }
        assert.ok(!!fn);
        fn();
      });

      suite.on('cycle', (results) => {
        assert.ok(results);
        cycles++;
      });
      suite.on('complete', (results) => {
        assert.ok(results);
        completes++;
      });

      await suite.run({ time: 100 });
      assert.equal(cycles, 1);
      assert.equal(completes, 1);
    });
  });

  describe('Operations', () => {
    it('time 100', async () => {
      let cycles = 0;
      let completes = 0;

      const suite = new BenchmarkSuite('Suite Name', 'Operations');
      suite.add('Test 1', (fn) => {
        for (let i = 0; i < 100; i++) {
          const array = new Array(100);
          array.reverse();
        }
        assert.ok(!!fn);
        fn();
      });

      suite.on('cycle', (results) => {
        assert.ok(results);
        cycles++;
      });
      suite.on('complete', (results) => {
        assert.ok(results);
        completes++;
      });

      await suite.run({ time: 100 });
      assert.equal(cycles, 1);
      assert.equal(completes, 1);
    });
  });
});
