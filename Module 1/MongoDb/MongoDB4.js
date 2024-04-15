
const MongoClient = require('mongodb').MongoClient;

async function updateStudentDetails() {
    const client = await MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true });
    const dbo = client.db('abc1');
    const collection = dbo.collection('student_details');
    const filter = { name: 'Anuj' }; // Filter to match a document with name "John Doe"
    const update = { $set: { marks: 96 } }; // Update the grade field of the matched document to "A"
    const result = await collection.updateOne(filter, update);
    console.log(`${result.modifiedCount} document updated`);
    client.close();
}

updateStudentDetails();