const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const {MongoClient} = require('mongodb');

async function main() {
  const uri = "mongodb+srv://KoushaAm:ksh.orangesurge@orangedatabase.voevsap.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    
    listDatabases(client);
    readDataFromMongoD(client);
  } catch (e) {
    console.error(e);
  } finally {
    setTimeout(() => {client.close()}, 10000)
  }
}

async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}

main().catch(console.error);

async function readDataFromMongoD(client) {
  const collection = client.db("Clubs").collection("clubs_info");
  const cursor = collection.find({});
  await cursor.forEach(console.dir);
}

// send hello world
app.get('/hello', (req, res) => {
  res.send('This is a message from the server!');
});

const port = 8000;
app.listen(port, () => console.log(`Listening on port ${port}`));

