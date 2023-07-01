import { UsersDataSource } from "../datasources/Users.datasource";

export interface ServerContext {
    token?: string,
    dataSources: {
        users: UsersDataSource;
    };
}
