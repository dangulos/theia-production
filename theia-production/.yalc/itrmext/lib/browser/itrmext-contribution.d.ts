import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, MessageService } from "@theia/core/lib/common";
export declare namespace ITRMCommonMenus {
    const SIMULATOR: string[];
}
import { MyService } from "../common";
import { FrontendApplicationStateService } from '@theia/core/lib/browser/frontend-application-state';
import { WorkspaceService } from '@theia/workspace/lib/browser';
import { TerminalService } from '@theia/terminal/lib/browser/base/terminal-service';
import { MiniBrowserOpenHandler } from "@theia/mini-browser/lib/browser/mini-browser-open-handler";
export declare const ItrmextCommand: {
    id: string;
    label: string;
};
export declare const ItrmextTradingView: {
    id: string;
    label: string;
};
export declare class ItrmextCommandContribution implements CommandContribution {
    private readonly messageService;
    protected readonly myService: MyService;
    protected readonly stateService: FrontendApplicationStateService;
    protected readonly workspaceService: WorkspaceService;
    protected readonly terminalService: TerminalService;
    protected readonly miniBrowserOpenHandler: MiniBrowserOpenHandler;
    constructor(messageService: MessageService, myService: MyService);
    executeTerminalPromise(): Promise<unknown>;
    executeTerminal(): Promise<void>;
    createMiniBrowserPreview(): Promise<unknown>;
    registerCommands(registry: CommandRegistry): void;
}
export declare class ItrmextMenuContribution implements MenuContribution {
    registerMenus(menus: MenuModelRegistry): void;
}
//# sourceMappingURL=itrmext-contribution.d.ts.map