import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";

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
                path: "/admin",
                element: <div>Admin</div>,
            },
        ],
    },
]);
