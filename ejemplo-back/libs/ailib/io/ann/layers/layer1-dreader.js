"use strict";
exports.__esModule = true;
var perceptron1_dreader_1 = require("../perceptrons/perceptron1-dreader");
var layer1_d_1 = require("../../../ann/layers/layer1-d");
var Layer1DReader = /** @class */ (function () {
    function Layer1DReader(f) {
        this["function"] = f;
    }
    Layer1DReader.prototype.read = function (scanner) {
        var size = scanner.nextInt();
        var neurons = [];
        for (var i = 0; i < size; i++)
            neurons.push((new perceptron1_dreader_1.Perceptron1DReader(this["function"])).read(scanner));
        return new layer1_d_1.Layer1D(neurons);
    };
    return Layer1DReader;
}());
exports.Layer1DReader = Layer1DReader;
