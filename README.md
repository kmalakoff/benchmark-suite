# benchmark-suite

Run time or memory benchmarks for callback-based test functions.

Requires Node.js >=8.

## Install

```sh
npm install benchmark-suite
```

## Use it

This Operations benchmark measures an array reversal for 100 milliseconds:

```js
var BenchmarkSuite = require('benchmark-suite');

var suite = new BenchmarkSuite('Array reverse', 'Operations');
suite.add('reverse 100 items', function (done) {
  var values = new Array(100);
  values.reverse();
  done();
});

suite.run({ time: 100 }).then(function (results) {
  console.log(suite.formatStats(results.end.stats));
});
```

Each test receives a callback and must call it when one measured operation is complete. `run({ time })` requires a duration in milliseconds and returns a Promise of the results. Use `Operations` to measure work per second. Use `Memory` to measure heap change around each callback.

The suite emits `cycle` after each test and `complete` after all tests finish.

## License

MIT
