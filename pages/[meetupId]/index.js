import MeetupDetail from "../../components/meetups/MeetupDetail.js";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://res.cloudinary.com/djcyhbk2e/image/upload/c_limit,f_auto,q_50,w_1400/v1/gvv/prod/ssuc27lzmy95cx7o8cgg"
      title="A First Meetup"
      address="Some address 5, 12345 Some City"
      description="This is a first meetup!"
    />
  );
}

/**
 * GetStaticProps needs to pre-generate all dynamic pages.
 * Here we can define the ids.
 */
export async function getStaticPaths() {
  return {
    fallback: true, //false = all possible id values are defined here. True = only some id values are defined here
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image: "https://res.cloudinary.com/djcyhbk2e/image/upload/c_limit,f_auto,q_50,w_1400/v1/gvv/prod/ssuc27lzmy95cx7o8cgg",
        id: meetupId,
        title: "A First Meetup",
        address: "Some address 5, 12345 Some City",
        description: "This is a first meetup!",
      }
    }
  };
}

export default MeetupDetails;