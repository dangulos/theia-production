export const MyServicePath = '/services/my-service';

export const MyService = Symbol('MyService');
export interface MyService {
    getEnvVariables(): Promise<Readonly<{ [key:string]: string | undefined }>>
    getSettingValue(): Promise<Readonly<{ [key:string]: string | undefined }>>
    connectToWebsocket(): Promise<Readonly<Boolean | undefined>>
}