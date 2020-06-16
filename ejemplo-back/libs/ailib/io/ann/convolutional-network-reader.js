"use strict";
exports.__esModule = true;
var receptive_field_reader_1 = require("./convolutional/receptive-field-reader");
var pooling_field_reader_1 = require("./convolutional/pooling-field-reader");
var sigmoid_1 = require("../../math/functions/activation/sigmoid");
var integration_layer_reader_1 = require("./convolutional/integration-layer-reader");
var convolutional_network_1 = require("../../ann/convolutional/convolutional-network");
var layer1_dreader_1 = require("./layers/layer1-dreader");
var ConvolutionalNetworkReader = /** @class */ (function () {
    function ConvolutionalNetworkReader() {
    }
    ConvolutionalNetworkReader.prototype.read = function (scanner) {
        var receptive = (new receptive_field_reader_1.ReceptiveFieldReader(new sigmoid_1.Sigmoid())).read(scanner);
        var pooling = (new pooling_field_reader_1.PoolingFieldReader(new sigmoid_1.Sigmoid())).read(scanner);
        var integration = (new integration_layer_reader_1.IntegrationLayerReader(new sigmoid_1.Sigmoid())).read(scanner);
        var outputLayer = (new layer1_dreader_1.Layer1DReader(new sigmoid_1.Sigmoid())).read(scanner);
        return new convolutional_network_1.ConvolutionalNetwork(receptive, pooling, integration, outputLayer);
    };
    return ConvolutionalNetworkReader;
}());
exports.ConvolutionalNetworkReader = ConvolutionalNetworkReader;
