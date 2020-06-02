/**
 * Generated using theia-extension-generator
 */
import { ItrmextCommandContribution, ItrmextMenuContribution } from './itrmext-contribution';
import { CommandContribution, MenuContribution } from "@theia/core/lib/common";
import { WebSocketConnectionProvider } from '@theia/core/lib/browser';
import { MyService, MyServicePath } from '../common';
import { ContainerModule } from "inversify";

export default new ContainerModule(bind => {
    // add your contribution bindings here
    bind(CommandContribution).to(ItrmextCommandContribution);
    bind(MenuContribution).to(ItrmextMenuContribution);
    bind(MyService).toDynamicValue(context => WebSocketConnectionProvider.createProxy(context.container, MyServicePath)).inSingletonScope();
});
