export default class MemoryTest {
    static metric(stats: any): any;
    static formatStats(stats: any): string;
    constructor(name: any, fn: any);
    name: any;
    fn: any;
    run(options: any): Promise<{
        end: {
            name: any;
            stats: any;
        };
        delta: {
            name: any;
            stats: any;
        };
    }>;
    callibrate(options: any): Promise<void>;
    runOnce(options?: {}): Promise<{
        end: number;
        delta: any;
    }>;
}
