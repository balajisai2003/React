import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {path:'/', 
    element: <RootLayout/>, 
    errorElement:<ErrorPage/>,
    children: [
    {path:'/home', element: <HomePage/>},
    {path:'/products', element: <ProductsPage/>},
    ],
  }

])


function App() {
  return <RouterProvider router={router}/>;
}

export default App;
