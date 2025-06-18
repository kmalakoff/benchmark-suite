import EventEmitter from 'eventemitter3';
import type Stats from 'stats-accumulator';
import Memory from './MemoryTest.js';
import Operations from './OperationsTest.js';
import type { RunOptions, RunResult, Test, TestFn } from './types.js';

export { default as MemoryTest } from './MemoryTest.js';
export { default as OperationsTest } from './OperationsTest.js';
export * from './types.js';

export type TestType = 'Memory' | 'Operations';

const TESTS: { [key: string]: Test } = {
  Memory: Memory as unknown as Test,
  Operations: Operations as unknown as Test,
};

const toJSON = (results) => {
  const json = {};
  for (const key in results) {
    json[key] = { name: results[key].name };
    json[key].stats = results[key].stats.toJSON();
  }
  return json;
};
const isString = (x) => Object.prototype.toString.call(x) === '[object String]';

export default class Suite extends EventEmitter {
  name: string;
  TestClass: Test;
  tests: Test[];

  constructor(name: string, testOrType: TestType | Test) {
    super();
    this.name = name;
    if (!testOrType) throw new Error('Suite needs a test');
    if (isString(testOrType)) {
      this.TestClass = TESTS[testOrType as string];
      if (!this.TestClass) throw new Error(`Suite test type not recognized ${testOrType}`);
    } else this.TestClass = testOrType as Test;

    this.tests = [];
  }

  add(name: string, fn: TestFn): void {
    this.tests.push(new (this.TestClass as unknown as new (name: string, fn: TestFn) => Test)(name, fn) as unknown as Test);
  }

  async run(options: RunOptions = {}): Promise<RunResult> {
    if (!options.time) throw new Error('Missing time option');
    const results = {};

    for (const test of this.tests) {
      const result = await test.run(options);
      for (const key in result) {
        if (!results[key] || test.metric(results[key].stats) < test.metric(result[key].stats)) results[key] = result[key];
      }
      this.emit('cycle', toJSON(result));
    }
    this.emit('complete', toJSON(results));
    return results;
  }

  formatStats(stats: Stats): string {
    if (!this.tests.length) throw new Error('Add tests before calling formatStats');
    return this.tests[0].formatStats(stats);
  }
}
