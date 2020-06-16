"use strict";
exports.__esModule = true;
var receptive_field_1 = require("../../../ann/convolutional/receptive-field");
var convolutional_layer_reader_1 = require("./convolutional-layer-reader");
var ReceptiveFieldReader = /** @class */ (function () {
    function ReceptiveFieldReader(f) {
        this["function"] = f;
    }
    ReceptiveFieldReader.prototype.read = function (scanner) {
        var size = scanner.nextInt();
        var layers = [];
        for (var i = 0; i < size; i++)
            layers.push((new convolutional_layer_reader_1.ConvolutionalLayerReader(this["function"])).read(scanner));
        return new receptive_field_1.ReceptiveField(layers);
    };
    return ReceptiveFieldReader;
}());
exports.ReceptiveFieldReader = ReceptiveFieldReader;
