import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@hackdays-cluster.fbm6cym.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});


async function connect() {
    return client.db("feedback");
}
// async function run() {
//     try {
//         // Connect the client to the server	(optional starting in v4.7)
//         // Send a ping to confirm a successful connection
//         await client.db("feedback").command({ ping: 1 });
//         console.log("Pinged your deployment. You successfully connected to MongoDB!");
//         db = await client.db("feedback");
//     } finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//     }
// }

export {
    client,
    connect,
    // run,
};