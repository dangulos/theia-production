import { injectable, inject } from "inversify";
import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, MessageService } from "@theia/core/lib/common";
import { CommonMenus } from "@theia/core/lib/browser";
import { MyService } from "../common";

export const ItrmextCommand = {
    id: 'Itrmext.command',
    label: "Get Environment Variables"
};

@injectable()
export class ItrmextCommandContribution implements CommandContribution {

    constructor(
        @inject(MessageService) private readonly messageService: MessageService,
        @inject(MyService) protected readonly myService: MyService
    ) { }

    registerCommands(registry: CommandRegistry): void {
        /*
        - WSS debe estar arriba
        - Nginx debe estar arriba
        - El simulador tiene que cargarse
        - Conectar al WSS
        */
        registry.registerCommand(ItrmextCommand, {
            execute: async () => {
                const connected = await this.myService.connectToWebsocket();
                console.log(connected);
                if(connected)
                    this.messageService.info('Succesfully connected!');
                else
                    this.messageService.info('Connection error');
            }
        });
    }
}

@injectable()
export class ItrmextMenuContribution implements MenuContribution {

    registerMenus(menus: MenuModelRegistry): void {
        menus.registerMenuAction(CommonMenus.HELP, {
            commandId: ItrmextCommand.id,
            label: ItrmextCommand.label
        });
    }
}
