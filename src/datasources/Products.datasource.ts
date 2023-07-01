import { AugmentedRequest, RESTDataSource } from '@apollo/datasource-rest';
import { generateHmac } from "../generate-hmac.js";

export class ProductsDataSource extends RESTDataSource {
    // override baseURL = 'https://prep.turnstile.episerver.net:8388/api/';
    override baseURL = 'https://prep.usermgmt-api.optimizely.com/api/';

    constructor(options) {
        super(options); // this sends our server's `cache` through
    }

    override willSendRequest(_path: string, request: AugmentedRequest) {
        const hmac = generateHmac({
            applicationKey: process.env.TURNSTILE_PRODUCT_KEY,
            applicationSecret: process.env.TURNSTILE_PRODUCT_SECRET,
            method: request.method,
            body: String(request.body || ""),
            target: `/${_path}`,
        });
        console.log({ hmac  });
        request.headers['Authorization'] = hmac;
    }
    async getProducts(): Promise<any[]> {
        return this.get<any[]>(`Products`)
    }

}