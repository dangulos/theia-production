"use strict";
exports.__esModule = true;
var dimension_1 = require("../../utils/dimension");
var DimensionReader = /** @class */ (function () {
    function DimensionReader() {
    }
    DimensionReader.prototype.read = function (scanner) {
        var width = scanner.nextInt();
        var height = scanner.nextInt();
        var length = scanner.nextInt();
        return new dimension_1.Dimension(width, height, length);
    };
    return DimensionReader;
}());
exports.DimensionReader = DimensionReader;
