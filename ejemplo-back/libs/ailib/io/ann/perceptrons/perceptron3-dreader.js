"use strict";
exports.__esModule = true;
var perceptron2_dreader_1 = require("./perceptron2-dreader");
var perceptron3_d_1 = require("../../../ann/perceptrons/perceptron3-d");
var Perceptron3DReader = /** @class */ (function () {
    function Perceptron3DReader(f) {
        this["function"] = f;
    }
    Perceptron3DReader.prototype.read = function (scanner) {
        var size = scanner.nextInt();
        var weights = [];
        for (var i = 0; i < size; i++)
            weights.push((new perceptron2_dreader_1.Perceptron2DReader(this["function"])).read(scanner));
        var beta = scanner.nextDouble();
        return new perceptron3_d_1.Perceptron3D(weights, beta, this["function"]);
    };
    return Perceptron3DReader;
}());
exports.Perceptron3DReader = Perceptron3DReader;
