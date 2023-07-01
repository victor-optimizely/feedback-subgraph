import { startStandaloneServer } from '@apollo/server/standalone'
import { createApolloServer } from './server.js'
import { ProductsDataSource } from "./datasources/Products.datasource.js";

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = createApolloServer()

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
    context: async () => {
        const { cache } = server;
        return {
            dataSources: {
                products: new ProductsDataSource({ cache })
            }
        }
    },
    listen: { port: 8080 },
})

console.log(`🚀  Server ready at: ${url}`)
