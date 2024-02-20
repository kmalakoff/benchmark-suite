"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return OperationsTest;
    }
});
var _humanformat = /*#__PURE__*/ _interop_require_default(require("human-format"));
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
var OperationsTest = /*#__PURE__*/ function() {
    "use strict";
    function OperationsTest(name, fn) {
        _class_call_check(this, OperationsTest);
        this.name = name;
        this.fn = fn;
    }
    _create_class(OperationsTest, [
        {
            key: "run",
            value: function run(options) {
                var _this = this;
                return _async_to_generator(function() {
                    var time, startTime, stats, time1;
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
                                stats = {
                                    end: {
                                        name: _this.name,
                                        stats: new _statsaccumulator.default()
                                    }
                                };
                                _state.label = 2;
                            case 2:
                                return [
                                    4,
                                    _this.runOnce(options)
                                ];
                            case 3:
                                time1 = _state.sent();
                                stats.end.stats.update(time1);
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
                                    stats
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "callibrate",
            value: function callibrate(_options) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.fn(function() {})
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    4,
                                    _this.fn(function() {})
                                ];
                            case 2:
                                _state.sent();
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
            value: function runOnce(_options) {
                var _this = this;
                return _async_to_generator(function() {
                    var now;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                now = Date.now();
                                return [
                                    4,
                                    _this.fn(function() {})
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2,
                                    Date.now() - now
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
                return stats.n / stats.mean;
            }
        },
        {
            key: "formatStats",
            value: function formatStats(stats) {
                var ops = stats.n / stats.mean;
                var opsStdev = stats.n / Math.sqrt(stats.variance / stats.mean) / 100;
                return "".concat((0, _humanformat.default)(ops), " ops/s \xb1").concat(opsStdev.toFixed(1), "% (").concat(stats.n, " runs sampled)");
            }
        }
    ]);
    return OperationsTest;
}();
/* CJS INTEROP */ if (exports.__esModule && exports.default) { Object.defineProperty(exports.default, '__esModule', { value: true }); for (var key in exports) exports.default[key] = exports[key]; module.exports = exports.default; }