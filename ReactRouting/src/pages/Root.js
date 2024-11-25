import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function RootLayout(){
    return (
        <div>
            <h1>Root Layout</h1>
            <MainNavigation/>
            <Outlet/>
        </div>
    );
}

export default RootLayout;