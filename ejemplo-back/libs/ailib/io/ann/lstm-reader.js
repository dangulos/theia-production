"use strict";
exports.__esModule = true;
var cell_reader_1 = require("./recurrent/cell-reader");
var lstm_1 = require("../../ann/recurrent/lstm");
var LSTMReader = /** @class */ (function () {
    function LSTMReader() {
    }
    LSTMReader.prototype.read = function (scanner) {
        var outputSize = scanner.nextInt();
        var size = scanner.nextInt();
        var strap = [];
        for (var i = 0; i < size; i++)
            strap.push((new cell_reader_1.CellReader()).read(scanner));
        return new lstm_1.LSTM(strap, outputSize);
    };
    return LSTMReader;
}());
exports.LSTMReader = LSTMReader;
