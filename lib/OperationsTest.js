var Stats = require('stats-incremental');

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

  static metric(stats) {
    return stats.n / stats.mean;
  }

  static formatStats(stats) {
    var opsStdev = stats.n / Math.sqrt(stats.variance / stats.mean) / 100;
    return `${OperationsTest.metric(stats).toFixed(2)} ops/s ±${opsStdev.toFixed(1)}% (${stats.n} runs sampled)`;
  }
};
