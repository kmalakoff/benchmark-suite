export default class OperationsTest {
    static metric(stats: any): number;
    static formatStats(stats: any): string;
    constructor(name: any, fn: any);
    name: any;
    fn: any;
    run(options: any): Promise<{
        end: {
            name: any;
            stats: any;
        };
    }>;
    callibrate(_options: any): Promise<void>;
    runOnce(_options: any): Promise<number>;
}
