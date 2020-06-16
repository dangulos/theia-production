"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var layer_1 = require("../layer");
var IntegrationLayer = /** @class */ (function (_super) {
    __extends(IntegrationLayer, _super);
    function IntegrationLayer(neurons) {
        return _super.call(this, neurons) || this;
    }
    IntegrationLayer.prototype.propagate = function (input) {
        var result = [];
        for (var i = 0; i < this.neurons.length; i++)
            result.push(this.neurons[i].propagate(input));
        return result;
    };
    IntegrationLayer.prototype.weightedInput = function (input) {
        var result = [];
        for (var i = 0; i < this.neurons.length; i++)
            result.push(this.neurons[i].weightedInput(input));
        return result;
    };
    IntegrationLayer.prototype.activate = function (weightedSum) {
        var result = [];
        for (var i = 0; i < this.neurons.length; i++)
            result.push(this.neurons[i].weightedInput(weightedSum[i]));
        return result;
    };
    return IntegrationLayer;
}(layer_1.Layer));
exports.IntegrationLayer = IntegrationLayer;
