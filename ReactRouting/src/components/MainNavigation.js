import { Link } from 'react-router-dom';

function MainNavigation(){
    return (
        <header>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
            </ul>
        </header>
    );
}

export default MainNavigation;