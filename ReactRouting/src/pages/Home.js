import { Link } from "react-router-dom";

export default function HomePage() {
    return <>
            <div>Home Page</div>
            <p>
                Go to <Link to="/products">Products</Link>
            </p>
            </>;
}