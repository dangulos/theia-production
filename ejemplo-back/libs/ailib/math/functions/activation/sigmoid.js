"use strict";
exports.__esModule = true;
var Sigmoid = /** @class */ (function () {
    function Sigmoid() {
    }
    Sigmoid.prototype.activate = function (x) {
        return 1.0 / (1.0 + Math.exp(-x));
    };
    Sigmoid.prototype.derivate = function (x) {
        var val = Math.exp(-x);
        return val / Math.pow(1.0 + val, 2.0);
    };
    return Sigmoid;
}());
exports.Sigmoid = Sigmoid;
