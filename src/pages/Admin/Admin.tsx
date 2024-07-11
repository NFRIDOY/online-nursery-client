import { AiFillPlusSquare } from "react-icons/ai";
import { MdCategory, MdDashboard, MdDashboardCustomize } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useScrollToTop from "../../utils-hooks-React/hooks/useScrollToTop";
const Admin = () => {
    useScrollToTop();
    return (
        <div className=" h-[calc(100vh-80px)]">
            <div className="flex">
                <div className="bg-primary h-[calc(100vh-80px)] w-20 flex ">
                    <ul className="menu space-y-2 w-full">
                        <li>
                            <NavLink
                                to="/admin/dashboard"
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                        ? "active btn btn-accent md:btn-accent text-white "
                                        : "btn btn-neutral text-white"
                                }>
                                <MdDashboard size={30} />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/admin/products"
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                        ? "active btn btn-accent md:btn-accent text-white "
                                        : "btn btn-neutral text-white"
                                }>
                                <AiFillPlusSquare size={30} />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/admin/category"
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                        ? "active btn btn-accent md:btn-accent text-white "
                                        : "btn btn-neutral text-white"
                                }>
                                <MdCategory size={30} />
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="w-full">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Admin;
