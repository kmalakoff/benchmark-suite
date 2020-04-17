## performance-suite

Performance suite

```
  var suite = new BenchmarkSuite('Suite Name', 'Memory' /* or 'Operations' */);
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

  await suite.run({ time: 1000 });
```
