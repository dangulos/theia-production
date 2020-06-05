import { injectable, inject } from "inversify";
import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, MessageService, MAIN_MENU_BAR } from "@theia/core/lib/common";
import { MyService } from "../common";
import { FrontendApplicationStateService } from '@theia/core/lib/browser/frontend-application-state';
import { WorkspaceService } from '@theia/workspace/lib/browser';
import { TerminalService } from '@theia/terminal/lib/browser/base/terminal-service';

//jsdoc
//document this

//import { /*TerminalProcessFactory, TerminalProcess,*/ ProcessManager  } from '@theia/process/lib/node';
import { MiniBrowserOpenHandler } from "@theia/mini-browser/lib/browser/mini-browser-open-handler";

//New menu
export namespace ITRMCommonMenus {
    export const SIMULATOR = [...MAIN_MENU_BAR, '8_simulator'];
};

export const ItrmextCommand = {
    id: 'Itrmext.command',
    label: "Get Environment Variables"
};

export const ItrmextTradingView = {
    id: 'Itrmext.tradingview',
    label: "Preview in Trading View"
}

@injectable()
export class ItrmextCommandContribution implements CommandContribution {
    
    @inject(FrontendApplicationStateService)
    protected readonly stateService: FrontendApplicationStateService;
    @inject(WorkspaceService)
    protected readonly workspaceService: WorkspaceService;
    @inject(TerminalService)
    protected readonly terminalService: TerminalService;
    @inject(MiniBrowserOpenHandler) 
    protected readonly miniBrowserOpenHandler: MiniBrowserOpenHandler
    /*
    @inject(TerminalProcessFactory)
    protected readonly terminalProcessFactory: TerminalProcessFactory;
    @inject(TerminalProcess)
    protected readonly terminalProcess: TerminalProcess;
    @inject(ProcessManager)
    protected readonly processManager: ProcessManager;
    */

    constructor(
        @inject(MessageService) private readonly messageService: MessageService,
        @inject(MyService) protected readonly myService: MyService
    ) { }

    executeTerminalPromise(){
        return new Promise ((res,rej)=>{
          this.executeTerminal().then(()=>{
              res("OK");
          }).catch(()=>{
              rej("error");
          })
        })
    }

    async executeTerminal(){

        this.messageService.info("Executing terminal");
        let terminalWidget = await this.terminalService.newTerminal({});
        let terminalId = await terminalWidget.start();
        await this.terminalService.activateTerminal(terminalWidget);
        let comm = "cd c:/Users/dangu/OneDrive/Documentos/ITRM/INNPULSA/temp/theia-production/Server/tradingview-chart-test\r\n"
        comm += "npx serve\r\n"
        await terminalWidget.sendText(comm);
        console.log('[Itrmext] ',terminalId);
        //let processId = await terminalWidget.processId;
        //this.messageService.info("Node (temptative) Started with "+processId);
        /*
        let process = this.processManager.get(processId);
        process?.outputStream.on('data', (data)=>{
            this.messageService.info(data + " | type: "+ typeof data);
        });
        
        //contact the process
        this.createMiniBrowserPreview().then((a: string)=>{
            this.messageService.info(a + "Started on "+terminalId);
        }).catch((b: string)=>{
            this.messageService.info(b+ "Failed on "+terminalId);
        })
        */
    }

    
    createMiniBrowserPreview(){
        return new Promise((res, rej)=>{
            //let uri = new URI("http://localhost:3001");
            this.miniBrowserOpenHandler.openPreview("http://localhost:5000").then((a)=>{
                this.messageService.info("TradingView Opened at port 5000"+JSON.stringify(a));
                res("OK");
            }).catch((b)=>{
                this.messageService.info("There was a mistake "+ JSON.stringify(b));
                rej("rejected");
            })
        });
    }

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

        registry.registerCommand(ItrmextTradingView, {
            execute: async () => {
                const connected = await this.executeTerminalPromise();
                console.log(connected);
                if(connected)
                    this.messageService.info('TradingView is running');
                else
                    this.messageService.info('There was a problem');
            }
        });
    }

}

@injectable()
export class ItrmextMenuContribution implements MenuContribution {

    registerMenus(menus: MenuModelRegistry): void {

        //console.log('CommonMenus==>>',CommonMenus);

        menus.registerSubmenu(ITRMCommonMenus.SIMULATOR, 'Simulator');

        menus.registerMenuAction(ITRMCommonMenus.SIMULATOR, {
            commandId: ItrmextCommand.id,
            label: ItrmextCommand.label
        });

        menus.registerMenuAction(ITRMCommonMenus.SIMULATOR, {
            commandId: ItrmextTradingView.id,
            label: ItrmextTradingView.label
        });
    }
}