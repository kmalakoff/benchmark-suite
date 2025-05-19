export interface HeapdumpOptions {
  heapdumpTrigger?: number;
  heapdumped?: boolean;
}

export type Callback = () => void;
export type TestFn = (cb: Callback) => void;
