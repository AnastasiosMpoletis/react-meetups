import MeetupDetail from "../../components/meetups/MeetupDetail.js";
import { fetchMeetupsForPaths, fetchMeetup } from "../../utils/meetupsUtil.js";

function MeetupDetails(props) {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
}

/**
 * GetStaticProps needs to pre-generate all dynamic pages.
 * Here we can define the ids.
 */
export async function getStaticPaths() {
  const meetupsForPaths = await fetchMeetupsForPaths();

  return {
    fallback: true, //false = all possible id values are defined here. True = only some id values are defined here
    paths: meetupsForPaths.map(meetupForPath => ({
      params: {
        meetupId: meetupForPath._id.toString()
      }
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const selectedMeetup = await fetchMeetup(meetupId);

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        image: selectedMeetup.image,
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        description: selectedMeetup.description
      }
    }
  };
}

export default MeetupDetails;