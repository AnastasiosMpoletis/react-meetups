import Head from 'next/head.js';
import MeetupList from '../components/meetups/MeetupList.js';
import { fetchMeetups } from '../utils/meetupsUtil.js'

function HomePage(props) {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React Meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

/**
 * This works only in pages!
 * Is called during build.
 * It has to be called getStaticProps so that Next.js can recognise it and execute it before rendering the page.
 * We can write any server code since it will be executed in server.
 * @returns an object with a props property
 */
export async function getStaticProps() {
  const meetups = await fetchMeetups();

  return {
    props: { meetups },
    revalidate: 1, //revalidate in seconds
  };
}

/**
 * Similar with getStaticProps but is called after deployment.
 */
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }

export default HomePage;