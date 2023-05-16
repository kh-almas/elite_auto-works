const express = require('express')
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 4000;
require('dotenv').config()

// middleware
app.use(cors());
app.use(express.json());

// const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster.9zce0xe.mongodb.net/?retryWrites=true&w=majority`;
const uri = `mongodb://0.0.0.0:27017`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();

        const database = client.db('carDoctor');
        const servicesCollection = database.collection('services');

        app.get('/services', async (req, res) => {
            const cursor = await servicesCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        app.get('/mongo' , (req, res) => {
            res.send('mongodb connection is ok');
        })
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

app.get('/' , (req, res) => {
    res.send('server is ok');
})

app.listen(port, () => {
    console.log(`server is open in port: ${port}`);
})