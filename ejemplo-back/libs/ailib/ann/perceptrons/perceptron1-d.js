"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var perceptron_1 = require("../perceptron");
var Perceptron1D = /** @class */ (function (_super) {
    __extends(Perceptron1D, _super);
    function Perceptron1D(weights, beta, f) {
        return _super.call(this, weights, beta, f) || this;
    }
    Perceptron1D.prototype.calculateWeightedInput = function (start, input) {
        var sum = 0.0;
        for (var i = 0; i < this.weights.length; i++)
            sum += this.weights[i] * input[start.x + i];
        return sum;
    };
    return Perceptron1D;
}(perceptron_1.Perceptron));
exports.Perceptron1D = Perceptron1D;
