"use strict";
exports.__esModule = true;
var convolutional_network_reader_1 = require("../ailib/io/ann/convolutional-network-reader");
var lstm_reader_1 = require("../ailib/io/ann/lstm-reader");
var scanner_1 = require("../ailib/io/scanner");
var ailibInterface = /** @class */ (function () {
    function ailibInterface(modelStructure, modelType) {
        this.scanner = new scanner_1.Scanner(modelStructure);
        this.modelType = modelType;
        var type = this.modelType.toLowerCase();
        if (type.indexOf("convolutional") > -1 || type.indexOf("cnn") > -1) {
            this.model = new convolutional_network_reader_1.ConvolutionalNetworkReader().read(this.scanner);
        }
        else if (this.modelType.toLowerCase().indexOf("lstm") > -1) {
            this.model = new lstm_reader_1.LSTMReader().read(this.scanner);
        }
    }
    ailibInterface.prototype.read = function (scanner) {
        var arrayOfScanner = [];
        var nextText;
        while (scanner.index < scanner.line.length) {
            nextText = scanner.nextDouble();
            arrayOfScanner.push(nextText);
        }
        return arrayOfScanner;
    };
    ailibInterface.prototype.predictForConstrains = function (inputStructure, outputStructure, inputs) {
        var type = this.modelType.toLowerCase();
        if (type.indexOf("convolutional") > -1 || type.indexOf("cnn") > -1) {
            return this.predictForConvolutional(inputStructure, outputStructure, inputs);
        }
        else if (type.indexOf("lstm") > -1) {
            return this.predictForLSTM(inputStructure, outputStructure, inputs);
        }
        else {
            return "Model Not found";
        }
    };
    ailibInterface.prototype.predictForLSTM = function (inputStructure, outputStructure, inputs) {
        var normalized_inputs = [];
        for (var key in inputs) {
            if (inputs.hasOwnProperty(key)) {
                normalized_inputs.push(this.prepareLSTMInputColumn(inputs[key], inputStructure, key));
            }
        }
        var propagated = this.model.propagate(this.transposeLSTMInputs(normalized_inputs));
        var restored = this.restoreOutputs(outputStructure, propagated);
        return restored;
    };
    ailibInterface.prototype.predictForConvolutional = function (inputStructure, outputStructure, inputs) {
        var normalized_inputs = [];
        for (var key in inputs) {
            if (inputs.hasOwnProperty(key)) {
                normalized_inputs.push(this.prepareCNNInputColumn(inputs[key], inputStructure, key));
            }
        }
        return this.restoreOutputs(outputStructure, this.model.propagate(normalized_inputs));
    };
    ailibInterface.prototype.restoreOutputs = function (outputConfig, propagated) {
        var restoredObj = {};
        var columnRestorationConfig = outputConfig.columns.filter(function (obj) {
            return obj.type != 'key';
        });
        for (var i = 0; i < columnRestorationConfig.length; i++) {
            if (columnRestorationConfig[i].type == "normalization") {
                restoredObj[columnRestorationConfig[i].name] = this.restoreNormalize(columnRestorationConfig[i].settings, propagated[i]);
            }
            else if (columnRestorationConfig[i].type == "replacement") {
                restoredObj[columnRestorationConfig[i].name] = this.restoreReplace(columnRestorationConfig[i].settings, propagated[i]);
            }
        }
        return restoredObj;
    };
    ailibInterface.prototype.restoreNormalize = function (settings, output) {
        return ((output - 0.5) * (parseFloat(settings.deviation) * 10)) + parseFloat(settings.average);
    };
    ailibInterface.prototype.restoreReplace = function (settings, propagated) {
        return propagated;
    };
    ailibInterface.prototype.transposeLSTMInputs = function (inputs) {
        var transInverse = [];
        for (var i = 0; i < inputs[0].length; i++) {
            transInverse[i] = [];
            for (var j = 0; j < inputs.length; j++)
                transInverse[i][j] = inputs[j][inputs[0].length - i - 1];
        }
        //console.log(">> transposing ...", inputs, transInverse);
        return transInverse;
    };
    ailibInterface.prototype.prepareLSTMInputColumn = function (inputs, inputStructure, columnName) {
        var columnTransformationConfig = inputStructure.columns.filter(function (obj) {
            return obj.name.indexOf(columnName) > -1;
        });
        if (columnTransformationConfig.length > 0)
            return this.transformInputs(columnTransformationConfig[0], inputs);
        else
            return [];
    };
    ailibInterface.prototype.prepareCNNInputColumn = function (inputs, inputStructure, columnName) {
        var columnTransformationConfig = inputStructure.columns.filter(function (obj) {
            return obj.name.indexOf(columnName) > -1;
        });
        if (columnTransformationConfig.length > 0)
            return this.transformInputs(columnTransformationConfig[0], inputs);
        else
            return [];
    };
    ailibInterface.prototype.transformInputs = function (config, inputs) {
        if (config.type == "normalization") {
            return this.transformNormalize(config.settings, inputs);
        }
        else if (config.type == "replacement") {
            return this.transformReplacement(config.settings, inputs);
        }
    };
    ailibInterface.prototype.transformNormalize = function (settings, input) {
        var normalized = [];
        for (var i = 0; i < input.length; i++) {
            normalized.push(((input[i] - settings.average) / (settings.deviation * 10)) + 0.5);
        }
        return normalized;
    };
    //needs implementation
    ailibInterface.prototype.transformReplacement = function (settings, input) {
        return input;
    };
    return ailibInterface;
}());
exports.ailibInterface = ailibInterface;
