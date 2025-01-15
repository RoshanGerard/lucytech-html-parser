export abstract class CoreApi {

    public abstract get(endpoint: string, params: object): Promise<any>;
    public abstract post(endpoint: string, data: any): Promise<any>;
}

export default CoreApi;