(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65],{

/***/ "./node_modules/@theia/mini-browser/lib/browser/mini-browser-frontend-module.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@theia/mini-browser/lib/browser/mini-browser-frontend-module.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ../../src/browser/style/index.css */ "./node_modules/@theia/mini-browser/src/browser/style/index.css");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var opener_service_1 = __webpack_require__(/*! @theia/core/lib/browser/opener-service */ "./node_modules/@theia/core/lib/browser/opener-service.js");
var widget_manager_1 = __webpack_require__(/*! @theia/core/lib/browser/widget-manager */ "./node_modules/@theia/core/lib/browser/widget-manager.js");
var contribution_provider_1 = __webpack_require__(/*! @theia/core/lib/common/contribution-provider */ "./node_modules/@theia/core/lib/common/contribution-provider.js");
var ws_connection_provider_1 = __webpack_require__(/*! @theia/core/lib/browser/messaging/ws-connection-provider */ "./node_modules/@theia/core/lib/browser/messaging/ws-connection-provider.js");
var frontend_application_1 = __webpack_require__(/*! @theia/core/lib/browser/frontend-application */ "./node_modules/@theia/core/lib/browser/frontend-application.js");
var tab_bar_toolbar_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/tab-bar-toolbar */ "./node_modules/@theia/core/lib/browser/shell/tab-bar-toolbar.js");
var command_1 = __webpack_require__(/*! @theia/core/lib/common/command */ "./node_modules/@theia/core/lib/common/command.js");
var menu_1 = __webpack_require__(/*! @theia/core/lib/common/menu */ "./node_modules/@theia/core/lib/common/menu.js");
var mini_browser_open_handler_1 = __webpack_require__(/*! ./mini-browser-open-handler */ "./node_modules/@theia/mini-browser/lib/browser/mini-browser-open-handler.js");
var mini_browser_service_1 = __webpack_require__(/*! ../common/mini-browser-service */ "./node_modules/@theia/mini-browser/lib/common/mini-browser-service.js");
var mini_browser_1 = __webpack_require__(/*! ./mini-browser */ "./node_modules/@theia/mini-browser/lib/browser/mini-browser.js");
var mini_browser_content_1 = __webpack_require__(/*! ./mini-browser-content */ "./node_modules/@theia/mini-browser/lib/browser/mini-browser-content.js");
var location_mapper_service_1 = __webpack_require__(/*! ./location-mapper-service */ "./node_modules/@theia/mini-browser/lib/browser/location-mapper-service.js");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(mini_browser_content_1.MiniBrowserContent).toSelf();
    bind(mini_browser_content_1.MiniBrowserContentFactory).toFactory(function (context) { return function (props) {
        var container = context.container;
        var child = container.createChild();
        child.bind(mini_browser_content_1.MiniBrowserProps).toConstantValue(props);
        return child.get(mini_browser_content_1.MiniBrowserContent);
    }; });
    bind(mini_browser_1.MiniBrowser).toSelf();
    bind(widget_manager_1.WidgetFactory).toDynamicValue(function (context) { return ({
        id: mini_browser_1.MiniBrowser.ID,
        createWidget: function (options) {
            return __awaiter(this, void 0, void 0, function () {
                var container, child, uri;
                return __generator(this, function (_a) {
                    container = context.container;
                    child = container.createChild();
                    uri = new uri_1.default(options.uri);
                    child.bind(mini_browser_1.MiniBrowserOptions).toConstantValue({ uri: uri });
                    return [2 /*return*/, child.get(mini_browser_1.MiniBrowser)];
                });
            });
        }
    }); }).inSingletonScope();
    bind(mini_browser_open_handler_1.MiniBrowserOpenHandler).toSelf().inSingletonScope();
    bind(opener_service_1.OpenHandler).toService(mini_browser_open_handler_1.MiniBrowserOpenHandler);
    bind(frontend_application_1.FrontendApplicationContribution).toService(mini_browser_open_handler_1.MiniBrowserOpenHandler);
    bind(command_1.CommandContribution).toService(mini_browser_open_handler_1.MiniBrowserOpenHandler);
    bind(menu_1.MenuContribution).toService(mini_browser_open_handler_1.MiniBrowserOpenHandler);
    bind(tab_bar_toolbar_1.TabBarToolbarContribution).toService(mini_browser_open_handler_1.MiniBrowserOpenHandler);
    contribution_provider_1.bindContributionProvider(bind, location_mapper_service_1.LocationMapper);
    bind(location_mapper_service_1.LocationMapper).to(location_mapper_service_1.FileLocationMapper).inSingletonScope();
    bind(location_mapper_service_1.LocationMapper).to(location_mapper_service_1.HttpLocationMapper).inSingletonScope();
    bind(location_mapper_service_1.LocationMapper).to(location_mapper_service_1.HttpsLocationMapper).inSingletonScope();
    bind(location_mapper_service_1.LocationWithoutSchemeMapper).toSelf().inSingletonScope();
    bind(location_mapper_service_1.LocationMapper).toService(location_mapper_service_1.LocationWithoutSchemeMapper);
    bind(location_mapper_service_1.LocationMapperService).toSelf().inSingletonScope();
    bind(mini_browser_service_1.MiniBrowserService).toDynamicValue(function (context) { return ws_connection_provider_1.WebSocketConnectionProvider.createProxy(context.container, mini_browser_service_1.MiniBrowserServicePath); }).inSingletonScope();
});


/***/ }),

/***/ "./node_modules/@theia/mini-browser/src/browser/style/index.css":
/*!**********************************************************************!*\
  !*** ./node_modules/@theia/mini-browser/src/browser/style/index.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!./index.css */ "./node_modules/css-loader/index.js!./node_modules/@theia/mini-browser/src/browser/style/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/@theia/mini-browser/src/browser/style/mini-browser.svg":
/*!*****************************************************************************!*\
  !*** ./node_modules/@theia/mini-browser/src/browser/style/mini-browser.svg ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgMjAxOSBLZW5uZXRoIEF1Y2hlbmJlcmcuIC0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE5IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4tLT4KPHN2ZyB3aWR0aD0iMjVweCIgaGVpZ2h0PSIyNXB4IiB2aWV3Qm94PSIwIDAgMjUgMjUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjIgKDY3MTQ1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pY29uPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Imljb24iIGZpbGw9IiMyODc5RkYiPgogICAgICAgICAgICA8cG9seWdvbiBpZD0iUGF0aCIgcG9pbnRzPSIxMy44NjcxODc1IDE1LjYyNSAxMy44NjcxODc1IDE0LjA2MjUgMTguNTU0Njg3NSAxNC4wNjI1IDE4LjU1NDY4NzUgMTUuNjI1Ij48L3BvbHlnb24+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoIiBwb2ludHM9IjEzLjg2NzE4NzUgMTIuNSAxMy44NjcxODc1IDEwLjkzNzUgMjEuNjc5Njg3NSAxMC45Mzc1IDIxLjY3OTY4NzUgMTIuNSI+PC9wb2x5Z29uPgogICAgICAgICAgICA8cG9seWdvbiBpZD0iUGF0aCIgcG9pbnRzPSIxMy44NjcxODc1IDkuMzc1IDEzLjg2NzE4NzUgNy44MTI1IDIxLjY3OTY4NzUgNy44MTI1IDIxLjY3OTY4NzUgOS4zNzUiPjwvcG9seWdvbj4KICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iMi45Mjk2ODc1IiB5PSI3LjgxMjUiIHdpZHRoPSI3LjgxMjUiIGhlaWdodD0iNy44MTI1Ij48L3JlY3Q+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLDAgTDAsMjUgTDI0Ljk5OTIxODgsMjUgTDI1LDAgTDAsMCBaIE0xNy4xODc1LDEuNTYyNSBMMTcuMTg3NSwzLjEyNSBMNy44MTI1LDMuMTI1IEw3LjgxMjUsMS41NjI1IEwxNy4xODc1LDEuNTYyNSBaIE02LjI1LDEuNTYyNSBMNi4yNSwzLjEyNSBMNC42ODc1LDMuMTI1IEw0LjY4NzUsMS41NjI1IEw2LjI1LDEuNTYyNSBaIE0xLjU2MjUsMS41NjI1IEwzLjEyNSwxLjU2MjUgTDMuMTI1LDMuMTI1IEwxLjU2MjUsMy4xMjUgTDEuNTYyNSwxLjU2MjUgWiBNMjMuNDM2NzE4OCwyMy4wNDY4NzUgTDEuNTYyNSwyMy4wNDY4NzUgTDEuNTYyNSw0LjY4NzUgTDIzLjQzNjcxODgsNC42ODc1IEwyMy40MzY3MTg4LDIzLjA0Njg3NSBaIE0yMy40Mzc1LDMuMTI1IEwyMC4zMTI1LDMuMTI1IEwyMC4zMTI1LDEuNTYyNSBMMjMuNDM3NSwxLjU2MjUgTDIzLjQzNzUsMy4xMjUgWiIgaWQ9IlNoYXBlIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo="

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/@theia/mini-browser/src/browser/style/index.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/@theia/mini-browser/src/browser/style/index.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../../css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2018 TypeFox and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n:root {\n    --theia-private-mini-browser-height: var(--theia-content-line-height);\n}\n\n.theia-mini-browser {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n\n.theia-mini-browser-icon {\n    mask: url(" + escape(__webpack_require__(/*! ./mini-browser.svg */ "./node_modules/@theia/mini-browser/src/browser/style/mini-browser.svg")) + ");\n    -webkit-mask: url(" + escape(__webpack_require__(/*! ./mini-browser.svg */ "./node_modules/@theia/mini-browser/src/browser/style/mini-browser.svg")) + ");\n}\n\n.theia-mini-browser-toolbar {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n    padding: 0 10px;\n}\n\n.theia-mini-browser-toolbar-read-only {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n    padding: 0 10px;\n}\n\n.theia-mini-browser-toolbar .theia-input {\n    width: 100%;\n    line-height: var(--theia-private-mini-browser-height);\n    margin-left: 4px;\n    margin-right: 4px;\n}\n\n.theia-mini-browser-toolbar-read-only .theia-input {\n    width: 100%;\n    line-height: var(--theia-private-mini-browser-height);\n    margin-left: 4px;\n    margin-right: 4px;\n    cursor: pointer;\n    background: var(--theia-input-background);\n    border: none;\n    text-decoration: underline;\n    outline: none;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    color: var(--theia-input-foreground);\n}\n\n.theia-mini-browser-toolbar-read-only .theia-input:hover {\n    color: var(--theia-button-hoverBackground);\n}\n\n.theia-mini-browser-button {\n    min-width: 1rem;\n    text-align: center;\n    flex-grow: 0;\n    font-family: FontAwesome;\n    font-size: calc(var(--theia-content-font-size) * 0.8);\n    color: var(--theia-icon-foreground);\n    margin: 0px 4px 0px 4px;\n}\n\n.theia-mini-browser-button:not(.theia-mini-browser-button-disabled):hover {\n    cursor: pointer;\n}\n\n.theia-mini-browser-button-disabled {\n    opacity: var(--theia-mod-disabled-opacity);\n}\n\n.theia-mini-browser-previous::before {\n    content: \"\\F053\";\n}\n\n.theia-mini-browser-next::before {\n    content: \"\\F054\";\n}\n\n.theia-mini-browser-refresh::before {\n    content: \"\\F021\";\n}\n\n.theia-mini-browser-open::before {\n    content: \"\\F08E\";\n}\n\n.theia-mini-browser-content-area {\n    position: relative;\n    display: flex;\n    height: 100%;\n    width: 100%;\n    flex-direction: column;\n    overflow: hidden;\n    margin-top: 6px;\n}\n\n.theia-mini-browser-pdf-container {\n    width: 100%;\n    height: 100%;\n}\n\n.theia-mini-browser-load-indicator {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 10;\n    background: var(--theia-editor-background);\n    background-image: var(--theia-preloader);\n    background-size: 60px 60px;\n    background-repeat: no-repeat;\n    background-position: center;\n    transition: opacity 0.8s;\n}\n\n.theia-mini-browser-load-indicator.theia-fade-out {\n    opacity: 0;\n}\n\n.theia-mini-browser-error-bar {\n    height: 19px;\n    padding-left: var(--theia-ui-padding);\n    background-color: var(--theia-inputValidation-errorBorder);\n    color: var(--theia-editor-foreground);\n    font-size: var(--theia-statusBar-font-size);\n    z-index: 1000; /* Above the transparent overlay (`z-index: 999;`). */\n}\n\n.theia-mini-browser-error-bar span {\n    margin-top: 3px;\n    margin-left: var(--theia-ui-padding);\n}\n\n.theia-mini-browser-content-area iframe {\n    flex-grow: 1;\n    border: none; margin: 0; padding: 0;\n}\n", ""]);

// exports


/***/ })

}]);
//# sourceMappingURL=65.bundle.js.map