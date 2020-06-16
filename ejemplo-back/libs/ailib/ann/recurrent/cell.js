"use strict";
exports.__esModule = true;
var Cell = /** @class */ (function () {
    function Cell(F, I, C, O) {
        this.F = F;
        this.I = I;
        this.C = C;
        this.O = O;
    }
    Cell.prototype.propagate = function (input, output, previous) {
        var result = [];
        var data = this.join(input, output);
        var f_t = this.F.propagate(data);
        var i_t = this.I.propagate(data);
        var c_t = this.C.propagate(data);
        var o_t = this.O.propagate(data);
        for (var i = 0; i < output.length; i++) {
            c_t[i] = (f_t[i] * previous[i]) + (i_t[i] * c_t[i]);
            result.push(o_t[i] * Math.tanh(c_t[i]));
        }
        return { result: result, state: c_t };
    };
    Cell.prototype.join = function (input, output) {
        var result = [];
        for (var i = 0; i < input.length; i++)
            result.push(input[i]);
        for (var i = 0; i < output.length; i++)
            result.push(output[i]);
        return result;
    };
    return Cell;
}());
exports.Cell = Cell;
