import MeetupList from '../components/meetups/MeetupList.js';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://res.cloudinary.com/djcyhbk2e/image/upload/c_limit,f_auto,q_50,w_1400/v1/gvv/prod/ssuc27lzmy95cx7o8cgg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup!',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://res.cloudinary.com/djcyhbk2e/image/upload/c_limit,f_auto,q_50,w_1400/v1/gvv/prod/ssuc27lzmy95cx7o8cgg',
    address: 'Some address 10, 12345 Some City',
    description: 'This is a second meetup!',
  },
];

function HomePage(props) {
  return (
    <MeetupList meetups={props.meetups} />
  );
}

/**
 * This works only in pages!
 * It has to be called getStaticProps so that Next.js can recognise it and execute it before rendering the page.
 * We can write any server code since it will be executed in server.
 * @returns an object with a props property
 */
export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
  };
}

export default HomePage;