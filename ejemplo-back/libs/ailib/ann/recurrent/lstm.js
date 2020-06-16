"use strict";
exports.__esModule = true;
var LSTM = /** @class */ (function () {
    function LSTM(strap, outputSize) {
        this.outputSize = 0;
        this.strap = strap;
        this.outputSize = outputSize;
    }
    LSTM.prototype.propagate = function (input) {
        var result = { result: [], state: [] };
        for (var i = 0; i < this.outputSize; i++) {
            result.result.push(0);
            result.state.push(0);
        }
        for (var i = 0; i < this.strap.length; i++)
            result = this.strap[i].propagate(input[i], result.result, result.state);
        return result.result;
    };
    return LSTM;
}());
exports.LSTM = LSTM;
