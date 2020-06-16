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
var Perceptron3D = /** @class */ (function (_super) {
    __extends(Perceptron3D, _super);
    function Perceptron3D(weights, beta, f) {
        return _super.call(this, weights, beta, f) || this;
    }
    Perceptron3D.prototype.calculateWeightedInput = function (start, input) {
        var sum = 0.0;
        for (var i = 0; i < this.weights.length; i++)
            sum += this.weights[i].calculateWeightedInput(start, input[start.z + i]);
        return sum;
    };
    Perceptron3D.prototype.width = function () {
        return this.weights[0].width();
    };
    Perceptron3D.prototype.height = function () {
        return this.weights[0].height();
    };
    Perceptron3D.prototype.length = function () {
        return this.size();
    };
    return Perceptron3D;
}(perceptron_1.Perceptron));
exports.Perceptron3D = Perceptron3D;
