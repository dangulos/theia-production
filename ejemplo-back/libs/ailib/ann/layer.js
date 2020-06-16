"use strict";
exports.__esModule = true;
var Layer = /** @class */ (function () {
    function Layer(neurons) {
        this.neurons = neurons;
    }
    Layer.prototype.size = function () {
        return this.neurons.length;
    };
    return Layer;
}());
exports.Layer = Layer;
