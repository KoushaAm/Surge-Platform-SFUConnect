const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { MongoClient } = require("mongodb");

const URI = 'mongodb+srv://demo:surge2023@orangedatabase.voevsap.mongodb.net/?retryWrites=true&w=majority'


app.use(bodyParser.json());


let client; 
let isConnected = false;

// connect to databse
MongoClient.connect(URI, (error, client) => {
  if (error) {
    return console.log("Connection failed for some reason");
  }
  console.log("Connection established - All well");
  isConnected = true;
});


// categories
categories = ["Academic", "Arts", "Athletic", "Cultural", "Political", "Religious", "Service", "Social", "Other"]


// search by category
app.get('/clubs/category', async (req, res) => {
  const searchTerm = req.query.term; 

  if (!searchTerm) {
    return res.status(400).json({ error: 'Search term is required' });
  }

  try {
    if (!client || !isConnected) {
      client = new MongoClient(URI);
      await client.connect();
    }

    const result = await searchClubs(client, searchTerm, onlyCategory = true);
    res.json(result);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// search by category, title, description
app.get('/clubs/search', async (req, res) => {
  const searchTerm = req.query.term; 

  if (!searchTerm) {
    return res.status(400).json({ error: 'Search term is required' });
  }

  try {
    if (!client || !isConnected) {
      client = new MongoClient(URI);
      await client.connect();
    }

    const result = await searchClubs(client, searchTerm);
    res.json(result);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// search by category, title, description
async function searchClubs(client, searchTerm, onlyCategory = false) {
  const collection = client.db("Clubs").collection("clubs_info");
  let query;
  if (!onlyCategory){
    query = {
      $or: [
        { title: { $regex: searchTerm, $options: 'i' } },
        { description: { $regex: searchTerm, $options: 'i' } }, 
        { category: { $regex: searchTerm, $options: 'i' } }
      ]
  };
  } else {
    console.log("searching by category");
    query = {
      category: { $regex: searchTerm, $options: 'i' } 
    };
  }
  const result = await collection.find(query).toArray();
  return result;
}

// show all the clubs
app.get('/clubs', async (req, res) => {
  try {
    if (!client || !isConnected) {
      client = new MongoClient(URI);
      await client.connect();
    }

    const result = await listClubs(client);
    res.json(result);
    
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


async function listClubs() {
  const collection = client.db("Clubs").collection("clubs_info");
  const cursor = collection.find({});
  await cursor.forEach(console.dir);
}


// if backend is closed, close the connection to the database
process.on('SIGINT', async () => {
  try {
    if (client && isConnected) {
      await client.close();
      console.log('MongoDB connection closed.');
    }
  } finally {
    process.exit(0);
  }
});


async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}




const port = 8000;
app.listen(port, () => console.log(`Listening on port ${port}`));


