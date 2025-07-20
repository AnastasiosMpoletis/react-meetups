/**
 * Only server functionality.
 * Folder must be name api for Next.js to recognise it.
 */
import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === 'POST') {
    const client = await MongoClient.connect(process.env.MONGO_URI);
    const data = req.body;

    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: 'Meetup inserted!' });
  }
}

export default handler;