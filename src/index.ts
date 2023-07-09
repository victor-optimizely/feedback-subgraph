import { startStandaloneServer } from '@apollo/server/standalone'
import { createApolloServer } from './server.js'
import { FeedbackDataSource } from "./datasources/Feedback.datasource.js";
import { MongoClient } from "mongodb";

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@hackdays-cluster.fbm6cym.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri)
client.connect();

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = createApolloServer()

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
    context: async ({ req, res }) => {
        const { cache } = server;
        const token = (req.headers.authorization ||"").replace(`Bearer `, '')
        return {
            token,
            dataSources: {
                feedback: new FeedbackDataSource(client.db().collection('feedback'))
            }
        }
    },
    listen: { port: process.env.PORT ? +process.env.PORT : 8080 },
})

console.log(`🚀  Server ready at: ${url}`)


