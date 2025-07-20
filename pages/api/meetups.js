/**
 * Only server functionality.
 * Folder must be name api for Next.js to recognise it.
 */
import { MongoClient } from "mongodb";

async function handler(req, res) {
  const client = await MongoClient.connect(process.env.MONGO_URI);

  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  const meetupsWithStringId = meetups.map(meetup => ({
    id: meetup._id.toString(), // convert id
    title: meetup.title,
    address: meetup.address,
    image: meetup.image,
    // description: meetup.description,
  }));

  res.status(201).json({
    message: 'Meetups loaded!',
    meetups: meetupsWithStringId
  });

  // return meetups.map(meetup => ({
  //   id: meetup._id.toString(), // convert id
  //   title: meetup.title,
  //   address: meetup.address,
  //   image: meetup.image,
  //   // description: meetup.description,
  // }));
}

export default handler;