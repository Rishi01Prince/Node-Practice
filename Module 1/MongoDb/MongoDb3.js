const MongoClient = require('mongodb').MongoClient;

async function fetchData() {
const client = await MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true });
const dbo = client.db('abc1');
const collection = dbo.collection('student_details');
const query = {}; // Empty query will fetch all documents in the collection
const result = await collection.find(query).toArray();
console.log(result);
client.close();
}


fetchData();
