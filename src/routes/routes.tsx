import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AllProducts from "../pages/AllProducts";
import Category from "../pages/Category";
import Admin from "../pages/Admin/Admin";
import AdminDashboard from "../pages/Admin/AdminDashboard";

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
                path: "category",
                element: <Category />,
            },
            {
                path: "products",
                element: <AllProducts />,
            },
            {
                path: "admin",
                element: <Admin />,
                children: [
                    {
                        path: 'dashboard',
                        element: <AdminDashboard />,
                    },
                    {
                        path: "products",
                        element: <div>Products</div>,
                    },
                ],
            },
        ],
    },
]);
