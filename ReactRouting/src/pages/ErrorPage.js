import MainNavigation from "../components/MainNavigation";

function ErrorPage(){
    return <>
    
        <MainNavigation/>
        <main>
            <h1>Page not found!</h1>
            <p>Sorry, but the page you were looking for could not be found.</p>
        </main>
    </>
}

export default ErrorPage;
