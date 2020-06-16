"use strict";
exports.__esModule = true;
var convolutional_layer_1 = require("../../../ann/convolutional/convolutional-layer");
var dimension_reader_1 = require("../../utils/dimension-reader");
var perceptron2_dreader_1 = require("../perceptrons/perceptron2-dreader");
var ConvolutionalLayerReader = /** @class */ (function () {
    function ConvolutionalLayerReader(f) {
        this["function"] = f;
    }
    ConvolutionalLayerReader.prototype.read = function (scanner) {
        var height = scanner.nextInt();
        var width = scanner.nextInt();
        var neurons = [];
        for (var i = 0; i < height; i++) {
            neurons.push([]);
            for (var j = 0; j < width; j++)
                neurons[i].push((new perceptron2_dreader_1.Perceptron2DReader(this["function"])).read(scanner));
        }
        return new convolutional_layer_1.ConvolutionalLayer(neurons, (new dimension_reader_1.DimensionReader()).read(scanner));
    };
    return ConvolutionalLayerReader;
}());
exports.ConvolutionalLayerReader = ConvolutionalLayerReader;
