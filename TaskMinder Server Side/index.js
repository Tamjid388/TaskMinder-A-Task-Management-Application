const express = require('express')
const app = express()
const cors = require('cors');
require('dotenv').config();
const port = process.env.port || 5000;

app.use(cors()); // Enable CORS
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// TaskMinder
// CkI8lBLCDPzonYd3

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zovp9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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
    const taskminder=client.db("taskminder_db")
    const usersCollections=taskminder.collection('users')
    const tasksCollections=taskminder.collection('tasks')

    app.post('/users',async(req,res)=>{
        const user=req.body
        console.log(user);
        const existingUser=await usersCollections.findOne({email:user.email})
        if (existingUser) {
          return res.status(200).send({ message: "User already exists" });
        }
        const result=await usersCollections.insertOne(user)
        res.send(result)
    })


   app.get('/users',async(req,res)=>{
    const user=await usersCollections.findOne()
   })


app.post('/tasks',async(req,res)=>{
    const tasks=req.body
    console.log(tasks);
    const result=await tasksCollections.insertOne(tasks)
    res.send(result)
   
})
app.get('/tasks', async (req, res) => {
    const email=req.query.email
    console.log("Received email:", email);
  const query={email:email}

    const tasks = await tasksCollections.find(query).toArray();
    // console.log(tasks);
    res.send(tasks);
});

app.delete('/tasks/:id', async (req, res) => {
  const taskId = req.params.id;
  console.log(taskId);
  const query = { _id: new ObjectId(taskId) };
  const result = await tasksCollections.deleteOne(query);
  
  res.send(result);
});
// .....................................

// 📌 **Update task status **
app.put('/tasks/:id', async (req, res) => {
  const taskId = req.params.id;
  const updatedData = req.body;

  const filter = { _id: new ObjectId(taskId) };
  const updateDoc = { $set: updatedData };

  const result = await tasksCollections.updateOne(filter, updateDoc);
  res.send(result);
});




    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})