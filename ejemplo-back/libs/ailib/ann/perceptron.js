"use strict";
exports.__esModule = true;
var location_1 = require("../utils/location");
var Perceptron = /** @class */ (function () {
    function Perceptron(weights, beta, f) {
        this.weights = [];
        this.beta = 0.0;
        this.weights = weights;
        this.beta = beta;
        this["function"] = f;
    }
    Perceptron.prototype.weightedInput = function (input) {
        return this.calculateWeightedInput(new location_1.Location(0, 0, 0), input);
    };
    Perceptron.prototype.propagate = function (input) {
        return this.activate(this.weightedInput(input));
    };
    Perceptron.prototype.activate = function (weightedSum) {
        return this["function"].activate(weightedSum + this.beta);
    };
    Perceptron.prototype.propagateFromLocation = function (start, input) {
        return this.activate(this.calculateWeightedInput(start, input));
    };
    Perceptron.prototype.size = function () {
        return this.weights.length;
    };
    return Perceptron;
}());
exports.Perceptron = Perceptron;
