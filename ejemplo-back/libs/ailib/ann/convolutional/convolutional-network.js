"use strict";
exports.__esModule = true;
var ConvolutionalNetwork = /** @class */ (function () {
    function ConvolutionalNetwork(receptive, pooling, integration, outputLayer) {
        this.receptive = receptive;
        this.pooling = pooling;
        this.integration = integration;
        this.outputLayer = outputLayer;
    }
    ConvolutionalNetwork.prototype.propagate = function (input) {
        return this.outputLayer.propagate(this.integration.propagate(this.pooling.propagate(this.receptive.propagate(input))));
    };
    return ConvolutionalNetwork;
}());
exports.ConvolutionalNetwork = ConvolutionalNetwork;
