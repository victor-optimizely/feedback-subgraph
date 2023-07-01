import { ServerContext } from "../types/ServerContext";

export const ProductResolvers = {

    Query: {
        products: (_: any, __: any, { dataSources }: ServerContext) => {
            return dataSources.products.getProducts();
        }
    }
}