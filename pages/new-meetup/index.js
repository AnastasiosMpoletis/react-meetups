import { useRouter } from 'next/router.js';
import Head from 'next/head.js';
import NewMeetupForm from '../../components/meetups/NewMeetupForm.js';

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch('/api/new-meetup', { // points to the handler function
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    console.log(data);

    router.push('/');
  }

  return (
    <>
      <Head>
        <title>Add a new Meetup</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing opportunities!"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
}

export default NewMeetupPage;