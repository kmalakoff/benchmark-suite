var Stats = require('stats-accumulator');
var humanize = require('human-format');

module.exports = class OperationsTest {
  constructor(name, fn) {
    this.name = name;
    this.fn = fn;
  }

  async run(options) {
    const time = options.time;
    await this.callibrate(options);
    const startTime = Date.now();
    const stats = { end: { name: this.name, stats: Stats() } };

    do {
      const time = await this.runOnce(options);
      stats.end.stats.update(time);
    } while (Date.now() - startTime <= time);

    return stats;
  }

  async callibrate(options) {
    await this.fn(() => {});
    await this.fn(() => {});
  }

  async runOnce(options) {
    const now = Date.now();
    await this.fn(() => {});
    return Date.now() - now;
  }

  static formatStats(stats) {
    var ops = stats.n / stats.mean;
    var opsStdev = stats.n / Math.sqrt(stats.variance / stats.mean) / 100;
    return `${humanize(ops)} ops/s ±${opsStdev.toFixed(1)}% (${stats.n} runs sampled)`;
  }
};
