const { MongoClient } = require('mongodb');

const connectionString = 'mongodb://localhost:27017';
const client = new MongoClient(connectionString);

async function run() {
    const db = client.db('haridb');
    const collection = db.collection('dogs');

    const dogs = await collection.find().toArray();
    console.log(dogs);
}

run();