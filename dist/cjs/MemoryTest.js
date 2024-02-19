// var heapdump = require('heapdump');
// const pify = require('pify');
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MemoryTest;
    }
});
var _exposegc = /*#__PURE__*/ _interop_require_default(require("expose-gc"));
var _prettybytes = /*#__PURE__*/ _interop_require_default(require("pretty-bytes"));
var _statsaccumulator = /*#__PURE__*/ _interop_require_default(require("stats-accumulator"));
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
// const writeSnapshot = pify(heapdump.writeSnapshot);
var writeSnapshot = function() {
    var _ref = _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            return [
                2
            ];
        });
    });
    return function writeSnapshot() {
        return _ref.apply(this, arguments);
    };
}();
var MemoryTest = /*#__PURE__*/ function() {
    "use strict";
    function MemoryTest(name, fn) {
        _class_call_check(this, MemoryTest);
        this.name = name;
        this.fn = fn;
    }
    _create_class(MemoryTest, [
        {
            key: "run",
            value: function run(options) {
                var _this = this;
                return _async_to_generator(function() {
                    var time, startTime, results, run;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                time = options.time;
                                return [
                                    4,
                                    _this.callibrate(options)
                                ];
                            case 1:
                                _state.sent();
                                startTime = Date.now();
                                results = {
                                    end: {
                                        name: _this.name,
                                        stats: (0, _statsaccumulator.default)()
                                    },
                                    delta: {
                                        name: _this.name,
                                        stats: (0, _statsaccumulator.default)()
                                    }
                                };
                                _state.label = 2;
                            case 2:
                                return [
                                    4,
                                    _this.runOnce(options)
                                ];
                            case 3:
                                run = _state.sent();
                                results.end.stats.update(run.end);
                                results.delta.stats.update(run.delta.max);
                                _state.label = 4;
                            case 4:
                                if (Date.now() - startTime <= time) return [
                                    3,
                                    2
                                ];
                                _state.label = 5;
                            case 5:
                                return [
                                    2,
                                    results
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "callibrate",
            value: function callibrate(options) {
                var _this = this;
                return _async_to_generator(function() {
                    var dump, dumped, stats, start, delta;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                dump = options.heapdumpTrigger && !options.heapdumped;
                                dumped = false;
                                stats = (0, _statsaccumulator.default)();
                                _state.label = 1;
                            case 1:
                                if (!(stats.n < 5)) return [
                                    3,
                                    5
                                ];
                                (0, _exposegc.default)();
                                start = process.memoryUsage().heapUsed;
                                return [
                                    4,
                                    _this.fn(function() {})
                                ];
                            case 2:
                                _state.sent();
                                if (!(dump && !dumped)) return [
                                    3,
                                    4
                                ];
                                dumped = true;
                                return [
                                    4,
                                    writeSnapshot("hd-calibrate.heapsnapshot")
                                ];
                            case 3:
                                _state.sent();
                                (0, _exposegc.default)();
                                _state.label = 4;
                            case 4:
                                (0, _exposegc.default)();
                                delta = process.memoryUsage().heapUsed - start;
                                if (delta < 0) stats = (0, _statsaccumulator.default)();
                                else stats.update(delta);
                                return [
                                    3,
                                    1
                                ];
                            case 5:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "runOnce",
            value: function runOnce() {
                var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                var _this = this;
                return _async_to_generator(function() {
                    var now, stats, dumped, dump, start, delta;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                now = Date.now();
                                stats = (0, _statsaccumulator.default)();
                                _this.n++;
                                dumped = false;
                                dump = options.heapdumpTrigger && !options.heapdumped;
                                if (!dump) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    writeSnapshot("hd-".concat(_this.name, "-").concat(now, "-start.heapsnapshot"))
                                ];
                            case 1:
                                _state.sent();
                                (0, _exposegc.default)();
                                _state.label = 2;
                            case 2:
                                (0, _exposegc.default)();
                                start = process.memoryUsage().heapUsed;
                                return [
                                    4,
                                    _this.fn(/*#__PURE__*/ _async_to_generator(function() {
                                        var delta;
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    (0, _exposegc.default)();
                                                    delta = process.memoryUsage().heapUsed - start;
                                                    stats.update(delta);
                                                    if (!(dump && !dumped && delta > options.heapdumpTrigger)) return [
                                                        3,
                                                        2
                                                    ];
                                                    dumped = true;
                                                    options.heapdumped = true;
                                                    return [
                                                        4,
                                                        writeSnapshot("hd-".concat(_this.name, "-").concat(now, "-triggered.heapsnapshot"))
                                                    ];
                                                case 1:
                                                    _state.sent();
                                                    (0, _exposegc.default)();
                                                    _state.label = 2;
                                                case 2:
                                                    return [
                                                        2
                                                    ];
                                            }
                                        });
                                    }))
                                ];
                            case 3:
                                _state.sent();
                                (0, _exposegc.default)();
                                delta = process.memoryUsage().heapUsed - start;
                                if (!dump) return [
                                    3,
                                    5
                                ];
                                return [
                                    4,
                                    writeSnapshot("hd-".concat(_this.name, "-").concat(now, "-end.heapsnapshot"))
                                ];
                            case 4:
                                _state.sent();
                                (0, _exposegc.default)();
                                _state.label = 5;
                            case 5:
                                return [
                                    2,
                                    {
                                        end: delta,
                                        delta: stats
                                    }
                                ];
                        }
                    });
                })();
            }
        }
    ], [
        {
            key: "metric",
            value: function metric(stats) {
                return stats.mean;
            }
        },
        {
            key: "formatStats",
            value: function formatStats(stats) {
                var memoryStdev = Math.sqrt(stats.variance / stats.mean) / 100;
                return "".concat((0, _prettybytes.default)(stats.mean), " \xb1").concat(memoryStdev.toFixed(1), "% (").concat(stats.n, " runs sampled)");
            }
        }
    ]);
    return MemoryTest;
}();
/* CJS INTEROP */ if (exports.__esModule && exports.default) { Object.defineProperty(exports.default, '__esModule', { value: true }); for (var key in exports) exports.default[key] = exports[key]; module.exports = exports.default; }