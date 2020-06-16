"use strict";
exports.__esModule = true;
var layer1_dreader_1 = require("../layers/layer1-dreader");
var sigmoid_1 = require("../../../math/functions/activation/sigmoid");
var cell_1 = require("../../../ann/recurrent/cell");
var CellReader = /** @class */ (function () {
    function CellReader() {
    }
    CellReader.prototype.read = function (scanner) {
        var reader = new layer1_dreader_1.Layer1DReader(new sigmoid_1.Sigmoid());
        var F = reader.read(scanner);
        var I = reader.read(scanner);
        var C = reader.read(scanner);
        var O = reader.read(scanner);
        return new cell_1.Cell(F, I, C, O);
    };
    return CellReader;
}());
exports.CellReader = CellReader;
