import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AllProducts from "../pages/AllProducts";
import Category from "../pages/Category";
import Admin from "../pages/Admin/Admin";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import ManageProducts from "../pages/Admin/ManageProducts";
import ProductDetails from './../pages/ProductDetails';
import ProductsByCategory from "../pages/ProductsByCategory";
import UpdateProduct from "../pages/Admin/UpdateProduct";


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
                path: "category/:id",
                element: <ProductsByCategory />,
            },
            {
                path: "products",
                element: <AllProducts />,
            },
            {
                path: `products/:id`,
                element: <ProductDetails />,
            },
            {
                path: "admin",
                element: <Admin />,
                children: [
                    {
                        path: "dashboard",
                        element: <AdminDashboard />,
                    },
                    {
                        path: "products",
                        element: <ManageProducts />,
                    },
                    {
                        path: "product/update/:id",
                        element: <UpdateProduct />,
                        // element: <ProductDetails />,
                    },
                ],
            },
        ],
    },
]);
