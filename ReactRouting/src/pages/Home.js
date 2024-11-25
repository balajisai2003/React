import { Link, useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();
    function navigateHandler(){
        navigate("Products");
    }
    return <>
            <div>Home Page</div>
            <p>
                Go to <Link to="Products">Products</Link>
            </p>
            <p>
                <button onClick={navigateHandler}>Products</button>
            </p>
            </>;
}