import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AllProducts from "./../components/layouts/Products/AllProducts";

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
                element: <div>Category</div>,
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
