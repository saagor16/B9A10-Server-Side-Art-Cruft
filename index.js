const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express');
const cors =require('cors');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

// serverCruft
// 2el4sJqARviOCqWW


const uri = `mongodb+srv://${process.env.DB_ID}:${process.env.DB_PASS}@cluster0.c5ebkxr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

console.log(uri);

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
   
    await client.connect();

    const artCollection = client.db('artDB').collection('art');

    app.get('/art', async (req, res) => {
        const cursor = artCollection.find();
        const result = await cursor.toArray();
        res.send(result);
    })

      
  
    app.post('/art', async (req, res) => {
        const newArt = req.body;
        console.log(newArt);
        const result = await artCollection.insertOne(newArt);
        
        console.log(result);
        res.send(result);
    });


    app.get("/singleArt/:id",async(req,res)=>{
        
        const result = await artCollection.findOne({_id: new ObjectId(req.params.id),}); 
        console.log(result)
        res.send(result)
    });

 
 








    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/',(req,res)=>{
    res.send('server running')
});

app.listen(port,()=>{
    console.log(`server port : ${port}`)
});