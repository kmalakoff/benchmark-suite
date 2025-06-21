// var heapdump = require('heapdump');
// const pify = require('pify');
import gc from 'expose-gc';
import humanize from 'pretty-bytes';
import Stats from 'stats-accumulator';

import type { MemoryRunOnceResult, RunOptions, RunResult, TestFn } from './types.ts';

// const writeSnapshot = pify(heapdump.writeSnapshot);
const writeSnapshot = async (_name: string) => {};

export default class MemoryTest {
  name: string;
  fn: TestFn;
  n: number;

  constructor(name: string, fn: TestFn) {
    this.name = name;
    this.fn = fn;
  }

  async run(options: RunOptions = {}): Promise<RunResult> {
    const time = options.time;
    await this.callibrate(options);
    const startTime = Date.now();
    const results: RunResult = { end: { name: this.name, stats: new Stats() }, delta: { name: this.name, stats: new Stats() } };

    do {
      const run = await this.runOnce(options);
      results.end.stats.update(run.end);
      results.delta.stats.update(run.delta.max);
    } while (Date.now() - startTime <= time);

    return results;
  }

  async callibrate(options: RunOptions): Promise<void> {
    const dump = options.heapdumpTrigger && !options.heapdumped;
    let dumped = false;
    let stats = new Stats();

    while (stats.n < 5) {
      gc();
      const start = process.memoryUsage().heapUsed;
      await this.fn(() => {});
      if (dump && !dumped) {
        dumped = true;
        await writeSnapshot('hd-calibrate.heapsnapshot');
        gc();
      }
      gc();
      const delta = process.memoryUsage().heapUsed - start;
      if (delta < 0) stats = new Stats();
      else stats.update(delta);
    }
  }

  async runOnce(options: RunOptions = {}): Promise<MemoryRunOnceResult> {
    const now = Date.now();
    const stats = new Stats();
    this.n++;

    let dumped = false;
    const dump = options.heapdumpTrigger && !options.heapdumped;
    if (dump) {
      await writeSnapshot(`hd-${this.name}-${now}-start.heapsnapshot`);
      gc();
    }

    gc();
    const start = process.memoryUsage().heapUsed;

    await this.fn(async () => {
      gc();
      const delta = process.memoryUsage().heapUsed - start;
      stats.update(delta);
      if (dump && !dumped && delta > options.heapdumpTrigger) {
        dumped = true;
        options.heapdumped = true;
        await writeSnapshot(`hd-${this.name}-${now}-triggered.heapsnapshot`);
        gc();
      }
    });

    gc();
    const delta = process.memoryUsage().heapUsed - start;
    if (dump) {
      await writeSnapshot(`hd-${this.name}-${now}-end.heapsnapshot`);
      gc();
    }

    return { end: delta, delta: stats };
  }

  metric(stats: Stats) {
    return stats.mean;
  }

  formatStats(stats: Stats) {
    const memoryStdev = Math.sqrt(stats.variance() / stats.mean) / 100;
    return `${humanize(stats.mean)} ±${memoryStdev.toFixed(1)}% (${stats.n} runs sampled)`;
  }
}
