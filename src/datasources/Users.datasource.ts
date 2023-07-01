import { AugmentedRequest, RESTDataSource } from '@apollo/datasource-rest';

function toCamelCase(obj) {
    if (Array.isArray(obj)) {
        return obj.map(v => toCamelCase(v));
    } else if (obj !== null && typeof obj === 'object') {
        return Object.entries(obj).reduce(
            (result, [key, value]) => ({
                ...result,
                [key.replace(/^[A-Z]/, match => match.toLowerCase())]: toCamelCase(value),
            }),
            {},
        );
    }
    return obj;
}

export class UsersDataSource extends RESTDataSource {
    // override baseURL = 'https://prep.turnstile.episerver.net:8388/api/';
    override baseURL = 'https://prep.usermgmt-api.optimizely.com/api/';
    token;
    constructor(options: { cache: any; token: string }) {
        super(options); // this sends our server's `cache` through
        this.token = options.token;
    }

    override willSendRequest(_path: string, request: AugmentedRequest) {
        request.headers['Authorization'] = `Bearer ${this.token}`;
    }
    async getUsers(): Promise<{ total: number, results: any[] }> {
        const { totalItemCount: total = 0, items: results } = await this.get<{ totalItemCount: number, items: any[]}>(`users`);

        return {
            total,
            results: results.map(r => {
                return toCamelCase(r);
            })
        }
    }

}