import { Link } from "react-router-dom";

const EVENTS = [
    {id: '1', title: 'Event 1'},
    {id: '2', title: 'Event 2'},
    {id: '3', title: 'Event 3'}
];

export default function EventsPage(){
    return (
        <div>
        <h1>Events Page</h1>
        <Link to="new">Add new Event</Link>
        <ul>
            {EVENTS.map(event => (
                <li key={event.id}>
                    <Link to={`/events/${event.id}`}>{event.title}</Link>
                </li>
            ))}
        </ul>
        </div>
    );
}