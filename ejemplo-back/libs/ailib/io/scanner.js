"use strict";
exports.__esModule = true;
var Scanner = /** @class */ (function () {
    function Scanner(line) {
        this.line = "";
        this.index = 0;
        this.line = line;
    }
    Scanner.prototype.readNextWord = function () {
        var word = "";
        while (this.index < this.line.length && this.line[this.index] == ' ')
            this.index++;
        while (this.index < this.line.length && this.line[this.index] != ' ')
            word += this.line[this.index++];
        return word;
    };
    Scanner.prototype.nextInt = function () {
        return parseInt(this.readNextWord());
    };
    Scanner.prototype.nextDouble = function () {
        return parseFloat(this.readNextWord().replace(",", "."));
    };
    return Scanner;
}());
exports.Scanner = Scanner;
