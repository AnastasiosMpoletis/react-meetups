import { MongoClient } from "mongodb";

export async function fetchMeetups() {
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

  return meetupsWithStringId;
}