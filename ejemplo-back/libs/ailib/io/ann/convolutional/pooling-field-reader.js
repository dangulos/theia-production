"use strict";
exports.__esModule = true;
var convolutional_layer_reader_1 = require("./convolutional-layer-reader");
var pooling_field_1 = require("../../../ann/convolutional/pooling-field");
var PoolingFieldReader = /** @class */ (function () {
    function PoolingFieldReader(f) {
        this["function"] = f;
    }
    PoolingFieldReader.prototype.read = function (scanner) {
        var size = scanner.nextInt();
        var layers = [];
        for (var i = 0; i < size; i++)
            layers.push((new convolutional_layer_reader_1.ConvolutionalLayerReader(this["function"])).read(scanner));
        return new pooling_field_1.PoolingField(layers);
    };
    return PoolingFieldReader;
}());
exports.PoolingFieldReader = PoolingFieldReader;
