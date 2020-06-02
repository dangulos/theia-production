"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generated using theia-extension-generator
 */
var itrmext_contribution_1 = require("./itrmext-contribution");
var common_1 = require("@theia/core/lib/common");
var browser_1 = require("@theia/core/lib/browser");
var common_2 = require("../common");
var inversify_1 = require("inversify");
exports.default = new inversify_1.ContainerModule(function (bind) {
    // add your contribution bindings here
    bind(common_1.CommandContribution).to(itrmext_contribution_1.ItrmextCommandContribution);
    bind(common_1.MenuContribution).to(itrmext_contribution_1.ItrmextMenuContribution);
    bind(common_2.MyService).toDynamicValue(function (context) { return browser_1.WebSocketConnectionProvider.createProxy(context.container, common_2.MyServicePath); }).inSingletonScope();
});
//# sourceMappingURL=itrmext-frontend-module.js.map