var assert = require('assert');

var BenchmarkSuite = require('../..');

describe('async await', function () {
  describe('Memory', function () {
    it('time 100', async function () {
      var cycles = 0;
      var completes = 0;

      var suite = new BenchmarkSuite('Suite Name', 'Memory');
      suite.add(`Test 1`, function (fn) {
        for (var i = 0; i < 100; i++) {
          var array = new Array(100);
          array.reverse();
        }
        assert.ok(!!fn);
        fn();
      });

      suite.on('cycle', function (results) {
        assert.ok(results);
        cycles++;
      });
      suite.on('complete', function (results) {
        assert.ok(results);
        completes++;
      });

      await suite.run({ time: 100 });
      assert.equal(cycles, 1);
      assert.equal(completes, 1);
    });
  });

  describe('Operations', function () {
    it('time 100', async function () {
      var cycles = 0;
      var completes = 0;

      var suite = new BenchmarkSuite('Suite Name', 'Operations');
      suite.add(`Test 1`, function (fn) {
        for (var i = 0; i < 100; i++) {
          var array = new Array(100);
          array.reverse();
        }
        assert.ok(!!fn);
        fn();
      });

      suite.on('cycle', function (results) {
        assert.ok(results);
        cycles++;
      });
      suite.on('complete', function (results) {
        assert.ok(results);
        completes++;
      });

      await suite.run({ time: 100 });
      assert.equal(cycles, 1);
      assert.equal(completes, 1);
    });
  });
});
