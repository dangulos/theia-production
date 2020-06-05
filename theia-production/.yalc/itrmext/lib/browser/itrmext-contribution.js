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
var inversify_1 = require("inversify");
var common_1 = require("@theia/core/lib/common");
var browser_1 = require("@theia/core/lib/browser");
var menu_1 = require("@theia/core/lib/common/menu");
var ITRMCommonMenus;
(function (ITRMCommonMenus) {
    ITRMCommonMenus.SIMULATOR = __spread(menu_1.MAIN_MENU_BAR, ['8_simulator']);
})(ITRMCommonMenus = exports.ITRMCommonMenus || (exports.ITRMCommonMenus = {}));
;
var common_2 = require("../common");
var frontend_application_state_1 = require("@theia/core/lib/browser/frontend-application-state");
var browser_2 = require("@theia/workspace/lib/browser");
var terminal_service_1 = require("@theia/terminal/lib/browser/base/terminal-service");
//import { /*TerminalProcessFactory, TerminalProcess,*/ ProcessManager  } from '@theia/process/lib/node';
var mini_browser_open_handler_1 = require("@theia/mini-browser/lib/browser/mini-browser-open-handler");
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
//# sourceMappingURL=itrmext-contribution.js.map