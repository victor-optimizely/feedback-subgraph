import { ProductsDataSource } from "../datasources/Products.datasource.js";

export interface ServerContext {
    dataSources: {
        products: ProductsDataSource;
    };
}
