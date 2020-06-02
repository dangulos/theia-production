import { injectable, inject } from 'inversify';
import { MyService } from '../common';
import { DefaultWorkspaceServer } from '@theia/workspace/lib/node';
import * as fs from 'fs-extra';
import * as url from 'url';
import * as io from 'socket.io-client';

@injectable()
export class MyServiceImpl implements MyService {

    socket: any;
    socketUrl: any ='http://localhost:4200';

    constructor(@inject(DefaultWorkspaceServer) private readonly workspaceServer: DefaultWorkspaceServer) {}

    async getEnvVariables(): Promise<Readonly<{ [key:string]: string | undefined }>> {
        return process.env;
    }

    async getSettingValue(): Promise<Readonly<{ [key:string]: string | undefined }>> {
        let rootPath = await this.workspaceServer.getMostRecentlyUsedWorkspace();
        const configPath = url.fileURLToPath(rootPath + '/.setting-test/test.json');
        console.log("config path", configPath);
        
        const config = await fs.readJson(configPath);
        return config.test;
    }

    async connectToWebsocket(){
        //const socket = io(process.env.socketAdress);
        const p = await new Promise<Boolean>((res,rej)=>{
            try {
                console.log(">> Socket Connection", this.socketUrl);
                
                this.socket = io(this.socketUrl);

                this.socket.on('theiaAnswer', (data: any)=>{
                    console.log("Server says ",data);
                    res(true);
                })

                this.socket.on('error', (error:any) => {
                    console.log(">> on error", error);
                    res(false);
                });
                
            } catch (error) {
                console.log(">> Error found creating websocket client", error);
                rej(false);
            }
            
        });

        return p;
    }
}