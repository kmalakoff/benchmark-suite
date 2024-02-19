import humanize from 'human-format';
import Stats from 'stats-accumulator';
let OperationsTest = class OperationsTest {
    async run(options) {
        const time = options.time;
        await this.callibrate(options);
        const startTime = Date.now();
        const stats = {
            end: {
                name: this.name,
                stats: Stats()
            }
        };
        do {
            const time = await this.runOnce(options);
            stats.end.stats.update(time);
        }while (Date.now() - startTime <= time)
        return stats;
    }
    async callibrate(_options) {
        await this.fn(()=>{});
        await this.fn(()=>{});
    }
    async runOnce(_options) {
        const now = Date.now();
        await this.fn(()=>{});
        return Date.now() - now;
    }
    static metric(stats) {
        return stats.n / stats.mean;
    }
    static formatStats(stats) {
        const ops = stats.n / stats.mean;
        const opsStdev = stats.n / Math.sqrt(stats.variance / stats.mean) / 100;
        return `${humanize(ops)} ops/s ±${opsStdev.toFixed(1)}% (${stats.n} runs sampled)`;
    }
    constructor(name, fn){
        this.name = name;
        this.fn = fn;
    }
};
export { OperationsTest as default };
