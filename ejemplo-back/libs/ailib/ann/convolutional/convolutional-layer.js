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
var location_1 = require("../../utils/location");
var ConvolutionalLayer = /** @class */ (function (_super) {
    __extends(ConvolutionalLayer, _super);
    function ConvolutionalLayer(neurons, stride) {
        var _this = _super.call(this, neurons) || this;
        _this.stride = stride;
        return _this;
    }
    ConvolutionalLayer.prototype.propagate = function (input) {
        var result = [];
        for (var i = 0, y = 0; i < this.neurons.length; i++, y += this.stride.height) {
            result.push([]);
            for (var j = 0, x = 0; j < this.neurons[i].length; j++, x += this.stride.width)
                result[i][j] = this.neurons[i][j].propagateFromLocation(new location_1.Location(x, y, 0), input);
        }
        return result;
    };
    ConvolutionalLayer.prototype.weightedInput = function (input) {
        var result = [];
        for (var i = 0, y = 0; i < this.neurons.length; i++, y += this.stride.height) {
            result.push([]);
            for (var j = 0, x = 0; j < this.neurons.length; j++, x += this.stride.width)
                result[i][j] = this.neurons[i][j].calculateWeightedInput(new location_1.Location(x, y, 0), input);
        }
        return result;
    };
    ConvolutionalLayer.prototype.activate = function (weightedSum) {
        var result = [];
        for (var i = 0; i < this.neurons.length; i++) {
            result.push([]);
            for (var j = 0; j < this.neurons.length; j++)
                result[i][j] = this.neurons[i][j].activate(weightedSum[i][j]);
        }
        return result;
    };
    ConvolutionalLayer.prototype.width = function () {
        return this.neurons[0].length;
    };
    ConvolutionalLayer.prototype.height = function () {
        return this.neurons.length;
    };
    ConvolutionalLayer.prototype.test = function () {
        console.log("I'm working!");
    };
    return ConvolutionalLayer;
}(layer_1.Layer));
exports.ConvolutionalLayer = ConvolutionalLayer;
