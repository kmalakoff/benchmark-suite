var EventEmitter = require('eventemitter3');

var TESTS = {
  Memory: require('./lib/MemoryTest'),
  Operations: require('./lib/OperationsTest'),
};

function toJSON(results) {
  var json = {};
  for (var key in results) {
    json[key] = { name: results[key].name };
    json[key].stats = results[key].stats.toJSON();
  }
  return json;
}

module.exports = class Suite extends EventEmitter {
  constructor(name, type) {
    super();
    this.name = name;
    if (!type) throw new Error('Suite needs a test type');
    this.type = type;
    this.Test = TESTS[this.type];
    if (!this.Test) throw new Error(`Suite test type not recognized ${type}`);
    this.tests = [];
  }

  add(name, fn) {
    this.tests.push(new this.Test(name, fn));
  }

  async run(options) {
    if (!options.time) throw new Error('Missing time option');
    const results = {};

    for (const test of this.tests) {
      const result = await test.run(options);
      for (var key in result) {
        if (!results[key] || this.Test.metric(results[key].stats) < this.Test.metric(result[key].stats)) results[key] = result[key];
      }
      this.emit('cycle', toJSON(result));
    }
    this.emit('complete', toJSON(results));
  }

  formatStats(result) {
    return this.Test.formatStats(result);
  }
};
