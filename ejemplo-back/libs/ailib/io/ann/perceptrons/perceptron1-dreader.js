"use strict";
exports.__esModule = true;
var perceptron1_d_1 = require("../../../ann/perceptrons/perceptron1-d");
var Perceptron1DReader = /** @class */ (function () {
    function Perceptron1DReader(f) {
        this["function"] = f;
    }
    Perceptron1DReader.prototype.read = function (scanner) {
        var size = scanner.nextInt();
        var weights = [];
        for (var i = 0; i < size; i++)
            weights.push(scanner.nextDouble());
        var beta = scanner.nextDouble();
        return new perceptron1_d_1.Perceptron1D(weights, beta, this["function"]);
    };
    return Perceptron1DReader;
}());
exports.Perceptron1DReader = Perceptron1DReader;
