(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[62],{

/***/ "./node_modules/@theia/terminal/lib/browser/base/terminal-service.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@theia/terminal/lib/browser/base/terminal-service.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TerminalService = void 0;
/**
 * Service manipulating terminal widgets.
 */
exports.TerminalService = Symbol('TerminalService');


/***/ }),

/***/ "./node_modules/@theia/workspace/lib/browser/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@theia/workspace/lib/browser/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./workspace-commands */ "./node_modules/@theia/workspace/lib/browser/workspace-commands.js"), exports);
__exportStar(__webpack_require__(/*! ./workspace-service */ "./node_modules/@theia/workspace/lib/browser/workspace-service.js"), exports);
__exportStar(__webpack_require__(/*! ./workspace-frontend-contribution */ "./node_modules/@theia/workspace/lib/browser/workspace-frontend-contribution.js"), exports);
__exportStar(__webpack_require__(/*! ./workspace-frontend-module */ "./node_modules/@theia/workspace/lib/browser/workspace-frontend-module.js"), exports);
__exportStar(__webpack_require__(/*! ./workspace-preferences */ "./node_modules/@theia/workspace/lib/browser/workspace-preferences.js"), exports);


/***/ }),

/***/ "./node_modules/itrmext/lib/browser/itrmext-contribution.js":
/*!******************************************************************!*\
  !*** ./node_modules/itrmext/lib/browser/itrmext-contribution.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItrmextMenuContribution = exports.ItrmextCommandContribution = exports.ItrmextTradingView = exports.ItrmextCommand = exports.ITRMCommonMenus = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var menu_1 = __webpack_require__(/*! @theia/core/lib/common/menu */ "./node_modules/@theia/core/lib/common/menu.js");
var ITRMCommonMenus;
(function (ITRMCommonMenus) {
    ITRMCommonMenus.SIMULATOR = __spread(menu_1.MAIN_MENU_BAR, ['8_simulator']);
})(ITRMCommonMenus = exports.ITRMCommonMenus || (exports.ITRMCommonMenus = {}));
;
var common_2 = __webpack_require__(/*! ../common */ "./node_modules/itrmext/lib/common/index.js");
var frontend_application_state_1 = __webpack_require__(/*! @theia/core/lib/browser/frontend-application-state */ "./node_modules/@theia/core/lib/browser/frontend-application-state.js");
var browser_2 = __webpack_require__(/*! @theia/workspace/lib/browser */ "./node_modules/@theia/workspace/lib/browser/index.js");
var terminal_service_1 = __webpack_require__(/*! @theia/terminal/lib/browser/base/terminal-service */ "./node_modules/@theia/terminal/lib/browser/base/terminal-service.js");
//import { /*TerminalProcessFactory, TerminalProcess,*/ ProcessManager  } from '@theia/process/lib/node';
var mini_browser_open_handler_1 = __webpack_require__(/*! @theia/mini-browser/lib/browser/mini-browser-open-handler */ "./node_modules/@theia/mini-browser/lib/browser/mini-browser-open-handler.js");
exports.ItrmextCommand = {
    id: 'Itrmext.command',
    label: "Get Environment Variables"
};
exports.ItrmextTradingView = {
    id: 'Itrmext.tradingview',
    label: "Preview in Trading View"
};
var ItrmextCommandContribution = /** @class */ (function () {
    /*
    @inject(TerminalProcessFactory)
    protected readonly terminalProcessFactory: TerminalProcessFactory;
    @inject(TerminalProcess)
    protected readonly terminalProcess: TerminalProcess;
    @inject(ProcessManager)
    protected readonly processManager: ProcessManager;
    */
    function ItrmextCommandContribution(messageService, myService) {
        this.messageService = messageService;
        this.myService = myService;
    }
    ItrmextCommandContribution.prototype.executeTerminalPromise = function () {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.executeTerminal().then(function () {
                res("OK");
            }).catch(function () {
                rej("error");
            });
        });
    };
    ItrmextCommandContribution.prototype.executeTerminal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var terminalWidget, terminalId, comm, processId;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.messageService.info("Executing terminal");
                        return [4 /*yield*/, this.terminalService.newTerminal({})];
                    case 1:
                        terminalWidget = _a.sent();
                        return [4 /*yield*/, terminalWidget.start()];
                    case 2:
                        terminalId = _a.sent();
                        return [4 /*yield*/, this.terminalService.activateTerminal(terminalWidget)];
                    case 3:
                        _a.sent();
                        comm = "cd c:/Users/dangu/OneDrive/Documentos/ITRM/INNPULSA/temp/theia-production/Server/tradingview-chart-test\r\n";
                        comm += "npx serve\r\n";
                        return [4 /*yield*/, terminalWidget.sendText(comm)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, terminalWidget.processId];
                    case 5:
                        processId = _a.sent();
                        this.messageService.info("Node (temptative) Started with " + processId);
                        /*
                        let process = this.processManager.get(processId);
                        process?.outputStream.on('data', (data)=>{
                            this.messageService.info(data + " | type: "+ typeof data);
                        });
                        */
                        //contact the process
                        this.createMiniBrowserPreview().then(function (a) {
                            _this.messageService.info(a + "Started on " + terminalId);
                        }).catch(function (b) {
                            _this.messageService.info(b + "Failed on " + terminalId);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ItrmextCommandContribution.prototype.createMiniBrowserPreview = function () {
        var _this = this;
        return new Promise(function (res, rej) {
            //let uri = new URI("http://localhost:3001");
            _this.miniBrowserOpenHandler.openPreview("http://localhost:5000").then(function (a) {
                _this.messageService.info("TradingView Opened at port 5000" + JSON.stringify(a));
                res("OK");
            }).catch(function (b) {
                _this.messageService.info("There was a mistake " + JSON.stringify(b));
                rej("rejected");
            });
        });
    };
    ItrmextCommandContribution.prototype.registerCommands = function (registry) {
        var _this = this;
        /*
        - WSS debe estar arriba
        - Nginx debe estar arriba
        - El simulador tiene que cargarse
        - Conectar al WSS
        */
        registry.registerCommand(exports.ItrmextCommand, {
            execute: function () { return __awaiter(_this, void 0, void 0, function () {
                var connected;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.myService.connectToWebsocket()];
                        case 1:
                            connected = _a.sent();
                            console.log(connected);
                            if (connected)
                                this.messageService.info('Succesfully connected!');
                            else
                                this.messageService.info('Connection error');
                            return [2 /*return*/];
                    }
                });
            }); }
        });
        registry.registerCommand(exports.ItrmextTradingView, {
            execute: function () { return __awaiter(_this, void 0, void 0, function () {
                var connected;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.executeTerminalPromise()];
                        case 1:
                            connected = _a.sent();
                            console.log(connected);
                            if (connected)
                                this.messageService.info('TradingView is running');
                            else
                                this.messageService.info('There was a problem');
                            return [2 /*return*/];
                    }
                });
            }); }
        });
    };
    __decorate([
        inversify_1.inject(frontend_application_state_1.FrontendApplicationStateService),
        __metadata("design:type", frontend_application_state_1.FrontendApplicationStateService)
    ], ItrmextCommandContribution.prototype, "stateService", void 0);
    __decorate([
        inversify_1.inject(browser_2.WorkspaceService),
        __metadata("design:type", browser_2.WorkspaceService)
    ], ItrmextCommandContribution.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(terminal_service_1.TerminalService),
        __metadata("design:type", Object)
    ], ItrmextCommandContribution.prototype, "terminalService", void 0);
    __decorate([
        inversify_1.inject(mini_browser_open_handler_1.MiniBrowserOpenHandler),
        __metadata("design:type", mini_browser_open_handler_1.MiniBrowserOpenHandler
        /*
        @inject(TerminalProcessFactory)
        protected readonly terminalProcessFactory: TerminalProcessFactory;
        @inject(TerminalProcess)
        protected readonly terminalProcess: TerminalProcess;
        @inject(ProcessManager)
        protected readonly processManager: ProcessManager;
        */
        )
    ], ItrmextCommandContribution.prototype, "miniBrowserOpenHandler", void 0);
    ItrmextCommandContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(common_1.MessageService)),
        __param(1, inversify_1.inject(common_2.MyService)),
        __metadata("design:paramtypes", [common_1.MessageService, Object])
    ], ItrmextCommandContribution);
    return ItrmextCommandContribution;
}());
exports.ItrmextCommandContribution = ItrmextCommandContribution;
var ItrmextMenuContribution = /** @class */ (function () {
    function ItrmextMenuContribution() {
    }
    ItrmextMenuContribution.prototype.registerMenus = function (menus) {
        console.log('CommonMenus==>>', browser_1.CommonMenus);
        menus.registerSubmenu(ITRMCommonMenus.SIMULATOR, 'Simulator');
        menus.registerMenuAction(ITRMCommonMenus.SIMULATOR, {
            commandId: exports.ItrmextCommand.id,
            label: exports.ItrmextCommand.label
        });
        menus.registerMenuAction(ITRMCommonMenus.SIMULATOR, {
            commandId: exports.ItrmextTradingView.id,
            label: exports.ItrmextTradingView.label
        });
    };
    ItrmextMenuContribution = __decorate([
        inversify_1.injectable()
    ], ItrmextMenuContribution);
    return ItrmextMenuContribution;
}());
exports.ItrmextMenuContribution = ItrmextMenuContribution;


/***/ }),

/***/ "./node_modules/itrmext/lib/browser/itrmext-frontend-module.js":
/*!*********************************************************************!*\
  !*** ./node_modules/itrmext/lib/browser/itrmext-frontend-module.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generated using theia-extension-generator
 */
var itrmext_contribution_1 = __webpack_require__(/*! ./itrmext-contribution */ "./node_modules/itrmext/lib/browser/itrmext-contribution.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var common_2 = __webpack_require__(/*! ../common */ "./node_modules/itrmext/lib/common/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
exports.default = new inversify_1.ContainerModule(function (bind) {
    // add your contribution bindings here
    bind(common_1.CommandContribution).to(itrmext_contribution_1.ItrmextCommandContribution);
    bind(common_1.MenuContribution).to(itrmext_contribution_1.ItrmextMenuContribution);
    bind(common_2.MyService).toDynamicValue(function (context) { return browser_1.WebSocketConnectionProvider.createProxy(context.container, common_2.MyServicePath); }).inSingletonScope();
});


/***/ }),

/***/ "./node_modules/itrmext/lib/common/index.js":
/*!**************************************************!*\
  !*** ./node_modules/itrmext/lib/common/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./protocol */ "./node_modules/itrmext/lib/common/protocol.js"), exports);


/***/ }),

/***/ "./node_modules/itrmext/lib/common/protocol.js":
/*!*****************************************************!*\
  !*** ./node_modules/itrmext/lib/common/protocol.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MyService = exports.MyServicePath = void 0;
exports.MyServicePath = '/services/my-service';
exports.MyService = Symbol('MyService');


/***/ })

}]);
//# sourceMappingURL=62.bundle.js.map