import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AllProducts from "./../components/layouts/Products/AllProducts";
import Category from "../pages/Category";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/category",
                element: <Category />,
            },
            {
                path: "/products",
                element: <AllProducts />,
            },
            {
                path: "/admin",
                element: <div>Admin</div>,
            },
        ],
    },
]);
