import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {

    const data = useLoaderData();
  if(data.isError){
    return <p>{data.message}</p>
  }
  return (
    <>
       <EventsList events={data.events} />
    </>
  );
}

export async function loader() {
    const response = await fetch('http://localhost:8080/events');
    if (!response.ok) {
        return {isError: true, message: 'Could not load events'};
    }
    return response;
}

export default EventsPage;