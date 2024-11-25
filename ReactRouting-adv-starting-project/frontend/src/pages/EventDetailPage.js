import { useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";
export default function EditEventPage() {
    const data = useLoaderData();
    return (
        <EventItem event ={data.event}  />
    );
}

export async function EventDetailLoader({request, params}) {
    const response =  await fetch('http://localhost:8080/events/' + params.eventId)
    if (!response.ok) {
        throw new Response(JSON.stringify({message: 'Could not load event'}), {status: 500});
    }
    else{
        return response;
    }
}