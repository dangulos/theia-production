"use strict";
exports.__esModule = true;
var integration_layer_1 = require("../../../ann/convolutional/integration-layer");
var perceptron3_dreader_1 = require("../perceptrons/perceptron3-dreader");
var IntegrationLayerReader = /** @class */ (function () {
    function IntegrationLayerReader(f) {
        this["function"] = f;
    }
    IntegrationLayerReader.prototype.read = function (scanner) {
        var size = scanner.nextInt();
        var neurons = [];
        for (var i = 0; i < size; i++)
            neurons.push((new perceptron3_dreader_1.Perceptron3DReader(this["function"])).read(scanner));
        return new integration_layer_1.IntegrationLayer(neurons);
    };
    return IntegrationLayerReader;
}());
exports.IntegrationLayerReader = IntegrationLayerReader;
