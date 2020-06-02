import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, MessageService } from "@theia/core/lib/common";
import { MyService } from "../common";
export declare const ItrmextCommand: {
    id: string;
    label: string;
};
export declare class ItrmextCommandContribution implements CommandContribution {
    private readonly messageService;
    protected readonly myService: MyService;
    constructor(messageService: MessageService, myService: MyService);
    registerCommands(registry: CommandRegistry): void;
}
export declare class ItrmextMenuContribution implements MenuContribution {
    registerMenus(menus: MenuModelRegistry): void;
}
//# sourceMappingURL=itrmext-contribution.d.ts.map