const dotenv = require('dotenv');
dotenv.config();

const { MongoClient } = require('mongodb');
const fs = require('fs');

const uri = process.env.DATABASE_URI;
const dbName = process.env.DATABASE_NAME;
const collectionName = 'excuses';

// fetch excuses from JSON
const data = JSON.parse(
  fs.readFileSync('./src/scripts/excuses/excuses.json', 'utf-8'),
);

(async () => {
  const client = new MongoClient(uri);

  try {
    // Connection
    await client.connect();
    console.log('Connection successful');

    // Create collection in the db
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Insert datas
    const result = await collection.insertMany(data);
    console.log(`${result.insertedCount} new documents.`);
  } catch (error) {
    console.error('Error : ', error);
  } finally {
    await client.close();
  }
})();
