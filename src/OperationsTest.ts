import humanize from 'human-format';
import Stats from 'stats-accumulator';

import type { RunOptions, RunResult, TestFn } from './types.js';

export default class OperationsTest {
  name: string;
  fn: TestFn;

  constructor(name: string, fn: TestFn) {
    this.name = name;
    this.fn = fn;
  }

  async run(options: RunOptions = {}): Promise<RunResult> {
    const time = options.time;
    await this.callibrate(options);
    const startTime = Date.now();
    const stats = { end: { name: this.name, stats: new Stats() } };

    do {
      const time = await this.runOnce(options);
      stats.end.stats.update(time);
    } while (Date.now() - startTime <= time);

    return stats;
  }

  async callibrate(_options: RunOptions): Promise<void> {
    await this.fn(() => {});
    await this.fn(() => {});
  }

  async runOnce(_options: RunOptions = {}): Promise<number> {
    const now = Date.now();
    await this.fn(() => {});
    return Date.now() - now;
  }

  metric(stats: Stats): number {
    return stats.n / stats.mean;
  }

  formatStats(stats: Stats): string {
    const ops = stats.n / stats.mean;
    const opsStdev = stats.n / Math.sqrt(stats.variance() / stats.mean) / 100;
    return `${humanize(ops)} ops/s ±${opsStdev.toFixed(1)}% (${stats.n} runs sampled)`;
  }
}
