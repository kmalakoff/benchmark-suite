export { default as MemoryTest } from "./MemoryTest.mjs";
export { default as OperationsTest } from "./OperationsTest.mjs";
export default class Suite extends EventEmitter<string | symbol, any> {
    constructor(name: any, type: any);
    name: any;
    type: any;
    Test: any;
    tests: any[];
    add(name: any, fn: any): void;
    run(options: any): Promise<void>;
    formatStats(result: any): any;
}
import EventEmitter from 'eventemitter3';
