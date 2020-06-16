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
var ReceptiveField = /** @class */ (function (_super) {
    __extends(ReceptiveField, _super);
    function ReceptiveField(neurons) {
        return _super.call(this, neurons) || this;
    }
    ReceptiveField.prototype.propagate = function (input) {
        var result = [];
        for (var i = 0; i < this.neurons.length; i++)
            result.push(this.neurons[i].propagate(input));
        return result;
    };
    ReceptiveField.prototype.weightedInput = function (input) {
        var result = [];
        for (var i = 0; i < result.length; i++)
            result.push(this.neurons.weightedInput(input));
        return result;
    };
    ReceptiveField.prototype.activate = function (weightedSum) {
        var result = [];
        for (var i = 0; i < result.length; i++)
            result.push(this.neurons.activate(weightedSum[i]));
        return result;
    };
    return ReceptiveField;
}(layer_1.Layer));
exports.ReceptiveField = ReceptiveField;
