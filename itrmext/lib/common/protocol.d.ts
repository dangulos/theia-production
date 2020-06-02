export declare const MyServicePath = "/services/my-service";
export declare const MyService: unique symbol;
export interface MyService {
    getEnvVariables(): Promise<Readonly<{
        [key: string]: string | undefined;
    }>>;
    getSettingValue(): Promise<Readonly<{
        [key: string]: string | undefined;
    }>>;
    connectToWebsocket(): Promise<Readonly<Boolean | undefined>>;
}
//# sourceMappingURL=protocol.d.ts.map