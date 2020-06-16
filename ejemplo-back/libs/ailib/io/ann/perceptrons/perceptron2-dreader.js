"use strict";
exports.__esModule = true;
var perceptron2_d_1 = require("../../../ann/perceptrons/perceptron2-d");
var perceptron1_dreader_1 = require("./perceptron1-dreader");
var Perceptron2DReader = /** @class */ (function () {
    function Perceptron2DReader(f) {
        this["function"] = f;
    }
    Perceptron2DReader.prototype.read = function (scanner) {
        var height = scanner.nextInt();
        var weights = [];
        for (var i = 0; i < height; i++)
            weights.push((new perceptron1_dreader_1.Perceptron1DReader(this["function"])).read(scanner));
        var beta = scanner.nextDouble();
        return new perceptron2_d_1.Perceptron2D(weights, beta, this["function"]);
    };
    return Perceptron2DReader;
}());
exports.Perceptron2DReader = Perceptron2DReader;
