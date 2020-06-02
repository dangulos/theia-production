"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var common_1 = require("@theia/core/lib/common");
var common_2 = require("../common");
var service_1 = require("./service");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(service_1.MyServiceImpl).toSelf().inSingletonScope();
    bind(common_2.MyService).toService(service_1.MyServiceImpl);
    bind(common_1.ConnectionHandler).toDynamicValue(function (context) { return new common_1.JsonRpcConnectionHandler(common_2.MyServicePath, function () { return context.container.get(common_2.MyService); }); }).inSingletonScope();
});
//# sourceMappingURL=backend.module.js.map