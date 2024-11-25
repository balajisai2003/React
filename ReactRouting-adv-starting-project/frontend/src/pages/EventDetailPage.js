import { Link, useParams } from "react-router-dom";
export default function EditEventPage() {
    const params = useParams();
    return (
        <div>
        <h1>Event details Page</h1>
        <p>Editing event with ID: {params.eventId}</p>
        <Link to="edit">Edit</Link>
        </div>
    );
}