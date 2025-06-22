import type Stats from 'stats-accumulator';

export interface RunOptions {
  time?: number;
  heapdumpTrigger?: number;
  heapdumped?: boolean;
}

export type RunResult = Record<string, { name: string; stats: Stats }>;
export interface MemoryRunOnceResult {
  end: number;
  delta: Stats;
}

export type Callback = () => void;
export type TestFn = (cb: Callback) => void;
export interface Test {
  run: (options: RunOptions) => Promise<RunResult>;
  metric: (stats: Stats) => number;
  formatStats: (stats: Stats) => string;
}
