import { MyService } from '../common';
import { DefaultWorkspaceServer } from '@theia/workspace/lib/node';
export declare class MyServiceImpl implements MyService {
    private readonly workspaceServer;
    socket: any;
    socketUrl: any;
    constructor(workspaceServer: DefaultWorkspaceServer);
    getEnvVariables(): Promise<Readonly<{
        [key: string]: string | undefined;
    }>>;
    getSettingValue(): Promise<Readonly<{
        [key: string]: string | undefined;
    }>>;
    connectToWebsocket(): Promise<Boolean>;
}
//# sourceMappingURL=service.d.ts.map